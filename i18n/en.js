// i18n/en.js
const enTranslations = {
  meta: {
    title: "So-mails — Know if your email was read",
    lang: "en",
  },
  nav: {
    features: "Features",
    howItWorks: "How it works",
    pricing: "Pricing",
    login: "Log in",
    tryFree: "Try for free",
  },
  hero: {
    eyebrow: "✉ read receipts, for any email",
    title1: "You sent the email.",
    title2: "Now find out if it was",
    titleAccent: "read",
    subtitle: "A job application, a quote, an important document — So-mails tells you when your email was opened, so you never chase in the dark again.",
    ctaPrimary: "Try for free",
    ctaSecondary: "See how it works",
    note: "No credit card required · Sign up in 30 seconds",
    journeyLabel: "email journey",
    journeySent: "sent",
    journeyTransit: "in transit",
    journeyRead: "read · 2:32 PM",
  },
  stats: {
    stat1: {
      number: "~1 / 3",
      label: "of important emails go unanswered — finally know if they were opened",
    },
    stat2: {
      number: "< 1s",
      label: "delay between actual opening and your notification",
    },
    stat3: {
      number: "0",
      label: "email content stored on our servers",
    },
  },
  features: {
    eyebrow: "◆ features",
    title: "Everything you need to stop guessing",
    subtitle: "No spreadsheet to maintain, no extension to install for your recipient. So-mails simply observes what's already happening.",
    
    feature1: {
      tag: "read receipts",
      title: "Know if your email was opened, and when",
      description: "Every important email you send is tracked individually. A job application, a quote, an administrative file: as soon as it's opened, the status changes in your history — in real time.",
      list: [
        "Precise timestamps of first and last opening",
        "Complete history, sorted by email and inbox",
        "Live notification the moment it's opened",
      ],
      visual: {
        scenario: "\"I applied on Monday… did they read it?\"",
        status: "Status",
        statusValue: "Opened ✓",
        firstOpen: "First opened",
        firstOpenValue: "2:32:07 PM",
        lastOpen: "Last opened",
        lastOpenValue: "2:41:52 PM",
      },
    },
    
    feature2: {
      tag: "privacy",
      title: "No email content stored",
      description: "So-mails tracks events — sent, opened — never the body of your emails. Nothing is retained on our servers after sending, by design, not as an option.",
      list: [
        "Content fetched on demand, never persisted",
        "No data sold or shared",
        "GDPR compliant from day one",
      ],
      visual: {
        emailBody: "Email body",
        emailBodyValue: "Not stored",
        attachments: "Attachments",
        attachmentsValue: "Not stored",
        openEvent: "\"Opened\" event",
        openEventValue: "Stored",
      },
    },
    
    feature3: {
      tag: "email inboxes",
      title: "Connect every inbox you use",
      description: "Gmail, Outlook, Yahoo, iCloud or your own SMTP server — connect multiple inboxes at once and track your important emails in one place, regardless of the sender.",
      list: [
        "Secure connection for Gmail and Outlook",
        "Custom SMTP for advanced setups",
        "Multiple providers connected simultaneously",
      ],
      visual: {
        note: "connect several at once →",
      },
    },
  },
  howItWorks: {
    eyebrow: "◆ in three steps",
    title: "Up and running before your coffee",
    subtitle: "No recipient-side configuration, no plugin to install.",
    steps: [
      {
        number: "1",
        title: "Connect your inbox",
        description: "Gmail, Outlook, SMTP or several at once — authorization takes less than a minute.",
      },
      {
        number: "2",
        title: "Send as usual",
        description: "From your regular email client, nothing changes for your recipient.",
      },
      {
        number: "3",
        title: "Track opens in real time",
        description: "Status updated as soon as the email is read, visible in your history.",
      },
    ],
  },
  cta: {
    title: "Stop wondering if your email was read.",
    subtitle: "Connect your inbox and see your first open within minutes.",
    primary: "Try for free",
    secondary: "Talk to the team",
  },
  pricing: {
    eyebrow: "◆ pricing",
    title: "A plan for every need",
    subtitle: "Start free, scale up whenever you want.",
    
    free: {
      name: "Free",
      price: "0",
      currency: "$",
      period: "/month",
      description: "To discover So-mails",
      cta: "Start for free",
      features: [
        "5 emails per day",
        "2 connected providers",
        "Real-time notifications",
        "7-day history",
      ],
    },
    
    pro: {
      name: "Pro",
      price: "5",
      currency: "$",
      period: "/month",
      description: "For professional use",
      cta: "Try Pro",
      popular: "Popular",
      features: [
        "100 emails per day",
        "10 connected providers",
        "Real-time notifications",
        "Unlimited history",
        "Priority support",
      ],
    },
    
    unlimited: {
      name: "Unlimited",
      price: "10",
      currency: "$",
      period: "/month",
      description: "For teams and agencies",
      cta: "Try Unlimited",
      features: [
        "Unlimited emails",
        "Unlimited providers",
        "Real-time notifications",
        "Unlimited history",
        "Priority support",
        "Integration API",
      ],
    },
  },
  footer: {
    brand: "So-mails",
    features: "Features",
    howItWorks: "How it works",
    privacy: "Privacy",
    contact: "Contact",
    copyright: "© 2026 So-mails",
  },
  privacy: {
    meta: {
      title: "Privacy Policy — So-mails",
    },
    eyebrow: "total transparency",
    title: "Privacy Policy",
    subtitle: "Your data belongs to you. We protect it, we never sell it.",
    updated: "Last updated: August 27, 2026",
    
    principles: {
      title: "Our core principles",
      item1: {
        title: "Zero content stored",
        description: "We never store your email bodies or attachments. Only events (sent, opened) are recorded.",
      },
      item2: {
        title: "Never sold",
        description: "Your data is never shared, sold, or used for advertising purposes. Never.",
      },
      item3: {
        title: "GDPR compliant",
        description: "Full GDPR (Europe) compliance and adherence to major international privacy regulations. Your data is hosted in Europe.",
      },
    },
    
    dataCollection: {
      title: "Data collected",
      intro: "Here's exactly what we collect and why:",
      items: {
        email: {
          label: "Email address",
          purpose: "To create your account and send you notifications",
          retention: "Kept as long as your account exists",
        },
        metadata: {
          label: "Email metadata",
          purpose: "Recipient, subject, send date, read status",
          retention: "Kept according to your plan (7 days to unlimited)",
        },
        events: {
          label: "Opening events",
          purpose: "Date and time of opening, device (desktop/mobile)",
          retention: "Kept according to your plan",
        },
        connection: {
          label: "Connection information",
          purpose: "IP address, browser, for your account security",
          retention: "30 days maximum",
        },
      },
    },
    
    notCollected: {
      title: "What we do NOT collect",
      items: [
        "The full content of your emails",
        "Attachments",
        "Drafts",
        "Your address book contacts",
        "History of your untracked emails",
      ],
    },
    
    compliance: {
      title: "Regulatory compliance",
      intro: "We comply with major data protection regulations worldwide:",
      gdpr: {
        title: "GDPR (Europe)",
        description: "Full compliance with the General Data Protection Regulation",
      },
      ccpa: {
        title: "CCPA (California)",
        description: "Compliance with the California Consumer Privacy Act",
      },
      pipeda: {
        title: "PIPEDA (Canada)",
        description: "Compliant with the Personal Information Protection and Electronic Documents Act",
      },
      privacyShield: {
        title: "Privacy Shield",
        description: "EU-US data transfer principles respected",
      },
    },
    
    security: {
      title: "Security",
      intro: "We take security seriously:",
      items: [
        "SSL/TLS encryption for all communications",
        "Secure OAuth2 authentication for Gmail and Outlook",
        "Encrypted access tokens in database",
        "Infrastructure hosted in Europe (OVH/AWS)",
        "Regular security audits",
        "Two-factor authentication available",
      ],
    },
    
    rights: {
      title: "Your rights",
      intro: "Under GDPR, you have the following rights:",
      items: {
        access: {
          title: "Right to access",
          description: "Download all your data at any time from your account",
        },
        rectification: {
          title: "Right to rectification",
          description: "Modify your personal information directly in your profile",
        },
        deletion: {
          title: "Right to erasure",
          description: "Delete your account and all your data with one click",
        },
        portability: {
          title: "Right to portability",
          description: "Export your data in JSON or CSV format",
        },
      },
    },
    
    cookies: {
      title: "Cookies",
      description: "We only use essential cookies to maintain your active session. No tracking cookies, no advertising cookies.",
    },
    
    contact: {
      title: "Contact us",
      description: "For any questions regarding this privacy policy or your personal data:",
      response: "We commit to responding within 48 hours.",
    },
    
    sidebar: {
      title: "Summary",
      items: [
        "No email content stored",
        "Your data is never sold",
        "Full GDPR compliance",
        "Secure European hosting",
        "Export your data anytime",
        "One-click deletion",
      ],
      cta: "Back to home",
    },
  },
};

export default enTranslations;