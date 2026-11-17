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
  PlusCircle,
} from "lucide-react";
import { SwissCornerMarks, CartographicStamp, ArchivalBadge } from "@/components/ui/SwissAccents";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

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

  const handleOpenSubmitModal = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-submit-opportunity-modal"));
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 animate-fadeIn">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EAE4D9] border border-[#D8D0C4] text-[#171717]">
              <Users className="w-3.5 h-3.5 text-[#68645D]" />
              <span className="font-interface text-[11px] uppercase tracking-[0.2em] font-medium">
                Pillar 01 — Community
              </span>
            </div>
            <CartographicStamp
              location="GENEVA // YOUTH PLENARY ASSEMBLY"
              coordinates="46°13′36″N 6°08′26″E"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Col: Narrative & Actions */}
            <div className="lg:col-span-6 space-y-6">
              <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-[#171717] font-normal leading-tight animate-fadeInUp delay-100">
                Find your people.
                <br />
                <span className="italic">Exchange perspectives. Grow together.</span>
              </h1>

              <p className="font-interface text-base sm:text-lg text-[#68645D] leading-relaxed animate-fadeInUp delay-150">
                DELEGATES brings together beginner delegates, seasoned competitors, and Executive Board members into a unified, principled platform. No member paywalls, no barriers—just meaningful dialogue and global curiosity.
              </p>

              <div className="pt-2 flex flex-wrap gap-4 animate-fadeInUp delay-200">
                <button
                  onClick={handleOpenJoinModal}
                  className="px-6 py-3 bg-[#171717] text-[#F4F0E8] font-interface text-xs uppercase tracking-[0.18em] font-semibold hover:bg-black transition-colors active:scale-[0.98]"
                >
                  Join the Community
                </button>
                <a
                  href="https://chat.whatsapp.com/DgERPMtTm4f0ONCfet1ebv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-[#171717] text-[#171717] font-interface text-xs uppercase tracking-[0.18em] font-semibold hover:bg-[#171717] hover:text-[#F4F0E8] transition-colors active:scale-[0.98]"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>WhatsApp Community</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="pt-4 border-t border-[#D8D0C4] flex items-center justify-between text-xs text-[#8E877C] font-interface animate-fadeInUp delay-250">
                <span>Inclusive Multi-Tier Network</span>
                <span>Zero Paywalls · Open Deliberation</span>
              </div>
            </div>

            {/* Right Col: High-Impact Monochrome Assembly Image */}
            <div className="lg:col-span-6 animate-fadeIn delay-150">
              <div className="relative aspect-[16/10] w-full border border-[#D8D0C4] overflow-hidden bg-[#171717] group">
                <SwissCornerMarks />
                <Image
                  src="/assets/editorial/community-assembly.jpg"
                  alt="Diplomatic assembly in progress with delegates holding country placards"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover grayscale contrast-110 opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent p-5 sm:p-6 flex flex-col justify-between">
                  <div className="flex justify-end">
                    <ArchivalBadge label="COMMITTEE FLOOR" classification="IN SESSION" variant="dark" />
                  </div>
                  <div className="text-white text-xs font-interface space-y-1">
                    <span className="text-[10px] uppercase tracking-widest text-[#B89358] block">
                      The Deliberative Floor
                    </span>
                    <p className="font-editorial italic text-xs sm:text-sm text-white/90">
                      “Where national stances are articulated, tested, and resolved through structured parliamentary voting.”
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Who the Community is For */}
      <section className="py-16 md:py-24 border-b border-[#D8D0C4] bg-[#EAE4D9]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <ScrollReveal>
            <div className="border-b border-[#D8D0C4] pb-4">
              <span className="font-interface text-xs uppercase tracking-[0.2em] text-[#68645D]">
                Inclusivity Standard
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl text-[#171717] mt-1">
                Who the Community is For
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {audienceGroups.map((group, gIdx) => (
              <ScrollReveal key={group.role} delay={(gIdx % 3) * 60}>
                <div
                  className="relative border border-[#D8D0C4] bg-white p-8 space-y-4 hover:border-[#171717] transition-all group card-hover-lift h-full flex flex-col justify-between"
                >
                  <SwissCornerMarks size="w-2 h-2" />
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5 bg-[#EAE4D9] border border-[#D8D0C4] text-[#171717] font-semibold">
                        TIER 0{gIdx + 1} // {group.tag}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#171717]/40 group-hover:bg-[#B89358] transition-colors" />
                    </div>
                    <h3 className="font-editorial text-2xl text-[#171717] font-normal leading-snug">
                      {group.role}
                    </h3>
                    <p className="text-xs text-[#68645D] leading-relaxed">
                      {group.description}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-[#D8D0C4]/60 text-[10px] font-interface uppercase tracking-wider text-[#8E877C] flex justify-between">
                    <span>Verified Access</span>
                    <span>Open Track</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Community Initiatives & What Members Participate In */}
      <section className="py-16 md:py-24 border-b border-[#D8D0C4] bg-[#F4F0E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <ScrollReveal>
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
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {initiatives.map((item, iIdx) => (
              <ScrollReveal key={item.title} delay={(iIdx % 2) * 80}>
                <div
                  className="relative border border-[#D8D0C4] bg-white p-7 sm:p-8 space-y-4 hover:border-[#171717] transition-all card-hover-lift h-full"
                >
                  <SwissCornerMarks size="w-2 h-2" />
                  <div className="flex items-center justify-between border-b border-[#D8D0C4] pb-3">
                    <div className="space-y-0.5">
                      <span className="font-mono text-[9px] uppercase tracking-widest text-[#8E877C]">
                        INITIATIVE 0{iIdx + 1}
                      </span>
                      <h3 className="font-editorial text-xl text-[#171717] font-normal">
                        {item.title}
                      </h3>
                    </div>
                    <span className="text-[10px] font-interface uppercase tracking-wider text-[#171717] bg-[#EAE4D9] px-2.5 py-1 border border-[#D8D0C4] font-medium flex-shrink-0">
                      {item.frequency}
                    </span>
                  </div>
                  <p className="text-xs text-[#68645D] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MUN Opportunities & Event Listings */}
      <section id="opportunities" className="py-16 md:py-24 border-b border-[#D8D0C4] bg-[#EAE4D9]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#D8D0C4] pb-6">
              <div className="space-y-2">
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
              <button
                onClick={handleOpenSubmitModal}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#171717] text-[#F4F0E8] text-xs font-interface uppercase tracking-wider hover:bg-black transition-colors self-start md:self-auto active:scale-[0.98]"
              >
                <PlusCircle className="w-3.5 h-3.5 text-[#B89358]" />
                <span>Submit Opportunity</span>
              </button>
            </div>
          </ScrollReveal>

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
              {filteredOpportunities.map((opp, idx) => (
                <ScrollReveal key={opp.id} delay={(idx % 3) * 60}>
                  <div
                    className="relative border border-[#D8D0C4] bg-white p-6 sm:p-7 flex flex-col justify-between hover:border-[#171717] transition-all group card-hover-lift h-full"
                  >
                    <SwissCornerMarks size="w-2 h-2" />
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
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 5. Frequently Asked Questions (Interactive Accordion) */}
      <section id="faq" className="py-16 md:py-24 border-b border-[#D8D0C4] bg-[#F4F0E8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <ScrollReveal>
            <div className="border-b border-[#D8D0C4] pb-4">
              <span className="font-interface text-xs uppercase tracking-[0.2em] text-[#68645D]">
                Clear Answers
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl text-[#171717] mt-1">
                Frequently Asked Questions
              </h2>
            </div>
          </ScrollReveal>

          <div className="space-y-4">
            {FAQS_DATA.map((faq, idx) => {
              const isOpen = openFaq === faq.id;
              return (
                <ScrollReveal key={faq.id} delay={(idx % 4) * 40}>
                  <div
                    className="border border-[#D8D0C4] bg-white transition-all card-hover-lift"
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
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Join the Community CTA Section */}
      <section className="py-20 md:py-28 bg-[#171717] text-[#F4F0E8]">
        <ScrollReveal>
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

            <p className="font-interface text-sm text-[#C9C2B7] max-w-xl mx-auto leading-relaxed">
              Anyone interested in diplomacy and Model UN is welcomed into our open community forum. Selected active members are invited into specialized working groups and committee cohorts subsequently.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://chat.whatsapp.com/DgERPMtTm4f0ONCfet1ebv"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-[#171717] font-interface text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#F4F0E8] transition-colors active:scale-[0.98]"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                <span>Join WhatsApp Community</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={handleOpenJoinModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-white/60 text-white font-interface text-xs uppercase tracking-[0.2em] font-semibold hover:bg-white hover:text-[#171717] transition-colors active:scale-[0.98]"
              >
                <span>Register Member Profile</span>
              </button>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}

