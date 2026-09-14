---
version: alpha
name: "Coolify"
website: "https://coolify.io"
description: >-
  An open-source self-hostable Vercel and Heroku alternative whose marketing page sits on a near-black canvas with a 60px Inter weight-700 headline ("Self-hosting with superpowers.") in white, anchored by a pair of squat charcoal pill toggles for Cloud and Self-hosted instead of a single bright CTA. Below the fold the page becomes a tiered sponsor wall — Huge, Big, Small — that fills the entire mid-section with monochrome OSS logos before the Features grid lands as a quiet 3-column inventory of plain-text checklists. Inter does every job at 400 and 700 only; the cobalt-violet brand color #6b16ed and the buttercup accent #fcd34d are kept off the hero entirely and surface only on the sponsor strip and a single "View Features" pill.

seo:
  title: "Coolify Design System for React — cobalt-violet on near-black, Inter, 14 components"
  metaDescription: "Coolify's marketing system runs the dev-infra dark canvas at #101010, a 60px Inter hero headline in white, charcoal pill toggles instead of a CTA, and a three-tier sponsor wall that does the entire mid-page. Tokens for React, Next.js, and AI coding tools."
  highlights:
    - "Sponsor-wall as proof — Huge, Big, and Small sponsor tiers replace the testimonial carousel and customer-logo strip, filling 60% of the mid-page in monochrome OSS marks"
    - "No-CTA hero — the only above-fold action is a Cloud vs Self-hosted pill toggle in charcoal, not the cobalt-violet brand color held in reserve below"
    - "Inter at 400 and 700 only — no medium weight, no display family, the 60px headline shares the same face as 14px body"
    - "Cobalt-violet kept off the hero — #6b16ed is wired as --color-coollabs and --color-primary but appears just once above the fold, on the View Features pill"
    - "Three-tier dark surface ladder — canvas #101010, base-200 #181818, base-300 #202020, lifting cards by lightness only with no shadow tier"
  tags:
    - "Web Infrastructure & Hosting"
    - "Backend, Database & DevOps"
  lastUpdated: "2026-05-18"
  author:
    name: "Dov Azencot"
    url: "https://x.com/dovazencot"
  opening: |
    Coolify's marketing page does something most dev-infra brands would consider risky: there is no primary CTA above the fold. The hero centers a 60px Inter weight-700 headline ("Self-hosting with superpowers.") in white on a near-black floor, a 14px grey sub-paragraph, a row of micro stat badges, and then — instead of a single bright "Get Started" pill — a 2-up segmented toggle in matte charcoal lets the visitor pick between Cloud and Self-hosted. The cobalt-violet brand voltage that the CSS calls coollabs purple sits dormant. The only place the page concedes a chromatic pill above the fold is a small buttercup "View Features" jump-link tucked at the right edge of the toggle row.

    The DESIGN.md file captures the system as a token spec for React tooling. Inside: 13 color tokens drawn from the 12 raw hexes the page renders, organized into a three-tier dark surface ladder (canvas #101010, base-200 #181818, base-300 #242424), an Inter-only typography stack at weights 400 and 700, a 4-step radius scale centered on 4.8px, an 8px-based spacing system, and 14 component definitions covering the charcoal segmented toggle, the cobalt-violet feature pill, the dark sponsor card, the dark feature checklist row, and the standard dev-infra top nav. Cobalt-violet #6b16ed and buttercup yellow #fcd34d are the only chromatic tokens; everything else is the dark surface ladder, the white ink, and the neutral-400 grey body text.

    Feed this file to an AI coding tool and it reproduces the specific moves: near-black canvas at #101010 rather than the slightly-warmer Linear / Vercel near-black, dark charcoal segmented toggle instead of a bright CTA, Inter at 400/700 only with no medium weight, and a multi-tier sponsor wall doing the social-proof work that customer logos and testimonials would normally carry. Borrow it if your product is itself open-source and the visitor needs to choose between hosted and self-hosted before they can read further; the deferred-CTA move would feel evasive in a closed-source SaaS context.
  related:
    - href: "/design"
      title: "Browse all design systems"
      description: "The full directory of DESIGN.md files on shadcn.io, with live mockups for each."
    - href: "https://coolify.io"
      title: "Coolify — official site"
      description: "Coolify's public marketing site — the source of truth for the live tokens captured in this file."
    - href: "https://github.com/google-labs-code/design.md"
      title: "The DESIGN.md specification"
      description: "Google Labs' open spec for machine-readable design system files — the format this page is built on."
  questions:
    - id: "primary-color"
      title: "What is Coolify's primary brand color?"
      answer: "Coolify's brand voltage is cobalt-violet, hex #6b16ed, wired into the page CSS as --color-coollabs and --color-primary. It is held almost completely off the hero — the only above-fold instance is a small buttercup yellow accent on the View Features pill, while the cobalt-violet itself surfaces below the fold as a single sponsor-card background fill and as a 5-occurrence border on the Big Sponsors tier separators. A secondary lavender variant #a78bfa appears four times inside gradient stops on the Features cards. The buttercup yellow #fcd34d is wired as --color-warning and --color-accent and runs 13 times across the page."
    - id: "typography"
      title: "What typeface does Coolify use, and what should I use as a substitute?"
      answer: "Coolify runs Inter across every typographic tier — display, heading, body, button, navigation, and sponsor labels share the same family. Display tops out at 60px in weight 700 with -1.5px tracking for the hero headline; section h2 sits at 36px / 700; body copy runs at 14px and 16px in weight 400; nav links at 16px / 400; small chrome labels at 12px / 400. Weight 500 is essentially absent — the system jumps from regular to bold with no semibold middle. Inter is itself open-source, so no substitute is required; if you need a substitute the closest matches are the Geist family from Vercel or system-ui at the same weights."
    - id: "canvas-color"
      title: "Why does Coolify use #101010 instead of pure black?"
      answer: "The page floor is #101010, wired as --color-base-100. It is slightly off pure-black — about 6 percent lightness — to give the layered dark surfaces a chance to read as elevated against it. Two further surface tones build the ladder: #181818 (--color-base-200, --color-coolblack, --color-neutral-900) at roughly 9 percent lightness for cards, and #242424 (--color-base-300, --color-neutral) at 14 percent lightness for the segmented toggle and pressed states. The 6-9-14 lightness ladder is the entire elevation system; there is no shadow tier. A pure-black canvas would collapse this ladder to a single tone."
    - id: "sponsor-wall"
      title: "Why is the mid-page mostly sponsor logos?"
      answer: "Coolify is an open-source project, so the social-proof currency is sponsors rather than enterprise customers. The page reflects that by replacing the conventional customer-logo strip and testimonial carousel with a three-tier sponsor wall — Huge Sponsors (4 logos at full-color tiles), Big Sponsors (20 monochrome marks in a 5-column grid), and Small Sponsors (a long horizontal row of icon-only marks). Each tier uses the dark base-300 surface as the card background, with white text and white-on-dark logos. The hierarchy mirrors the actual sponsorship-tier ladder the project sells, and the strip occupies roughly 60 percent of the captured page height."
    - id: "use-in-project"
      title: "Can I use this DESIGN.md to build my own open-source marketing site?"
      answer: "Yes — the file is designed to be fed into Claude, Cursor, or any AI tool that reads structured design tokens. The agent will reproduce Coolify's specific moves: a 6-9-14 percent dark surface ladder instead of a single canvas tone, Inter at 400/700 only with no medium weight, a charcoal segmented toggle in place of a bright primary CTA, and the three-tier sponsor wall pattern. Every hex, font, radius, and spacing value is a quoted scalar you can paste straight into Tailwind config or CSS variables. The one move worth borrowing only if you actually have sponsors: the multi-tier sponsor wall is load-bearing here because the project monetizes through tier-based sponsorship; in a closed-source SaaS the same layout would feel hollow."

mockups:
  - "marketing-hero"
  - "pricing-table"

colors:
  primary: "#6b16ed"
  primary-soft: "#a78bfa"
  accent: "#fcd34d"
  ink: "#ffffff"
  ink-muted: "#a3a3a3"
  ink-soft: "#737373"
  canvas: "#101010"
  surface-1: "#181818"
  surface-2: "#242424"
  surface-3: "#323232"
  hairline: "#e5e7eb"
  success: "#16a34a"
  danger: "#dc2626"
  info: "#2563eb"

typography:
  display-xl:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 60px
    fontWeight: 700
    lineHeight: 60px
    letterSpacing: "-1.5px"
  display-md:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 36px
    fontWeight: 700
    lineHeight: 40px
    letterSpacing: 0
  heading-md:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 20px
    fontWeight: 700
    lineHeight: 28px
    letterSpacing: "-0.5px"
  heading-sm:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 18px
    fontWeight: 600
    lineHeight: 29.25px
    letterSpacing: "1.44px"
  body-lg:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 20px
    fontWeight: 400
    lineHeight: 28px
    letterSpacing: 0
  body-md:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 26px
    letterSpacing: 0
  body-sm:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 24px
    letterSpacing: 0
  caption:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
    letterSpacing: 0
  caption-strong:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 12px
    fontWeight: 500
    lineHeight: 16px
    letterSpacing: 0
  button-md:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 700
    lineHeight: 24px
    letterSpacing: 0
  nav-link:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 26px
    letterSpacing: 0
  mono-md:
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
    fontSize: 16px
    fontWeight: 700
    lineHeight: 24px
    letterSpacing: 0

rounded:
  none: "0px"
  sm: "4px"
  md: "4.8px"
  lg: "8px"
  full: "9999px"

spacing:
  xs: "4px"
  sm: "8px"
  md: "12px"
  base: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "36px"
  3xl: "96px"

components:
  button-primary:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.sm}"
    padding: "16px 8px"
    height: "56px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.sm}"
    padding: "16px 8px"
    height: "56px"
    borderColor: "{colors.surface-2}"
  button-feature-pill:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.canvas}"
    typography: "{typography.caption-strong}"
    rounded: "{rounded.full}"
    padding: "8px 12px"
    height: "32px"
  segmented-toggle:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.sm}"
    padding: "8px 12px"
    height: "40px"
  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    rounded: "{rounded.none}"
    padding: "12px 24px"
    height: "64px"
  nav-link:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    padding: "0px 6.4px"
    height: "28px"
  cloud-pill:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.ink}"
    typography: "{typography.caption-strong}"
    rounded: "{rounded.full}"
    padding: "0px 6.4px"
    height: "24px"
  hero-heading:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    padding: "0px 16px"
  section-heading:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.display-md}"
  small-caps-label:
    backgroundColor: "transparent"
    textColor: "{colors.ink-muted}"
    typography: "{typography.heading-sm}"
  body-paragraph:
    backgroundColor: "transparent"
    textColor: "{colors.ink-muted}"
    typography: "{typography.body-sm}"
  card:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "16px"
  sponsor-tile:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    padding: "36px 32px"
  text-input:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: "8px 12px"
    height: "40px"
    borderColor: "{colors.surface-3}"
---

## Overview

Coolify's marketing page makes a move most dev-infra brands would consider risky. **Deferred-CTA hero.** Where Vercel, Netlify, and Railway each open with a single saturated CTA pill front-and-center, Coolify presents a 2-up segmented toggle in matte charcoal — Cloud or Self-hosted — and forces the visitor to choose which version of the product they want before any further chrome competes for attention. The cobalt-violet brand voltage (`{colors.primary}` — #6b16ed), wired into the CSS as `--color-coollabs` and `--color-primary`, sits dormant above the fold; the only chromatic pill in the hero is a small buttercup yellow "View Features" jump-link at the right edge of the toggle row.

Below the fold the page makes a second category-defying choice: instead of a customer-logo carousel and a quote rotator, it runs a **three-tier sponsor wall** — Huge Sponsors (4 colored cards), Big Sponsors (20 monochrome marks in a 5-column grid), Small Sponsors (a long row of icon-only marks). The strip fills roughly 60 percent of the captured page height. The hierarchy mirrors the actual sponsorship-tier ladder the open-source project sells, so the visual structure is also the pricing structure. Where most OSS marketing sites paper over their funding model and present like a closed SaaS, Coolify lets the funding model BE the social proof.

The dark canvas is `{colors.canvas}` — #101010, not pure black. A three-tier surface ladder lifts cards by lightness alone — base-200 `{colors.surface-1}` (#181818), base-300 `{colors.surface-2}` (#242424), and toggle-track `{colors.surface-3}` (#323232) — with no shadow tier doing any of the elevation work.

**Key Characteristics:**
- Near-black canvas at `{colors.canvas}` (#101010) sits between Vercel's pure black and Linear's slightly-blue near-black; a deliberately neutral floor for the surface ladder.
- Cobalt-violet brand voltage (`{colors.primary}` — #6b16ed) is held almost completely off the hero — total page frequency just 6, with the only above-fold appearance on a single accent.
- Buttercup yellow `{colors.accent}` (#fcd34d) is the more visible accent above the fold, used for the View Features jump-link pill.
- Three-tier surface ladder — #101010, #181818, #242424 — lightness-only elevation, zero shadow tokens declared.
- Inter weight 400 and 700 only; no medium weight in the system. The 60px display headline and the 14px body text share the same face.
- 4.8px is the dominant radius (82 occurrences) — a soft 5-ish-pixel rounding that sits between sharp 4px dev-tools and the 8-12px softer-card systems.
- Three-tier sponsor wall (Huge / Big / Small) replaces the conventional customer-logo strip and testimonial carousel.
- Segmented charcoal toggle in the hero substitutes for the standard bright primary CTA; the brand color only surfaces in a single secondary pill.

## Colors

### Brand

- **Cobalt Violet** (`{colors.primary}` — #6b16ed): frequency 6. Used as bg (1), border (5). Wired as `--color-coollabs` and `--color-primary`. The declared brand voltage but rendered with extreme restraint — held off the hero entirely, surfacing only as a single sponsor-card fill below the fold and as five hairline borders separating sponsor tiers.
- **Cobalt Violet Soft** (`{colors.primary-soft}` — #a78bfa): frequency 6. Used as text (1), border (1), gradient (4). The lavender variant — appears almost exclusively inside gradient stops on the Features cards.
- **Buttercup Accent** (`{colors.accent}` — #fcd34d): frequency 13. Used as text (6), border (7). Wired as `--color-warning` and `--color-accent`. The most-visible accent above the fold — fills the View Features jump-link pill and marks small inline highlights inside the Features grid.

### Surface

- **Canvas** (`{colors.canvas}` — #101010): frequency 2. The page floor, wired as `--color-base-100`. Six-percent lightness — deliberately off pure-black so the surface ladder reads.
- **Surface-1** (`{colors.surface-1}` — #181818): wired as `--color-base-200`, `--color-coolblack`, `--color-neutral-900`. The default card and panel tone — about nine-percent lightness.
- **Surface-2** (`{colors.surface-2}` — #242424): frequency 4. Used as bg (2), border (2). Wired as `--color-base-300`, `--color-neutral`, `--color-coolgray-300`, `--color-coolgray-400`. Lifts the segmented toggle, sponsor tiles, and pressed-state surfaces above the surface-1 floor.
- **Surface-3** (`{colors.surface-3}` — #323232): wired as `--color-coolgray-500`. The lightest dark-tier value — used for hairline contrast inside the surface-2 surfaces, e.g., toggle-track dividers and input outlines.

### Text

- **Ink** (`{colors.ink}` — #ffffff): frequency 905. Used as text (475), border (430). The dominant text and border color — pure white wired as `--color-base-content`, `--color-tw-ring-offset-color`, `--color-white`. Every hero headline, nav link, sponsor card label, and toggle label uses this single tone.
- **Ink Muted** (`{colors.ink-muted}` — #a3a3a3): frequency 94. Used as text (47), border (47). Wired as `--color-gray-400`, `--color-neutral-400`. The grey body-copy tone — sub-paragraph under the hero, the section dek beneath the Features heading, and small caption rows.
- **Ink Soft** (`{colors.ink-soft}` — #737373): wired as `--color-neutral-500`, `--color-gray-500`. A second grey tier reserved for tertiary metadata.

### Hairline

- **Hairline** (`{colors.hairline}` — #e5e7eb): frequency 4. Used as text (2), border (2). Wired as `--color-neutral-200`. A near-white hairline that appears on light-mode surfaces below the fold — primarily inside the OG-style preview cards.

### Semantic

- **Success Green** (`{colors.success}` — #16a34a): wired as `--color-success`. Reserved for success notices and uptime status indicators inside the product UI; not rendered on the captured marketing surface.
- **Danger Red** (`{colors.danger}` — #dc2626): wired as `--color-error`. Reserved for error states inside the product UI; not rendered on the captured marketing surface.
- **Info Blue** (`{colors.info}` — #2563eb): wired as `--color-info`. Reserved for informational notices inside the product UI; not rendered on the captured marketing surface.

## Typography

### Font Family

The system runs **Inter** across every tier — display, heading, body, button, nav, and sponsor labels share the same family. Fallbacks walk `ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"`. There is no separate display family. **Inter Mono** (system mono stack) appears twice inside small code-style annotations only.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 60px | 700 | 60px | -1.5px | Hero h1 ("Self-hosting with superpowers.") |
| `{typography.display-md}` | 36px | 700 | 40px | 0 | Features section h2 |
| `{typography.heading-md}` | 20px | 700 | 28px | -0.5px | Sub-section titles |
| `{typography.heading-sm}` | 18px | 600 | 29.25px | 1.44px | Uppercase small-caps section labels ("HUGE SPONSORS") |
| `{typography.body-lg}` | 20px | 400 | 28px | 0 | Sponsor card descriptions, feature-list leads |
| `{typography.body-md}` | 16px | 400 | 26px | 0 | Default body running text |
| `{typography.body-sm}` | 14px | 400 | 24px | 0 | Hero sub-paragraph, feature-cell body |
| `{typography.caption}` | 12px | 400 | 16px | 0 | Footer metadata, tiny chrome labels |
| `{typography.caption-strong}` | 12px | 500 | 16px | 0 | Cloud pill label |
| `{typography.button-md}` | 16px | 700 | 24px | 0 | Primary toggle and secondary button labels |
| `{typography.nav-link}` | 16px | 400 | 26px | 0 | Top-nav link labels |
| `{typography.mono-md}` | 16px | 700 | 24px | 0 | Code-style command-line annotations only |

### Principles

Weight 500 is essentially absent — the system jumps from 400 to 700 with no semibold middle. The 18px small-caps heading is the lone exception, sitting at weight 600 with 1.44px tracking to mark section dividers ("HUGE SPONSORS", "BIG SPONSORS", "SMALL SPONSORS"). The 60px hero headline at weight 700 with -1.5px tracking is the loudest moment, deliberately heavy because there is no chromatic CTA pill to compete with it for visual weight.

### Note on Font Substitutes

Inter is itself open-source — no substitute is required. The page declares Inter with the standard `system-ui, sans-serif` fallback chain. If you need a slightly tighter alternative for the 60px display tier, **Geist** (Vercel's open-source sans) has comparable cap height. For the mono tier, the system stack (`ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas`) is already what Coolify ships.

## Layout

### Spacing System

- **Base unit:** 8px — the dominant gap value when normalized, with 4px and 12px filling the smaller increments.
- **Tokens:** `{spacing.xs}` 4px · `{spacing.sm}` 8px · `{spacing.md}` 12px · `{spacing.base}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.2xl}` 36px · `{spacing.3xl}` 96px.
- **Section padding (vertical):** ~96px between the hero and the sponsor wall (`{spacing.3xl}`), tightening to ~36px (`{spacing.2xl}`) between sponsor tiers and ~16px between Features cells.
- **Card internal padding:** `{spacing.2xl}` 36px / 32px on the Huge Sponsors tiles; `{spacing.base}` 16px on the Features cells.
- **Top-nav padding:** `{spacing.md}` 12px vertical, ~12px horizontal per link.

### Grid & Container

- **Max content width:** ~1152px on the hero, ~896px on the body sections (the section h2 sits at 896px width).
- **Hero:** centered content column with 0px left/right padding except the 16px headline-pad.
- **Sponsor wall:** Huge tier is 4-column tiles; Big tier is 5-column grid; Small tier is a single dense horizontal row of icon-only marks.
- **Features:** 3-column equal-width grid of checklist cells.

### Rhythm

The page alternates between **single statement** and **dense logo wall** — the hero is a single sentence with a single toggle, then the sponsor wall packs hundreds of marks into the mid-page, then the Features section returns to dense 3-column text. There is no atmospheric transition between the bands; every section terminates on the same `{colors.canvas}` floor.

## Elevation

The system has essentially **no shadow tier**. Elevation comes from the three-tier surface ladder alone:

- **Flat (no shadow):** hero, top nav, footer, every editorial band — 99% of surfaces.
- **Surface-1 lift:** `{colors.surface-1}` (#181818) on `{colors.canvas}` (#101010) — about a 3-point lightness gap, reads as a subtle card lift.
- **Surface-2 lift:** `{colors.surface-2}` (#242424) on `{colors.surface-1}` — another 5-point gap, used for the segmented toggle and the Big Sponsor tiles.
- **No shadow tokens declared.** The captured CSS has zero `--shadow-*` custom properties; black-on-black drop shadows would not read against this canvas anyway.

## Shapes

The radius scale is **soft 5-ish** centered on 4.8px:

- `{rounded.none}` 0px — section dividers, the Features cells.
- `{rounded.sm}` 4px — 12 occurrences. Small UI chrome, the bottom row of toggles.
- `{rounded.md}` 4.8px — 82 occurrences, the dominant radius. Cards, sponsor tiles, the toggle pills, every default surface.
- `{rounded.lg}` 8px — used on larger Huge Sponsor cards.
- `{rounded.full}` 9999px — fully-rounded pills for the Cloud accent badge, the View Features jump-link, and circular icons.

There is no 12px or 16px middle tier. The system is binary: soft-5 everywhere except the two pill surfaces. The 4.8px value is unusual — most dev-infra brands sit at sharp 4px (Vercel, Linear) or softer 8px (Railway, Render); Coolify lands deliberately in between.

## Components

**`button-primary`** — The dominant above-fold action surface is not a saturated pill but a charcoal toggle. `{colors.surface-2}` fill, white text, `{rounded.sm}` 4px radius, 16x8 padding, 56px height. Used for the Cloud and Self-hosted toggle pair in the hero.

**`button-secondary`** — Same dimensions as `button-primary` but with a transparent fill and a `{colors.surface-2}` hairline border. Used for the off-state in the segmented toggle.

**`button-feature-pill`** — The single chromatic pill above the fold. `{colors.accent}` buttercup fill, near-black text, `{rounded.full}` pill radius, 8x12 padding, 32px height. The View Features jump-link.

**`segmented-toggle`** — `{colors.surface-2}` track fill, white text, `{rounded.sm}` 4px radius, 8x12 padding, 40px height. The Cloud vs Self-hosted picker.

**`top-nav`** — `{colors.canvas}` fill, white text, no border, 64px height, 12x24 padding. Coolify wordmark flush left, product links (Philosophy / Contributors / Pricing / Services / Docs / Merch / Sponsor Us / Changelog / Community / Blog) centered-to-right, "Go Cloud" cobalt pill flush right.

**`nav-link`** — Transparent background, white text in `{typography.nav-link}` (16px / 400), 0x6.4 padding, 28px height. No hover background visible.

**`cloud-pill`** — `{colors.primary}` cobalt-violet fill, white text, `{rounded.full}` pill radius, 0x6.4 padding, 24px height. The single above-fold appearance of the brand voltage — sits at the right edge of the top-nav as the "Go Cloud" call-to-action.

**`hero-heading`** — White text on the transparent hero, `{typography.display-xl}` (60px / 700, -1.5px tracking). 16px horizontal padding because the canvas extends edge-to-edge.

**`section-heading`** — White text, `{typography.display-md}` (36px / 700). Used for the Features section anchor.

**`small-caps-label`** — `{colors.ink-muted}` grey text at `{typography.heading-sm}` (18px / 600, 1.44px tracking, uppercase). Marks the three sponsor-tier section dividers ("HUGE SPONSORS", "BIG SPONSORS", "SMALL SPONSORS").

**`body-paragraph`** — `{colors.ink-muted}` grey text at `{typography.body-sm}` (14px / 400). The hero sub-paragraph and feature-cell body.

**`card`** — `{colors.surface-1}` fill, white text, `{rounded.md}` 4.8px radius, 16px internal padding. The default content card on the dark canvas — used for OG-style preview previews and the Features cells.

**`sponsor-tile`** — `{colors.surface-2}` fill, white text, `{rounded.md}` 4.8px radius, 36x32 padding. Holds the Huge Sponsor cards (MVPS.net, PrivateAlps, ScreenshotOne, SerpApi) and the Big Sponsor 5-column marks.

**`text-input`** — `{colors.surface-1}` fill, white text, 1px `{colors.surface-3}` hairline border, `{rounded.sm}` 4px radius, 8x12 padding, 40px height.

## Do's and Don'ts

**Do** treat the cobalt-violet brand voltage (`{colors.primary}` — #6b16ed) as a single-instance accent reserved for the "Go Cloud" pill in the top-nav. With only six total occurrences on the captured page, multiplying the cobalt into multiple primary surfaces would dilute the only saturated brand signal in the system.

**Do** use the three-tier surface ladder (#101010 → #181818 → #242424) to do elevation work. With zero shadow tokens declared, the only way cards read as lifted is through the 3-5-point lightness gaps between the three surface tones; flattening to a single dark tone collapses the entire visual hierarchy.

**Do** keep weight 500 out of the system. The page jumps from 400 to 700 with no semibold middle (the lone 600 instance is reserved for uppercase small-caps section labels). Adding a 500 tier softens the headline-to-body contrast that gives the hero its weight.

**Do** lead the social-proof section with the sponsor-tier ladder (Huge / Big / Small) rather than a customer-logo strip — only if your project actually monetizes through sponsorship. The structure works because the sponsor tiers correspond to real funding tiers.

**Don't** swap the canvas from `{colors.canvas}` (#101010) to pure black. The 6-percent lightness on the page floor is what gives the surface-1 (#181818) and surface-2 (#242424) cards their 3-5-point lift; collapsing to true black would compress the surface ladder to invisible.

**Don't** introduce a 12px or 16px middle radius tier. The system is binary — soft 4.8px on every default surface plus a full pill on the two accent buttons. Adding a middle value muddies the contrast between body chrome and the two pill surfaces.

**Don't** add a saturated CTA pill to the hero. The deferred-CTA segmented toggle is the move that defines this system; replacing it with a single bright "Get Started" pill would erase the Cloud vs Self-hosted choice the page is built around.

**Don't** apply the buttercup accent (`{colors.accent}` — #fcd34d) to body text or as a full-bleed background fill. It is wired as `--color-warning` and reserved for accent pills and small inline highlights — 13 occurrences total — and reads as a status color outside that scope.

## Known Gaps

- **Hover and focus states:** the captured marketing surface only renders resting states; the full hover / press / focus matrix for the segmented toggle and the Cloud pill lives inside the product UI and is not documented here.
- **Form input error states:** the `{component.text-input}` carries only the resting state; error and validation styling lives inside the Coolify dashboard.
- **Light mode:** the captured marketing surface is dark-only. The product dashboard exposes a light variant but the marketing chrome is not designed for it.
- **Motion:** the hero copy and the sponsor wall both animate on scroll-into-view, but the spec captures end-state values only. Easing, duration, and stagger live in the live Coolify runtime.
- **Product surfaces:** this DESIGN.md captures the marketing site only. The Coolify dashboard (`app.coolify.io`) carries a much richer token system — service-tile colors, deployment-status badges, terminal panel — that is not represented here.
- **Sponsor-tier accents:** the semantic `{colors.success}` green, `{colors.danger}` red, and `{colors.info}` blue are declared in the CSS but never render on the captured marketing surface; they belong to the in-product notice and alert system.
- **Lavender gradient stops:** the `{colors.primary-soft}` lavender appears only inside gradient stops on the Features cards; its individual hex usage is captured but the gradient direction and the cobalt-blue / magenta gradient companions are not.
