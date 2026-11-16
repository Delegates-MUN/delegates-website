import Link from "next/link";
import {
  Users,
  BookOpen,
  Newspaper,
  ArrowRight,
  MessageSquare,
  Compass,
  FileText,
} from "lucide-react";

export default function PillarsSection() {
  return (
    <section className="py-20 md:py-28 bg-[#F4F0E8] border-b border-[#D8D0C4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section 3: Introduction & Core Thesis — Unified 2-Column Editorial Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end pb-12 border-b border-[#D8D0C4]">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2">
              <span className="w-6 h-[1px] bg-[#171717]" />
              <span className="font-interface text-[11px] uppercase tracking-[0.2em] font-semibold text-[#68645D]">
                The Core Thesis
              </span>
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

        {/* Section 4: Three Distinct Pillar Experiences */}
        <div className="space-y-12">
          {/* Pillar 01: COMMUNITY — Distinct Network/Ecosystem Experience */}
          <div className="border border-[#D8D0C4] bg-[#EAE4D9]/40 p-7 sm:p-10 md:p-12 transition-all">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
              <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="font-interface text-xs font-semibold uppercase tracking-[0.2em] px-2.5 py-1 bg-[#171717] text-[#F4F0E8]">
                      01 — Community
                    </span>
                    <Users className="w-4 h-4 text-[#68645D]" />
                  </div>

                  <h3 className="font-editorial text-2xl sm:text-3xl text-[#171717] leading-snug">
                    “Find your people. Exchange perspectives. Grow together.”
                  </h3>

                  <p className="text-sm text-[#68645D] leading-relaxed">
                    Connect with a nationwide and international cohort of delegates, organizers, and chairs. Participate in working groups, share conference opportunities, and debate pressing global dilemmas in a moderated, respectful forum.
                  </p>
                </div>

                <div className="pt-2">
                  <Link
                    href="/community"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#171717] text-[#F4F0E8] text-xs uppercase tracking-[0.16em] font-interface font-medium hover:bg-black transition-colors"
                  >
                    <span>Discover the Community</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Community Visual Feature Box */}
              <div className="lg:col-span-7 bg-[#F4F0E8] border border-[#D8D0C4] p-6 sm:p-7 flex flex-col justify-between space-y-4">
                <span className="font-interface text-[10px] uppercase tracking-[0.18em] text-[#68645D] block border-b border-[#D8D0C4] pb-2 font-semibold">
                  What Members Participate In
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 flex-grow">
                  <div className="p-4 border border-[#D8D0C4] bg-white flex flex-col justify-between space-y-1.5">
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#171717]">
                      <MessageSquare className="w-3.5 h-3.5 text-[#68645D] flex-shrink-0" />
                      <span>Diplomatic Working Groups</span>
                    </div>
                    <p className="text-xs text-[#68645D] leading-normal">
                      Deep-dive circles focusing on multilateral treaties, security resolutions, and sustainable development.
                    </p>
                  </div>

                  <div className="p-4 border border-[#D8D0C4] bg-white flex flex-col justify-between space-y-1.5">
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#171717]">
                      <Compass className="w-3.5 h-3.5 text-[#68645D] flex-shrink-0" />
                      <span>Verified Opportunities Hub</span>
                    </div>
                    <p className="text-xs text-[#68645D] leading-normal">
                      Direct access to collegiate MUNs, secretariat openings, fellowships, and youth summits.
                    </p>
                  </div>

                  <div className="p-4 border border-[#D8D0C4] bg-white flex flex-col justify-between space-y-1.5">
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#171717]">
                      <Users className="w-3.5 h-3.5 text-[#68645D] flex-shrink-0" />
                      <span>EB Peer Mentorship</span>
                    </div>
                    <p className="text-xs text-[#68645D] leading-normal">
                      Pairing aspiring chairs with seasoned Executive Board jurists to master committee management.
                    </p>
                  </div>

                  <div className="p-4 border border-[#D8D0C4] bg-white flex flex-col justify-between space-y-1.5">
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#171717]">
                      <FileText className="w-3.5 h-3.5 text-[#68645D] flex-shrink-0" />
                      <span>Research Collabs</span>
                    </div>
                    <p className="text-xs text-[#68645D] leading-normal">
                      Collaborative country dossier preparation and position paper peer review before major conferences.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pillar 02: ACADEMY — Distinct Syllabus/Curriculum Experience */}
          <div className="border border-[#D8D0C4] bg-[#171717] text-[#F4F0E8] p-7 sm:p-10 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
              <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="font-interface text-xs font-semibold uppercase tracking-[0.2em] px-2.5 py-1 bg-white text-[#171717]">
                      02 — Academy
                    </span>
                    <BookOpen className="w-4 h-4 text-[#C9C2B7]" />
                  </div>

                  <h3 className="font-editorial text-2xl sm:text-3xl text-white leading-snug">
                    “Learn the art of diplomacy.”
                  </h3>

                  <p className="text-sm text-[#C9C2B7] leading-relaxed">
                    Rigorous, open-access pedagogical resources built for delegates who want substance over theatrics. Master parliamentary rules, legal resolution drafting, and foreign policy research.
                  </p>
                </div>

                <div className="pt-2">
                  <Link
                    href="/academy"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-[#171717] text-xs uppercase tracking-[0.16em] font-interface font-medium hover:bg-[#F4F0E8] transition-colors"
                  >
                    <span>Explore the Academy</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Academy Modular Tracks Display */}
              <div className="lg:col-span-7 bg-[#201F1D] border border-[#33312D] p-6 sm:p-7 flex flex-col justify-between space-y-3">
                <span className="font-interface text-[10px] uppercase tracking-[0.18em] text-[#8E877C] block border-b border-[#33312D] pb-2 font-semibold">
                  Open Educational Tracks
                </span>

                <div className="space-y-2.5 flex-grow">
                  <div className="flex items-center justify-between p-3.5 border border-[#33312D] bg-[#171717] hover:border-[#68645D] transition-colors">
                    <div className="space-y-0.5">
                      <span className="text-[10px] font-interface text-[#8E877C] uppercase tracking-wider">
                        Track 01 · Fundamentals
                      </span>
                      <h4 className="font-editorial text-sm sm:text-base text-white">
                        Rules of Procedure & Parliamentary Precedence
                      </h4>
                    </div>
                    <span className="text-[10px] font-interface uppercase px-2 py-0.5 bg-[#252422] text-[#C9C2B7]">
                      Beginner
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-3.5 border border-[#33312D] bg-[#171717] hover:border-[#68645D] transition-colors">
                    <div className="space-y-0.5">
                      <span className="text-[10px] font-interface text-[#8E877C] uppercase tracking-wider">
                        Track 02 · Research Rigor
                      </span>
                      <h4 className="font-editorial text-sm sm:text-base text-white">
                        Country Dossiers & Treaties Alignment Analysis
                      </h4>
                    </div>
                    <span className="text-[10px] font-interface uppercase px-2 py-0.5 bg-[#252422] text-[#C9C2B7]">
                      Intermediate
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-3.5 border border-[#33312D] bg-[#171717] hover:border-[#68645D] transition-colors">
                    <div className="space-y-0.5">
                      <span className="text-[10px] font-interface text-[#8E877C] uppercase tracking-wider">
                        Track 03 · Dais Leadership
                      </span>
                      <h4 className="font-editorial text-sm sm:text-base text-white">
                        Executive Board Protocol & Evaluation Criteria
                      </h4>
                    </div>
                    <span className="text-[10px] font-interface uppercase px-2 py-0.5 bg-[#252422] text-[#C9C2B7]">
                      Advanced
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pillar 03: MEDIA — Distinct Editorial Magazine Experience */}
          <div className="border border-[#D8D0C4] bg-white p-7 sm:p-10 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
              <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="font-interface text-xs font-semibold uppercase tracking-[0.2em] px-2.5 py-1 bg-[#171717] text-[#F4F0E8]">
                      03 — Media
                    </span>
                    <Newspaper className="w-4 h-4 text-[#68645D]" />
                  </div>

                  <h3 className="font-editorial text-2xl sm:text-3xl text-[#171717] leading-snug">
                    “Understand the world beyond the headlines.”
                  </h3>

                  <p className="text-sm text-[#68645D] leading-relaxed">
                    Original long-form journalism, analytical essays, and interviews that decode contemporary geopolitics, international jurisprudence, and multilateral negotiations.
                  </p>
                </div>

                <div className="pt-2">
                  <Link
                    href="/media"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#171717] text-[#F4F0E8] text-xs uppercase tracking-[0.16em] font-interface font-medium hover:bg-black transition-colors"
                  >
                    <span>Read Our Stories</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Media Editorial Snippet */}
              <div className="lg:col-span-7 border border-[#D8D0C4] bg-[#F4F0E8] p-6 sm:p-7 flex flex-col justify-between space-y-4">
                <div className="flex items-center justify-between border-b border-[#D8D0C4] pb-2">
                  <span className="font-interface text-[10px] uppercase tracking-[0.18em] text-[#68645D] font-semibold">
                    Lead Feature Dispatch
                  </span>
                  <span className="font-interface text-[10px] text-[#68645D]">
                    Geopolitics Desk
                  </span>
                </div>

                <div className="space-y-2 flex-grow">
                  <span className="text-[11px] font-interface uppercase tracking-widest text-[#68645D]">
                    Systemic Analysis
                  </span>
                  <h4 className="font-editorial text-xl sm:text-2xl text-[#171717] leading-snug">
                    The Architecture of Multilateralism in a Fractured Global Order
                  </h4>
                  <p className="text-xs sm:text-sm text-[#68645D] line-clamp-3 leading-relaxed">
                    Why the modern international system demands principled dialogue rather than zero-sum polarization—and how regional alignments are testing the boundaries of universal international law.
                  </p>
                </div>

                <div className="pt-3 border-t border-[#D8D0C4] flex items-center justify-between text-xs text-[#202020]">
                  <span className="font-interface text-[11px] font-medium text-[#68645D]">
                    By DELEGATES Editorial Board
                  </span>
                  <Link
                    href="/media#future-of-multilateralism-in-fragmented-order"
                    className="font-interface font-semibold text-xs flex items-center gap-1 hover:underline"
                  >
                    <span>Read Full Story</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
