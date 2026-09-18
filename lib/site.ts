export const SITE = {
  name: "Korda",
  url: "https://korda.digital",
  email: "hello@korda.digital",
  description:
    "Korda builds websites, stores and custom tools for businesses. You talk to the person building it, and you edit your own content after launch.",
  // Legal entity line for the footer. Leave null until the details are confirmed.
  legalEntity: null as string | null,
} as const;

const WHATSAPP_NUMBER = "995571079215";

export const CONTACT = {
  telegram: "https://t.me/kordadigital",
  whatsapp: (text = "Hi! I have a project. Where do we start?") =>
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
  instagram: "https://instagram.com/kordadigital",
  x: "https://x.com/korda_digital",
  linkedin: "https://linkedin.com/in/korda-digital-a19389429",
} as const;

export const HERO = {
  // DRAFT: open item in SKILL.md. 5–9 words, what we do and for whom.
  headline: "We build sites, stores and tools for small businesses.",
  subhead:
    "You talk to the person building it, and you edit it yourself after launch.",
} as const;

export type ServiceId = "web" | "cro" | "integration" | "software";

export const SERVICES: {
  id: ServiceId;
  name: string;
  forLine: string;
  question: string;
  includes: string[];
}[] = [
  {
    id: "web",
    name: "Web development",
    forLine: "New sites, redesigns, Shopify stores",
    question: "Starting from nothing?",
    includes: ["Design", "development", "CMS", "SEO setup"],
  },
  {
    id: "cro",
    name: "CRO & optimization",
    forLine: "Sites that get visits but not customers",
    question: "Getting visits but not customers?",
    includes: ["Audits", "speed", "UX fixes", "testing", "analytics"],
  },
  {
    id: "integration",
    name: "Integration & migration",
    forLine: "Tools that don’t talk to each other, or platform moves",
    question: "Tools that don’t talk to each other?",
    includes: ["CRM", "booking", "payments", "email", "data migration"],
  },
  {
    id: "software",
    name: "Custom software",
    forLine: "When no template or plugin covers it",
    question: "No template covers what you need?",
    includes: ["Web apps", "client portals", "AI tools", "dashboards"],
  },
];

export const serviceAnchor = (id: ServiceId) => `service-${id}`;

// DRAFT: plans are an open item in SKILL.md. Prices stay null until decided;
// the page shows a dash rather than an invented number.
export const SUPPORT_PLANS: {
  name: string;
  forLine: string;
  includes: string[];
  price: number | null;
}[] = [
  {
    name: "Keep",
    forLine: "The site stays up and safe",
    includes: [
      "Updates and security fixes",
      "Uptime monitoring",
      "Weekly backups and restore",
      "Reply within 2 working days",
    ],
    price: null,
  },
  {
    name: "Care",
    forLine: "Small changes without a new project",
    includes: [
      "Everything in Keep",
      "Hours of changes every month",
      "Content updates on request",
      "Reply within 1 working day",
    ],
    price: null,
  },
  {
    name: "Grow",
    forLine: "The site keeps getting better",
    includes: [
      "Everything in Care",
      "Monthly improvement round",
      "Analytics review and fixes",
      "Same-day reply",
    ],
    price: null,
  },
];

export const SUPPORT_TERMS = {
  notIncluded:
    "Domain and hosting, copy and translation, photo and video, paid fonts and stock, product data entry.",
  payment: "50% upfront, 50% on delivery.",
} as const;

// DRAFT: durations to confirm against real projects.
export const PROCESS = [
  {
    name: "Brief",
    time: "2–3 days",
    what: "A call about the business, the goal and what exists today.",
    you: "Share access, examples you like and any content you have.",
  },
  {
    name: "Prototype",
    time: "3–5 days",
    what: "Wireframes of every page before any design work starts.",
    you: "Approve the structure. Changing it here costs nothing.",
  },
  {
    name: "Design",
    time: "1–2 weeks",
    what: "The approved structure, designed for phone first, then desktop.",
    you: "One round of comments per page.",
  },
  {
    name: "Build",
    time: "2–4 weeks",
    what: "Development, content editing, integrations, speed and SEO setup.",
    you: "Test on a private link and send final content.",
  },
  {
    name: "Launch",
    time: "1–2 days",
    what: "Domain, analytics, redirects, and a walkthrough of editing your own content.",
    you: "Say go. Then choose a support plan or leave it with us on call.",
  },
] as const;

export const ABOUT = {
  statement:
    "Korda builds websites, stores and internal tools for businesses that need them to work, not just exist.",
  claims: [
    {
      title: "You talk to the person building it",
      body: "No account managers in between. The person on Telegram is the one writing the code.",
    },
    {
      title: "You edit your own content",
      body: "StarImmo adds its own listings. Santinno changes its own prices. No developer invoice for a typo.",
    },
    {
      title: "Structure is fixed before design starts",
      body: "You approve a prototype of every page first, so there are no surprises in week four.",
    },
    {
      title: "We stay after launch",
      body: "Support plans with a fixed monthly price, so a broken form is not a new project.",
    },
  ],
} as const;

// DRAFT: replace with real questions from client conversations.
export const FAQ = [
  {
    q: "How much does a site cost?",
    a: "Project work is priced per job, after a short call about what you need. You get a fixed price before anything starts. Support plans are the only fixed monthly prices, listed above.",
  },
  {
    q: "How long does it take?",
    a: "Most sites take four to seven weeks from brief to launch. Every step has its own timeline, shown in How we work.",
  },
  {
    q: "Can I change the site myself after launch?",
    a: "Yes. Texts, photos, products, prices and listings are all editable by you, without code. We show you how at launch.",
  },
  {
    q: "What do you need from me?",
    a: "Access to what exists today, examples you like, and your content. If you don’t have copy or photos, we tell you early so it doesn’t hold up the launch.",
  },
  {
    q: "Do you work with clients outside Georgia?",
    a: "Yes. Current clients are in Luxembourg and Georgia. Everything runs remotely over Telegram, WhatsApp and calls.",
  },
  {
    q: "How is payment split?",
    a: "50% upfront, 50% on delivery.",
  },
] as const;
