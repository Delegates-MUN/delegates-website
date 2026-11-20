"use client";

import { useState } from "react";
import Image from "next/image";
import { OPPORTUNITIES_DATA } from "@/data/opportunities";
import { FAQS_DATA } from "@/data/faq";
import {
  Users,
  MessageSquare,
  ArrowUpRight,
  ChevronDown,
  ChevronUp,
  Search,
  PlusCircle,
  Clock,
  Sparkles,
  HeartHandshake,
} from "lucide-react";
import { SwissCornerMarks, CartographicStamp, ArchivalBadge } from "@/components/ui/SwissAccents";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function CommunityView() {
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
        "Delegates taking their very first steps into committee rooms. Access structured procedural guidance, glossary breakdowns, and accessible foundational resources.",
      tag: "Foundation",
    },
    {
      role: "Regular & Experienced Delegates",
      description:
        "Delegates with multiple conferences seeking deeper geopolitical context, collaborative drafting discussions, and foreign policy insights.",
      tag: "Strategy",
    },
    {
      role: "Executive Board Members & Chairs",
      description:
        "Presiding officers and committee leaders. Engage with fellow chairs, exchange study guide approaches, and support the growth of upcoming delegates.",
      tag: "Leadership",
    },
    {
      role: "MUN Organizers & Secretariats",
      description:
        "Secretariats looking to connect with passionate delegates, publicize verified opportunities, and uphold ethical conference standards.",
      tag: "Institutional",
    },
    {
      role: "Students of International Affairs",
      description:
        "Youth curious about diplomacy, geopolitical policy, global governance, and international institutions.",
      tag: "Academic",
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
              location="COMMUNITY FORUM // YOUTH DIALOGUE"
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
                DELEGATES brings together beginner delegates, seasoned competitors, and Executive Board members into a unified, principled platform. No paywalls, no barriers—just meaningful dialogue and global curiosity.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fadeInUp delay-200">
                <a
                  href="https://chat.whatsapp.com/DgERPMtTm4f0ONCfet1ebv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#171717] text-[#F4F0E8] font-interface text-xs uppercase tracking-[0.18em] font-semibold hover:bg-black transition-colors active:scale-[0.98] w-full sm:w-auto"
                >
                  <MessageSquare className="w-4 h-4 text-[#25D366]" />
                  <span>Join WhatsApp Community</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <button
                  onClick={handleOpenJoinModal}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-[#171717] text-[#171717] font-interface text-xs uppercase tracking-[0.18em] font-semibold hover:bg-[#171717] hover:text-[#F4F0E8] transition-colors active:scale-[0.98] w-full sm:w-auto"
                >
                  <span>Community Overview</span>
                </button>
              </div>

              <div className="pt-4 border-t border-[#D8D0C4] flex items-center justify-between text-xs text-[#8E877C] font-interface animate-fadeInUp delay-250">
                <span>Inclusive Multi-Tier Network</span>
                <span>Zero Barriers · Open Deliberation</span>
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
                      “Where national stances are articulated, tested, and resolved through structured parliamentary dialogue.”
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Truthful Introduction: A Community Built Around Dialogue */}
      <section className="py-16 md:py-24 border-b border-[#D8D0C4] bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <ScrollReveal>
            <div className="relative border border-[#D8D0C4] bg-[#F4F0E8] p-8 sm:p-12 space-y-6 card-hover-lift">
              <SwissCornerMarks size="w-3 h-3" />
              <div className="space-y-3">
                <span className="font-interface text-[10px] uppercase tracking-[0.22em] text-[#68645D] font-semibold block">
                  Foundational Purpose
                </span>
                <h2 className="font-editorial text-3xl sm:text-4xl text-[#171717]">
                  A Community Built Around Dialogue
                </h2>
              </div>

              <p className="font-interface text-sm sm:text-base text-[#68645D] leading-relaxed">
                DELEGATES brings together MUN enthusiasts, aspiring diplomats, and individuals interested in international affairs. We aim to create opportunities for learning, meaningful conversations, and connections grounded in shared principles.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-white border border-[#D8D0C4] space-y-2">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-[#25D366]" />
                    <h3 className="font-editorial text-base text-[#171717]">
                      Open Community Forum
                    </h3>
                  </div>
                  <p className="text-xs text-[#68645D] leading-relaxed">
                    Accessible to anyone passionate about Model UN and international affairs. Share perspectives and stay informed.
                  </p>
                </div>

                <div className="p-4 bg-white border border-[#D8D0C4] space-y-2">
                  <div className="flex items-center gap-2">
                    <HeartHandshake className="w-4 h-4 text-[#171717]" />
                    <h3 className="font-editorial text-base text-[#171717]">
                      Principled Collaboration
                    </h3>
                  </div>
                  <p className="text-xs text-[#68645D] leading-relaxed">
                    Open to all delegates; dedicated working groups and focused initiatives are planned for future phases as the community expands.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#D8D0C4] flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs font-interface text-[#8E877C]">
                  Direct WhatsApp access open to all interested participants
                </span>
                <a
                  href="https://chat.whatsapp.com/DgERPMtTm4f0ONCfet1ebv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#171717] text-white text-xs font-interface uppercase tracking-wider font-semibold hover:bg-black transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>Join Community Group</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. Who the Community is For */}
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

          {/* Empty State per user requirement 2.1 */}
          {filteredOpportunities.length === 0 ? (
            <ScrollReveal>
              <div className="relative border border-[#D8D0C4] bg-white p-12 sm:p-16 text-center max-w-2xl mx-auto space-y-5 card-hover-lift">
                <SwissCornerMarks size="w-3 h-3" />
                <div className="w-14 h-14 mx-auto rounded-full bg-[#F4F0E8] border border-[#D8D0C4] flex items-center justify-center text-[#171717]">
                  <Clock className="w-6 h-6 text-[#68645D]" />
                </div>
                <div className="space-y-2">
                  <span className="font-interface text-[10px] uppercase tracking-[0.22em] text-[#8E877C] font-semibold block">
                    Circuit Listings
                  </span>
                  <h3 className="font-editorial text-2xl sm:text-3xl text-[#171717]">
                    No Opportunities Listed Yet
                  </h3>
                </div>
                <p className="font-interface text-sm text-[#68645D] leading-relaxed max-w-lg mx-auto">
                  We&apos;re working on bringing relevant MUN conferences, initiatives, and opportunities to the DELEGATES community. Check back soon for updates.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={handleOpenSubmitModal}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#171717] text-[#F4F0E8] text-xs font-interface uppercase tracking-wider hover:bg-black transition-colors"
                  >
                    <PlusCircle className="w-3.5 h-3.5 text-[#B89358]" />
                    <span>Submit an Opportunity</span>
                  </button>
                </div>
              </div>
            </ScrollReveal>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredOpportunities.map((opp, idx) => (
                <ScrollReveal key={opp.id} delay={(idx % 3) * 60}>
                  <div className="relative border border-[#D8D0C4] bg-white p-6 sm:p-7 flex flex-col justify-between hover:border-[#171717] transition-all group card-hover-lift h-full">
                    <SwissCornerMarks size="w-2 h-2" />
                    <div className="space-y-4">
                      <span className="font-interface text-[10px] font-semibold uppercase tracking-[0.18em] px-2.5 py-1 bg-[#EAE4D9] text-[#171717] border border-[#D8D0C4]">
                        {opp.category}
                      </span>
                      <h3 className="font-editorial text-lg text-[#171717]">{opp.title}</h3>
                      <p className="text-xs text-[#68645D]">{opp.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 5. Frequently Asked Questions */}
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
                  <div className="border border-[#D8D0C4] bg-white transition-all card-hover-lift">
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
                alt="DELEGATES Official Monogram Emblem"
                fill
                sizes="40px"
                className="object-contain"
              />
            </div>

            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-white font-normal">
              Ready to participate in principled dialogue?
            </h2>

            <p className="font-interface text-sm text-[#C9C2B7] max-w-xl mx-auto leading-relaxed">
              Anyone interested in diplomacy and Model UN is welcomed into our open community forum. Specialized cohorts and working groups are planned for future phases as the community grows.
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
                <span>Community Details</span>
              </button>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
