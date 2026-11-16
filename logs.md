# DELEGATES Platform — Engineering & Implementation Changelog (logs.md)

This log documents every architectural decision, bug fix, feature integration, design refinement, and deployment step performed from the beginning of the **DELEGATES** project.

---

## 1. Project Inception & Workspace Inspection
- **Objective:** Design and build the official, editorial-grade web platform for **DELEGATES** (“Rooted in Principles. United by Dialogue.”).
- **Initial Workspace State:**
  - Active workspace: `c:\Users\LENOVO\Desktop\DLGTS`
  - Existing official assets preserved:
    - `public/assets/delegates-monogram-dark.png` (dark monogram mark for light ivory surfaces)
    - `public/assets/delegates-monogram-light.png` (light monogram mark for dark charcoal surfaces)
    - `public/assets/delegates-film.mp4` (official 30-second brand film)
- **Brand Standards Established:**
  - Official name: **DELEGATES** (always uppercase in brand contexts).
  - Tagline: *“Rooted in Principles. United by Dialogue.”*
  - Philosophy: **DLGTS** (Diplomacy/Democracy, Law & Order, Geopolitics, Truth/Trust, Sovereignty).
  - Three Pillars: Community, Academy, Media.
  - Strict preservation of the official monogram (no distortion, recreation, or AI generation).
  - Editorial palette: Warm Ivory (`#F4F0E8`), Soft Ivory (`#EAE4D9`), Near Black (`#171717`), Borders (`#D8D0C4`), Charcoal Text (`#202020`), Muted Text (`#68645D`).
  - Typography: **Montserrat** for interface, navigation, buttons, and metadata; **Lora** for editorial serif headlines, pull-quotes, and mission statements.

---

## 2. Environment Setup & Scaffolding
- **Initial Challenge:** Running `create-next-app` directly in `DLGTS` failed because npm package naming restrictions forbid capital letters.
- **Solution:** Scaffolding initialized in a temporary clean directory `dlgts-temp` with:
  - Next.js 16 (Turbopack, App Router)
  - React 19
  - TypeScript 5
  - Tailwind CSS v4
  - Lucide React icon library
  - ESLint
- **Migration:** All generated configuration and source trees were cleanly moved to the root repository at `c:\Users\LENOVO\Desktop\DLGTS`, with `package.json` package name set to `delegates-official`.
- **Asset Integrity:** Preserved original brand assets into `public/assets/`.

---

## 3. Foundation Architecture & Core Design System
- **Fonts & Metadata (`src/app/layout.tsx`):**
  - Integrated `next/font/google` for Montserrat and Lora with CSS variables (`--font-montserrat`, `--font-lora`).
  - Implemented OpenGraph, Twitter card tags, icons, and `metadataBase: new URL("https://delegates.org")`.
- **Tailwind CSS v4 & Styling (`src/app/globals.css`):**
  - Configured `@theme` custom palette tokens: `--color-ivory`, `--color-ivory-soft`, `--color-near-black`, `--color-border-subtle`, `--color-text-main`, `--color-text-muted`.
  - Added utility classes for `.font-editorial`, `.font-interface`, `.border-editorial`.
  - Enforced focus-visible rings for keyboard and accessibility navigation.
- **Core UI Primitives:**
  - `src/components/ui/Logo.tsx`: Responsive, high-DPI official monogram component supporting `dark` and `light` variants with correct aspect ratio and clear space.
  - `src/components/ui/JoinCommunityModal.tsx`: Accessible dialog with ESC key dismiss, backdrop click handling, structured questionnaire (experience level, primary interest, statement), client validation, and local storage submission queue.

---

## 4. Multi-Page Website Architecture Implementation

### A. Homepage (`/` — `src/app/page.tsx`)
- **Editorial Hero Section (`src/components/home/EditorialHero.tsx`):**
  - Asymmetric two-column editorial composition.
  - Eyebrow: *An MUN & Diplomacy Community*.
  - Headline: *Rooted in Principles. United by Dialogue.*
  - Dual CTAs: *Explore DELEGATES* & *Join the Community*.
  - Embedded official brand film with inline controls.
  - Institutional markers for Pillars, DLGTS Philosophy, and Open Public Library.
- **Introduction Section:** *“More than a conference. A culture of dialogue.”*
- **The Three Pillars (`src/components/home/PillarsSection.tsx`):**
  - 01 Community, 02 Academy, 03 Media presented through distinct editorial cards with unique typography, metadata, and CTAs.
- **DLGTS Philosophy Matrix (`src/components/home/PhilosophySection.tsx`):**
  - Full-width deep charcoal section (`#171717`) detailing D, L, G, T, S with diplomatic definitions and principles.
- **Featured Opportunities Hub (`src/components/home/FeaturedOpportunities.tsx`):**
  - Real-time directory of verified MUN conferences, writing competitions, and EB applications.
  - Filter pills for categories.
  - Verified non-predatory standards banner.
- **Closing Manifesto:** Restatement of the brand promise and call to dialogue.

### B. Community Hub (`/community` — `src/app/community/page.tsx`)
- Inclusivity standards breakdown for Beginners, Regular Competitors, and Executive Board Chairs.
- Discussion & Collaboration tracks (Geopolitical Debate, Crisis Rooms, Resolution Clinics).
- Searchable & filterable Opportunities Directory with dynamic query matching and category tags.
- Verified institutional data sourced from `src/data/opportunities.ts`.
- Interactive FAQ Accordion (`src/data/faq.ts`) with expandable answers on membership, submissions, and code of conduct.

### C. Academy Library (`/academy` — `src/app/academy/page.tsx`)
- Open curriculum directory covering:
  - Rules of Procedure (RoP)
  - Authoritative Position Papers
  - Research & Country Preparation
  - Multilateral Negotiation & Resolution Drafting
  - Executive Board Preparation
- Filterable by topic category and difficulty tier (Beginner, Intermediate, Advanced).
- Bookmarking engine allowing users to save guides locally (`localStorage`).
- In-card reading preview with adjustable typography sizing (`Small`, `Standard`, `Large`).

### D. Media Directorate (`/media` — `src/app/media/page.tsx`)
- Lead feature article presentation: *“The Future of Multilateralism in a Fragmented Order”*.
- Thematic publication desks: Geopolitics, International Jurisprudence, MUN Analysis, Diplomatic Perspectives.
- Full article reading drawer with section headings, serif pull-quotes, and legal citations.

### E. About Directorate (`/about` — `src/app/about/page.tsx`)
- Origin story, Vision, Mission, and Brand Promise.
- In-depth philosophical treatise on DLGTS principles.
- Editorial Governance & Independence charter: zero corporate lobbying, zero paywalled curriculum, zero pay-to-list directory fees.

### F. Official Desk & Inquiries (`/contact` — `src/app/contact/page.tsx`)
- Structured intake form with client-side validation for general inquiries, media desks, academic submissions, and partnership requests.
- Local storage persistence for message queuing.
- Contact cards for Academic Directorate, Media Editorial Desk, and Secretariat Relations.

### G. Shared Navigation & Footer (`Navbar.tsx` & `Footer.tsx`)
- Sticky responsive navbar with logo, route highlights, and quick mobile drawer.
- Comprehensive editorial footer featuring brand values, three pillar directories, platform sitemap, social links, and copyright statement.

---

## 5. Prerender Optimization & Bug Fixes

### A. Next.js 16 Dynamic Date Prerender Error
- **Issue:** During initial production build, `/about` generated an error due to `new Date().getFullYear()` evaluated unpredictably during static prerendering in `Footer.tsx`.
- **Fix:** Replaced dynamic date evaluation with a static constant `2026`, ensuring absolute determinism across all static generation workers.

### B. Next.js Image Optimization Attributes
- **Issue:** Build warnings flagged missing `sizes` attributes on `fill` images.
- **Fix:** Added explicit, responsive `sizes` strings across all instances of Next.js `Image` (e.g. `sizes="(max-width: 1024px) 100vw, 40vw"`).

### C. Sandbox Isolation for Network Commands
- **Issue:** Standard terminal sandbox blocked network requests for `gh auth status` and `git push`.
- **Fix:** Adhered strictly to execution rules: attempted sandbox first; elevated only the specific network operations (`gh`, `git push`) using `BypassSandbox: true`.

---

## 6. GitHub Organization Setup & Push
- Authenticated via GitHub CLI under user `Keshav1605`.
- Created official private repository in the organization: `https://github.com/Delegates-MUN/delegates-website`.
- Pushed the initial verified codebase to `origin/main`.

---

## 7. Major Platform Enhancements Suite

### A. Interactive Diplomatic Tools & Labs
- **Data Catalog (`src/data/tools.ts`):**
  - Exhaustive dictionary of Preambulatory and Operative verbs with UN jurisprudence, legal weight, and UN organ applicability (General Assembly, Security Council, ECOSOC, ICJ).
  - Parliamentary procedure decision tree: points, motions, interruption rules, and voting majorities.
  - Country redline and geopolitical dossier questionnaire schema.
- **Resolution Clause Builder (`src/components/academy/ClauseBuilder.tsx`):**
  - Select UN Organ $\rightarrow$ Select Preambulatory vs. Operative clause $\rightarrow$ Choose verified verb $\rightarrow$ Input substantive rationale $\rightarrow$ Live preview and 1-click clipboard copy.
- **RoP Decision Matrix (`src/components/academy/RoPMatrix.tsx`):**
  - Searchable scenario navigator for delegate crises (e.g., *Speaker exceeded time*, *Procedural deadlock*, *Amendment to draft resolution*).
  - Breakdown of motion precedence, voting thresholds, and debate interruption allowances.
- **Country Dossier & Redline Worksheet (`src/components/academy/DossierWorksheet.tsx`):**
  - Step-by-step delegate preparation lab: Core geopolitical stance, non-negotiable redlines, allied voting blocs, and multilateral strategy.
  - Generates downloadable Markdown briefing dossier (`.md`).
- **Academy Integration:** Added tabbed navigation (`Curriculum Guides` vs. `Interactive Diplomatic Lab`) in `src/app/academy/page.tsx` with URL parameter support (`?tab=tools`).

### B. Dedicated Dynamic Routes
- **Academy Dynamic Route (`src/app/academy/[slug]/page.tsx`):**
  - Server-rendered static pages using `generateStaticParams()` and `generateMetadata()`.
  - Classic literary drop-caps, takeaway callouts, cross-guide navigation, and return breadcrumbs.
- **Media Dynamic Route (`src/app/media/[slug]/page.tsx`):**
  - High-impact editorial page with executive summaries, serif pull-quotes, and legal archive citations.
  - Dynamic route metadata and static generation for instant load times.

### C. Universal Search Palette (`src/components/ui/GlobalSearchModal.tsx`)
- Triggered globally by `Ctrl+K` / `⌘K` or via the top masthead/navbar buttons.
- Real-time multi-index querying across:
  - Academy Curriculum Guides
  - Media & Geopolitical Dispatches
  - Verified Circuit Opportunities
  - Diplomatic Drafting & RoP Tools
- Keyboard accessible navigation with instantaneous route redirection.

### D. Community Opportunities Intake (`src/components/ui/SubmitOpportunityModal.tsx`)
- Standardized intake modal for conference secretariats and youth researchers.
- Collects: Title, Organizing Institution, Category, Location/Format, Deadline, Official URL, Verification Email, and Authenticity Attestation.
- Persisted to local storage queue and integrated into Navbar, Featured Opportunities, Community Page, and Footer.

### E. The Diplomatic Dispatch (`src/components/ui/NewsletterBar.tsx`)
- Fortnightly intelligence briefing subscription section.
- Client-side email validation, submission simulation, local persistence, and dignified editorial confirmation.
- Mounted globally in `src/app/layout.tsx` above the footer.

### F. Multimedia Immersion & Top Masthead
- **Cinema Mode Player (`src/components/ui/VideoCinematicModal.tsx`):**
  - Fullscreen dark backdrop for `delegates-film.mp4`.
  - Unmuted audio toggle, playback scrubber, time counter, and fullscreen controls.
  - Triggerable directly from the Homepage Editorial Hero banner.
- **Editorial Masthead (`src/components/ui/EditorialMastheadBar.tsx`):**
  - Fixed top banner reading: `GLOBAL DISPATCH DESK | EST. 2026 · VOL. I · ISSUE Nº 01 | “Rooted in Principles. United by Dialogue.”` with inline `Ctrl K` search trigger.

---

## 8. Final Build Verification & Deployment
- Reverted conflicting post-CSS experimental selectors in `src/app/globals.css` to maintain 100% Turbopack compatibility.
- Executed `npm run build`:
  - **Result:** Code 0.
  - **Prerender:** All 22 static pages generated successfully (including dynamic slug routes `/academy/[slug]` and `/media/[slug]`).
- Committed all changes: `feat: add interactive diplomatic tools, dedicated slug routes, global search palette, and editorial features` (`commit 487eb21`).
- Pushed clean repository state to `https://github.com/Delegates-MUN/delegates-website` (`origin/main`).
