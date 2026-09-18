---
name: korda-design
description: Visual design spec for the Korda agency website (korda.digital) — the chord-graph hero concept, section-by-section art direction, type and colour tokens, motion rules, grid, and mobile behaviour. Use this together with the korda-site skill whenever building, restyling or reviewing any part of the Korda site, writing its CSS, choosing typefaces or colours, or implementing the hero, work grid, process list or about section. Also use it when someone asks how a section of "our site" or "the agency site" should look, even without naming Korda. Follow the design decisions here rather than reaching for default agency-site styling.
---

# Korda — design spec

Read alongside `korda-site` (structure and copy). That file says what goes on the page; this one says how it looks and moves.

## The one idea

A **chord** is a straight line between two points on a circle. That is the company name, and it is the visual system.

Points sit on a ring. Lines cross between them. The shape that emerges is a curve made entirely of straight lines — which is also the pitch: many small direct connections, no detours.

Every visual decision on this site either serves that or stays out of its way. **Spend all boldness on the hero graph. Everything below it is quiet, typographic and disciplined.** A site that is bold in five places reads as a template with effects; a site that is bold once reads as a point of view.

## Tokens

### Colour

The site is achromatic. The only colour on the page comes from the client work in the case previews.

This is deliberate rather than minimal-by-default: Korda is the frame, the client's work is the picture. It also means the portfolio never fights the brand, and adding a new case never breaks the palette.

```
--ink        #000000   background, hero
--paper      #F2F0ED   light sections
--white      #FFFFFF   type on ink
--graphite   #1A1A1A   type on paper
--dim        #8A8A8A   inactive list items, secondary type
--hairline   #D8D5D1   rules and grid lines on paper
```

No accent colour. If something must be emphasised, use size, weight or position — not hue. Resist adding a signature colour later; the absence is the signature.

Sections alternate `--ink` and `--paper` in large blocks, not per-card. Hero and Work are ink. Services, Process, About, Support are paper. Footer returns to ink.

### Type

One family across the whole site: **Switzer** (free, Indian Type Foundry — a Swiss grotesque with tighter apertures than Inter, so it does not read as the default). Paid upgrade if budget allows: Suisse Int'l or Aeonik.

Self-host the woff2. Do not load from a CDN.

```
Display    Switzer  600   clamp(3rem, 9vw, 9rem)    tracking -0.035em, line-height 0.92
Statement  Switzer  500   clamp(2rem, 5vw, 4.5rem)  tracking -0.025em, line-height 1.05
Section    Switzer  500   1.75rem                   tracking -0.02em
Body       Switzer  400   1.0625rem                 line-height 1.55, max 68ch
Small      Switzer  400   0.8125rem                 line-height 1.4
```

Hierarchy comes from scale and weight only. Do not introduce a second family, a monospace for labels, or all-caps eyebrows above headings — those are the standard tells of a generated page and this site is meant to be the agency's own portfolio piece.

Sentence case everywhere, including buttons and nav.

### Grid and space

12 columns, 88rem max width, 1.5rem gutters (1rem on mobile).

Borrow one device from the Brikken reference: **let the column lines be faintly visible** on the paper sections, at `--hairline` and about 40% opacity. On a site about structure, showing the structure is information rather than decoration — and it costs nothing.

Vertical rhythm on an 8px base. Section padding `clamp(6rem, 12vh, 11rem)` top and bottom. Sections are large and few; do not subdivide them into cards.

### Motion

**One orchestrated moment: the hero graph.** Everything else is still.

No fade-and-slide-up on section entry, no hover lift on cards, no scroll-triggered counters. Those are the generic default and, on a web studio's own site, they read as filler.

Motion that answers a click — a case opening, a process step expanding — is fine, and should show what changed.

Respect `prefers-reduced-motion`: the graph freezes to a static composed state, no animation.

## Hero — the chord graph

The memorable element. Build it properly; it carries the whole site.

```
┌──────────────────────────────────────────────────┐
│  korda                            work  services │
│                                   support contact│
│                                                  │
│            · ·  ·   ·  ·                         │
│        ·  ·  ╲   ·    ╱ ·  ·                     │
│      ·   ·    ╲     ╱     ·  ·                   │
│     ·  ·        ╲ ╱         ·  ·                 │
│      ·   ·      ╱ ╲       ·   ·                  │
│        ·  ·   ╱     ╲   ·  ·                     │
│            · ·  ·  ·  ·                          │
│                                                  │
│  [headline, 5–9 words]                           │
│  [one line of subhead]                           │
│  [ Message on Telegram ]                         │
└──────────────────────────────────────────────────┘
```

**Structure.** 60–90 points distributed on a ring on a black field, white, varying slightly in size and opacity so the ring reads as depth rather than a printed circle. Points drift slowly and continuously — a few pixels of travel, no orbiting, no pulsing.

**Chords.** Thin white lines, 15–25% opacity, connecting non-adjacent points. Draw and dissolve slowly and at random, a handful at a time. Never all at once: the ring should feel like it is thinking, not loading.

**The interaction.** Some points are live. On hover (desktop) a live point grows, gains a `?` mark, and a chord fires to the opposite side of the ring where a short line of text appears — a client question taken from the **For** column in `korda-site`:

- *"Getting visits but not customers?"* → Services anchor, CRO card
- *"Tools that don't talk to each other?"* → Services anchor, Integration card
- *"No template covers what you need?"* → Services anchor, Custom software card
- *"Starting from nothing?"* → Services anchor, Web development card

Clicking a live point scrolls to the matching card and briefly marks it.

This is why the graph earns its cost: it is not an ambient background, it is the services menu in the shape of the company's name. A visitor who only plays with the ring has already learned what you do.

**Touch.** Hover does not exist on phones. On touch, live points are always slightly larger and already carry the `?`; the first tap reveals the question, the second navigates. Do not ship a hover-only mechanic — most of the traffic is mobile.

**Performance.** This fights the Lighthouse 90+ requirement, so build it defensively:

- Canvas 2D, not SVG with 90 animated nodes, not a physics library
- Cap at 60fps, pause with `IntersectionObserver` when scrolled out of view
- Fewer points and no drifting under 768px — static ring with live points only
- Server-render a static composed frame so the hero paints before JS runs
- Total JS for the graph under 15kb gzipped; if it grows past that, simplify the effect rather than the budget

**Headline placement.** Text sits below the graph, left aligned, not overlaid on it. Overlaying makes both harder to read and is the reflex choice.

## Work — layered previews

From the Martine Rose reference: show the actual site, large, in device frames over a full-bleed still from the project. The point is that the work is real and live, not a screenshot in a rounded card.

```
┌──────────────────────────────────────────────────┐
│ starimmo.lu                          Luxembourg  │
│                                                  │
│   ┌────┐   ┌──────────────────────────────┐      │
│   │    │   │                              │      │
│   │ 📱 │   │        desktop view          │      │
│   │    │   │                              │      │
│   └────┘   └──────────────────────────────┘      │
│         [full-bleed project imagery behind]      │
│                                                  │
│ Real estate site in Luxembourg. The agent adds   │
│ and edits listings without a developer.          │
│                          Visit site ↗            │
└──────────────────────────────────────────────────┘
```

**Rules.**

- One case per full-width band on ink. Not a grid of equal tiles — equal tiles say all five are interchangeable.
- Phone frame overlaps the desktop frame, offset, slightly rotated (1–2°, not more). The overlap is what makes it read as a composition rather than a spec sheet.
- Background is imagery from the project itself, desaturated and dimmed so the frames stay dominant. If a project has no usable imagery, use a large flat `--graphite` field rather than stock.
- Project name top left, client location or niche top right, both small.
- Description below the frames, two or three lines, from `korda-site`.
- `Visit site` opens in a new tab.

**Order:** starimmo, noxvonmort, documentebi, lux-core, santinno.

**Mobile:** frames stack, phone above desktop, no rotation, no overlap. The composition does not survive at 390px and forcing it produces a mess.

**Homepage** shows three of these bands, then a link to `/work`.

## Services — the For line first

Four cards on paper. The **For** line is the headline; the service name is the caption underneath it.

```
┌─────────────────────────────┐
│                             │
│  Sites that get visits      │   ← Statement scale
│  but not customers          │
│                             │
│  CRO & optimization         │   ← Small, --dim
│                             │
│  Audits · speed · UX fixes  │   ← Small
│  testing · analytics        │
│                             │
└─────────────────────────────┘
```

Two columns on desktop, one on mobile. Cards are separated by hairline rules rather than borders, shadows or radii — they are rows in a system, not floating objects.

Each card is a scroll target from the hero graph. When arrived at from a graph point, the card's rule thickens briefly. No colour change.

## Process — the DD.NYC list

Numbered `01`–`05`, active step in `--graphite` at Display scale, the rest in `--dim`. On the right: what happens in that step, how long it takes, what the client has to do.

Numbering is justified here and only here, because a process genuinely is a sequence. Do not number the services or the cases.

```
┌──────────────────────────────────────────────────┐
│ How we work                                      │
│                                                  │
│ 01  Brief                    3–5 days            │
│                                                  │
│ 02  Prototype                Wireframes of every │
│                              page before any     │
│ 03  Design                   design work starts. │
│                              You approve the     │
│ 04  Build                    structure first.    │
│                                                  │
│ 05  Launch                   [ what you do ]     │
└──────────────────────────────────────────────────┘
```

Desktop: hovering a step swaps the right panel and darkens that step. Mobile: accordion, one open at a time, tap to switch.

Include the duration on every step. A process list without timings answers nothing — the anxiety it exists to remove is about time.

## About — one statement

From the Brikken reference: a single oversized sentence saying what Korda is, then a small grid of short, checkable claims underneath.

```
┌──────────────────────────────────────────────────┐
│ ABOUT                                            │
│   Korda builds websites, stores and internal      │
│   tools for businesses that need them to work,    │
│   not just exist.                                 │
│                                                  │
│   · You talk to the person building it   · ...   │
│   · You edit your own content            · ...   │
└──────────────────────────────────────────────────┘
```

The statement runs at Display scale across 9–10 columns and wraps naturally over three or four lines. Let it be big; this is the second-boldest moment on the page and the only other place where type is the event.

**The claims underneath must be verifiable.** Brikken's work because they name something checkable — no junior handoff, three senior partners. Korda has no team section, so the claims should come from how the work actually runs: direct contact with whoever builds it, clients editing their own content, fixed scope before design starts. Anything a competitor could copy onto their own site unchanged is not a claim, it is filler.

Four claims maximum, two columns, Small scale, `--dim` for the ones not being read is optional but effective.

## Support — the only numbers

Three plans on paper. Middle plan visually dominant: larger, on `--ink` while the other two stay on paper. That inversion does the selling without a "most popular" badge, which is the default and is transparent to anyone who has bought software.

Under the table, two quiet lines: what is not included, and the 50/50 payment terms.

## Footer

Returns to `--ink`. Logo, navigation, Telegram and WhatsApp large, everything else — email, socials, legal entity, Privacy, Terms — small and in `--dim`.

Only the two messenger links get normal-size treatment. Instagram, X and LinkedIn are proof of existence, not routes to a conversation, and sizing them equally dilutes the one action that matters.

## Quality floor

Not optional, and not worth announcing on the page:

- Responsive to 360px without horizontal scroll
- Visible keyboard focus on every interactive element, including graph points
- `prefers-reduced-motion` respected by the graph and the process panel
- Contrast: `--dim` on `--paper` passes AA at Body scale; if it does not in the final palette, darken `--dim` rather than enlarging the text
- Graph points are reachable by keyboard and announced as links, with a visually hidden text list of the same four questions for screen readers

## What to avoid

These are the defaults that would make this site look like every other agency site, and several of them will be the first instinct:

- A signature accent colour dropped onto buttons and links
- Cards with a radius and a soft grey shadow, repeated down the page
- Fade-and-slide-up on every section as it enters the viewport
- All-caps tracked-out labels above headings
- An arrow appended to link text
- A second typeface for "display"
- Stock photography or abstract 3D renders used as filler where content is thin
- Stretching thin content across ten screens with animation between them

The content here is genuinely limited — no team, no testimonials, five cases. A short, dense, confident site reads better than a long one with gaps papered over.
