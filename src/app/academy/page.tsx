"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ACADEMY_RESOURCES } from "@/data/academy";
import { AcademyResource } from "@/types";
import ClauseBuilder from "@/components/academy/ClauseBuilder";
import RoPMatrix from "@/components/academy/RoPMatrix";
import DossierWorksheet from "@/components/academy/DossierWorksheet";
import { SwissCornerMarks, CartographicStamp, ArchivalBadge } from "@/components/ui/SwissAccents";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import {
  BookOpen,
  Search,
  Clock,
  ArrowRight,
  X,
  CheckCircle,
  SlidersHorizontal,
  Wrench,
  Bookmark,
  Share2,
} from "lucide-react";

export default function AcademyPage() {
  const [activeMainTab, setActiveMainTab] = useState<"modules" | "lab">("modules");
  const [activeLabTool, setActiveLabTool] = useState<"clause" | "rop" | "dossier">("clause");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");
  const [readingResource, setReadingResource] = useState<AcademyResource | null>(null);
  const [textSize, setTextSize] = useState<"sm" | "base" | "lg">("base");
  const [bookmarked, setBookmarked] = useState<string[]>(() => {
    if (typeof window !== "undefined") {
      try {
        return JSON.parse(localStorage.getItem("dlgts_bookmarked_guides") || "[]");
      } catch {
        return [];
      }
    }
    return [];
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      if (params.get("tab") === "tools" || params.get("tab") === "lab") {
        setActiveMainTab("lab");
      }
      const tool = params.get("tool");
      if (tool === "clause" || tool === "rop" || tool === "dossier") {
        setActiveLabTool(tool);
      }
    }
  }, []);

  const toggleBookmark = (slug: string) => {
    const updated = bookmarked.includes(slug)
      ? bookmarked.filter((s) => s !== slug)
      : [...bookmarked, slug];
    setBookmarked(updated);
    if (typeof window !== "undefined") {
      localStorage.setItem("dlgts_bookmarked_guides", JSON.stringify(updated));
    }
  };

  const categories = [
    "All",
    "Rules of Procedure",
    "Position Papers",
    "Research & Country Preparation",
    "Negotiation & Diplomacy",
    "Executive Board Preparation",
    "Resolution Drafting",
  ];

  const difficulties = ["All", "Beginner", "Intermediate", "Advanced"];

  const filteredResources = ACADEMY_RESOURCES.filter((item) => {
    const matchesCat =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchesDiff =
      selectedDifficulty === "All" || item.difficulty === selectedDifficulty;
    const matchesQuery =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesDiff && matchesQuery;
  });

  return (
    <div className="w-full bg-[#F4F0E8] text-[#202020]">
      {/* 1. Editorial Hero */}
      <section className="border-b border-[#D8D0C4] pt-14 pb-16 md:pt-20 md:pb-24 bg-[#F4F0E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 animate-fadeIn">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EAE4D9] border border-[#D8D0C4] text-[#171717]">
              <BookOpen className="w-3.5 h-3.5 text-[#68645D]" />
              <span className="font-interface text-[11px] uppercase tracking-[0.2em] font-medium">
                Pillar 02 — Academy
              </span>
            </div>
            <CartographicStamp
              location="ACADEMY DIRECTORATE // AMPHITHEATER"
              coordinates="46°13′36″N 6°08′26″E"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Col: Narrative & Features */}
            <div className="lg:col-span-6 space-y-6">
              <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-[#171717] font-normal leading-tight animate-fadeInUp delay-100">
                Learn the art of diplomacy.
                <br />
                <span className="italic font-serif font-light text-[#3A3835]">
                  Grounded in law, procedure, and rigor.
                </span>
              </h1>

              <p className="font-interface text-base sm:text-lg text-[#68645D] leading-relaxed animate-fadeInUp delay-150">
                An open-access pedagogical library and interactive workbench for Model UN delegates, researchers, and aspiring chairs. We demystify parliamentary procedure, legal resolution drafting, and geopolitical dossier methodology.
              </p>

              <div className="pt-2 flex flex-wrap gap-4 text-xs font-interface text-[#171717] font-medium animate-fadeInUp delay-200">
                <span className="px-3 py-1 bg-[#EAE4D9] border border-[#D8D0C4]">Open Access</span>
                <span className="px-3 py-1 bg-[#EAE4D9] border border-[#D8D0C4]">Zero Paywalls</span>
                <span className="px-3 py-1 bg-[#EAE4D9] border border-[#D8D0C4]">3 Interactive Tools</span>
                <span className="px-3 py-1 bg-[#EAE4D9] border border-[#D8D0C4]">Peer-Reviewed</span>
              </div>
            </div>

            {/* Right Col: Grand Amphitheater Visual */}
            <div className="lg:col-span-6 animate-fadeIn delay-150">
              <div className="relative aspect-[16/10] w-full border border-[#D8D0C4] overflow-hidden bg-[#171717] group">
                <SwissCornerMarks />
                <Image
                  src="/assets/editorial/academy-amphitheater.jpg"
                  alt="Neoclassical diplomatic lecture amphitheater"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover grayscale contrast-125 opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent p-5 sm:p-6 flex flex-col justify-between">
                  <div className="flex justify-end">
                    <ArchivalBadge label="DIPLOMATIC AMPHITHEATER" classification="ACCREDITED" variant="dark" />
                  </div>
                  <div className="text-white text-xs font-interface space-y-1">
                    <span className="text-[10px] uppercase tracking-widest text-[#B89358] block">
                      The Hall of Deliberation
                    </span>
                    <p className="font-editorial italic text-xs sm:text-sm text-white/90">
                      “Where theoretical foreign policy is transformed into operational debate statesmanship.”
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Tab Navigation Bar: Educational Modules vs Interactive Diplomatic Lab */}
      <section className="border-b border-[#D8D0C4] bg-[#EAE4D9]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 sm:space-x-4 pt-3">
            <button
              onClick={() => setActiveMainTab("modules")}
              className={`pb-3 px-3 sm:px-5 font-interface text-xs sm:text-sm uppercase tracking-wider font-semibold border-b-2 transition-all flex items-center gap-2 ${
                activeMainTab === "modules"
                  ? "border-[#171717] text-[#171717]"
                  : "border-transparent text-[#68645D] hover:text-[#171717]"
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Curriculum Guides ({ACADEMY_RESOURCES.length})</span>
            </button>

            <button
              onClick={() => setActiveMainTab("lab")}
              className={`pb-3 px-3 sm:px-5 font-interface text-xs sm:text-sm uppercase tracking-wider font-semibold border-b-2 transition-all flex items-center gap-2 ${
                activeMainTab === "lab"
                  ? "border-[#171717] text-[#171717]"
                  : "border-transparent text-[#68645D] hover:text-[#171717]"
              }`}
            >
              <Wrench className="w-4 h-4" />
              <span>Interactive Diplomatic Lab (3 Tools)</span>
            </button>
          </div>
        </div>
      </section>

      {/* VIEW 1: Educational Modules & Guides */}
      {activeMainTab === "modules" && (
        <>
          {/* Search & Filter Bar */}
          <section className="border-b border-[#D8D0C4] bg-white py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
              <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
                {/* Search Box */}
                <div className="relative flex-grow max-w-md">
                  <Search className="w-4 h-4 text-[#68645D] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search modules, procedures, paper drafting..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-[#F4F0E8] border border-[#D8D0C4] text-xs text-[#171717] focus:outline-none focus:border-[#171717]"
                  />
                </div>

                {/* Difficulty Filter */}
                <div className="flex items-center gap-2">
                  <SlidersHorizontal className="w-3.5 h-3.5 text-[#68645D]" />
                  <span className="text-xs font-interface uppercase tracking-wider text-[#68645D]">
                    Difficulty:
                  </span>
                  <div className="flex items-center gap-1">
                    {difficulties.map((diff) => (
                      <button
                        key={diff}
                        onClick={() => setSelectedDifficulty(diff)}
                        className={`px-2.5 py-1 text-[11px] font-interface uppercase tracking-wider transition-colors border ${
                          selectedDifficulty === diff
                            ? "bg-[#171717] text-white border-[#171717]"
                            : "bg-white text-[#68645D] border-[#D8D0C4] hover:border-[#171717]"
                        }`}
                      >
                        {diff}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Category Pills */}
              <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-[#D8D0C4]/70">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1 font-interface text-xs uppercase tracking-wider transition-all border ${
                      selectedCategory === cat
                        ? "bg-[#171717] text-[#F4F0E8] border-[#171717]"
                        : "bg-[#F4F0E8] text-[#68645D] border-[#D8D0C4] hover:border-[#171717] hover:text-[#171717]"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Resources Grid */}
          <section className="py-16 md:py-24 bg-[#F4F0E8]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
              <ScrollReveal>
                <div className="flex items-center justify-between text-xs font-interface text-[#68645D]">
                  <span>
                    Showing {filteredResources.length} educational modules
                  </span>
                  <span>Public Learning Repository</span>
                </div>
              </ScrollReveal>

              {filteredResources.length === 0 ? (
                <div className="p-12 text-center bg-white border border-[#D8D0C4] space-y-3">
                  <p className="font-editorial text-lg text-[#171717]">
                    No guides match your filter selections.
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategory("All");
                      setSelectedDifficulty("All");
                    }}
                    className="mt-2 px-4 py-2 bg-[#171717] text-white text-xs uppercase tracking-wider font-interface"
                  >
                    Reset All Filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredResources.map((item, idx) => {
                    const isSaved = bookmarked.includes(item.slug);
                    return (
                      <ScrollReveal key={item.id} delay={(idx % 3) * 60}>
                        <div
                          id={item.slug}
                          className="relative border border-[#D8D0C4] bg-white p-7 sm:p-8 flex flex-col justify-between hover:border-[#171717] transition-all group card-hover-lift h-full"
                        >
                          <SwissCornerMarks size="w-2 h-2" />
                          {/* Bookmark Button */}
                          <button
                            onClick={() => toggleBookmark(item.slug)}
                            className={`absolute top-6 right-6 p-1.5 rounded-full border transition-colors ${
                              isSaved
                                ? "bg-[#171717] text-white border-[#171717]"
                                : "bg-white text-[#68645D] border-[#D8D0C4] hover:text-[#171717]"
                            }`}
                            title={isSaved ? "Remove Bookmark" : "Bookmark Guide"}
                          >
                            <Bookmark className="w-3.5 h-3.5 fill-current" />
                          </button>

                          <div className="space-y-4">
                            <div className="flex items-center gap-2">
                              <span className="font-interface text-[10px] font-semibold uppercase tracking-[0.18em] px-2.5 py-1 bg-[#EAE4D9] text-[#171717] border border-[#D8D0C4]">
                                {item.category}
                              </span>
                              <span className="font-interface text-[10px] uppercase tracking-wider px-2 py-0.5 border border-[#D8D0C4] text-[#68645D]">
                                {item.difficulty}
                              </span>
                            </div>

                            <div className="min-h-[3.75rem] flex items-start">
                              <h3 className="font-editorial text-xl text-[#171717] font-medium leading-snug group-hover:text-[#68645D] transition-colors pr-6">
                                <Link href={`/academy/${item.slug}`}>
                                  {item.title}
                                </Link>
                              </h3>
                            </div>

                            <p className="text-xs text-[#68645D] leading-relaxed line-clamp-3 min-h-[3.25rem]">
                              {item.summary}
                            </p>

                            <div className="space-y-1.5 pt-3 border-t border-[#D8D0C4]/70 min-h-[3.75rem]">
                              <span className="text-[10px] font-interface uppercase tracking-widest text-[#8E877C] block font-semibold">
                                Core Takeaways:
                              </span>
                              {item.keyTakeaways.slice(0, 2).map((takeaway, i) => (
                                <div
                                  key={i}
                                  className="flex items-start gap-2 text-[11px] text-[#202020]"
                                >
                                  <CheckCircle className="w-3 h-3 text-[#171717] flex-shrink-0 mt-0.5" />
                                  <span className="line-clamp-1">{takeaway}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="pt-6 mt-auto border-t border-[#D8D0C4] flex items-center justify-between">
                            <div className="flex items-center gap-1.5 text-xs text-[#68645D]">
                              <Clock className="w-3.5 h-3.5" />
                              <span>{item.readingTime}</span>
                            </div>

                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => setReadingResource(item)}
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#171717] text-[#F4F0E8] text-xs uppercase tracking-wider font-interface font-medium hover:bg-black transition-colors active:scale-[0.98]"
                              >
                                <span>Quick Read</span>
                              </button>
                              <Link
                                href={`/academy/${item.slug}`}
                                className="p-1.5 text-[#171717] hover:bg-[#EAE4D9] border border-[#D8D0C4] transition-colors"
                                title="Open dedicated shareable page"
                              >
                                <ArrowRight className="w-3.5 h-3.5" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </ScrollReveal>
                    );
                  })}
                </div>
              )}
            </div>
          </section>
        </>
      )}

      {/* VIEW 2: Interactive Diplomatic Lab */}
      {activeMainTab === "lab" && (
        <section className="py-12 md:py-20 bg-[#F4F0E8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 animate-fadeIn">
            {/* Tool Switcher */}
            <div className="flex flex-wrap items-center gap-2 p-1.5 bg-[#EAE4D9] border border-[#D8D0C4] max-w-fit">
              <button
                onClick={() => setActiveLabTool("clause")}
                className={`px-4 py-2 text-xs font-interface uppercase tracking-wider font-semibold transition-all ${
                  activeLabTool === "clause"
                    ? "bg-[#171717] text-[#F4F0E8] shadow-xs"
                    : "text-[#68645D] hover:text-[#171717]"
                }`}
              >
                01. Resolution Clause Builder
              </button>
              <button
                onClick={() => setActiveLabTool("rop")}
                className={`px-4 py-2 text-xs font-interface uppercase tracking-wider font-semibold transition-all ${
                  activeLabTool === "rop"
                    ? "bg-[#171717] text-[#F4F0E8] shadow-xs"
                    : "text-[#68645D] hover:text-[#171717]"
                }`}
              >
                02. RoP Decision Matrix
              </button>
              <button
                onClick={() => setActiveLabTool("dossier")}
                className={`px-4 py-2 text-xs font-interface uppercase tracking-wider font-semibold transition-all ${
                  activeLabTool === "dossier"
                    ? "bg-[#171717] text-[#F4F0E8] shadow-xs"
                    : "text-[#68645D] hover:text-[#171717]"
                }`}
              >
                03. Country Strategy Planner
              </button>
            </div>

            {/* Active Tool Render */}
            <div className="animate-fadeIn">
              {activeLabTool === "clause" && <ClauseBuilder />}
              {activeLabTool === "rop" && <RoPMatrix />}
              {activeLabTool === "dossier" && <DossierWorksheet />}
            </div>
          </div>
        </section>
      )}

      {/* Quick Modal Reader */}
      {readingResource && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/60 backdrop-blur-sm animate-fadeIn"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-3xl bg-[#F4F0E8] border border-[#D8D0C4] shadow-2xl p-6 sm:p-10 max-h-[90vh] overflow-y-auto text-[#202020]">
            <div className="absolute top-5 right-5 flex items-center gap-2">
              {/* Text Size Adjuster */}
              <div className="flex items-center border border-[#D8D0C4] bg-white text-xs">
                <button
                  onClick={() => setTextSize("sm")}
                  className={`px-2 py-1 ${textSize === "sm" ? "bg-[#171717] text-white" : "text-[#68645D]"}`}
                  title="Small text"
                >
                  A-
                </button>
                <button
                  onClick={() => setTextSize("base")}
                  className={`px-2 py-1 border-x border-[#D8D0C4] ${textSize === "base" ? "bg-[#171717] text-white" : "text-[#68645D]"}`}
                  title="Standard text"
                >
                  A
                </button>
                <button
                  onClick={() => setTextSize("lg")}
                  className={`px-2 py-1 ${textSize === "lg" ? "bg-[#171717] text-white" : "text-[#68645D]"}`}
                  title="Large text"
                >
                  A+
                </button>
              </div>

              <button
                onClick={() => setReadingResource(null)}
                className="p-1.5 text-[#68645D] hover:text-[#171717] hover:bg-[#EAE4D9] rounded-full transition-colors"
                aria-label="Close guide"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-6 pt-4">
              <div className="space-y-2 border-b border-[#D8D0C4] pb-4">
                <div className="flex items-center gap-3">
                  <span className="font-interface text-xs font-semibold uppercase tracking-[0.2em] px-2.5 py-1 bg-[#171717] text-[#F4F0E8]">
                    {readingResource.category}
                  </span>
                  <span className="text-xs font-interface uppercase text-[#68645D]">
                    {readingResource.difficulty} · {readingResource.readingTime}
                  </span>
                </div>
                <h2 className="font-editorial text-2xl sm:text-3xl text-[#171717] font-normal leading-snug pt-2">
                  {readingResource.title}
                </h2>
                <p className="text-xs font-interface text-[#68645D]">
                  Published {readingResource.publishedDate} · DELEGATES Academy Standard
                </p>
              </div>

              {/* Takeaways callout box */}
              <div className="p-4 bg-[#EAE4D9] border border-[#D8D0C4] space-y-2">
                <span className="text-xs font-interface uppercase tracking-wider font-semibold text-[#171717] block">
                  Key Takeaways for Delegates & Chairs:
                </span>
                <ul className="space-y-1.5">
                  {readingResource.keyTakeaways.map((point, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-xs text-[#202020]"
                    >
                      <CheckCircle className="w-3.5 h-3.5 text-[#171717] flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Comprehensive Paragraphs with customizable text size */}
              <div
                className={`space-y-4 text-[#202020] leading-relaxed font-interface ${
                  textSize === "sm" ? "text-xs" : textSize === "lg" ? "text-base" : "text-sm"
                }`}
              >
                {readingResource.content.map((p, idx) => (
                  <p key={idx} className="leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>

              {/* Footer Note */}
              <div className="pt-6 border-t border-[#D8D0C4] flex items-center justify-between text-xs text-[#68645D]">
                <Link
                  href={`/academy/${readingResource.slug}`}
                  className="font-interface font-semibold text-[#171717] hover:underline flex items-center gap-1"
                >
                  <span>Open Dedicated Page</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
                <button
                  onClick={() => setReadingResource(null)}
                  className="px-4 py-2 bg-[#171717] text-[#F4F0E8] text-xs uppercase tracking-wider font-interface"
                >
                  Close Guide
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


