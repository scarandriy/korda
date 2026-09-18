import type { ServiceId } from "@/lib/site";

export type WorkItem = {
  slug: string;
  name: string;
  domain: string;
  // null hides the Visit site link (dead, unconfirmed, or not safe to link).
  url: string | null;
  niche: string;
  type: string;
  directions: ServiceId[];
  featured: boolean;
  summary: string;
  problem: string;
  built: string;
  result?: string;
  // Screenshots under /public/work. Until they exist, frames show a stand-in.
  images?: { desktop: string; mobile: string; backdrop?: string };
};

// Order is fixed by DESIGN.md.
export const WORK: WorkItem[] = [
  {
    slug: "starimmo",
    name: "StarImmo",
    domain: "starimmo.lu",
    url: "https://starimmo.lu",
    niche: "Real estate · Luxembourg",
    type: "Web development · Custom software",
    directions: ["web", "software"],
    featured: true,
    summary:
      "A Luxembourg agency was going through their developer for every listing change. We built the site plus a custom admin panel where they add properties, edit content and track analytics themselves.",
    problem:
      "Every new listing, price change or photo swap meant a message to a developer and a wait. For an agency whose stock changes weekly, the site was always behind.",
    built:
      "The public site plus a custom admin panel. The agent adds and edits properties, changes page content and sees visitor analytics in one place, without anyone else involved.",
  },
  {
    slug: "noxvonmort",
    name: "Nox Von Mort",
    domain: "noxvonmort.com",
    url: "https://noxvonmort.com",
    niche: "Handmade jewellery",
    type: "E-commerce · Shopify",
    directions: ["web"],
    featured: true,
    summary:
      "A handcrafted silver jewellery brand needed a store that looked like the work, not like a template. We built a custom Shopify storefront where customers buy from any country in their own currency.",
    problem:
      "The pieces are handmade and unusual. A standard theme made them look like any other jewellery shop, and the brand sells worldwide.",
    built:
      "A custom Shopify storefront designed around the pieces. Orders ship worldwide and customers pay in their own currency.",
  },
  {
    slug: "documentebi",
    name: "Documentebi",
    domain: "documentebi.ge",
    url: "https://documentebi.ge",
    niche: "Legal services · Georgia",
    type: "Web development",
    directions: ["web"],
    featured: true,
    summary:
      "A legal consultancy in Georgia was answering the same questions in DMs all day. We built a site that answers them upfront and routes ready clients straight to Telegram or WhatsApp.",
    problem:
      "Most messages asked the same things: what it costs, how long it takes, what documents are needed. Each one took a consultant away from paid work.",
    built:
      "A site with prices visible immediately, a three-step process and an FAQ. People who are ready to start go straight to Telegram or WhatsApp.",
  },
  {
    slug: "lux-core",
    name: "Luxcore",
    domain: "lux-core.info",
    // Live site names its industries openly; per SKILL.md, preview only.
    url: null,
    niche: "Business payments",
    type: "Landing page",
    directions: ["web"],
    featured: false,
    summary:
      "A B2B payment provider needed a landing page that could actually sell, not just exist. We built a page that walks prospects through the service and routes them straight to sales.",
    problem:
      "The service is technical and the buyers are busy. The old page described features without explaining why a business should switch.",
    built:
      "A single sales page that explains the service step by step and ends every section with a way to reach the sales team.",
    result: "The page became their primary acquisition channel.",
  },
  {
    slug: "santinno",
    name: "Santinno",
    domain: "santinno",
    // santinno.com currently serves an unrelated café site. Confirm the domain.
    url: null,
    niche: "Furniture studio",
    type: "E-commerce",
    directions: ["web"],
    featured: false,
    summary:
      "A furniture studio needed a catalogue they could run themselves. We built the site so the team adds products and updates prices without touching code.",
    problem:
      "The catalogue changes often. Every new product or price change was a job for someone else.",
    built:
      "A catalogue site set up for search, where the team adds products, changes prices and swaps photos themselves. Online payment can be switched on later.",
  },
];

export const DIRECTIONS: { id: ServiceId | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "web", label: "Web development" },
  { id: "cro", label: "CRO" },
  { id: "integration", label: "Integration" },
  { id: "software", label: "Custom software" },
];

export function getWork(slug: string) {
  return WORK.find((item) => item.slug === slug);
}

export function featuredWork() {
  return WORK.filter((item) => item.featured).slice(0, 3);
}

export function adjacentWork(slug: string) {
  const index = WORK.findIndex((item) => item.slug === slug);
  return {
    prev: WORK[(index - 1 + WORK.length) % WORK.length],
    next: WORK[(index + 1) % WORK.length],
  };
}
