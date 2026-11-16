"use client";

import { useState } from "react";
import { ACADEMY_RESOURCES } from "@/data/academy";
import { AcademyResource } from "@/types";
import {
  BookOpen,
  Search,
  Clock,
  Award,
  ArrowRight,
  X,
  CheckCircle,
  FileText,
  SlidersHorizontal,
} from "lucide-react";

export default function AcademyPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");
  const [readingResource, setReadingResource] =
    useState<AcademyResource | null>(null);

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EAE4D9] border border-[#D8D0C4] text-[#171717]">
            <BookOpen className="w-3.5 h-3.5 text-[#68645D]" />
            <span className="font-interface text-[11px] uppercase tracking-[0.2em] font-medium">
              Pillar 02 — Academy
            </span>
          </div>

          <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-[#171717] font-normal max-w-4xl leading-tight">
            Learn the art of diplomacy.
            <br />
            <span className="italic">Grounded in law, procedure, and rigor.</span>
          </h1>

          <p className="font-interface text-base sm:text-lg text-[#68645D] max-w-2xl leading-relaxed">
            An open-access pedagogical library for Model UN delegates, researchers, and aspiring chairs. We demystify parliamentary procedure, legal resolution drafting, and geopolitical dossier methodology.
          </p>

          <div className="flex items-center gap-4 text-xs font-interface text-[#68645D] pt-2">
            <span>• Completely Free & Open Access</span>
            <span>• No Course Gating</span>
            <span>• Written by Chairs & Jurists</span>
          </div>
        </div>
      </section>

      {/* 2. Search & Filter Bar */}
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

      {/* 3. Resources Grid */}
      <section className="py-16 md:py-24 bg-[#F4F0E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex items-center justify-between text-xs font-interface text-[#68645D]">
            <span>
              Showing {filteredResources.length} educational modules
            </span>
            <span>Public Learning Repository</span>
          </div>

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
              {filteredResources.map((item) => (
                <div
                  key={item.id}
                  id={item.slug}
                  className="border border-[#D8D0C4] bg-white p-7 flex flex-col justify-between hover:border-[#171717] transition-all group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-interface text-[10px] font-semibold uppercase tracking-[0.18em] px-2.5 py-1 bg-[#EAE4D9] text-[#171717] border border-[#D8D0C4]">
                        {item.category}
                      </span>
                      <span className="font-interface text-[10px] uppercase tracking-wider px-2 py-0.5 border border-[#D8D0C4] text-[#68645D]">
                        {item.difficulty}
                      </span>
                    </div>

                    <div className="min-h-[3.75rem] flex items-start">
                      <h3 className="font-editorial text-xl text-[#171717] font-medium leading-snug group-hover:text-[#68645D] transition-colors">
                        {item.title}
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

                    <button
                      onClick={() => setReadingResource(item)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#171717] text-[#F4F0E8] text-xs uppercase tracking-wider font-interface font-medium hover:bg-black transition-colors"
                    >
                      <span>Read Guide</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 4. Full Guide Reading Drawer / Modal */}
      {readingResource && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/60 backdrop-blur-sm animate-fadeIn"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-3xl bg-[#F4F0E8] border border-[#D8D0C4] shadow-2xl p-6 sm:p-10 max-h-[90vh] overflow-y-auto text-[#202020]">
            <button
              onClick={() => setReadingResource(null)}
              className="absolute top-5 right-5 p-2 text-[#68645D] hover:text-[#171717] hover:bg-[#EAE4D9] rounded-full transition-colors"
              aria-label="Close guide"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-6">
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

              {/* Comprehensive Paragraphs */}
              <div className="space-y-4 text-sm text-[#202020] leading-relaxed font-interface">
                {readingResource.content.map((p, idx) => (
                  <p key={idx} className="leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>

              {/* Footer Note */}
              <div className="pt-6 border-t border-[#D8D0C4] flex items-center justify-between text-xs text-[#68645D]">
                <span>
                  Part of DELEGATES Academy Open Curriculum
                </span>
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
