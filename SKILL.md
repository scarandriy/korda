---
name: korda-site
description: Build spec for the Korda agency website (korda.digital) — page map, block order, service definitions, case study copy, contact links, tech requirements and copywriting rules. Use this skill whenever the task touches the Korda site in any way: building or restyling a page or section, writing or editing any copy for it, adding a case study, changing services or support plans, setting up analytics, meta tags or deployment, or reviewing a draft of it. Also use it when someone asks for "the agency site", "our site", "the landing", "the portfolio page" without naming Korda, since that is the site they mean. Follow the locked decisions here instead of inventing structure.
---

# Korda — website build spec

Korda is a small web development agency (korda.digital). This file is the source of truth for what the site contains and why. Follow it rather than defaulting to generic agency-site patterns.

## Context that shapes every decision

The site is **not** a lead generation channel. Leads come from cold outreach on Telegram. By the time someone opens the site, they have already been contacted. Their question is not "who should I hire" but **"are these people real, and can they do my thing?"**

Everything follows from that:

- Proof beats persuasion. Cases and concrete facts, not adjectives.
- Short and dense beats long and airy. There is not enough content yet to fill ten screens, and stretching it with animation reads as hiding something.
- Every path ends in Telegram or WhatsApp. No forms, no funnels.
- Mobile first, genuinely — nearly all traffic arrives from a messenger link on a phone.

## Locked decisions

Do not revisit these without being asked.

| Question | Decision |
|---|---|
| Language | English only |
| Services | Four directions, one block on the homepage, no separate service pages |
| Prices | Not shown for project work. Only support plans have numbers |
| Format | Homepage as a long landing page + individual case pages |
| Cases | Card with a short description + link to the live site |
| Contact | Telegram and WhatsApp |
| Team | Not shown — the brand speaks, not individuals |
| Testimonials | None yet, leave room for them |

Two consequences worth stating out loud, because they constrain the design:

**No team and no testimonials** removes two of the three usual trust signals. All the weight lands on the case studies and on looking like a real company (proper email, legal details, working links). Cases must be flawless.

**One services block, no per-service pages** means organic search traffic is essentially forfeited. That is acceptable for an outreach-driven business. If SEO becomes a goal later, services get split into separate pages.

## Page map

| URL | Page | Job |
|---|---|---|
| `/` | Homepage | The entire pitch in one scroll |
| `/work` | Work | Case grid with filters |
| `/work/[slug]` | Case | One project in detail |
| `/contact` | Contact | Contact points for anyone who did not write from the homepage |
| `/privacy` | Privacy Policy | Legal, linked from footer |
| `/terms` | Terms | Legal, linked from footer |

Header navigation: **Work · Services · Support · Contact** (the last three are anchors on the homepage). A Telegram button sits on the right and stays visible at all times, including mobile.

## Homepage, block by block

The order follows the question a visitor is asking at that point in the scroll. Do not reorder without a reason.

**1. Hero** — *"Who are these people and what do they do?"*
One headline of 5–9 words saying what you do and for whom. One line of subhead. One button: Telegram. A single button, not two competing ones. Visuals are optional and must not delay load.

**2. Services** — *"Do they handle my kind of problem?"*
Four cards from the services table below. On each card the **For** line is set large and the service name small underneath. This inversion is deliberate — see the services section.

**3. Work** — *"Can they actually build?"*
Three strongest cases. Not more; the homepage exists to interest, not to exhaust. Button: View all work → `/work`.

**4. Support** — *"And then what, do I pay every time something breaks?"*
Support plans with prices. The only place on the site with numbers.

**5. Process** — *"What is actually going to happen?"*
4–5 named steps with rough durations: brief → prototype → design → build → launch.

**6. Why us** — *"How are you different from the hundred other shops?"*
3–4 points, each verifiable. Not "quality and professionalism". Concrete: turnaround, no account managers between client and builder, support after launch, clients edit their own content.

**7. FAQ** — 5–7 real questions taken from actual client conversations. Accordion.

**8. Final CTA** — headline, one line, Telegram and WhatsApp buttons.

**9. Footer** — logo, navigation, contacts, legal entity details, Privacy and Terms, social links.

Leave room between 5 and 6 for testimonials once they exist.

## Services

Four directions. Homepage anchor `#services`.

| Service | For | Includes |
|---|---|---|
| Web development | New sites, redesigns, Shopify stores | Design, development, CMS, SEO setup |
| CRO & optimization | Sites that get visits but not customers | Audits, speed, UX fixes, testing, analytics |
| Integration & migration | Tools that don't talk to each other, or platform moves | CRM, booking, payments, email, data migration |
| Custom software | When no template or plugin covers it | Web apps, client portals, AI tools, dashboards |

**The For column is the most valuable thing on the page.** It is written from the client's problem, not from the agency's capability. "Sites that get visits but not customers" is how a business owner describes their own situation — they recognise themselves instantly. A service name does not do that: nobody searches for "CRO", they only know traffic arrives and enquiries do not.

So on each card, **set the For line large and the service name as a caption underneath.** Everyone else does the opposite, which is why every agency site reads the same.

Case coverage is uneven and should be known: Web development is covered several times over, Custom software once, CRO and Integration not at all. Do not fabricate proof for the empty two.

## Support plans

The only prices on the site. Block sits directly after Services.

Project work is scoped per job, so a range communicates nothing. Support is a subscription with a fixed scope — showing its price removes friction from the one recurring revenue line the agency has.

**Plans are not defined yet.** Three tiers, differentiated by response time, hours of changes included, and whether ongoing improvement is included or only keeping the site alive.

| Plan | For | Includes | $ / mo |
|---|---|---|---|
| — | — | — | — |
| — | — | — | — |
| — | — | — | — |

Decide per tier: hours of changes per month, response time, whether hosting and domain are included, uptime monitoring, backups and restore, content updates vs technical maintenance only, annual discount.

One structural trick worth using: **make the cheapest tier deliberately thin** — technical maintenance, almost no changes. It is not there to earn money, it is there to make the middle tier the obvious choice.

Under the table, one line each:
- **Not included:** domain and hosting, copy and translation, photo and video, paid fonts and stock, product data entry.
- **Payment:** 50% upfront, 50% on delivery.

## Case studies

Without a team section or testimonials, these carry the site.

**`/work` page.** Case grid, filters across the top by the four directions: All · Web development · CRO · Integration · Custom software.

**Case card, fields top to bottom:**
1. Project preview image
2. Client name and niche
3. Type tag
4. Short description, 2–3 lines
5. Visit site link, `target="_blank"`

**Description formula:** problem → what was built → result. Never "a beautiful site for a coffee shop".

Where no numbers exist, substitute specifics of the work — timeline, what was difficult, what was solved. "Migrated an 800-product store from WordPress to Next.js in three weeks, load time from 6s to 1.2s" is proof of a different kind.

Selection: 6–9 cases on `/work`, 3 on the homepage, the rest in a PDF deck used in conversation. Select for coverage of task types, not for prettiness. Check quarterly that the live links still work and the client has not rebuilt the site — a dead link in a portfolio is worse than no link.

### Existing cases

| Project | What it is | Direction |
|---|---|---|
| starimmo.lu | Real estate site in Luxembourg. The agent adds and edits listings and views analytics without a developer | Web development, Custom software |
| noxvonmort.com | Online store for handmade jewellery. Orders and shipping worldwide, multi-currency payment | Web development |
| documentebi.ge | Site for a legal firm in Georgia. Prices and process visible immediately, enquiries go to Telegram or WhatsApp | Web development |
| lux-core.info | Sales page for a company that handles business payments. Explains the service and brings enquiries | Web development |
| santinno | Furniture studio site with a catalogue. The owner changes products, prices and photos. Payments can be added | Web development |

**starimmo is the strongest case.** A custom admin panel where the client runs their own listings and analytics — that is an application, not a website. Describe it through the admin, not through the design.

**Recurring theme worth surfacing:** in starimmo and santinno the client edits content themselves. For a business owner that is tangible — not paying a developer to change a price. Use it in "Why us" and in outreach.

### Card copy drafts

Where a bracket appears, insert the real figure or delete the sentence. Do not ship a bracket.

> **StarImmo** — Real Estate · Web Development
>
> A Luxembourg agency was going through their developer for every listing change. We built the site plus a custom admin panel where they add properties, edit content and track analytics themselves. (result — fill in)

> **Nox Von Mort** — E-commerce · Shopify
>
> A handcrafted silver jewellery brand needed a store that looked like the work, not like a template. We built a custom Shopify storefront with worldwide shipping and multi-currency checkout. (sales figures — ask the client)

> **Documentebi** — Legal Services · Web Development
>
> A legal consultancy in Georgia was answering the same questions in DMs all day. We built a site that answers them upfront — transparent pricing, a three-step process, an FAQ — and routes ready clients straight to Telegram or WhatsApp.

> **Luxcore Payment Solution Provider** — Fintech · Landing Page
>
> A B2B provider needed a landing page that could actually sell, not just exist. We built a conversion-focused page that walks prospects through the product and routes them straight to sales. The page became their primary acquisition channel.

> **Santinno** — Furniture · E-commerce
>
> A furniture studio needed a catalogue they could run themselves. We built the site with SEO and a Payload CMS, so the team adds products and updates prices without touching code.

On the Luxcore card, never name the vertical. If the live site is visibly about gambling, drop the Visit site link and keep the preview only. If a client asks directly, answer honestly — a neutral portfolio description is fine, denial is not.

## Contact

| Channel | Link |
|---|---|
| Telegram | t.me/kordadigital |
| WhatsApp | wa.me/995571079215 |
| Email | oursupportit@gmail.com → move to hello@korda.digital |
| Instagram | instagram.com/kordadigital |
| X | x.com/korda_digital |
| LinkedIn | linkedin.com/in/korda-digital-a19389429 |

Only Telegram and WhatsApp drive conversion. The rest are "we exist" signals and belong in the footer at small size — putting them alongside the messengers dilutes the one action that matters.

**Placement:** header (Telegram), hero, final CTA, footer. Floating button on mobile.

**Links are direct** — `t.me/…`, `wa.me/…`, `mailto:` — and open in a new tab.

**WhatsApp prefill works** via `?text=`, URL-encoded:

```
https://wa.me/995571079215?text=Hi%21%20I%20have%20a%20project.%20Where%20do%20we%20start%3F
```

Vary it per button. From a service card: `?text=Hi%21%20I%20need%20help%20with%20my%20website%20conversion.` From the support block: `?text=Hi%21%20I%20would%20like%20to%20ask%20about%20support%20plans.`

**Telegram prefill does not work this way.** `t.me/kordadigital?text=…` silently ignores the parameter on a regular account. Prefilled greetings require either a Telegram Business account (which issues `t.me/m/XXXX` links with a set greeting) or a bot via `t.me/botname?start=`. Do not ship a `?text=` Telegram link expecting it to work.

**No form.** Possible later via API, not needed now.

**Email:** a Gmail address in the footer of an agency that sells websites is a contradiction clients notice. Fix free via Cloudflare → Email → Email Routing: `hello@korda.digital` forwarding to the existing Gmail, then add it in Gmail as "Send mail as".

## Technical requirements

The site is the agency's first portfolio piece. It gets run through PageSpeed by prospects.

- **Speed.** Lighthouse 90+ on mobile. WebP or AVIF images, lazy loading, fonts self-hosted with `font-display: swap`. No heavy animation library for one effect.
- **Mobile first**, desktop second.
- **OG tags.** A distinct `og:image` per page and per case — the link goes out in every cold message and must unfurl as a card.
- **SEO baseline.** Unique title and description per page, one `h1`, alt text on images, `sitemap.xml`, `robots.txt`, schema.org Organization markup.
- **Analytics from day one.** Plausible or Umami — lighter than GA and no cookie banner needed. Track events, not just pageviews: Telegram and WhatsApp clicks, scroll depth to the cases, outbound clicks to live sites.
- **Infrastructure.** Domain korda.digital, DNS on Cloudflare. SSL/TLS set to Full (strict), Always Use HTTPS, pick one canonical host (www or bare) and redirect the other. Host on Vercel, Netlify or Cloudflare Pages.
- **Legal.** Privacy Policy, Terms, legal entity details in the footer. No cookie banner if analytics are cookieless.
- **404.** Custom page with a way back.

## Copywriting rules

**Write what the client gets, not what you used.** Not "Payload CMS" but "you change products and prices yourself". Not "multi-currency checkout" but "customers buy from any country in their own currency". Technical names mean nothing to the person paying.

**No filler adjectives.** "Innovative", "cutting-edge", "passionate team" are noise. If a sentence survives being pasted onto a competitor's site unchanged, it says nothing.

**English is not the team's first language.** Have a native speaker or a strong editor read every line before launch. Broken grammar on an agency site destroys trust faster than bad design — the client thinks: if they couldn't proofread their own copy, what happens to mine.

## Open items

Not decided. Flag them rather than inventing answers.

- **Hero headline.** One sentence: what you do and for whom. Nothing exists yet, and the hero cannot be built without it.
- **Content for three homepage blocks:** Process steps, Why us points, FAQ questions.
- **Support plan names, scope and prices.**
- **Visual system:** logo, favicon, typefaces, palette, `og:image` template.
- **What happens after the Telegram click** — who replies, how fast, what they ask first. The site funnels everyone into a messenger; six hours of silence there wastes the whole site. A first-reply template and 3–4 qualifying questions are needed.
- **Launch date.** Unassigned, so the work will stretch.
