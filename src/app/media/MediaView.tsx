"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MEDIA_ARTICLES } from "@/data/media";
import { MediaArticle } from "@/types";
import {
  Newspaper,
  MessageSquare,
  ArrowUpRight,
  Search,
  Clock,
  User,
  ArrowRight,
  BookOpen,
  X,
  Share2,
  Check,
} from "lucide-react";
import { SwissCornerMarks, CartographicStamp, ArchivalBadge } from "@/components/ui/SwissAccents";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function MediaView() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeArticle, setActiveArticle] = useState<MediaArticle | null>(null);
  const [copied, setCopied] = useState(false);

  const categories = [
    "All",
    "MUN Insights",
    "Diplomacy & International Relations",
    "Geopolitics",
  ];

  const filteredArticles = MEDIA_ARTICLES.filter((article) => {
    const matchesCat =
      selectedCategory === "All" || article.category === selectedCategory;
    const matchesQuery =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="w-full bg-[#F4F0E8] text-[#202020]">
      {/* 1. Editorial Introduction */}
      <section className="border-b border-[#D8D0C4] pt-14 pb-16 md:pt-20 md:pb-24 bg-[#F4F0E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 animate-fadeIn">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EAE4D9] border border-[#D8D0C4] text-[#171717]">
              <Newspaper className="w-3.5 h-3.5 text-[#68645D]" />
              <span className="font-interface text-[11px] uppercase tracking-[0.2em] font-medium">
                Pillar 03 — Media · Commentary & Dispatches
              </span>
            </div>
            <CartographicStamp
              location="INDEPENDENT EDITORIAL VOICE"
              coordinates="STUDENT PERSPECTIVES"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Col: Narrative & Principles */}
            <div className="lg:col-span-7 space-y-6">
              <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-[#171717] font-normal leading-tight animate-fadeInUp delay-100">
                Perspectives Worth Reading.
                <br />
                <span className="italic font-serif font-light text-[#3A3835]">
                  Beyond the superficial headlines.
                </span>
              </h1>

              <p className="font-interface text-base sm:text-lg text-[#68645D] leading-relaxed max-w-2xl animate-fadeInUp delay-150">
                Thoughtful analysis on modern MUN culture, international treaties, and geopolitical statecraft. Written by students and debaters who care about nuance over noise.
              </p>

              <div className="flex flex-wrap items-center gap-3 text-xs font-interface text-[#171717] font-medium pt-2 animate-fadeInUp delay-200">
                <span className="px-3 py-1 bg-white border border-[#D8D0C4] shadow-xs">
                  Substantive Analysis
                </span>
                <span className="px-3 py-1 bg-white border border-[#D8D0C4] shadow-xs">
                  Primary-Source Research
                </span>
                <span className="px-3 py-1 bg-white border border-[#D8D0C4] shadow-xs">
                  Open Contributions
                </span>
              </div>
            </div>

            {/* Right Col: Reading Room Editorial Photograph */}
            <div className="lg:col-span-5 animate-fadeIn delay-150">
              <div className="relative aspect-[16/11] w-full border border-[#D8D0C4] overflow-hidden bg-[#171717] group card-hover-lift">
                <SwissCornerMarks />
                <Image
                  src="/assets/editorial/media-reading-room.jpg"
                  alt="Open geopolitical atlas and international law folios on mahogany table"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover grayscale contrast-110 opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent p-5 sm:p-6 flex flex-col justify-between">
                  <div className="flex justify-end">
                    <ArchivalBadge label="DELEGATES" classification="EDITORIAL" variant="dark" />
                  </div>
                  <div className="text-white text-xs font-interface space-y-1">
                    <span className="text-[10px] uppercase tracking-widest text-[#B89358] block font-semibold">
                      The Editorial Reading Room
                    </span>
                    <p className="font-editorial italic text-xs sm:text-sm text-white/90">
                      “Examining global affairs through sovereign history, treaties, and human reality.”
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Article Catalog with Search & Category Filtering */}
      <section className="py-20 md:py-28 bg-[#F4F0E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Controls Bar */}
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#D8D0C4] pb-6 gap-6">
            <div className="space-y-2">
              <span className="font-interface text-xs uppercase tracking-[0.2em] text-[#68645D]">
                Dispatches & Analysis
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl text-[#171717]">
                Featured Dispatches
              </h2>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <input
                type="text"
                placeholder="Search articles & topics..."
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

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, idx) => (
              <ScrollReveal key={article.id} delay={idx * 80} className="h-full">
                <div className="relative border border-[#D8D0C4] bg-white p-6 sm:p-8 flex flex-col justify-between h-full card-hover-lift group">
                  <SwissCornerMarks size="w-2.5 h-2.5" />
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-[10px] font-interface uppercase tracking-wider text-[#8E877C]">
                      <span className="px-2 py-0.5 bg-[#F4F0E8] border border-[#D8D0C4] font-medium text-[#171717]">
                        {article.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{article.readingTime}</span>
                      </span>
                    </div>

                    <h3 className="font-editorial text-2xl text-[#171717] leading-snug group-hover:text-black">
                      {article.title}
                    </h3>

                    <p className="font-editorial italic text-xs text-[#68645D]">
                      {article.subtitle}
                    </p>

                    <p className="text-xs text-[#68645D] leading-relaxed line-clamp-3">
                      {article.summary}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#D8D0C4] flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-[#171717] text-white flex items-center justify-center text-[10px] font-semibold">
                        D
                      </div>
                      <span className="text-[11px] font-interface text-[#171717] font-medium">
                        {article.author}
                      </span>
                    </div>
                    <button
                      onClick={() => setActiveArticle(article)}
                      className="inline-flex items-center gap-1.5 text-xs font-interface uppercase tracking-wider font-semibold text-[#171717] group-hover:underline"
                    >
                      <span>Read Dispatch</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Call for Student Submissions Banner */}
          <div className="relative border border-[#D8D0C4] bg-white p-8 sm:p-12 mt-16 card-hover-lift">
            <SwissCornerMarks size="w-3 h-3" />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-3">
                <span className="font-interface text-[10px] uppercase tracking-[0.22em] text-[#B89358] font-semibold block">
                  Write for DELEGATES
                </span>
                <h3 className="font-editorial text-2xl sm:text-3xl text-[#171717]">
                  Have a perspective on international affairs or MUN culture?
                </h3>
                <p className="text-xs sm:text-sm text-[#68645D] leading-relaxed max-w-2xl font-interface">
                  We welcome analytical essays, conference post-mortems, and foreign policy reflections from students and young scholars worldwide. No fees, no editorial gatekeeping—just honest, principled writing.
                </p>
              </div>
              <div className="lg:col-span-4 flex justify-start lg:justify-end">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#171717] text-white font-interface text-xs uppercase tracking-wider font-semibold hover:bg-black transition-colors"
                >
                  <span>Pitch an Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Full Article Reading Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
          <div className="bg-[#F4F0E8] border border-[#D8D0C4] max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-10 relative space-y-6 shadow-2xl">
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-4 right-4 p-2 text-[#171717] hover:bg-[#EAE4D9] transition-colors"
              aria-label="Close Article"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-3 border-b border-[#D8D0C4] pb-6">
              <div className="flex items-center gap-3 text-xs font-interface text-[#8E877C]">
                <span className="px-2.5 py-0.5 bg-[#171717] text-white uppercase text-[10px] font-semibold">
                  {activeArticle.category}
                </span>
                <span>·</span>
                <span>{activeArticle.readingTime}</span>
                <span>·</span>
                <span>{activeArticle.publishedDate}</span>
              </div>
              <h2 className="font-editorial text-2xl sm:text-3xl md:text-4xl text-[#171717] leading-snug">
                {activeArticle.title}
              </h2>
              <p className="font-editorial italic text-base text-[#68645D]">
                {activeArticle.subtitle}
              </p>
              <div className="flex items-center gap-2 pt-1 text-xs font-interface text-[#171717]">
                <span className="font-semibold">{activeArticle.author}</span>
                <span>—</span>
                <span className="text-[#8E877C]">{activeArticle.authorRole}</span>
              </div>
            </div>

            {/* Article Sections */}
            <div className="space-y-8">
              {activeArticle.content.map((sec, idx) => (
                <div key={idx} className="space-y-3">
                  {sec.heading && (
                    <h3 className="font-editorial text-xl sm:text-2xl text-[#171717]">
                      {sec.heading}
                    </h3>
                  )}
                  {sec.paragraphs.map((p, pIdx) => (
                    <p
                      key={pIdx}
                      className="font-editorial text-base text-[#171717] leading-relaxed"
                    >
                      {p}
                    </p>
                  ))}
                  {sec.quote && (
                    <blockquote className="my-4 border-l-2 border-[#171717] pl-4 py-2 italic font-serif text-base sm:text-lg text-[#171717] bg-[#EAE4D9]/40">
                      “{sec.quote}”
                    </blockquote>
                  )}
                </div>
              ))}
            </div>

            {/* Sources & Citations */}
            {activeArticle.sources && activeArticle.sources.length > 0 && (
              <div className="pt-4 border-t border-[#D8D0C4] space-y-2">
                <span className="font-interface text-[10px] uppercase tracking-widest text-[#8E877C] font-semibold block">
                  Primary References & Precedents
                </span>
                <ul className="text-xs text-[#68645D] font-mono space-y-1">
                  {activeArticle.sources.map((src, i) => (
                    <li key={i}>· {src}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Footer with share & discussion */}
            <div className="pt-6 border-t border-[#D8D0C4] flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                onClick={handleShare}
                className="inline-flex items-center gap-2 text-xs font-interface uppercase tracking-wider text-[#171717] hover:underline"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-green-600" />
                    <span>Link Copied!</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-3.5 h-3.5" />
                    <span>Share This Article</span>
                  </>
                )}
              </button>

              <a
                href="https://chat.whatsapp.com/DgERPMtTm4f0ONCfet1ebv"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#171717] text-white text-xs font-interface uppercase tracking-wider font-semibold hover:bg-black transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                <span>Discuss with Delegates</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
