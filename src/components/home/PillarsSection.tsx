import Link from "next/link";
import Image from "next/image";
import {
  Users,
  BookOpen,
  Newspaper,
  ArrowRight,
  MessageSquare,
  Compass,
  FileText,
  Sparkles,
} from "lucide-react";
import { SwissCornerMarks, CartographicStamp, ArchivalBadge } from "@/components/ui/SwissAccents";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function PillarsSection() {
  return (
    <section className="py-20 md:py-28 bg-[#F4F0E8] border-b border-[#D8D0C4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section 3: Introduction & Core Thesis — Unified 2-Column Editorial Header */}
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end pb-12 border-b border-[#D8D0C4]">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2">
                  <span className="w-6 h-[1px] bg-[#171717]" />
                  <span className="font-interface text-[11px] uppercase tracking-[0.2em] font-semibold text-[#68645D]">
                    The Core Thesis
                  </span>
                </div>
                <CartographicStamp
                  location="GENÈVE // DIPLOMATIC HUB"
                  coordinates="46°13′36″N 6°08′26″E"
                  className="hidden sm:inline-flex"
                />
              </div>

              <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-[#171717] font-normal leading-[1.12]">
                More than a conference.
                <br />
                <span className="italic">A culture of dialogue.</span>
              </h2>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <p className="font-interface text-sm sm:text-base text-[#68645D] leading-relaxed">
                Model United Nations conferences often begin and end within a single weekend. DELEGATES was conceived to sustain intellectual momentum throughout the year—creating an enduring ecosystem where first-time delegates, veteran competitors, and Executive Board members collaborate across three dedicated pillars.
              </p>
              <div className="flex items-center gap-4 text-xs font-interface uppercase tracking-widest text-[#171717] font-semibold pt-1">
                <span>01 Community</span>
                <span>·</span>
                <span>02 Academy</span>
                <span>·</span>
                <span>03 Media</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Section 4: Three Distinct Pillar Experiences */}
        <div className="space-y-16">
          {/* ========================================================================= */}
          {/* Pillar 01: COMMUNITY — Distinct Network/Ecosystem Experience              */}
          {/* ========================================================================= */}
          <ScrollReveal delay={50}>
            <div className="relative border border-[#D8D0C4] bg-[#EAE4D9]/40 p-6 sm:p-10 md:p-12 transition-all swiss-corner card-hover-lift group">
            <SwissCornerMarks />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
              {/* Left Column: Thesis & Narrative */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="font-interface text-xs font-semibold uppercase tracking-[0.2em] px-2.5 py-1 bg-[#171717] text-[#F4F0E8]">
                        01 — Community
                      </span>
                      <Users className="w-4 h-4 text-[#68645D]" />
                    </div>
                    <span className="font-mono text-[10px] text-[#8E877C] uppercase tracking-wider hidden sm:inline">
                      SEC. 01 / ECOSYSTEM
                    </span>
                  </div>

                  <h3 className="font-editorial text-2xl sm:text-3xl text-[#171717] leading-snug">
                    “Find your people. Exchange perspectives. Grow together.”
                  </h3>

                  <p className="text-sm text-[#68645D] leading-relaxed">
                    Connect with an international cohort of delegates, organizers, and chairs. Participate in working groups, share verified conference calls, and debate pressing global dilemmas in a moderated, respectful forum.
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  <Link
                    href="/community"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#171717] text-[#F4F0E8] text-xs uppercase tracking-[0.16em] font-interface font-medium hover:bg-black transition-colors"
                  >
                    <span>Discover the Community</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <div className="pt-3 border-t border-[#D8D0C4] flex items-center justify-between text-[11px] font-interface text-[#8E877C]">
                    <span>Open Membership Standard</span>
                    <span>Zero Barriers</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Split Photography & Participation Grid */}
              <div className="lg:col-span-7 space-y-4 flex flex-col justify-between">
                {/* Monochrome Editorial Photo Box */}
                <div className="relative aspect-[16/8] w-full border border-[#D8D0C4] overflow-hidden bg-[#171717] group">
                  <Image
                    src="/assets/editorial/pillar-community.jpg"
                    alt="Delegates walking through institutional colonnade"
                    fill
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    className="object-cover grayscale contrast-110 opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4 flex flex-col justify-between">
                    <div className="flex justify-end">
                      <ArchivalBadge label="PALAIS DES NATIONS" classification="GENEVA" variant="dark" />
                    </div>
                    <div className="text-white text-xs font-interface">
                      <span className="text-[10px] uppercase tracking-widest text-[#B89358] block">
                        Diplomatic Concourse
                      </span>
                      <span className="font-editorial italic">
                        Cross-delegation consultation between active committee sessions.
                      </span>
                    </div>
                  </div>
                </div>

                {/* Substantive Participation Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3.5 border border-[#D8D0C4] bg-white flex flex-col justify-between space-y-1">
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#171717]">
                      <MessageSquare className="w-3.5 h-3.5 text-[#68645D] flex-shrink-0" />
                      <span>Diplomatic Working Groups</span>
                    </div>
                    <p className="text-[11px] text-[#68645D] leading-relaxed">
                      Circles focusing on multilateral treaties, security resolutions, and sustainable development agendas.
                    </p>
                  </div>

                  <div className="p-3.5 border border-[#D8D0C4] bg-white flex flex-col justify-between space-y-1">
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#171717]">
                      <Compass className="w-3.5 h-3.5 text-[#68645D] flex-shrink-0" />
                      <span>Verified Circuit Hub</span>
                    </div>
                    <p className="text-[11px] text-[#68645D] leading-relaxed">
                      Curated access to collegiate MUNs, secretariat openings, fellowships, and youth summits.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

          {/* ========================================================================= */}
          {/* Pillar 02: ACADEMY — Distinct Syllabus/Curriculum Experience               */}
          {/* ========================================================================= */}
          <ScrollReveal delay={100}>
            <div className="relative border border-[#33312D] bg-[#171717] text-[#F4F0E8] p-6 sm:p-10 md:p-12 transition-all card-hover-lift group">
              <SwissCornerMarks borderColor="border-white/40" />
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
                {/* Left Column: Mission & Lab Shortcuts */}
                <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="font-interface text-xs font-semibold uppercase tracking-[0.2em] px-2.5 py-1 bg-white text-[#171717]">
                          02 — Academy
                        </span>
                        <BookOpen className="w-4 h-4 text-[#C9C2B7]" />
                      </div>
                      <span className="font-mono text-[10px] text-[#8E877C] uppercase tracking-wider hidden sm:inline">
                        SEC. 02 / CURRICULUM
                      </span>
                    </div>

                    <h3 className="font-editorial text-2xl sm:text-3xl text-white leading-snug">
                      “Learn the art of diplomacy.”
                    </h3>

                    <p className="text-sm text-[#C9C2B7] leading-relaxed">
                      Rigorous, open-access pedagogical resources built for delegates who want substance over theatrics. Master parliamentary rules, legal resolution drafting, and foreign policy research.
                    </p>
                  </div>

                  <div className="space-y-3 pt-2">
                    <div className="flex flex-wrap gap-2.5">
                      <Link
                        href="/academy"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-[#171717] text-xs uppercase tracking-[0.16em] font-interface font-medium hover:bg-[#F4F0E8] active:scale-[0.99] transition-all group/btn"
                      >
                        <span>Explore Academy</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
                      </Link>
                      <Link
                        href="/academy?tab=tools"
                        className="inline-flex items-center gap-2 px-4 py-2.5 border border-[#33312D] text-[#C9C2B7] hover:text-white hover:border-white text-xs uppercase tracking-[0.16em] font-interface active:scale-[0.99] transition-all"
                      >
                        <Sparkles className="w-3.5 h-3.5 text-[#B89358]" />
                        <span>Diplomatic Lab</span>
                      </Link>
                    </div>

                    <div className="pt-3 border-t border-[#33312D] flex items-center justify-between text-[11px] font-interface text-[#8E877C]">
                      <span>Pedagogical Independence</span>
                      <span>No Paywalls Ever</span>
                    </div>
                  </div>
                </div>

                {/* Right Column: Library Photograph & Modular Tracks */}
                <div className="lg:col-span-7 space-y-4 flex flex-col justify-between">
                  {/* Monochrome Library Photo Box */}
                  <div className="relative aspect-[16/8] w-full border border-[#33312D] overflow-hidden bg-black group/img">
                    <Image
                      src="/assets/editorial/pillar-academy.jpg"
                      alt="International law treaty library archive"
                      fill
                      sizes="(max-width: 1024px) 100vw, 55vw"
                      className="object-cover grayscale contrast-125 opacity-85 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-4 flex flex-col justify-between">
                      <div className="flex justify-end">
                        <ArchivalBadge label="JURISPRUDENCE ARCHIVE" classification="OPEN VAULT" variant="dark" />
                      </div>
                      <div className="text-white text-xs font-interface">
                        <span className="text-[10px] uppercase tracking-widest text-[#B89358] block">
                          Diplomatic Codices
                        </span>
                        <span className="font-editorial italic">
                          Authoritative frameworks grounded in the Vienna Convention & UN Charter.
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Tracks Selector */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 border border-[#33312D] bg-[#201F1D] hover:border-[#68645D] transition-colors card-hover-lift">
                      <div className="space-y-0.5">
                        <span className="text-[9px] font-interface text-[#8E877C] uppercase tracking-wider block">
                          Track 01 · Parliamentary Precision
                        </span>
                        <h4 className="font-editorial text-sm text-white">
                          Rules of Procedure & Interruption Hierarchy
                        </h4>
                      </div>
                      <span className="text-[9px] font-interface uppercase px-2 py-0.5 bg-[#252422] text-[#C9C2B7] border border-[#33312D]">
                        Beginner
                      </span>
                    </div>

                    <div className="flex items-center justify-between p-3 border border-[#33312D] bg-[#201F1D] hover:border-[#68645D] transition-colors card-hover-lift">
                      <div className="space-y-0.5">
                        <span className="text-[9px] font-interface text-[#8E877C] uppercase tracking-wider block">
                          Track 02 · Jurisprudential Rigor
                        </span>
                        <h4 className="font-editorial text-sm text-white">
                          UN Resolution Clause Drafting Studio
                        </h4>
                      </div>
                      <span className="text-[9px] font-interface uppercase px-2 py-0.5 bg-[#252422] text-[#B89358] border border-[#33312D]">
                        Interactive Lab
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </ScrollReveal>

          {/* ========================================================================= */}
          {/* Pillar 03: MEDIA — Distinct Editorial Magazine Experience                 */}
          {/* ========================================================================= */}
          <ScrollReveal delay={150}>
            <div className="relative border border-[#D8D0C4] bg-white p-6 sm:p-10 md:p-12 transition-all swiss-corner card-hover-lift group">
            <SwissCornerMarks />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
              {/* Left Column: Editorial Manifesto */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="font-interface text-xs font-semibold uppercase tracking-[0.2em] px-2.5 py-1 bg-[#171717] text-[#F4F0E8]">
                        03 — Media
                      </span>
                      <Newspaper className="w-4 h-4 text-[#68645D]" />
                    </div>
                    <span className="font-mono text-[10px] text-[#8E877C] uppercase tracking-wider hidden sm:inline">
                      SEC. 03 / JOURNALISM
                    </span>
                  </div>

                  <h3 className="font-editorial text-2xl sm:text-3xl text-[#171717] leading-snug">
                    “Understand the world beyond the headlines.”
                  </h3>

                  <p className="text-sm text-[#68645D] leading-relaxed">
                    Original long-form journalism, analytical essays, and interviews that decode contemporary geopolitics, international jurisprudence, and multilateral negotiations.
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  <Link
                    href="/media"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#171717] text-[#F4F0E8] text-xs uppercase tracking-[0.16em] font-interface font-medium hover:bg-black transition-colors"
                  >
                    <span>Read Our Stories</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <div className="pt-3 border-t border-[#D8D0C4] flex items-center justify-between text-[11px] font-interface text-[#8E877C]">
                    <span>Independent Directorate</span>
                    <span>Peer-Reviewed</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Press Desk Photo & Featured Lead Snippet */}
              <div className="lg:col-span-7 space-y-4 flex flex-col justify-between">
                {/* Monochrome Press Desk Photo Box */}
                <div className="relative aspect-[16/8] w-full border border-[#D8D0C4] overflow-hidden bg-[#171717] group">
                  <Image
                    src="/assets/editorial/pillar-media.jpg"
                    alt="International affairs press desk and broadsheet proofs"
                    fill
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    className="object-cover grayscale contrast-110 opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4 flex flex-col justify-between">
                    <div className="flex justify-end">
                      <ArchivalBadge label="DISPATCH DESK" classification="VOL. I · Nº 01" variant="dark" />
                    </div>
                    <div className="text-white text-xs font-interface">
                      <span className="text-[10px] uppercase tracking-widest text-[#B89358] block">
                        Editorial Bureau
                      </span>
                      <span className="font-editorial italic">
                        Independent reporting at the intersection of diplomacy and global law.
                      </span>
                    </div>
                  </div>
                </div>

                {/* Lead Story Preview */}
                <div className="p-4 border border-[#D8D0C4] bg-[#F4F0E8] space-y-2">
                  <div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-[#68645D]">
                    <span className="font-semibold text-[#171717]">Lead Feature Dispatch</span>
                    <span>Geopolitics Desk</span>
                  </div>
                  <h4 className="font-editorial text-base sm:text-lg text-[#171717] leading-snug">
                    The Architecture of Multilateralism in a Fractured Global Order
                  </h4>
                  <div className="flex items-center justify-between pt-1 text-xs">
                    <span className="text-[11px] text-[#8E877C] font-interface">By Editorial Board</span>
                    <Link
                      href="/media/future-of-multilateralism-in-fragmented-order"
                      className="font-interface font-semibold text-xs flex items-center gap-1 hover:underline text-[#171717]"
                    >
                      <span>Read Story</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
        </div>
      </div>
    </section>
  );
}


