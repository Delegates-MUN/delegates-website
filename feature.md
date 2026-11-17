# DELEGATES Platform — Features & Capabilities Guide (feature.md)

This document provides a comprehensive inventory of all features, interactive capabilities, architectural elements, and verified user flows across the **DELEGATES** web platform.

---

## 1. Global Navigation & Masthead System

### 1.1 Editorial Masthead Banner (`EditorialMastheadBar.tsx`)
- **Real-World Editorial Dateline:** Displays publication volume, issue identification, and founding year:  
  `GLOBAL DISPATCH DESK | EST. 2026 · VOL. I · ISSUE Nº 01 | “Rooted in Principles. United by Dialogue.”`
- **Instant Search Trigger:** Integrated `Ctrl K` search pill directly opens the Global Search Palette.
- **Persistent Visibility:** Anchored at the absolute top of the viewport on all pages.

### 1.2 Sticky Responsive Navigation Bar (`Navbar.tsx`)
- **Smart Scroll Detection:** Transitions smoothly from transparent ivory to a glassmorphic blurred backdrop (`bg-[#F4F0E8]/95 backdrop-blur-md`) upon scrolling past 15px.
- **Brand Monogram Integration:** Houses the official, unredesigned DELEGATES monogram in high-resolution vector sizing.
- **Route Tracking:** Active page indicator with clean 1.5px baseline highlight.
- **Quick-Access Action Buttons:**
  - `Search (⌘K)` icon trigger.
  - `Submit Call` quick-intake trigger (launches verified opportunity submission modal).
  - `Join Community` primary CTA button.
- **Mobile Off-Canvas Drawer:**
  - Accessible hamburger button with animated toggle state (`Menu` / `X`).
  - Full mobile navigation links with background highlighting.
  - Dedicated mobile action buttons for both submitting calls and joining the community.

### 1.3 Universal Search Palette (`GlobalSearchModal.tsx`)
- **Keyboard Shortcut Trigger:** Listens globally for `Ctrl + K` (Windows/Linux) and `Cmd + K` (macOS).
- **Multi-Index Query Engine:** Simultaneously queries verified platform resources:
  1. *Academy Curriculum Guides:* By title, category, and summary across all 6 published guides.
  2. *Navigation Pages:* Instant shortcuts to Home, Community Hub, Academy Library, Media Desk, About, and Contact.
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

### 2.3 Bespoke Monochrome Photography Suite
- **Archival International Affairs Aesthetic:** 12 custom high-contrast, black-and-white editorial photographs supporting the content and institutional atmosphere:
  - `multilateralism-hall.jpg`: Assembly chamber with directional lighting.
  - `sovereignty-treaties.jpg`: Archival still life of treaties, legal codices, and wax seals.
  - `dais-moderation.jpg`: Committee dais and microphones.
  - `youth-diplomacy.jpg`: Candid photojournalism of young delegates in caucus deliberation.
  - `pillar-community.jpg`: Delegates conversing in a neoclassical colonnade (Homepage Pillar 01).
  - `pillar-academy.jpg`: Diplomatic law library with floor-to-ceiling treaty book stacks (Homepage Pillar 02).
  - `pillar-media.jpg`: Press desk with broadsheet proofs, typewriter, and typographic plates (Homepage Pillar 03).
  - `about-architecture.jpg`: Grand monumental neoclassical architecture (About Page Hero).
  - `community-assembly.jpg`: Plenary hall during vote with delegates holding placards (Community Page Hero).
  - `academy-amphitheater.jpg`: Symmetrical tiered classical lecture amphitheater (Academy Page Hero).
  - `media-reading-room.jpg`: Open geopolitical atlas and legal folios under a green banker's lamp (Media Page Hero).
  - `secretariat-desk.jpg`: Diplomatic desk with leather portfolio, fountain pen, and embossed seal (Contact Page Hero).
- **Consistent Image Post-Processing:** Standardized with `grayscale contrast-110 opacity-90 group-hover:scale-102 group-hover:opacity-100` transitions.

### 2.4 Swiss Typographic & Cartographic Accents (`SwissAccents.tsx`)
- **`SwissCornerMarks`:** Reusable corner hairline registration brackets (`+` and `L` ticks) evoking high-end Swiss print layout standards. Implemented using resilient 1.5px inline styling to guarantee pixel-perfect rendering across all browsers.
- **`CartographicStamp`:** Aesthetic typographic coordinates and location markers without claiming physical foreign offices or UN affiliation.
- **`ArchivalBadge`:** Volume and classification tags in monospace styling.
- **Micro-Interaction Animation Suite (`globals.css`):** Hardware-accelerated keyframe animations (`fadeIn`, `fadeInUp`, `scaleIn`) with `cubic-bezier(0.16, 1, 0.3, 1)` easing.

---

## 3. Pillar 01 — Community & Opportunities Hub

### 3.1 Truthful Community Architecture (`/community`)
- **A Community Built Around Dialogue:** Honest introduction explaining that DELEGATES brings together MUN enthusiasts, aspiring diplomats, and individuals interested in international affairs for learning and meaningful conversations.
- **Verified WhatsApp Community Forum:** Direct fast-track link to the official WhatsApp community group (`https://chat.whatsapp.com/DgERPMtTm4f0ONCfet1ebv`) open to all participants; specialized cohorts selected subsequently.
- **Role-Segmented Audience Tracks:** Clear guidance for First-time Participants, Regular Delegates, Executive Board Members, Organizers, and Students of International Affairs.

### 3.2 Opportunities Circuit Directory & Approved Empty State (`FeaturedOpportunities.tsx`)
- **Zero Dummy Data:** All placeholder and fabricated events completely removed.
- **Polished Empty State:**
  - Heading: *“No Opportunities Listed Yet”*
  - Description: *“We're working on bringing relevant MUN conferences, initiatives, and opportunities to the DELEGATES community. Check back soon for updates.”*
- **Opportunity Submission Intake (`/api/submit-opportunity`, `SubmitOpportunityModal.tsx`):**
  - Full server-side validation, anti-spam checking, and reference ID generation (`DLGTS-OPP-XXXXXX`) for organizers wishing to submit legitimate conferences.
  - Fallback email direct to `delegates@zohomail.in`.

---

## 4. Pillar 02 — Academy Pedagogical Library

### 4.1 Curriculum Overview & Reading Desk (`/academy`)
- **Authentic Pedagogical Mission:**
  - Heading: *“Learn. Understand. Engage.”*
  - Description: *“The DELEGATES Academy aims to make Model United Nations knowledge more accessible through learning resources, practical guidance, and insights into diplomacy and international affairs.”*
- **Clean Reading Drawer Modal:** In-depth slide-out reader with customizable text sizing (`sm`, `base`, `lg`), core takeaways, and persistent bookmarking via localStorage.
- **6 Published Foundational Guides (`src/data/academy.ts`):**
  1. *Rules of Procedure:* From Roll Call to Voting Bloc.
  2. *Position Papers:* The Architecture of a Compelling Position Paper.
  3. *Country Research Methodology:* Beyond the Surface.
  4. *Unmoderated Caucus Negotiation:* Bloc Leadership Without Dominance.
  5. *Executive Board Perspective:* Behind the Dais & Scoring Criteria.
  6. *Resolution Drafting:* Anatomy of Preambulatory & Operative Clauses.
- **Empty State Support:** Dynamically displays *“New learning resources are in the works. Stay connected for upcoming guides and educational content.”* when filters produce zero results.

---

## 5. Pillar 03 — Media & Editorial Space

### 5.1 Editorial Desk Showcase (`/media`)
- **Truthful Editorial Mission:**
  - Heading: *“Perspectives Worth Exploring”*
  - Description: *“DELEGATES is building an editorial space for thoughtful perspectives on diplomacy, geopolitics, international relations, and Model United Nations.”*
- **Polished Editorial Empty State:**
  - Notice: *“Our editorial desk is preparing its first collection of stories. Stay connected for updates.”*
  - Zero fabricated authors, dummy interviews, or synthetic reading metrics.
  - Direct call-to-action connecting visitors to the WhatsApp community and Academy resources.

---

## 6. Official Engagement, Contact & Compliance

### 6.1 Verified Communication Channels
- **Official Secretariat Mail:** `delegates@zohomail.in`
- **Official LinkedIn Company Page:** `https://www.linkedin.com/company/delegates-mun/`
- **Official Instagram Page:** `https://www.instagram.com/delegates_mun/`
- **Official WhatsApp Community:** `https://chat.whatsapp.com/DgERPMtTm4f0ONCfet1ebv`

### 6.2 Contact Desk & Correspondence Engine (`/contact`, `/api/contact`)
- **Real Server-Side Validation:** Validates full name, valid email address, enquiry classification, minimum 10-character message length, and communication consent.
- **Reference ID Logging:** Generates formal reference code (`DLGTS-XXXXXX`) upon successful dispatch.
- **Robust Error Handling:** Displays meaningful user feedback, loading state animations, and server failure warnings.

### 6.3 Public Architecture & No Member Accounts
- **Public-Facing Website with Forms:** No login, member sign-up, or profile database. All visitors explore the complete website freely without authentication barriers.
