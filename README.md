# DELEGATES — Official Web Platform

> **Official Tagline:** *“Rooted in Principles. United by Dialogue.”*  
> **Brand Identity:** **D**iplomacy/Democracy · **L**aw & Order · **G**eopolitics · **T**ruth/Trust · **S**overeignty  
> **Core Pillars:** Community · Academy · Media

---

## Overview

**DELEGATES** is an editorial-style web platform designed for Model United Nations (MUN) delegates, aspiring diplomats, youth in international relations, and Executive Board members. Built with Next.js (App Router), TypeScript, and Tailwind CSS, the platform bridges intellectual curiosity, diplomatic statesmanship, and youth leadership.

---

## Architecture & Routes

| Route | Page | Purpose & Contents |
|---|---|---|
| `/` | **Home** | Editorial Hero with 30s cinematography film preview, Core Thesis introduction, Three distinct visual pillar experiences, interactive DLGTS philosophy matrix, opportunities preview, featured learning & media magazine grid, final community CTA, and institutional footer. |
| `/community` | **Community** | Audience segmentation (beginners to EB chairs), active initiatives (working groups, peer review, chairs' colloquium), verified MUN opportunities directory with category & keyword search, and interactive FAQ accordion. |
| `/academy` | **Academy** | Open-access pedagogical library for MUN education. Features category pills (Rules of Procedure, Country Dossier Research, Position Papers, Resolution Drafting, EB Preparation), difficulty tags, and an in-browser full guide reader. |
| `/media` | **Media** | Digital international affairs publication. Includes lead feature dispatch, thematic desks (Geopolitics, International Law, MUN Insights, Youth Perspectives), and complete editorial reader modals with sources and citations. |
| `/about` | **About** | Official brand manifesto, Vision, Mission, Brand Promise, in-depth DLGTS philosophy charter, organizational mandate, and brand seal integrity standards. |
| `/contact` | **Contact** | Official correspondence portal with categorized enquiry types, client- and server-side validation (`/api/contact`), reference ID confirmation, and data privacy disclosures. |

---

## Design System & Tokens

### Typography Pairing
- **Primary Sans-Serif:** `Montserrat` (Google Fonts via `next/font/google`) — Navigation, labels, UI controls, metadata, and body reading text.
- **Editorial Serif:** `Lora` (Google Fonts via `next/font/google`) — Hero statements, article headlines, quotes, and philosophical charters.

### Color Palette
- **Warm Ivory (Primary Background):** `#F4F0E8`
- **Soft Ivory (Secondary Background):** `#EAE4D9`
- **Near Black (Dark Surfaces & Dominant Text):** `#171717` (with `#202020` for softer text)
- **Secondary Text:** `#68645D`
- **Borders & Dividers:** `#D8D0C4`
- **Dark-Section Text:** `#C9C2B7`
- **Pure White:** `#FFFFFF`

### Official Brand Assets
All assets are located in `/public/assets/`:
- `delegates-monogram-dark.png` — Approved high-resolution monogram (dark mark on transparent background for ivory surfaces).
- `delegates-monogram-light.png` — Approved pixel-perfect monogram (white mark on transparent background for charcoal dark surfaces).
- `delegates-film.mp4` — Official 30-second DELEGATES brand cinematography video.

---

## Running Locally

### Prerequisites
- Node.js `v18.18+` or `v20+` (tested on Node `v24.11.0`)
- npm `v9+` (tested on npm `v11.6.1`)

### Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
npm run build
npm run start
```

---

## Backend & Form Handling

The contact form is wired to a server-side route handler at `/api/contact`:
- Validates full name, email format, enquiry category, minimum message length, and affirmative consent.
- Issues a structured JSON response with a unique tracking reference (e.g. `DLGTS-XXXXXX`).
- Ready for production email transport (e.g. Resend, SendGrid, or AWS SES via `process.env.CONTACT_EMAIL_WEBHOOK`).

---

## Quality & Accessibility Standards
- **WCAG 2.2 AA Contrast Compliance:** Tested across warm ivory, soft ivory, and near-black surfaces.
- **Mobile Responsive:** Fluid breakpoints from 360px mobile viewports through wide desktop monitors with dedicated hamburger slide-out navigation.
- **Zero Hallucination Standard:** No fabricated testimonials, artificial member counts, or fictitious achievements.
