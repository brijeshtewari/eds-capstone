window.styleConfiguration = {
  "id": "f0fcf56b-eae4-4f63-af6b-5199cf1e7ecd",
  "name": "MCGRAW HILL_26-09-07_f0fcf56b-eae4-4f63-af6b-5199cf1e7ecd",
  "metadata": {
    "brandName": "MCGRAW HILL",
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
        "text": "Schedule a Meeting",
        "alignment": "left"
      },
      "subtitle": {
        "text": "Connect with us to explore tailored solutions for your educational needs.",
        "alignment": "left"
      },
      "buttons": {
        "submit": {
          "text": "Submit",
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
        "text": "Pick a Time",
        "alignment": "left"
      },
      "subtitle": {
        "text": "Select a convenient time for your meeting.",
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
    "text": "By using this assistant, you agree to MCGRAW HILL's terms and conditions.",
    "links": [
      {
        "text": "Terms of Use",
        "url": "https://www.mheducation.com/terms.html"
      }
    ]
  },
  "text": {
    "welcome.heading": "Welcome to McGraw Hill",
    "welcome.subheading": "Your partner in navigating effective learning solutions.",
    "input.placeholder": "Ask about personalized learning tools",
    "input.messageInput.aria": "Type your message",
    "input.send.aria": "Send message",
    "input.aiChatIcon.tooltip": "Chat with McGraw Hill",
    "input.mic.aria": "Use voice input",
    "card.aria.select": "Select this option",
    "carousel.prev.aria": "Previous",
    "carousel.next.aria": "Next",
    "scroll.bottom.aria": "Scroll to bottom",
    "error.network": "There was an issue connecting. Please try again.",
    "loading.message": "Generating response...",
    "feedback.dialog.title.positive": "Positive Feedback",
    "feedback.dialog.title.negative": "Negative Feedback",
    "feedback.dialog.question.positive": "What did you like about this experience?",
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
        "text": "Explore personalized learning tools",
        "systemPrompt": "Tell me about personalized learning tools available at McGraw Hill.",
        "backgroundColor": "#06235b",
        "image": "https://www.mheducation.com/content/dam/mhe/sharpen/faculty/home-screen-image.webp"
      },
      {
        "text": "Learn about literacy solutions",
        "systemPrompt": "What literacy solutions does McGraw Hill offer?",
        "backgroundColor": "#2b4474",
        "image": "https://www.mheducation.com/content/dam/mhe/corporate/mcgraw-hill-literacy.webp"
      },
      {
        "text": "Discover educational resources",
        "systemPrompt": "Show me educational resources for teachers and students.",
        "backgroundColor": "#51658c",
        "image": "https://www.mheducation.com/content/dam/mhe/corporate/home/hero-home-prof_1x.webp"
      },
      {
        "text": "Find out about social responsibility",
        "systemPrompt": "What social responsibility initiatives does McGraw Hill support?",
        "backgroundColor": "#7686a5",
        "image": "https://www.mheducation.com/content/dam/mhe/corporate/About/social-responsibility/operation-backpack-carousel-2023.webp"
      }
    ],
    "feedback.positive.options": [
      "Helpful information",
      "Easy to use",
      "Fast response",
      "Clear answers",
      "Other"
    ],
    "feedback.negative.options": [
      "Unclear response",
      "Slow response",
      "Difficult to navigate",
      "Missing information",
      "Other"
    ]
  },
  "assets": {
    "icons": {
      "company": ""
    }
  },
  "visualProfile": {
    "sendIconIconColor": "#ffffff",
    "sendIconBackgroundColor": "#522752"
  },
  "theme": {
    "--welcome-input-order": "3",
    "--welcome-cards-order": "2",
    "--welcome-heading-size-desktop": "2.5rem",
    "--welcome-heading-size-mobile": "2rem",
    "--welcome-heading-weight": "700",
    "--welcome-heading-text-align": "center",
    "--welcome-subheading-size-desktop": "1.25rem",
    "--welcome-subheading-size-mobile": "1rem",
    "--welcome-subheading-text-align": "center",
    "--welcome-padding": "2rem",
    "--prompt-suggestion-background": "#522752",
    "--prompt-suggestion-background-hover": "#522752",
    "--prompt-suggestion-text-color": "#522752",
    "--prompt-suggestion-border-color": "#522752",
    "--font-family": "ProximaNova, Arial, sans-serif",
    "--color-primary": "#06235b",
    "--color-text": "#522752",
    "--line-height-body": "1.6",
    "--main-container-background": "#ffffff",
    "--input-height": "48px",
    "--input-height-mobile": "40px",
    "--input-border-radius": "8px",
    "--input-border-radius-mobile": "6px",
    "--input-background": "#f2f2f2",
    "--input-outline-color": "#d9d9d9",
    "--input-outline-width": "1px",
    "--input-box-shadow": "0 2px 4px rgba(0, 0, 0, 0.1)",
    "--input-focus-outline-width": "2px",
    "--input-focus-outline-color": "#06235b",
    "--input-font-size": "1rem",
    "--input-font-weight": "400",
    "--input-text-color": "#06235b",
    "--input-button-height": "36px",
    "--input-button-width": "36px",
    "--submit-button-fill-color": "#ffffff",
    "--submit-button-fill-color-disabled": "#CCCCCC",
    "--color-button-submit": "#06235b",
    "--color-button-submit-hover": "#522752",
    "--input-button-border-radius": "8px",
    "--button-disabled-background": "#F0F0F0",
    "--disclaimer-color": "#666666",
    "--disclaimer-font-size": "0.875rem",
    "--disclaimer-font-weight": "400",
    "--message-user-background": "#06235b",
    "--message-user-text": "#ffffff",
    "--message-border-radius": "8px",
    "--message-padding": "1rem",
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
    "--feedback-icon-btn-background": "#dae7f1",
    "--feedback-icon-btn-hover-background": "#c5d9e8",
    "--feedback-icon-btn-size-desktop": "40px",
    "--feedback-container-gap": "1rem",
    "--multimodal-card-box-shadow": "0 2px 4px rgba(0, 0, 0, 0.1)",
    "--border-radius-card": "8px",
    "--button-height-s": "36px",
    "--button-primary-background": "#06235b",
    "--button-primary-text": "#ffffff",
    "--button-primary-hover": "#522752",
    "--button-secondary-border": "1px solid #06235b",
    "--button-secondary-text": "#06235b",
    "--button-secondary-hover": "#051f52",
    "--color-button-secondary-hover-text": "#ffffff",
    "--privacy-notice-background": "#f2f2f2",
    "--privacy-notice-padding": "1rem",
    "--privacy-notice-title-color": "#626262",
    "--privacy-notice-text-color": "#626262",
    "--privacy-notice-text-font-size": "0.875rem",
    "--privacy-notice-title-font-size": "1rem",
    "--message-concierge-link-decoration": "underline",
    "--color-secondary": "#dae7f1",
    "--prompt-suggestion-button-background": "#d9d9d9",
    "--prompt-pill-background": "#dae7f1",
    "--button-primary-mobile-background": "#522752",
    "--button-primary-mobile-hover": "#522752",
    "--main-container-mobile-background": "#ffffff",
    "--message-concierge-border-width": "1px",
    "--message-concierge-link-color": "#06235b",
    "--prompt-suggestion-button-border-radius": "20px",
    "--prompt-suggestion-button-padding": "0.5rem 1rem",
    "--prompt-suggestions-container-gap": "0.5rem",
    "--card-background": "#dae7f1",
    "--card-text-font-size": "1rem",
    "--card-text-padding": "1rem",
    "--chat-container-background": "#ffffff",
    "--message-blocker-background": "#ffffff",
    "--card-text-color": "#ffffff",
    "--prompt-pill-border-color": "#dae7f1",
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