window.styleConfiguration = {
  "id": "80fab107-83ea-480b-af71-3a5cc59f3df8",
  "name": "LINKT_26-10-07_80fab107-83ea-480b-af71-3a5cc59f3df8",
  "metadata": {
    "brandName": "LINKT",
    "version": "1.0.0",
    "language": "en",
    "namespace": "brand-concierge"
  },
  "behavior": {
    "multimodalCarousel": {
      "cardClickAction": "openLink"
    },
    "input": {
      "enableVoiceInput": false,
      "continuousVoiceMode": false,
      "disableMultiline": true,
      "showAiChatIcon": {
        "icon": ""
      }
    },
    "chat": {
      "messageAlignment": "normal",
      "messageWidth": "100%"
    },
    "privacyNotice": {
      "title": "Privacy Notice",
      "text": "Your use of this automated chatbot constitutes your consent that the personal information you provide in the chat session can be collected, used, disclosed, and retained by YourBrand and service providers acting on YourBrand's behalf in accordance with the YourBrand {Privacy Policy}. Please do not provide sensitive personal information (such as financial or health information) in the chatbot.",
      "links": [
        {
          "text": "Privacy Policy",
          "url": "<your-privacy-policy-url>"
        }
      ]
    },
    "meetingForm": {
      "fieldsPerRow": 2,
      "fieldLayoutRules": {
        "textInputs": {
          "allowTwoColumns": true,
          "fieldTypes": [
            "string",
            "email",
            "tel",
            "number"
          ],
          "identifyBy": null
        },
        "dropdowns": {
          "allowTwoColumns": false,
          "fieldTypes": [
            "select"
          ],
          "identifyBy": "hasOptions"
        },
        "checkboxes": {
          "allowTwoColumns": false,
          "fieldTypes": [
            "boolean",
            "checkbox"
          ],
          "identifyBy": null
        }
      },
      "title": {
        "text": "Request a Meeting",
        "alignment": "left"
      },
      "subtitle": {
        "text": "Let us help you with toll road solutions.",
        "alignment": "left"
      },
      "buttons": {
        "submit": {
          "text": "Submit Request",
          "alignment": "left"
        },
        "cancel": {
          "text": "Cancel",
          "alignment": "left"
        }
      }
    },
    "calendarWidget": {
      "title": {
        "text": "Schedule a Time",
        "alignment": "left"
      },
      "subtitle": {
        "text": "Pick a convenient time for your consultation.",
        "alignment": "left"
      },
      "postTitle": {
        "text": "Once confirmed, you will receive a calendar invite with all the details. The specialist will already have this conversation context, so no need to repeat anything. Looking forward to connecting you with the right expert!",
        "alignment": "left"
      },
      "buttons": {
        "confirm": {
          "text": "Confirm",
          "alignment": "left"
        },
        "cancel": {
          "text": "Cancel",
          "alignment": "left"
        }
      }
    },
    "productCard": {
      "actionButtonSize": "S"
    },
    "b2bLiveChat": {
      "enabled": true
    }
  },
  "disclaimer": {
    "text": "LINKT is a trade mark of Transurban Limited. By using this service, you agree to our terms and conditions.",
    "links": [
      {
        "text": "Terms of Use",
        "url": "https://www.linkt.com.au/terms"
      }
    ]
  },
  "text": {
    "welcome.heading": "Welcome to LINKT",
    "welcome.subheading": "Easier, smarter ways to pay for Australian toll roads.",
    "input.placeholder": "How can I help you with toll roads today?",
    "input.messageInput.aria": "Type your message here",
    "input.send.aria": "Send message",
    "input.aiChatIcon.tooltip": "Chat with LINKT Assistant",
    "input.mic.aria": "Use voice input",
    "card.aria.select": "Select this option",
    "carousel.prev.aria": "Previous card",
    "carousel.next.aria": "Next card",
    "scroll.bottom.aria": "Scroll to bottom",
    "error.network": "Network error. Please try again.",
    "loading.message": "Generating response...",
    "feedback.dialog.title.positive": "Positive Feedback",
    "feedback.dialog.title.negative": "Negative Feedback",
    "feedback.dialog.question.positive": "What did you like about your experience?",
    "feedback.dialog.question.negative": "What could we improve?",
    "feedback.dialog.notes": "Additional comments",
    "feedback.dialog.submit": "Submit",
    "feedback.dialog.cancel": "Cancel",
    "feedback.dialog.notes.placeholder": "Type your comments here...",
    "feedback.toast.success": "Thank you for your feedback!",
    "feedback.thumbsUp.aria": "Thumbs up",
    "feedback.thumbsDown.aria": "Thumbs down",
    "feedback.title": "Share your feedback",
    "feedback.positive.title": "What did you like?",
    "feedback.negative.title": "What could be improved?",
    "feedback.submitButton": "Submit Feedback",
    "feedback.positive.options": "",
    "feedback.negative.options": ""
  },
  "arrays": {
    "welcome.examples": [
      {
        "text": "How do I pay for tolls?",
        "systemPrompt": "Explain how to pay for tolls using a LINKT account or pass.",
        "backgroundColor": "#0e893c",
        "image": "https://www.linkt.com.au/content/dam/linkt/melbourne/banner/melbourne-homepage9-1920x940.jpg"
      },
      {
        "text": "What is auto top-up?",
        "systemPrompt": "Describe the auto top-up feature and its benefits.",
        "backgroundColor": "#329b59",
        "image": "https://www.linkt.com.au/content/dam/linkt/melbourne/banner/melbourne-homepage9-1920x940.jpg"
      },
      {
        "text": "How do I view live traffic?",
        "systemPrompt": "Provide information on how to view live traffic updates on LINKT.",
        "backgroundColor": "#56ac77",
        "image": "https://www.linkt.com.au/content/dam/linkt/melbourne/banner/melbourne-homepage9-1920x940.jpg"
      }
    ],
    "feedback.positive.options": [
      "Easy to use",
      "Helpful information",
      "Fast response",
      "Clear instructions",
      "Other"
    ],
    "feedback.negative.options": [
      "Slow response",
      "Unclear information",
      "Difficult to use",
      "Issue not resolved",
      "Other"
    ]
  },
  "assets": {
    "icons": {
      "company": "https://www.linkt.com.au/etc.clientlibs/linkt/clientlibs/clientlib-base/resources/images/linkt-logo.svg"
    }
  },
  "visualProfile": {
    "sendIconIconColor": "#ffffff",
    "sendIconBackgroundColor": "#522752"
  },
  "theme": {
    "--welcome-input-order": "3",
    "--welcome-cards-order": "2",
    "--welcome-heading-size-desktop": "2rem",
    "--welcome-heading-size-mobile": "1.5rem",
    "--welcome-heading-weight": "700",
    "--welcome-heading-text-align": "center",
    "--welcome-subheading-size-desktop": "1rem",
    "--welcome-subheading-size-mobile": "0.875rem",
    "--welcome-subheading-text-align": "center",
    "--welcome-padding": "20px",
    "--prompt-suggestion-background": "#522752",
    "--prompt-suggestion-background-hover": "#522752",
    "--prompt-suggestion-text-color": "#522752",
    "--prompt-suggestion-border-color": "#522752",
    "--font-family": "'Open Sans', sans-serif",
    "--color-primary": "#0e893c",
    "--color-text": "#522752",
    "--line-height-body": "1.5",
    "--main-container-background": "#ffffff",
    "--input-height": "48px",
    "--input-height-mobile": "40px",
    "--input-border-radius": "8px",
    "--input-border-radius-mobile": "6px",
    "--input-background": "#eef3f2",
    "--input-outline-color": "#d9d9d9",
    "--input-outline-width": "1px",
    "--input-box-shadow": "none",
    "--input-focus-outline-width": "2px",
    "--input-focus-outline-color": "#0e893c",
    "--input-font-size": "1rem",
    "--input-font-weight": "400",
    "--input-text-color": "#2f383c",
    "--input-button-height": "36px",
    "--input-button-width": "36px",
    "--submit-button-fill-color": "#ffffff",
    "--submit-button-fill-color-disabled": "#CCCCCC",
    "--color-button-submit": "#0e893c",
    "--color-button-submit-hover": "#522752",
    "--input-button-border-radius": "8px",
    "--button-disabled-background": "#F0F0F0",
    "--disclaimer-color": "#2f383c",
    "--disclaimer-font-size": "0.875rem",
    "--disclaimer-font-weight": "400",
    "--message-user-background": "#0e893c",
    "--message-user-text": "#ffffff",
    "--message-border-radius": "8px",
    "--message-padding": "16px",
    "--message-concierge-background": "#f3f3f3",
    "--message-concierge-text": "#000000",
    "--message-max-width": "100%",
    "--chat-interface-max-width": "768px",
    "--message-blocker-height": "48px",
    "--loading-message-background": "#d9d9d9",
    "--loading-dot-background": "#626262",
    "--color-text-muted": "#626262",
    "--citations-text-font-weight": "400",
    "--citations-desktop-button-font-size": "0.875rem",
    "--feedback-icon-btn-background": "#eef3f2",
    "--feedback-icon-btn-hover-background": "#fbe4cf",
    "--feedback-icon-btn-size-desktop": "40px",
    "--feedback-container-gap": "16px",
    "--multimodal-card-box-shadow": "0px 2px 4px rgba(0, 0, 0, 0.1)",
    "--border-radius-card": "8px",
    "--button-height-s": "32px",
    "--button-primary-background": "#0e893c",
    "--button-primary-text": "#ffffff",
    "--button-primary-hover": "#522752",
    "--button-secondary-border": "#2f383c",
    "--button-secondary-text": "#2f383c",
    "--button-secondary-hover": "#eef3f2",
    "--color-button-secondary-hover-text": "#2f383c",
    "--privacy-notice-background": "#eef3f2",
    "--privacy-notice-padding": "16px",
    "--privacy-notice-title-color": "#626262",
    "--privacy-notice-text-color": "#626262",
    "--privacy-notice-text-font-size": "0.875rem",
    "--privacy-notice-title-font-size": "1rem",
    "--message-concierge-link-decoration": "underline",
    "--color-secondary": "#2f383c",
    "--prompt-suggestion-button-background": "#d9d9d9",
    "--prompt-pill-background": "#0e893c",
    "--button-primary-mobile-background": "#522752",
    "--button-primary-mobile-hover": "#522752",
    "--main-container-mobile-background": "#ffffff",
    "--message-concierge-border-width": "1px",
    "--message-concierge-link-color": "#0e893c",
    "--prompt-suggestion-button-border-radius": "16px",
    "--prompt-suggestion-button-padding": "8px 16px",
    "--prompt-suggestions-container-gap": "12px",
    "--card-background": "#0e893c",
    "--card-text-font-size": "1rem",
    "--card-text-padding": "16px",
    "--chat-container-background": "#ffffff",
    "--message-blocker-background": "#ffffff",
    "--card-text-color": "#ffffff",
    "--prompt-pill-border-color": "#0e893c",
    "--prompt-pill-text-color": "#000000",
    "--prompt-suggestion-button-text-color": "#626262",
    "--prompt-suggestion-button-background-hover": "#d9d9d9",
    "--welcome-heading-text-color": "#000000",
    "--welcome-subheading-text-color": "#000000",
    "--welcome-header-order": "1",
    "--prompt-suggestions-flex-direction": "row",
    "--prompt-suggestions-flex-wrap": "wrap"
  },
};