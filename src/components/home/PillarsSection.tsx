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
                  location="THE THREE INITIATIVES"
                  coordinates="COMMUNITY · ACADEMY · MEDIA"
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
                      <span className="font-interface text-[10px] text-[#8E877C] uppercase tracking-wider hidden sm:inline">
                        COMMUNITY FORUM
                      </span>
                    </div>

                    <h3 className="font-editorial text-2xl sm:text-3xl text-[#171717] leading-snug">
                      A Community Built Around Dialogue
                    </h3>

                    <p className="text-sm text-[#68645D] leading-relaxed">
                      DELEGATES brings together MUN enthusiasts, aspiring diplomats, and individuals interested in international affairs. We aim to create opportunities for learning, meaningful conversations, and connections grounded in shared principles.
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

                {/* Right Column: Split Photography & Participation Description */}
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
                        <ArchivalBadge label="DIPLOMATIC FORUM" classification="GLOBAL DIALOGUE" variant="dark" />
                      </div>
                      <div className="text-white text-xs font-interface">
                        <span className="text-[10px] uppercase tracking-widest text-[#B89358] block">
                          Diplomatic Concourse
                        </span>
                        <span className="font-editorial italic">
                          Cross-delegation consultation and connections grounded in principles.
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Substantive Participation Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-3.5 border border-[#D8D0C4] bg-white flex flex-col justify-between space-y-1">
                      <div className="flex items-center gap-2 text-xs font-semibold text-[#171717]">
                        <MessageSquare className="w-3.5 h-3.5 text-[#25D366] flex-shrink-0" />
                        <span>WhatsApp Community</span>
                      </div>
                      <p className="text-[11px] text-[#68645D] leading-relaxed">
                        An open forum for youth passionate about global affairs, Model UN debate, and diplomacy.
                      </p>
                    </div>

                    <div className="p-3.5 border border-[#D8D0C4] bg-white flex flex-col justify-between space-y-1">
                      <div className="flex items-center gap-2 text-xs font-semibold text-[#171717]">
                        <Compass className="w-3.5 h-3.5 text-[#68645D] flex-shrink-0" />
                        <span>Opportunities Hub</span>
                      </div>
                      <p className="text-[11px] text-[#68645D] leading-relaxed">
                        Curated directory of genuine conferences, fellowships, and academic opportunities.
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
                {/* Left Column: Mission & Overview */}
                <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="font-interface text-xs font-semibold uppercase tracking-[0.2em] px-2.5 py-1 bg-white text-[#171717]">
                          02 — Academy
                        </span>
                        <BookOpen className="w-4 h-4 text-[#C9C2B7]" />
                      </div>
                      <span className="font-interface text-[10px] text-[#8E877C] uppercase tracking-wider hidden sm:inline">
                        ACADEMY MANUAL
                      </span>
                    </div>

                    <h3 className="font-editorial text-2xl sm:text-3xl text-white leading-snug">
                      Learn. Understand. Engage.
                    </h3>

                    <p className="text-sm text-[#C9C2B7] leading-relaxed">
                      Free parliamentary cheat sheets, GSL speech templates, and negotiation guides written by experienced delegates.
                    </p>
                  </div>

                  <div className="space-y-3 pt-2">
                    <Link
                      href="/academy"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-[#171717] text-xs uppercase tracking-[0.16em] font-interface font-medium hover:bg-[#F4F0E8] active:scale-[0.99] transition-all group/btn"
                    >
                      <span>Explore Academy Library</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
                    </Link>

                    <div className="pt-3 border-t border-[#33312D] flex items-center justify-between text-[11px] font-interface text-[#8E877C]">
                      <span>Open Access Curriculum</span>
                      <span>No Paywalls Ever</span>
                    </div>
                  </div>
                </div>

                {/* Right Column: Library Photograph & Foundational Modules */}
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
                        <ArchivalBadge label="DELEGATES" classification="FIELD MANUAL" variant="dark" />
                      </div>
                      <div className="text-white text-xs font-interface">
                        <span className="text-[10px] uppercase tracking-widest text-[#B89358] block font-semibold">
                          Featured Guide
                        </span>
                        <span className="font-editorial italic">
                          Rules of Procedure Quick Guide & 4-Part GSL Formula
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Academy Status Card */}
                  <div className="p-4 border border-[#33312D] bg-[#201F1D] space-y-1.5">
                    <div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-[#8E877C]">
                      <span className="font-semibold text-white">Interactive ROP Cheat Sheet</span>
                      <span className="text-[#B89358]">Free Access</span>
                    </div>
                    <p className="font-editorial text-sm text-[#C9C2B7] leading-relaxed">
                      Instant reference for Points, Motions, Yields, and Speech Structures—optimized for quick reading during committee sessions.
                    </p>
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
                {/* Left Column: Editorial Space Overview */}
                <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="font-interface text-xs font-semibold uppercase tracking-[0.2em] px-2.5 py-1 bg-[#171717] text-[#F4F0E8]">
                          03 — Media
                        </span>
                        <Newspaper className="w-4 h-4 text-[#68645D]" />
                      </div>
                      <span className="font-interface text-[10px] text-[#8E877C] uppercase tracking-wider hidden sm:inline">
                        MEDIA DESK
                      </span>
                    </div>

                    <h3 className="font-editorial text-2xl sm:text-3xl text-[#171717] leading-snug">
                      Perspectives Worth Reading
                    </h3>

                    <p className="text-sm text-[#68645D] leading-relaxed">
                      Independent commentary on diplomatic culture, treaty analysis, and youth statecraft—grounded in research rather than performative rhetoric.
                    </p>
                  </div>

                  <div className="space-y-4 pt-2">
                    <Link
                      href="/media"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#171717] text-[#F4F0E8] text-xs uppercase tracking-[0.16em] font-interface font-medium hover:bg-black transition-colors"
                    >
                      <span>Read Dispatches</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <div className="pt-3 border-t border-[#D8D0C4] flex items-center justify-between text-[11px] font-interface text-[#8E877C]">
                      <span>Student-Led Voice</span>
                      <span>Open Contributions</span>
                    </div>
                  </div>
                </div>

                {/* Right Column: Editorial Photograph */}
                <div className="lg:col-span-7 space-y-4 flex flex-col justify-between">
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
                        <ArchivalBadge label="DELEGATES" classification="DISPATCHES" variant="dark" />
                      </div>
                      <div className="text-white text-xs font-interface">
                        <span className="text-[10px] uppercase tracking-widest text-[#B89358] block font-semibold">
                          Featured Essay
                        </span>
                        <span className="font-editorial italic">
                          Why Model UN Started Rewarding Shouting Matches—And How to Bring Diplomacy Back
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Editorial Desk Announcement Card */}
                  <div className="p-5 border border-[#D8D0C4] bg-[#F4F0E8] space-y-1.5">
                    <div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-[#68645D]">
                      <span className="font-semibold text-[#171717]">Dispatches & Commentary</span>
                      <span className="text-[#171717]">Open to Writers</span>
                    </div>
                    <p className="font-editorial text-sm text-[#171717] leading-relaxed">
                      Explore analytical essays from debaters worldwide, or submit your own analysis on international affairs.
                    </p>
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
