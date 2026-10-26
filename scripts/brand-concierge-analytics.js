import hasConsent from './consent.js';

export const analyticsConfig = {
  enabled: false,
  events: {
    'webclient:initialized': { name: 'Concierge Initialized', successEvent: null },
    'query:submitted': { name: 'Concierge Query Submitted', successEvent: null },
    'promptSuggestion:clicked': { name: 'Concierge Prompt Suggestion Clicked', successEvent: null },
    'card:clicked': { name: 'Concierge Card Clicked', successEvent: null },
    'history:cleared': { name: 'Concierge History Cleared', successEvent: null },
    'response:started': { name: 'Concierge Response Started', successEvent: null },
    'response:completed': { name: 'Concierge Response Completed', successEvent: null },
    'cards:rendered': { name: 'Concierge Cards Rendered', successEvent: null },
    'feedback:submitted': { name: 'Concierge Feedback Submitted', successEvent: null },
    'error:occurred': { name: 'Concierge Error Occurred', successEvent: null },
  },
  dimensions: {
    eventType: null,
    callbackTimestamp: null,
    conversationId: null,
    interactionId: null,
    instanceName: null,
    productName: null,
    productPageURL: null,
    displayMode: null,
    cardCount: null,
    feedbackType: null,
    feedbackCategories: null,
    errorCategory: null,
  },
  approvedFeedbackCategories: [],
};

const eventTypes = Object.keys(analyticsConfig.events);
const dimensionNames = Object.keys(analyticsConfig.dimensions);

function validateConfig(config) {
  const successEvents = eventTypes.map((type) => config.events?.[type]?.successEvent);
  if (successEvents.some((value) => !/^event([1-9]\d{0,2}|1000)$/.test(value))
    || new Set(successEvents).size !== eventTypes.length
    || eventTypes.some((type) => typeof config.events[type].name !== 'string'
      || !config.events[type].name.trim())) {
    throw new Error('Assign a distinct Analytics success event and name to all 10 Concierge events.');
  }
  const slots = Object.values(config.dimensions).filter((value) => value !== null);
  if (!config.dimensions.eventType || !config.dimensions.callbackTimestamp
    || slots.some((slot) => !/^eVar([1-9]\d?|1\d{2}|2[0-4]\d|250)$/.test(slot))
    || new Set(slots).size !== slots.length
    || Object.keys(config.dimensions).some((key) => !dimensionNames.includes(key))) {
    throw new Error('Assign unique eVar1-eVar250 slots; eventType and callbackTimestamp are required.');
  }
  if (!Array.isArray(config.approvedFeedbackCategories)
    || config.approvedFeedbackCategories.some((value) => typeof value !== 'string')) {
    throw new Error('approvedFeedbackCategories must be an array of approved category labels.');
  }
}

function text(value) {
  return typeof value === 'string' && value.trim() ? value.trim().slice(0, 255) : undefined;
}

function warn(error) {
  // eslint-disable-next-line no-console
  console.warn('Concierge analytics tracking failed', error);
}

function productURL(value) {
  if (!text(value)) return undefined;
  let url;
  try {
    url = new URL(value, window.location.origin);
  } catch (error) {
    warn(new Error('Concierge product URL is malformed; omitting the URL dimension.'));
    return undefined;
  }
  if (!['http:', 'https:'].includes(url.protocol) || url.username || url.password) {
    return undefined;
  }
  url.search = '';
  url.hash = '';
  return url.href;
}

function eventDimensions(event, config) {
  const data = event.data || {};
  const dimensions = {
    eventType: event.eventType,
    callbackTimestamp: String(event.timestamp),
    conversationId: text(data.conversationId),
    interactionId: text(data.interactionId),
  };
  switch (event.eventType) {
    case 'webclient:initialized':
      dimensions.instanceName = text(data.instanceName);
      break;
    case 'card:clicked':
      dimensions.productName = text(data.element?.entity_info?.productName);
      if (config.dimensions.productPageURL) {
        dimensions.productPageURL = productURL(data.element?.entity_info?.productPageURL);
      }
      break;
    case 'cards:rendered':
      dimensions.cardCount = Array.isArray(data.element) ? String(data.element.length) : undefined;
      dimensions.displayMode = text(data.displayMode);
      break;
    case 'feedback:submitted':
      if (['positive', 'negative'].includes(data.feedbackType)) {
        dimensions.feedbackType = data.feedbackType;
      }
      if (Array.isArray(data.selectedOptions)) {
        const categories = [...new Set(data.selectedOptions.filter(
          (value) => config.approvedFeedbackCategories.includes(value),
        ))];
        dimensions.feedbackCategories = categories.length ? categories.join('|') : undefined;
      }
      break;
    case 'error:occurred':
      // The callback supplies no structured error code; never classify from raw messages.
      dimensions.errorCategory = 'client-error';
      break;
    default:
      break;
  }
  return dimensions;
}

export default function createConciergeEventHandler(instanceName, config = analyticsConfig) {
  const sent = new Set();
  let configurationError;
  if (config.enabled) {
    try {
      validateConfig(config);
    } catch (error) {
      configurationError = error;
      warn(error);
    }
  }

  return function onEvent(event) {
    let key;
    try {
      if (!eventTypes.includes(event?.eventType)) return;
      // Log the branch, not the callback payload, which can contain personal information.
      // eslint-disable-next-line no-console
      console.log('[Brand Concierge]', event.eventType, event.timestamp);
      if (!config.enabled || configurationError || !hasConsent()) return;
      if (!Number.isSafeInteger(event.timestamp) || event.timestamp < 0) {
        throw new Error('Concierge event requires a valid callback timestamp.');
      }
      const mapping = config.events[event.eventType];
      const dimensions = eventDimensions(event, config);
      const analytics = {
        linkName: mapping.name,
        linkType: 'o',
        events: mapping.successEvent,
        pageName: new URLSearchParams(window.location.search).get('title') || 'default-page',
      };
      Object.entries(dimensions).forEach(([name, value]) => {
        const slot = config.dimensions[name];
        if (slot && value !== undefined) analytics[slot] = String(value).slice(0, 255);
      });
      key = JSON.stringify([event.eventType, event.timestamp, dimensions]);
      if (sent.has(key)) return;
      if (typeof window[instanceName] !== 'function') {
        throw new Error(`Configured Web SDK instance "${instanceName}" is unavailable.`);
      }
      sent.add(key);
      // Bound memory during long-lived chats; retain the most recent 1,000 callbacks.
      if (sent.size > 1000) sent.delete(sent.values().next().value);
      const request = window[instanceName]('sendEvent', {
        xdm: {
          eventType: 'web.webinteraction.linkClicks',
          web: {
            webInteraction: {
              name: mapping.name,
              type: 'other',
              linkClicks: { value: 1 },
            },
          },
        },
        data: { __adobe: { analytics } },
      });
      Promise.resolve(request).catch((error) => {
        sent.delete(key);
        warn(error);
      });
    } catch (error) {
      if (key) sent.delete(key);
      warn(error);
    }
  };
}
