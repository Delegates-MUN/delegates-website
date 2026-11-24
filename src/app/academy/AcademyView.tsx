"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ACADEMY_RESOURCES } from "@/data/academy";
import { AcademyResource } from "@/types";
import {
  BookOpen,
  Search,
  Clock,
  Award,
  CheckCircle,
  ArrowRight,
  Sparkles,
  HelpCircle,
  Compass,
  X,
  MessageSquare,
  ArrowUpRight,
} from "lucide-react";
import { SwissCornerMarks, CartographicStamp, ArchivalBadge } from "@/components/ui/SwissAccents";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function AcademyView() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeGuide, setActiveGuide] = useState<AcademyResource | null>(null);
  const [activeRopTab, setActiveRopTab] = useState<"points" | "motions" | "yields" | "speech">("points");

  const categories = [
    "All",
    "Rules of Procedure",
    "Public Speaking",
    "Negotiation & Diplomacy",
    "Resolution Drafting",
    "Research & Country Preparation",
  ];

  const filteredResources = ACADEMY_RESOURCES.filter((res) => {
    const matchesCat = selectedCategory === "All" || res.category === selectedCategory;
    const matchesQuery =
      res.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  return (
    <div className="w-full bg-[#F4F0E8] text-[#202020]">
      {/* 1. Masthead & Hero */}
      <section className="border-b border-[#D8D0C4] pt-14 pb-16 md:pt-20 md:pb-24 bg-[#F4F0E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 animate-fadeIn">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EAE4D9] border border-[#D8D0C4] text-[#171717]">
              <BookOpen className="w-3.5 h-3.5 text-[#68645D]" />
              <span className="font-interface text-[11px] uppercase tracking-[0.2em] font-medium">
                Pillar 02 — Academy · Open Library
              </span>
            </div>
            <CartographicStamp
              location="OPEN ACCESS CURRICULUM"
              coordinates="ZERO PAYWALLS · 100% FREE"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Col: Honest, Grounded Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-[#171717] font-normal leading-tight animate-fadeInUp delay-100">
                The Delegate Field Manual.
                <br />
                <span className="italic font-serif font-light text-[#3A3835]">
                  Learn without gatekeeping.
                </span>
              </h1>

              <p className="font-interface text-base sm:text-lg text-[#68645D] leading-relaxed max-w-2xl animate-fadeInUp delay-150">
                Practical statesmanship, rules of procedure, and strategy guides written by delegates who have actually sat in committee rooms till 10 PM drafting resolutions. No $200 masterclasses, no fluff—just clear, battle-tested tools.
              </p>

              <div className="pt-2 flex flex-wrap gap-3 text-xs font-interface text-[#171717] font-medium animate-fadeInUp delay-200">
                <span className="px-3 py-1 bg-white border border-[#D8D0C4] shadow-xs">
                  ✓ Beginner to Advanced
                </span>
                <span className="px-3 py-1 bg-white border border-[#D8D0C4] shadow-xs">
                  ✓ Instant Cheat Sheets
                </span>
                <span className="px-3 py-1 bg-white border border-[#D8D0C4] shadow-xs">
                  ✓ Written by Real Debaters
                </span>
              </div>
            </div>

            {/* Right Col: Editorial Photograph */}
            <div className="lg:col-span-5 animate-fadeIn delay-150">
              <div className="relative aspect-[16/11] w-full border border-[#D8D0C4] overflow-hidden bg-[#171717] group card-hover-lift">
                <SwissCornerMarks />
                <Image
                  src="/assets/editorial/academy-amphitheater.jpg"
                  alt="Neoclassical diplomatic lecture amphitheater"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover grayscale contrast-110 opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent p-5 sm:p-6 flex flex-col justify-between">
                  <div className="flex justify-end">
                    <ArchivalBadge label="DELEGATES" classification="FIELD MANUAL" variant="dark" />
                  </div>
                  <div className="text-white text-xs font-interface space-y-1">
                    <span className="text-[10px] uppercase tracking-widest text-[#B89358] block font-semibold">
                      Democratizing MUN Knowledge
                    </span>
                    <p className="font-editorial italic text-xs sm:text-sm text-white/90">
                      “Every student deserves the tools to speak up and negotiate with conviction.”
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Interactive ROP Quick-Reference Cheat Sheet (Real Human Utility!) */}
      <section className="py-16 md:py-20 bg-white border-b border-[#D8D0C4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#D8D0C4] pb-6">
            <div className="space-y-2">
              <span className="font-interface text-[11px] uppercase tracking-[0.2em] font-semibold text-[#68645D]">
                Interactive Quick Reference
              </span>
              <h2 className="font-editorial text-2xl sm:text-3xl md:text-4xl text-[#171717]">
                Rules of Procedure (ROP) Cheat Sheet
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#68645D] max-w-md font-interface">
              Bookmark this on your phone. When debate heats up, check procedural rules, points, and speaking structures at a glance.
            </p>
          </div>

          {/* ROP Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 border-b border-[#D8D0C4] pb-4">
            <button
              onClick={() => setActiveRopTab("points")}
              className={`py-2.5 px-4 text-xs font-interface uppercase tracking-wider font-semibold transition-all border ${
                activeRopTab === "points"
                  ? "bg-[#171717] text-white border-[#171717]"
                  : "bg-[#F4F0E8] text-[#68645D] border-[#D8D0C4] hover:text-[#171717]"
              }`}
            >
              1. Points (4 Types)
            </button>
            <button
              onClick={() => setActiveRopTab("motions")}
              className={`py-2.5 px-4 text-xs font-interface uppercase tracking-wider font-semibold transition-all border ${
                activeRopTab === "motions"
                  ? "bg-[#171717] text-white border-[#171717]"
                  : "bg-[#F4F0E8] text-[#68645D] border-[#D8D0C4] hover:text-[#171717]"
              }`}
            >
              2. Key Motions
            </button>
            <button
              onClick={() => setActiveRopTab("yields")}
              className={`py-2.5 px-4 text-xs font-interface uppercase tracking-wider font-semibold transition-all border ${
                activeRopTab === "yields"
                  ? "bg-[#171717] text-white border-[#171717]"
                  : "bg-[#F4F0E8] text-[#68645D] border-[#D8D0C4] hover:text-[#171717]"
              }`}
            >
              3. Yields & GSL
            </button>
            <button
              onClick={() => setActiveRopTab("speech")}
              className={`py-2.5 px-4 text-xs font-interface uppercase tracking-wider font-semibold transition-all border ${
                activeRopTab === "speech"
                  ? "bg-[#171717] text-white border-[#171717]"
                  : "bg-[#F4F0E8] text-[#68645D] border-[#D8D0C4] hover:text-[#171717]"
              }`}
            >
              4. 90s Speech Formula
            </button>
          </div>

          {/* Tab Content Panels */}
          <div className="bg-[#F4F0E8] border border-[#D8D0C4] p-6 sm:p-8 relative">
            <SwissCornerMarks />
            {activeRopTab === "points" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
                <div className="p-5 bg-white border border-[#D8D0C4] space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-editorial text-lg text-[#171717] font-semibold">
                      Point of Personal Privilege
                    </span>
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 bg-[#EAE4D9] border border-[#D8D0C4]">
                      Can Interrupt*
                    </span>
                  </div>
                  <p className="text-xs text-[#68645D] leading-relaxed">
                    Used when a physical condition impairs your ability to participate (e.g. room temperature, cannot hear the speaker, microphone feedback).
                  </p>
                  <p className="text-[11px] font-interface text-[#171717] font-medium pt-1">
                    *Rule: Only interrupts a speaker if you cannot hear them. Otherwise wait until they finish.
                  </p>
                </div>

                <div className="p-5 bg-white border border-[#D8D0C4] space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-editorial text-lg text-[#171717] font-semibold">
                      Point of Order
                    </span>
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 bg-[#EAE4D9] border border-[#D8D0C4]">
                      Procedural Error
                    </span>
                  </div>
                  <p className="text-xs text-[#68645D] leading-relaxed">
                    Raised when the chair or a delegate commits a procedural error according to the rules of procedure (e.g. speaking order skipped, motion voted incorrectly).
                  </p>
                  <p className="text-[11px] font-interface text-[#171717] font-medium pt-1">
                    Cannot interrupt a speaker. State the specific procedural rule that was breached.
                  </p>
                </div>

                <div className="p-5 bg-white border border-[#D8D0C4] space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-editorial text-lg text-[#171717] font-semibold">
                      Point of Parliamentary Inquiry
                    </span>
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 bg-[#EAE4D9] border border-[#D8D0C4]">
                      Clarification
                    </span>
                  </div>
                  <p className="text-xs text-[#68645D] leading-relaxed">
                    A question directed to the chair to clarify rules of procedure or the current state of debate (e.g. &quot;Are we currently in formal debate?&quot;).
                  </p>
                  <p className="text-[11px] font-interface text-[#171717] font-medium pt-1">
                    Cannot be used to ask substantive questions about country policy or the agenda topic.
                  </p>
                </div>

                <div className="p-5 bg-white border border-[#D8D0C4] space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-editorial text-lg text-[#171717] font-semibold">
                      Point of Information (POI)
                    </span>
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 bg-[#EAE4D9] border border-[#D8D0C4]">
                      Substantive Question
                    </span>
                  </div>
                  <p className="text-xs text-[#68645D] leading-relaxed">
                    A question directed to another delegate regarding their speech or country position. Only permitted if the speaker explicitly yielded remaining time to POIs.
                  </p>
                  <p className="text-[11px] font-interface text-[#171717] font-medium pt-1">
                    Keep questions concise and focused on verifiable policy facts rather than personal accusations.
                  </p>
                </div>
              </div>
            )}

            {activeRopTab === "motions" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
                <div className="p-5 bg-white border border-[#D8D0C4] space-y-2">
                  <span className="font-editorial text-lg text-[#171717] font-semibold block">
                    Motion for a Moderated Caucus
                  </span>
                  <p className="text-xs text-[#68645D] leading-relaxed">
                    Suspends the GSL for targeted debate on a specific sub-topic. Must state: Topic, Total Time, and Individual Speaker Time.
                  </p>
                  <div className="p-2.5 bg-[#F4F0E8] border border-[#D8D0C4] text-[11px] font-mono text-[#171717]">
                    Example: &quot;Motion for a 9-minute moderated caucus with 45-second speaking time to discuss maritime trade corridors.&quot;
                  </div>
                </div>

                <div className="p-5 bg-white border border-[#D8D0C4] space-y-2">
                  <span className="font-editorial text-lg text-[#171717] font-semibold block">
                    Motion for an Unmoderated Caucus
                  </span>
                  <p className="text-xs text-[#68645D] leading-relaxed">
                    Suspends formal rules completely. Delegates leave their seats, discuss in informal circles, form voting blocs, and draft working papers.
                  </p>
                  <div className="p-2.5 bg-[#F4F0E8] border border-[#D8D0C4] text-[11px] font-mono text-[#171717]">
                    Example: &quot;Motion for an unmoderated caucus for 15 minutes to formalize working paper clauses.&quot;
                  </div>
                </div>

                <div className="p-5 bg-white border border-[#D8D0C4] space-y-2">
                  <span className="font-editorial text-lg text-[#171717] font-semibold block">
                    Motion to Introduce a Working Paper
                  </span>
                  <p className="text-xs text-[#68645D] leading-relaxed">
                    Raised once your working paper is reviewed and approved by the Dais. Allows sponsors to present the document to the committee for reading and feedback.
                  </p>
                </div>

                <div className="p-5 bg-white border border-[#D8D0C4] space-y-2">
                  <span className="font-editorial text-lg text-[#171717] font-semibold block">
                    Motion to Close Debate
                  </span>
                  <p className="text-xs text-[#68645D] leading-relaxed">
                    Moves the committee directly into substantive voting on all introduced draft resolutions. Requires a two-thirds majority and halts all further speeches.
                  </p>
                </div>
              </div>
            )}

            {activeRopTab === "yields" && (
              <div className="space-y-4 animate-fadeIn">
                <div className="p-4 bg-white border border-[#D8D0C4] space-y-2">
                  <h4 className="font-editorial text-base text-[#171717] font-semibold">
                    The Golden Rule of Yields
                  </h4>
                  <p className="text-xs text-[#68645D] leading-relaxed">
                    Yields <strong>ONLY apply during the General Speakers List (GSL)</strong> when you have unused time left. You cannot yield during a moderated caucus. If you finish early in a moderated caucus, simply say &quot;Thank you, I conclude my speech.&quot;
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 bg-white border border-[#D8D0C4] space-y-1">
                    <span className="font-interface text-xs font-semibold text-[#171717] uppercase block">
                      1. Yield to the Chair
                    </span>
                    <p className="text-xs text-[#68645D]">
                      Your remaining time is absorbed by the Dais. The chair calls the next speaker on the GSL. The safest yield.
                    </p>
                  </div>
                  <div className="p-4 bg-white border border-[#D8D0C4] space-y-1">
                    <span className="font-interface text-xs font-semibold text-[#171717] uppercase block">
                      2. Yield to Another Delegate
                    </span>
                    <p className="text-xs text-[#68645D]">
                      Another delegate inherits your remaining seconds (they must agree). They cannot yield the time again.
                    </p>
                  </div>
                  <div className="p-4 bg-white border border-[#D8D0C4] space-y-1">
                    <span className="font-interface text-xs font-semibold text-[#171717] uppercase block">
                      3. Yield to Points of Info
                    </span>
                    <p className="text-xs text-[#68645D]">
                      The floor can ask you questions within your remaining time. Only choose this if you are confident in your research!
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeRopTab === "speech" && (
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 animate-fadeIn">
                <div className="p-4 bg-white border border-[#D8D0C4] space-y-2">
                  <span className="px-2 py-0.5 bg-[#171717] text-white text-[10px] font-mono uppercase font-semibold">
                    01 · 15 Seconds
                  </span>
                  <h4 className="font-editorial text-base text-[#171717] font-semibold">
                    The Hook
                  </h4>
                  <p className="text-xs text-[#68645D]">
                    Start with a striking fact, human consequence, or treaty friction. Never waste time on ritualistic pleasantries.
                  </p>
                </div>
                <div className="p-4 bg-white border border-[#D8D0C4] space-y-2">
                  <span className="px-2 py-0.5 bg-[#171717] text-white text-[10px] font-mono uppercase font-semibold">
                    02 · 25 Seconds
                  </span>
                  <h4 className="font-editorial text-base text-[#171717] font-semibold">
                    Policy Anchor
                  </h4>
                  <p className="text-xs text-[#68645D]">
                    State your country&apos;s clear sovereign stance. Are you a donor, a recipient, a neutral arbiter, or a littoral stakeholder?
                  </p>
                </div>
                <div className="p-4 bg-white border border-[#D8D0C4] space-y-2">
                  <span className="px-2 py-0.5 bg-[#171717] text-white text-[10px] font-mono uppercase font-semibold">
                    03 · 25 Seconds
                  </span>
                  <h4 className="font-editorial text-base text-[#171717] font-semibold">
                    Hard Evidence
                  </h4>
                  <p className="text-xs text-[#68645D]">
                    Cite an exact UN resolution, bilateral pact, or trade metric. Concrete citations make delegates grab their pens.
                  </p>
                </div>
                <div className="p-4 bg-white border border-[#D8D0C4] space-y-2">
                  <span className="px-2 py-0.5 bg-[#171717] text-white text-[10px] font-mono uppercase font-semibold">
                    04 · 15 Seconds
                  </span>
                  <h4 className="font-editorial text-base text-[#171717] font-semibold">
                    Call to Caucus
                  </h4>
                  <p className="text-xs text-[#68645D]">
                    Name the regional partners or working group you invite to draft with you in the next unmoderated caucus.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 3. The Guide Library (Search & Category Filtering) */}
      <section className="py-20 md:py-28 bg-[#F4F0E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Header & Search */}
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#D8D0C4] pb-6 gap-6">
            <div className="space-y-2">
              <span className="font-interface text-xs uppercase tracking-[0.2em] text-[#68645D]">
                Curriculum Library
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl text-[#171717]">
                Featured Masterclasses & Guides
              </h2>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <input
                type="text"
                placeholder="Search guides (e.g. ROP, GSL, caucus)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 bg-white border border-[#D8D0C4] text-xs font-interface focus:outline-none focus:border-[#171717] text-[#171717] placeholder:text-[#8E877C]"
              />
              <Search className="w-4 h-4 text-[#8E877C] absolute left-3 top-3 pointer-events-none" />
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-interface uppercase tracking-wider transition-all border ${
                  selectedCategory === cat
                    ? "bg-[#171717] text-white border-[#171717]"
                    : "bg-white text-[#68645D] border-[#D8D0C4] hover:border-[#171717] hover:text-[#171717]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Guide Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((res, idx) => (
              <ScrollReveal key={res.id} delay={(idx % 3) * 60} className="h-full">
                <div className="relative border border-[#D8D0C4] bg-white p-6 sm:p-8 flex flex-col justify-between h-full card-hover-lift group">
                  <SwissCornerMarks size="w-2.5 h-2.5" />
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-[10px] font-interface uppercase tracking-wider text-[#8E877C]">
                      <span className="px-2 py-0.5 bg-[#F4F0E8] border border-[#D8D0C4] font-medium text-[#171717]">
                        {res.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{res.readingTime}</span>
                      </span>
                    </div>

                    <h3 className="font-editorial text-xl sm:text-2xl text-[#171717] leading-snug group-hover:text-black">
                      {res.title}
                    </h3>

                    <p className="text-xs text-[#68645D] leading-relaxed line-clamp-3">
                      {res.summary}
                    </p>

                    {/* Key takeaways highlight */}
                    <div className="pt-2 border-t border-[#D8D0C4]/60 space-y-1.5">
                      <span className="text-[10px] font-interface uppercase tracking-widest text-[#B89358] font-semibold block">
                        Core Takeaway
                      </span>
                      <p className="text-[11px] text-[#171717] font-interface italic line-clamp-2">
                        “{res.keyTakeaways[0]}”
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#D8D0C4] flex items-center justify-between">
                    <span className="text-[10px] font-interface uppercase tracking-widest text-[#8E877C] font-semibold">
                      Level: {res.difficulty}
                    </span>
                    <button
                      onClick={() => setActiveGuide(res)}
                      className="inline-flex items-center gap-1.5 text-xs font-interface uppercase tracking-wider font-semibold text-[#171717] group-hover:underline"
                    >
                      <span>Read Guide</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Full Guide Reading Modal */}
      {activeGuide && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
          <div className="bg-[#F4F0E8] border border-[#D8D0C4] max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-10 relative space-y-6 shadow-2xl">
            <button
              onClick={() => setActiveGuide(null)}
              className="absolute top-4 right-4 p-2 text-[#171717] hover:bg-[#EAE4D9] transition-colors"
              aria-label="Close Guide"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-3 border-b border-[#D8D0C4] pb-6">
              <div className="flex items-center gap-3 text-xs font-interface text-[#8E877C]">
                <span className="px-2.5 py-0.5 bg-[#171717] text-white uppercase text-[10px] font-semibold">
                  {activeGuide.category}
                </span>
                <span>·</span>
                <span>{activeGuide.readingTime}</span>
                <span>·</span>
                <span>{activeGuide.difficulty}</span>
              </div>
              <h2 className="font-editorial text-2xl sm:text-3xl md:text-4xl text-[#171717] leading-snug">
                {activeGuide.title}
              </h2>
            </div>

            {/* Key takeaways callout box */}
            <div className="p-5 bg-white border border-[#D8D0C4] space-y-2.5">
              <span className="font-interface text-[10px] uppercase tracking-widest text-[#B89358] font-semibold block">
                Executive Takeaways
              </span>
              <ul className="space-y-1.5 text-xs text-[#171717] font-interface">
                {activeGuide.keyTakeaways.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#171717] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Guide paragraphs */}
            <div className="space-y-4 text-sm sm:text-base text-[#171717] leading-relaxed font-editorial">
              {activeGuide.content.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {/* Footer with WhatsApp CTA */}
            <div className="pt-6 border-t border-[#D8D0C4] flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-[#68645D] font-interface">
                Have questions or want to discuss this topic with fellow delegates?
              </span>
              <a
                href="https://chat.whatsapp.com/DgERPMtTm4f0ONCfet1ebv"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#171717] text-white text-xs font-interface uppercase tracking-wider font-semibold hover:bg-black transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                <span>Ask in Community</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
