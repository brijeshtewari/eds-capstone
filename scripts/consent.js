let consentOverride;

window.addEventListener('consent.update', (event) => {
  if (typeof event.detail?.consented === 'boolean') {
    consentOverride = event.detail.consented;
  }
});

/**
 * Dummy CMP: decline by default; allow ?consent=accept for testing.
 * A consent.update event with a boolean detail.consented overrides the query parameter.
 */
export default function hasConsent() {
  if (typeof consentOverride === 'boolean') return consentOverride;
  const consent = new URLSearchParams(window.location.search).get('consent');
  return consent !== null && ['accept', 'true', '1', 'yes'].includes(consent.toLowerCase());
}
