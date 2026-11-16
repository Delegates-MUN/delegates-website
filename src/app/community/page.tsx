"use client";

import { useState } from "react";
import Image from "next/image";
import { OPPORTUNITIES_DATA } from "@/data/opportunities";
import { FAQS_DATA } from "@/data/faq";
import {
  Users,
  MessageSquare,
  Compass,
  Calendar,
  MapPin,
  Building,
  ArrowUpRight,
  ChevronDown,
  ChevronUp,
  Search,
  Sparkles,
  CheckCircle2,
  Check,
} from "lucide-react";

export default function CommunityPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [openFaq, setOpenFaq] = useState<string | null>("faq-1");

  const categories = [
    "All",
    "MUN Conference",
    "Writing Competition",
    "EB Application",
  ];

  const filteredOpportunities = OPPORTUNITIES_DATA.filter((opp) => {
    const matchesCat =
      selectedCategory === "All" || opp.category === selectedCategory;
    const matchesQuery =
      opp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      opp.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      opp.organizer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  const handleOpenJoinModal = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-join-community-modal"));
    }
  };

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const audienceGroups = [
    {
      role: "First-time MUN Participants",
      description:
        "Delegates taking their very first steps into committee rooms. Access structured procedural guides, glossary breakdowns, and low-stakes practice simulations.",
      tag: "Foundation",
    },
    {
      role: "Regular & Experienced Delegates",
      description:
        "Delegates with multiple conferences seeking advanced geopolitical analysis, collaborative drafting circles, and high-level crisis debate strategy.",
      tag: "Strategy",
    },
    {
      role: "Executive Board Members & Chairs",
      description:
        "Experienced jurists and presiding officers. Engage with peer chairs, share committee study guides, and mentor the next cohort of delegates.",
      tag: "Leadership",
    },
    {
      role: "MUN Organizers & Secretariats",
      description:
        "Secretariats looking to publicize institutional conferences, recruit verified Executive Boards, and adopt ethical scoring standards.",
      tag: "Institutional",
    },
    {
      role: "Students of International Affairs",
      description:
        "Youth curious about diplomacy, geopolitical policy, international jurisprudence, and multilateral institutions.",
      tag: "Academic",
    },
  ];

  const initiatives = [
    {
      title: "Diplomatic Working Groups",
      frequency: "Bi-Weekly Deliberations",
      desc: "Small-group topical roundtables where members deliberate specific UN agendas—from international water rights to artificial intelligence non-proliferation.",
    },
    {
      title: "Peer Position Paper Critiques",
      frequency: "Pre-Conference Cohorts",
      desc: "Constructive blind peer-reviews of policy statements, foreign policy alignment, and resolution clauses before delegates submit to conferences.",
    },
    {
      title: "Chairs' Colloquium",
      frequency: "Monthly Briefings",
      desc: "Closed-door roundtables for Executive Board members sharing best practices in committee pacing, crisis escalation, and fair delegate evaluation.",
    },
    {
      title: "Open Geopolitical Debates",
      frequency: "Community Forum",
      desc: "Moderated discussions adhering to the DLGTS philosophy—strictly focused on international law, evidence, and principled discourse.",
    },
  ];

  return (
    <div className="w-full bg-[#F4F0E8] text-[#202020]">
      {/* 1. Hero Section */}
      <section className="border-b border-[#D8D0C4] pt-14 pb-16 md:pt-20 md:pb-24 bg-[#F4F0E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EAE4D9] border border-[#D8D0C4] text-[#171717]">
            <Users className="w-3.5 h-3.5 text-[#68645D]" />
            <span className="font-interface text-[11px] uppercase tracking-[0.2em] font-medium">
              Pillar 01 — Community
            </span>
          </div>

          <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-[#171717] font-normal max-w-4xl leading-tight">
            Find your people.
            <br />
            <span className="italic">Exchange perspectives. Grow together.</span>
          </h1>

          <p className="font-interface text-base sm:text-lg text-[#68645D] max-w-2xl leading-relaxed">
            DELEGATES brings together beginner delegates, seasoned competitors, and Executive Board members into a unified, principled platform. No member paywalls, no barriers—just meaningful dialogue and global curiosity.
          </p>

          <div className="pt-4 flex flex-wrap gap-4">
            <button
              onClick={handleOpenJoinModal}
              className="px-6 py-3 bg-[#171717] text-[#F4F0E8] font-interface text-xs uppercase tracking-[0.18em] font-semibold hover:bg-black transition-colors"
            >
              Join the Community
            </button>
            <a
              href="#opportunities"
              className="px-6 py-3 border border-[#171717] text-[#171717] font-interface text-xs uppercase tracking-[0.18em] font-semibold hover:bg-[#171717] hover:text-[#F4F0E8] transition-colors"
            >
              Explore Opportunities
            </a>
          </div>
        </div>
      </section>

      {/* 2. Who the Community is For */}
      <section className="py-16 md:py-24 border-b border-[#D8D0C4] bg-[#EAE4D9]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="border-b border-[#D8D0C4] pb-4">
            <span className="font-interface text-xs uppercase tracking-[0.2em] text-[#68645D]">
              Inclusivity Standard
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl text-[#171717] mt-1">
              Who the Community is For
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {audienceGroups.map((group) => (
              <div
                key={group.role}
                className="border border-[#D8D0C4] bg-white p-7 space-y-4 hover:border-[#171717] transition-all"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-interface uppercase tracking-widest px-2.5 py-0.5 bg-[#F4F0E8] border border-[#D8D0C4] text-[#171717] font-medium">
                    {group.tag}
                  </span>
                </div>
                <h3 className="font-editorial text-xl text-[#171717] font-medium">
                  {group.role}
                </h3>
                <p className="text-xs text-[#68645D] leading-relaxed">
                  {group.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Community Initiatives & What Members Participate In */}
      <section className="py-16 md:py-24 border-b border-[#D8D0C4] bg-[#F4F0E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#D8D0C4] pb-4 gap-4">
            <div>
              <span className="font-interface text-xs uppercase tracking-[0.2em] text-[#68645D]">
                Programs & Deliberations
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl text-[#171717] mt-1">
                Active Community Initiatives
              </h2>
            </div>
            <p className="text-xs text-[#68645D] max-w-sm">
              All initiatives are grounded in the DLGTS philosophy: rigorous prep, respect for sovereignty, and evidence-based debate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {initiatives.map((item) => (
              <div
                key={item.title}
                className="border border-[#D8D0C4] bg-white p-6 sm:p-8 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-editorial text-xl text-[#171717] font-medium">
                    {item.title}
                  </h3>
                  <span className="text-[10px] font-interface uppercase tracking-wider text-[#68645D] bg-[#F4F0E8] px-2.5 py-1 border border-[#D8D0C4]">
                    {item.frequency}
                  </span>
                </div>
                <p className="text-xs text-[#68645D] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MUN Opportunities & Event Listings */}
      <section id="opportunities" className="py-16 md:py-24 border-b border-[#D8D0C4] bg-[#EAE4D9]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="space-y-3">
            <span className="font-interface text-xs uppercase tracking-[0.2em] text-[#68645D]">
              Verified Circuit Directory
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl text-[#171717]">
              MUN Conferences & Opportunities
            </h2>
            <p className="text-xs text-[#68645D] max-w-xl">
              Curated opportunities for youth delegates. Links connect directly to official institutional organizers.
            </p>
          </div>

          {/* Search & Filter Controls */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-2">
            {/* Search Input */}
            <div className="relative flex-grow max-w-md">
              <Search className="w-4 h-4 text-[#68645D] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search conferences, organizers, topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white border border-[#D8D0C4] text-xs text-[#171717] focus:outline-none focus:border-[#171717]"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 font-interface text-xs uppercase tracking-wider transition-all border ${
                    selectedCategory === cat
                      ? "bg-[#171717] text-[#F4F0E8] border-[#171717]"
                      : "bg-white text-[#68645D] border-[#D8D0C4] hover:border-[#171717]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          {filteredOpportunities.length === 0 ? (
            <div className="p-12 text-center bg-white border border-[#D8D0C4] space-y-3">
              <p className="font-editorial text-lg text-[#171717]">
                No opportunities match your filter criteria.
              </p>
              <p className="text-xs text-[#68645D]">
                Try adjusting your search terms or clearing your category filters.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                className="mt-2 px-4 py-2 bg-[#171717] text-[#F4F0E8] text-xs uppercase tracking-wider font-interface"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredOpportunities.map((opp) => (
                <div
                  key={opp.id}
                  className="border border-[#D8D0C4] bg-white p-6 sm:p-7 flex flex-col justify-between hover:border-[#171717] transition-all group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-interface text-[10px] font-semibold uppercase tracking-[0.18em] px-2.5 py-1 bg-[#EAE4D9] text-[#171717] border border-[#D8D0C4]">
                        {opp.category}
                      </span>
                      {opp.isOnline && (
                        <span className="font-interface text-[10px] uppercase text-[#68645D] border-b border-[#D8D0C4]">
                          Virtual / Hybrid
                        </span>
                      )}
                    </div>

                    <div className="min-h-[3.75rem] flex items-start">
                      <h3 className="font-editorial text-lg text-[#171717] font-medium leading-snug group-hover:text-[#68645D] transition-colors">
                        {opp.title}
                      </h3>
                    </div>

                    <p className="text-xs text-[#68645D] line-clamp-3 leading-relaxed min-h-[3.25rem]">
                      {opp.description}
                    </p>

                    <div className="space-y-2 pt-3 border-t border-[#D8D0C4] text-xs text-[#68645D]">
                      <div className="flex items-center gap-2">
                        <Building className="w-3.5 h-3.5 flex-shrink-0 text-[#171717]" />
                        <span className="truncate">{opp.organizer}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3.5 h-3.5 flex-shrink-0 text-[#171717]" />
                        <span>{opp.dateOrDeadline}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 flex-shrink-0 text-[#171717]" />
                        <span className="truncate">{opp.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-5 mt-auto border-t border-[#D8D0C4] flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {opp.tags.slice(0, 2).map((t) => (
                        <span
                          key={t}
                          className="text-[10px] font-interface text-[#8E877C] bg-[#F4F0E8] px-2 py-0.5"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <a
                      href={opp.sourceUrl}
                      target={opp.sourceUrl.startsWith("http") ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs uppercase tracking-wider font-interface font-semibold text-[#171717] group-hover:underline"
                    >
                      <span>Official Link</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 5. Frequently Asked Questions (Interactive Accordion) */}
      <section id="faq" className="py-16 md:py-24 border-b border-[#D8D0C4] bg-[#F4F0E8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="border-b border-[#D8D0C4] pb-4">
            <span className="font-interface text-xs uppercase tracking-[0.2em] text-[#68645D]">
              Clear Answers
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl text-[#171717] mt-1">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS_DATA.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className="border border-[#D8D0C4] bg-white transition-all"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-editorial text-lg sm:text-xl text-[#171717] font-medium">
                      {faq.question}
                    </span>
                    <span className="text-[#68645D] flex-shrink-0">
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-1 text-xs sm:text-sm text-[#68645D] border-t border-[#D8D0C4]/60 leading-relaxed animate-fadeIn">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Join the Community CTA Section */}
      <section className="py-20 md:py-28 bg-[#171717] text-[#F4F0E8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="w-10 h-12 mx-auto relative opacity-90">
            <Image
              src="/assets/delegates-monogram-light.png"
              alt="DELEGATES"
              fill
              sizes="40px"
              className="object-contain"
            />
          </div>

          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-white font-normal">
            Ready to participate in principled dialogue?
          </h2>

          <p className="font-interface text-sm text-[#C9C2B7] max-w-lg mx-auto leading-relaxed">
            Express your interest to join community working groups, peer review circles, and event listings.
          </p>

          <div className="pt-2">
            <button
              onClick={handleOpenJoinModal}
              className="px-8 py-3.5 bg-white text-[#171717] font-interface text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#F4F0E8] transition-colors"
            >
              Join the Community Today
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
