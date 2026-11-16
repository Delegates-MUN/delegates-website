# DELEGATES Platform — Features & Capabilities Guide (feature.md)

This document provides a comprehensive inventory of all features, interactive tools, architectural options, and user capabilities implemented across the **DELEGATES** web platform.

---

## 1. Global Navigation & Masthead System

### 1.1 Editorial Masthead Banner (`EditorialMastheadBar.tsx`)
- **Real-World Editorial Dateline:** Displays publication volume, issue identification, and founding year:  
  `GLOBAL DISPATCH DESK | EST. 2026 · VOL. I · ISSUE Nº 01 | “Rooted in Principles. United by Dialogue.”`
- **Instant Search Trigger:** Integrated `Ctrl K` search pill directly opens the Global Search Palette.
- **Persistent Visibility:** Anchored at the absolute top of the viewport on all pages.

### 1.2 Sticky Responsive Navigation Bar (`Navbar.tsx`)
- **Smart Scroll Detection:** Seamlessly transitions from transparent ivory to a glassmorphic blurred backdrop (`bg-[#F4F0E8]/95 backdrop-blur-md`) upon scrolling past 15px.
- **Brand Monogram Integration:** Houses the official, unredesigned DELEGATES monogram in high-resolution vector sizing.
- **Route Tracking:** Active page indicator with clean 1.5px baseline highlight.
- **Quick-Access Action Buttons:**
  - `Search (⌘K)` icon trigger.
  - `Submit Call` quick-intake trigger (launches Call for Papers modal).
  - `Join Community` primary CTA button.
- **Mobile Off-Canvas Drawer:**
  - Accessible hamburger button with animated toggle state (`Menu` / `X`).
  - Full mobile navigation links with background highlighting.
  - Dedicated mobile action buttons for both submitting calls and joining the community.

### 1.3 Universal Search Palette (`GlobalSearchModal.tsx`)
- **Keyboard Shortcut Trigger:** Listens globally for `Ctrl + K` (Windows/Linux) and `Cmd + K` (macOS).
- **Multi-Index Query Engine:** Simultaneously queries four discrete data stores:
  1. *Academy Curriculum Guides:* By title, category, and summary.
  2. *Media Publications & Dispatches:* By title, category, and excerpt.
  3. *Verified Circuit Opportunities:* By conference title, host institution, and category.
  4. *Diplomatic Drafting & RoP Tools:* Direct shortcuts to Clause Builder, RoP Matrix, and Dossier Planner.
- **Keyboard Accessible & Escape Dismissal:** Esc closes the modal; typing immediately filters results without page reloads.

---

## 2. Brand Identity & Multimedia Immersion

### 2.1 Approved Brand Monogram Management (`Logo.tsx`)
- **Strict Brand Protection:** Complies with brand instructions—no AI recreation, distortion, or alteration.
- **Dual Surface Variants:**
  - `dark` variant (`delegates-monogram-dark.png`) for light ivory and cream surfaces.
  - `light` variant (`delegates-monogram-light.png`) for near-black charcoal surfaces.
- **Size Options:** Pre-configured scale variants (`sm`, `md`, `lg`) ensuring crisp rendering across responsive breakpoints.

### 2.2 Cinematic Brand Video Player (`VideoCinematicModal.tsx`)
- **Dual-State Presentation:**
  - *Inline Muted Loop:* Embedded on the Homepage Hero with subtle play/pause controls.
  - *Full Cinema Mode:* Launches a darkened cinematic modal (`bg-black/95 backdrop-blur-md`) for `delegates-film.mp4`.
- **Sound Management:** Sound toggle with browser-safe autoplay fallback and unmuting capability.
- **Interactive Scrubber:** Scrub through the 30-second 4K reel with live timestamp tracking (`0:00 / 0:30`).
- **Fullscreen Mode:** One-click native browser fullscreen toggle.
- **Watermark & Caption:** Features official monogram branding and the tagline *“Rooted in Principles. United by Dialogue.”*

---

## 3. Pillar 01 — Community & Opportunities Hub

### 3.1 Inclusivity Standards & Audience Tracks (`/community`)
- **Role-Segmented Content:** Clear guidelines and pathways for:
  - *Beginner Delegates:* Foundation guides, procedural basics, and low-stakes practice simulations.
  - *Experienced Delegates:* Advanced geopolitical debate, multilateral strategy, and resolution clinics.
  - *Executive Board Chairs:* Impartial committee moderation, study guide drafting, and delegate evaluation.

### 3.2 Verified Opportunities Circuit Directory (`FeaturedOpportunities.tsx`)
- **Real-Time Category Filtering:** Filter opportunities by:
  - `All`
  - `MUN Conference`
  - `Writing Competition`
  - `EB Application`
- **Dynamic Text Search:** Instant client-side search across conference names, host institutions, and agendas.
- **Standardized Opportunity Cards:**
  - Category pill badge and format indicator (`In-Person` vs `Virtual / Online`).
  - Title and detailed scope summary.
  - Organizing body, application deadline, and geographic location.
  - Outbound link with `ArrowUpRight` indicator connecting directly to official portals.
- **Anti-Predatory Standard Notice:** Clear editorial declaration verifying non-exploitative, legitimate initiatives.

### 3.3 "Submit Opportunity / Call for Papers" Modal Engine (`SubmitOpportunityModal.tsx`)
- **Secretariat Intake Portal:** Allows external MUN secretariats and youth researchers to submit events.
- **Comprehensive Form Fields:**
  - Opportunity / Conference Title.
  - Category selection dropdown.
  - Organizing Body / Academic Institution.
  - Format (In-Person, Online, Hybrid).
  - Location / Host Platform.
  - Official Application / Information URL (with URL pattern validation).
  - Official Verification Contact Email (with RFC-compliant validation).
  - Short Scope & Committee Agenda Description.
  - Mandatory Authenticity Confirmation Checkbox.
- **Data Persistence:** Submissions stored locally in `delegates_submitted_opportunities` with timestamps for verification review.
- **Confirmation State:** Shows an institutional review dispatch with summary metrics and expected 24–48 hour verification timeline.

### 3.4 Community FAQ Accordion
- Expandable interactive accordion addressing:
  - Membership dues (100% free; no paywalls).
  - Submission processes for writing and circuit listings.
  - Ethical standards, impartiality, and zero political party affiliations.

---

## 4. Pillar 02 — Academy & Interactive Diplomatic Lab

### 4.1 Tabbed Educational Architecture (`/academy`)
- **Main View Switcher:**
  - `Curriculum Guides`: The open-access library of pedagogical modules.
  - `Interactive Diplomatic Lab`: Hands-on drafting and procedural tools.
- **URL Parameter Support:** Direct deep linking via `?tab=tools` or `?tab=tools&tool=rop`.

### 4.2 Interactive Diplomatic Lab Tools

#### A. UN Resolution Clause Builder (`ClauseBuilder.tsx`)
- **UN Organ Jurisdiction Selector:** Filter verbs for `General Assembly (GA)`, `Security Council (UNSC)`, `ECOSOC`, and `International Court of Justice (ICJ)`.
- **Clause Type Selector:** Switch between **Preambulatory** (context/jurisprudence) and **Operative** (action/mandate).
- **Substantive Verbs Catalog:** Built-in dictionary containing dozens of official verbs (`Affirming`, `Condemning`, `Reaffirming`, `Decides`, `Authorizes`, `Demands`, etc.).
- **Jurisprudential Context:** Displays the legal weight and charter grounding of the selected verb.
- **Drafting Pad:** Textarea for adding rationale and operational specifics.
- **Live Preview & Clipboard Copy:** Formats clauses according to standard United Nations drafting rules and copies with one click.

#### B. Parliamentary RoP Decision Matrix (`RoPMatrix.tsx`)
- **Scenario Navigator:** Browse common procedural dilemmas:
  - *Speaker exceeded allotted time*
  - *Delegate misstated an official country policy or treaty*
  - *Delegates wish to amend a submitted draft resolution*
  - *Unmoderated caucus is descending into chaos*
  - *Procedural deadlock between two opposing draft resolutions*
- **Instant Solution Guide:** Explains the exact Point or Motion required to resolve the issue.
- **Procedural Rules Checklist:**
  - Can it interrupt a speaker? (`Yes` / `No`).
  - Does it require a second? (`Yes` / `No`).
  - Required voting threshold: `Chair's Discretion`, `Simple Majority (>50%)`, `Two-Thirds Majority (66.7%)`, or `Consensus`.

#### C. Country Dossier & Redline Worksheet (`DossierWorksheet.tsx`)
- **Interactive Policy Workbook:** Step-by-step inputs for:
  - Country Name & Assigned Committee.
  - Core National Geopolitical Posture.
  - Non-Negotiable Redlines (agendas the state cannot concede).
  - Strategic Allies & Natural Voting Blocs.
  - Treaty Obligations & Relevant UN Resolutions.
  - Multilateral Concessions & Bargaining Chips.
- **Markdown Dossier Export:** One-click download button generates a structured `.md` policy dossier formatted for printing or offline study during conferences.

### 4.3 Curriculum Guides Library
- **Categorization:** Guides sorted into 6 pedagogical pillars:
  - *Rules of Procedure*
  - *Position Papers*
  - *Research & Country Preparation*
  - *Negotiation & Diplomacy*
  - *Executive Board Preparation*
  - *Resolution Drafting*
- **Difficulty Badges:** `Beginner`, `Intermediate`, `Advanced`.
- **Reading Controls:**
  - *Text Size Switcher:* Adjust body text between Small (`sm`), Standard (`base`), and Large (`lg`).
  - *Client-Side Bookmark Engine:* Save guides with instant status feedback, persisted to `localStorage`.
- **Quick-Read Drawer & Full Dedicated Routes:**
  - Instant reading modal for in-context study.
  - Dedicated link to permanent, shareable slug pages (`/academy/[slug]`).

### 4.4 Dedicated Guide Pages (`/academy/[slug]`)
- **Static Generation:** Prerendered with `generateStaticParams()` for sub-millisecond load times.
- **Editorial Polish:**
  - Classic literary drop-caps on introductory paragraphs.
  - Key takeaways callout box.
  - Related modules in the same category.
  - Return breadcrumbs.

---

## 5. Pillar 03 — Media & Publication Directorate

### 5.1 Editorial Dispatches & Desks (`/media`)
- **Lead Story Spotlight:** Full-width editorial card highlighting the current flagship analysis with cover photography, reading time, and author credentials.
- **Thematic Desks:**
  - *Geopolitics*
  - *Diplomacy & International Relations*
  - *MUN Insights*
  - *Interviews & Perspectives*
- **Search & Category Filtering:** Instant multi-category filter and search bar.

### 5.2 Article Reader Experience
- **Quick Preview Modal:** In-page modal with section titles, italicized serif pull-quotes, and legal citations.
- **Dedicated Shareable Routes (`/media/[slug]`):**
  - Permanent URL structure for sharing and bookmarking.
  - Full executive summary callout.
  - First-paragraph drop-caps.
  - Formal jurisprudential citations and archives index.
  - Related stories grid.

### 5.3 The Diplomatic Dispatch (`NewsletterBar.tsx`)
- **Fortnightly Briefing Subscription:**
  - Editorial invitation for the bi-weekly geopolitical digest.
  - Email format validation with descriptive error feedback.
  - Confirmation card with subscriber reset capability.
  - Local storage persistence for verified subscribers (`delegates_dispatch_subscribers`).
  - Strict privacy notice: Zero spam, peer-reviewed, unsubscribe anytime.

---

## 6. Institutional Architecture & Governance

### 6.1 About Directorate (`/about`)
- **Narrative Section:** Explains the transition from traditional MUN circuits to an enduring intellectual community.
- **Foundational Charter:** Explicit declaration of the DELEGATES Vision, Mission, and Brand Promise.
- **The DLGTS Philosophical Breakdown:**
  - Detailed subsections explaining *Diplomacy & Democracy*, *Law & Order*, *Geopolitics*, *Truth & Trust*, and *Sovereignty*.
- **Institutional Governance Principles:** Guarantees of pedagogical independence, transparency, and non-monetization of youth education.

### 6.2 Official Desk & Inquiries (`/contact`)
- **Multi-Department Contact Intake:**
  - Full Name, Email, Inquiry Subject, Department Route, and Detailed Message.
  - Client-side error validation.
  - Local queue storage for submitted inquiries (`delegates_contact_submissions`).
- **Direct Desk Directory:**
  - Academic Directorate: `academy@delegates.org`
  - Media & Submissions: `media@delegates.org`
  - Secretariat Relations: `secretariat@delegates.org`
- **Location & Office Markers:** Geneva, New Delhi, and Global Virtual Desk.

### 6.3 "Join the Community" Engine (`JoinCommunityModal.tsx`)
- **Platform Intake Modal:** Accessible from any page via global CustomEvent dispatch.
- **Structured Questions:**
  - Experience Level (First-time delegate to EB Chair).
  - Primary Platform Interest.
  - Aspirations / Personal Statement.
  - Code of Conduct & Principles Consent Checkbox.
- **Instant Feedback:** Animated processing indicator followed by an institutional welcome screen.

---

## 7. Performance, Security & Technical Specifications

| Feature / Standard | Technical Implementation | Benefit |
| :--- | :--- | :--- |
| **Framework** | Next.js 16 (App Router) + React 19 | Cutting-edge streaming, Partial Prerendering (PPR), and Server Components. |
| **Styling** | Tailwind CSS v4 | Zero-runtime CSS with modern `@theme` variables and responsive utilities. |
| **Type Safety** | 100% Strict TypeScript 5 | Zero build-time type errors across all routes and components. |
| **Prerender Optimization** | Static Site Generation (SSG) | All 22 static pages prerendered; zero dynamic date mismatch errors. |
| **Icons** | Lucide React | High-performance, lightweight SVG icons. |
| **Images** | Next.js `Image` with explicit `sizes` | Optimized responsive delivery, lazy loading, and prevention of layout shifts. |
| **Local Storage** | Client-side persistence queues | Bookmarks, community applications, and opportunity submissions persist across reloads. |
| **Accessibility** | Focus-visible, ARIA roles, ESC keys | Keyboard-friendly navigation for all modals and interactive worksheets. |
