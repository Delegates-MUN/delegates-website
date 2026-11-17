"use client";

import { useState } from "react";
import Image from "next/image";
import { ACADEMY_RESOURCES } from "@/data/academy";
import { AcademyResource } from "@/types";
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
  Bookmark,
} from "lucide-react";

export default function AcademyPage() {
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
              location="ACADEMY DIRECTORATE // CURRICULUM"
              coordinates="46°13′36″N 6°08′26″E"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Col: Narrative & Honest Introduction */}
            <div className="lg:col-span-6 space-y-6">
              <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-[#171717] font-normal leading-tight animate-fadeInUp delay-100">
                Learn. Understand. Engage.
              </h1>

              <p className="font-interface text-base sm:text-lg text-[#68645D] leading-relaxed animate-fadeInUp delay-150">
                The DELEGATES Academy aims to make Model United Nations knowledge more accessible through learning resources, practical guidance, and insights into diplomacy and international affairs.
              </p>

              <div className="pt-2 flex flex-wrap gap-4 text-xs font-interface text-[#171717] font-medium animate-fadeInUp delay-200">
                <span className="px-3 py-1 bg-[#EAE4D9] border border-[#D8D0C4]">Open Access</span>
                <span className="px-3 py-1 bg-[#EAE4D9] border border-[#D8D0C4]">Zero Paywalls</span>
                <span className="px-3 py-1 bg-[#EAE4D9] border border-[#D8D0C4]">Foundational Guides</span>
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
                  className="object-cover grayscale contrast-110 opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent p-5 sm:p-6 flex flex-col justify-between">
                  <div className="flex justify-end">
                    <ArchivalBadge label="PEDAGOGICAL VAULT" classification="OPEN SYLLABUS" variant="dark" />
                  </div>
                  <div className="text-white text-xs font-interface space-y-1">
                    <span className="text-[10px] uppercase tracking-widest text-[#B89358] block">
                      The Diplomatic Amphitheater
                    </span>
                    <p className="font-editorial italic text-xs sm:text-sm text-white/90">
                      “Where procedural knowledge and diplomatic tradecraft are shared openly with the next generation.”
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Search & Category Filters */}
      <section className="border-b border-[#D8D0C4] bg-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-grow max-w-md">
              <Search className="w-4 h-4 text-[#68645D] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search procedures, drafting guides, research methods..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-[#F4F0E8] border border-[#D8D0C4] text-xs text-[#171717] focus:outline-none focus:border-[#171717]"
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1 font-interface text-[11px] uppercase tracking-wider transition-all border ${
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

          {/* Difficulty Sub-Filter */}
          <div className="flex items-center gap-2 pt-2 border-t border-[#D8D0C4]/60 text-xs">
            <span className="text-[#8E877C] font-interface text-[11px] uppercase tracking-wider flex items-center gap-1">
              <SlidersHorizontal className="w-3 h-3" />
              Proficiency Level:
            </span>
            <div className="flex items-center gap-1.5">
              {difficulties.map((diff) => (
                <button
                  key={diff}
                  onClick={() => setSelectedDifficulty(diff)}
                  className={`px-2.5 py-0.5 text-[11px] font-interface transition-colors ${
                    selectedDifficulty === diff
                      ? "bg-[#171717] text-white font-medium"
                      : "text-[#68645D] hover:text-[#171717]"
                  }`}
                >
                  {diff}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Resources Grid or Empty State */}
      <section className="py-16 md:py-24 bg-[#F4F0E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredResources.length === 0 ? (
            <ScrollReveal>
              <div className="relative border border-[#D8D0C4] bg-white p-12 sm:p-16 text-center max-w-2xl mx-auto space-y-4 card-hover-lift">
                <SwissCornerMarks size="w-3 h-3" />
                <div className="w-12 h-12 mx-auto rounded-full bg-[#F4F0E8] border border-[#D8D0C4] flex items-center justify-center text-[#171717]">
                  <BookOpen className="w-5 h-5 text-[#68645D]" />
                </div>
                <h3 className="font-editorial text-2xl text-[#171717]">
                  No Guides Found
                </h3>
                <p className="font-interface text-sm text-[#68645D] leading-relaxed">
                  New learning resources are in the works. Stay connected for upcoming guides and educational content.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory("All");
                    setSelectedDifficulty("All");
                    setSearchQuery("");
                  }}
                  className="mt-4 px-5 py-2 bg-[#171717] text-[#F4F0E8] text-xs uppercase tracking-wider font-interface"
                >
                  Reset Filters
                </button>
              </div>
            </ScrollReveal>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredResources.map((item, idx) => {
                const isBookmarked = bookmarked.includes(item.slug);
                return (
                  <ScrollReveal key={item.id} delay={(idx % 3) * 75} className="h-full">
                    <div
                      id={item.slug}
                      className="relative border border-[#D8D0C4] bg-white p-7 sm:p-8 flex flex-col justify-between hover:border-[#171717] transition-all group card-hover-lift h-full"
                    >
                      <SwissCornerMarks size="w-2 h-2" />
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="font-interface text-[10px] uppercase tracking-[0.2em] px-2.5 py-1 bg-[#EAE4D9] text-[#171717] border border-[#D8D0C4] font-semibold">
                            {item.category}
                          </span>
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-interface text-[#8E877C] uppercase">
                              {item.difficulty}
                            </span>
                            <button
                              onClick={() => toggleBookmark(item.slug)}
                              className="text-[#8E877C] hover:text-[#171717] transition-colors p-1"
                              title={isBookmarked ? "Remove bookmark" : "Bookmark guide"}
                            >
                              <Bookmark
                                className={`w-3.5 h-3.5 ${
                                  isBookmarked ? "fill-[#171717] text-[#171717]" : ""
                                }`}
                              />
                            </button>
                          </div>
                        </div>

                        <h3 className="font-editorial text-2xl text-[#171717] group-hover:underline leading-snug">
                          {item.title}
                        </h3>

                        <p className="font-interface text-xs text-[#68645D] leading-relaxed line-clamp-3">
                          {item.summary}
                        </p>

                        <div className="space-y-2 pt-3 border-t border-[#D8D0C4]/70">
                          <span className="text-[10px] font-interface uppercase tracking-widest text-[#8E877C] block font-semibold">
                            Core Takeaways:
                          </span>
                          <ul className="space-y-1.5 text-xs text-[#202020]">
                            {item.keyTakeaways.slice(0, 2).map((takeaway, tIdx) => (
                              <li key={tIdx} className="flex items-start gap-2">
                                <CheckCircle className="w-3.5 h-3.5 text-[#171717] flex-shrink-0 mt-0.5" />
                                <span className="line-clamp-2 leading-tight">{takeaway}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="pt-6 mt-6 border-t border-[#D8D0C4] flex items-center justify-between text-xs">
                        <span className="font-interface text-[#8E877C] flex items-center gap-1 text-[11px]">
                          <Clock className="w-3 h-3" />
                          {item.readingTime}
                        </span>
                        <button
                          onClick={() => setReadingResource(item)}
                          className="inline-flex items-center gap-1 font-interface font-semibold uppercase tracking-wider text-[#171717] group-hover:underline"
                        >
                          <span>Open Guide</span>
                          <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                        </button>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* 4. Reading Drawer / Modal for Full Guide Content */}
      {readingResource && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-end bg-black/50 backdrop-blur-xs animate-fadeIn"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="fixed inset-0"
            onClick={() => setReadingResource(null)}
          />

          <div
            className="relative w-full max-w-2xl h-full bg-[#F4F0E8] text-[#202020] border-l border-[#D8D0C4] shadow-2xl p-6 sm:p-10 overflow-y-auto flex flex-col justify-between z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="space-y-6">
              {/* Drawer Controls Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-[#D8D0C4]">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-interface uppercase tracking-widest text-[#8E877C]">
                    Reading Size:
                  </span>
                  {(["sm", "base", "lg"] as const).map((size) => (
                    <button
                      key={size}
                      onClick={() => setTextSize(size)}
                      className={`px-2 py-0.5 text-xs font-mono uppercase ${
                        textSize === size
                          ? "bg-[#171717] text-white"
                          : "text-[#68645D] hover:text-[#171717]"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => setReadingResource(null)}
                  className="p-1.5 text-[#68645D] hover:text-[#171717] hover:bg-[#EAE4D9] rounded-full transition-colors"
                  aria-label="Close guide"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Guide Header */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-interface text-[#68645D]">
                  <span className="px-2.5 py-0.5 bg-[#EAE4D9] text-[#171717] font-semibold text-[10px] uppercase tracking-wider border border-[#D8D0C4]">
                    {readingResource.category}
                  </span>
                  <span>•</span>
                  <span>{readingResource.difficulty}</span>
                  <span>•</span>
                  <span>{readingResource.readingTime}</span>
                </div>

                <h2 className="font-editorial text-3xl sm:text-4xl text-[#171717] leading-tight">
                  {readingResource.title}
                </h2>

                <p className="font-interface text-sm text-[#68645D] italic">
                  {readingResource.summary}
                </p>
              </div>

              {/* Key Takeaways Box */}
              <div className="p-5 bg-white border border-[#D8D0C4] space-y-2">
                <span className="font-interface text-[10px] uppercase tracking-widest font-semibold text-[#171717] block">
                  Key Principles & Actionable Takeaways:
                </span>
                <ul className="space-y-2 text-xs text-[#202020]">
                  {readingResource.keyTakeaways.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-[#171717] flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Full Content Paragraphs */}
              <div
                className={`space-y-4 font-interface text-[#202020] leading-relaxed ${
                  textSize === "sm"
                    ? "text-xs"
                    : textSize === "lg"
                    ? "text-base sm:text-lg"
                    : "text-sm sm:text-base"
                }`}
              >
                {readingResource.content.map((para, pIdx) => (
                  <p key={pIdx}>{para}</p>
                ))}
              </div>
            </div>

            {/* Bottom Footer in Drawer */}
            <div className="pt-8 mt-8 border-t border-[#D8D0C4] flex items-center justify-between text-xs text-[#8E877C]">
              <span>DELEGATES Academy · Open Educational Resource</span>
              <button
                onClick={() => setReadingResource(null)}
                className="px-4 py-2 bg-[#171717] text-white uppercase tracking-wider text-xs font-interface"
              >
                Done Reading
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
