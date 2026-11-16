"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MEDIA_ARTICLES } from "@/data/media";
import { MediaArticle } from "@/types";
import {
  Newspaper,
  Search,
  Calendar,
  Clock,
  ArrowRight,
  ArrowUpRight,
  X,
  Quote,
  Share2,
  BookOpen,
} from "lucide-react";
import { SwissCornerMarks, CartographicStamp, ArchivalBadge } from "@/components/ui/SwissAccents";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function MediaPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [readingArticle, setReadingArticle] = useState<MediaArticle | null>(
    null
  );

  const categories = [
    "All",
    "Geopolitics",
    "Diplomacy & International Relations",
    "MUN Insights",
    "Interviews & Perspectives",
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

  const featuredStory = MEDIA_ARTICLES[0];
  const latestStories = MEDIA_ARTICLES.slice(1);

  return (
    <div className="w-full bg-[#F4F0E8] text-[#202020]">
      {/* 1. Editorial Introduction */}
      <section className="border-b border-[#D8D0C4] pt-14 pb-16 md:pt-20 md:pb-24 bg-[#F4F0E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 animate-fadeIn">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EAE4D9] border border-[#D8D0C4] text-[#171717]">
              <Newspaper className="w-3.5 h-3.5 text-[#68645D]" />
              <span className="font-interface text-[11px] uppercase tracking-[0.2em] font-medium">
                Pillar 03 — Media
              </span>
            </div>
            <CartographicStamp
              location="GENEVA // PRESS BUREAU & ARCHIVES"
              coordinates="46°13′36″N 6°08′26″E"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Col: Narrative & Principles */}
            <div className="lg:col-span-6 space-y-6">
              <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-[#171717] font-normal leading-tight animate-fadeInUp delay-100">
                Understand the world
                <br />
                <span className="italic font-serif font-light text-[#3A3835]">
                  beyond the headlines.
                </span>
              </h1>

              <p className="font-interface text-base sm:text-lg text-[#68645D] leading-relaxed animate-fadeInUp delay-150">
                DELEGATES Media delivers thoughtful commentary on geopolitics, international jurisprudence, diplomatic history, and the craft of multilateral negotiation.
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs font-interface text-[#171717] font-medium pt-2 animate-fadeInUp delay-200">
                <span className="px-3 py-1 bg-[#EAE4D9] border border-[#D8D0C4]">Editorial Rigor</span>
                <span className="px-3 py-1 bg-[#EAE4D9] border border-[#D8D0C4]">Jurisprudential Grounding</span>
                <span className="px-3 py-1 bg-[#EAE4D9] border border-[#D8D0C4]">Independent Voice</span>
                <span className="px-3 py-1 bg-[#EAE4D9] border border-[#D8D0C4]">Zero Paywalls</span>
              </div>
            </div>

            {/* Right Col: Reading Room Editorial Photograph */}
            <div className="lg:col-span-6 animate-fadeIn delay-150">
              <div className="relative aspect-[16/10] w-full border border-[#D8D0C4] overflow-hidden bg-[#171717] group">
                <SwissCornerMarks />
                <Image
                  src="/assets/editorial/media-reading-room.jpg"
                  alt="Open geopolitical atlas and international law folios on mahogany table"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover grayscale contrast-110 opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent p-5 sm:p-6 flex flex-col justify-between">
                  <div className="flex justify-end">
                    <ArchivalBadge label="DISPATCH BUREAU" classification="VOL. I // ISSUE 01" variant="dark" />
                  </div>
                  <div className="text-white text-xs font-interface space-y-1">
                    <span className="text-[10px] uppercase tracking-widest text-[#B89358] block">
                      The Editorial Reading Room
                    </span>
                    <p className="font-editorial italic text-xs sm:text-sm text-white/90">
                      “Interrogating global affairs through primary source treaties, sovereign history, and legal precedent.”
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Search & Category Filter */}
      <section className="border-b border-[#D8D0C4] bg-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            <div className="relative flex-grow max-w-md">
              <Search className="w-4 h-4 text-[#68645D] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search dispatches, treaties, sovereign analysis..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-[#F4F0E8] border border-[#D8D0C4] text-xs text-[#171717] focus:outline-none focus:border-[#171717]"
              />
            </div>

            <div className="flex flex-wrap items-center gap-1.5">
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
        </div>
      </section>

      {/* 3. Featured Story Showcase */}
      {selectedCategory === "All" && searchQuery === "" && (
        <section className="py-16 border-b border-[#D8D0C4] bg-[#EAE4D9]/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <ScrollReveal>
              <div className="flex items-center justify-between border-b border-[#D8D0C4] pb-2">
                <span className="font-interface text-xs uppercase tracking-[0.2em] font-semibold text-[#171717]">
                  Lead Editorial Story
                </span>
                <span className="text-xs font-interface text-[#68645D]">
                  Vol. I · Issue 01
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white border border-[#D8D0C4] p-6 sm:p-10 group card-hover-lift">
                <div className="lg:col-span-7 space-y-5">
                  <div className="flex items-center gap-3 text-xs text-[#68645D]">
                    <span className="font-interface font-semibold uppercase tracking-wider text-[#171717]">
                      {featuredStory.category}
                    </span>
                    <span>•</span>
                    <span>{featuredStory.publishedDate}</span>
                    <span>•</span>
                    <span>{featuredStory.readingTime}</span>
                  </div>

                  <h2 className="font-editorial text-2xl sm:text-3xl md:text-4xl text-[#171717] font-normal leading-tight">
                    {featuredStory.title}
                  </h2>

                  <p className="font-interface text-sm text-[#68645D] leading-relaxed">
                    {featuredStory.subtitle}
                  </p>

                  <p className="text-xs text-[#68645D] leading-relaxed line-clamp-3">
                    {featuredStory.summary}
                  </p>

                  <div className="pt-4 flex flex-wrap items-center justify-between gap-3 border-t border-[#D8D0C4]">
                    <span className="text-xs font-interface text-[#8E877C]">
                      By {featuredStory.author} · {featuredStory.authorRole}
                    </span>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setReadingArticle(featuredStory)}
                        className="inline-flex items-center gap-1.5 px-4 py-2 border border-[#171717] text-[#171717] text-xs uppercase tracking-wider font-interface font-medium hover:bg-[#EAE4D9] transition-colors active:scale-[0.98]"
                      >
                        <span>Quick View</span>
                      </button>
                      <Link
                        href={`/media/${featuredStory.slug}`}
                        className="inline-flex items-center gap-2 px-5 py-2 bg-[#171717] text-[#F4F0E8] text-xs uppercase tracking-widest font-interface font-semibold hover:bg-black transition-colors active:scale-[0.98]"
                      >
                        <span>Read Full Story</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 relative aspect-[4/3] bg-[#171717] border border-[#D8D0C4] overflow-hidden">
                  {featuredStory.coverImage && (
                    <Image
                      src={featuredStory.coverImage}
                      alt={featuredStory.title}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover grayscale contrast-110 opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                    />
                  )}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* 4. Latest Articles & Thematic Desks */}
      <section className="py-16 md:py-24 bg-[#F4F0E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <ScrollReveal>
            <div className="flex items-center justify-between border-b border-[#D8D0C4] pb-4">
              <h2 className="font-editorial text-2xl sm:text-3xl text-[#171717]">
                {selectedCategory === "All"
                  ? "Dispatches & Analysis"
                  : `${selectedCategory}`}
              </h2>
              <span className="text-xs font-interface text-[#68645D]">
                {filteredArticles.length} publications
              </span>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, idx) => (
              <ScrollReveal key={article.id} delay={(idx % 3) * 60}>
                <article
                  id={article.slug}
                  className="relative border border-[#D8D0C4] bg-white flex flex-col justify-between hover:border-[#171717] transition-all group card-hover-lift h-full"
                >
                  <SwissCornerMarks size="w-2 h-2" />
                  {article.coverImage && (
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#171717] border-b border-[#D8D0C4]">
                      <Image
                        src={article.coverImage}
                        alt={article.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover grayscale contrast-110 opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500"
                      />
                    </div>
                  )}

                  <div className="p-6 sm:p-7 space-y-4 flex-grow flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-[11px] text-[#68645D]">
                        <span className="font-interface font-semibold uppercase tracking-wider text-[#171717]">
                          {article.category}
                        </span>
                        <span>{article.readingTime}</span>
                      </div>

                      <div className="min-h-[3.5rem] flex items-start">
                        <Link href={`/media/${article.slug}`}>
                          <h3 className="font-editorial text-xl text-[#171717] font-medium leading-snug hover:text-[#68645D] transition-colors">
                            {article.title}
                          </h3>
                        </Link>
                      </div>

                      <p className="text-xs text-[#68645D] line-clamp-3 leading-relaxed min-h-[3.25rem]">
                        {article.summary}
                      </p>
                    </div>

                    <div className="pt-5 mt-auto border-t border-[#D8D0C4] flex items-center justify-between">
                      <span className="text-[11px] font-interface text-[#8E877C] truncate max-w-[120px]">
                        {article.author}
                      </span>

                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => setReadingArticle(article)}
                          className="text-xs uppercase tracking-wider font-interface text-[#68645D] hover:text-[#171717]"
                        >
                          Preview
                        </button>
                        <Link
                          href={`/media/${article.slug}`}
                          className="inline-flex items-center gap-1 text-xs uppercase tracking-wider font-interface font-semibold text-[#171717] hover:underline"
                        >
                          <span>Read</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Full Article Reading Modal / Overlay */}
      {readingArticle && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/60 backdrop-blur-sm animate-fadeIn"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-3xl bg-[#F4F0E8] border border-[#D8D0C4] shadow-2xl p-6 sm:p-12 max-h-[90vh] overflow-y-auto text-[#202020]">
            <button
              onClick={() => setReadingArticle(null)}
              className="absolute top-5 right-5 p-2 text-[#68645D] hover:text-[#171717] hover:bg-[#EAE4D9] rounded-full transition-colors"
              aria-label="Close article"
            >
              <X className="w-5 h-5" />
            </button>

            <article className="space-y-8">
              {/* Header */}
              <div className="space-y-4 border-b border-[#D8D0C4] pb-6">
                <div className="flex items-center gap-3 text-xs font-interface text-[#68645D]">
                  <span className="px-2.5 py-1 bg-[#171717] text-[#F4F0E8] font-semibold uppercase tracking-widest text-[10px]">
                    {readingArticle.category}
                  </span>
                  <span>•</span>
                  <span>{readingArticle.publishedDate}</span>
                  <span>•</span>
                  <span>{readingArticle.readingTime}</span>
                </div>

                <h1 className="font-editorial text-3xl sm:text-4xl text-[#171717] font-normal leading-tight">
                  {readingArticle.title}
                </h1>

                <p className="font-interface text-sm text-[#68645D] italic">
                  {readingArticle.subtitle}
                </p>

                <div className="text-xs font-interface text-[#202020] pt-2">
                  <span className="font-semibold">{readingArticle.author}</span>
                  <span className="text-[#68645D]">
                    {" "}
                    · {readingArticle.authorRole}
                  </span>
                </div>
              </div>

              {/* Body Content */}
              <div className="space-y-8 font-interface text-sm sm:text-base text-[#202020] leading-relaxed">
                {readingArticle.content.map((section, idx) => (
                  <div key={idx} className="space-y-4">
                    {section.heading && (
                      <h2 className="font-editorial text-xl sm:text-2xl text-[#171717] pt-2">
                        {section.heading}
                      </h2>
                    )}

                    {section.paragraphs.map((p, pIdx) => (
                      <p key={pIdx} className="leading-relaxed text-[#202020]">
                        {p}
                      </p>
                    ))}

                    {section.quote && (
                      <div className="my-6 p-6 border-l-2 border-[#171717] bg-[#EAE4D9]/60 italic font-editorial text-lg text-[#171717]">
                        “{section.quote}”
                      </div>
                    )}
                  </div>
                ))}

                {readingArticle.sources && (
                  <div className="pt-6 border-t border-[#D8D0C4] text-xs text-[#68645D] space-y-1">
                    <span className="font-semibold uppercase tracking-wider text-[10px] text-[#171717] block">
                      Legal References & Archives:
                    </span>
                    <ul className="list-disc list-inside space-y-1">
                      {readingArticle.sources.map((src, sIdx) => (
                        <li key={sIdx}>{src}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="pt-6 border-t border-[#D8D0C4] flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs text-[#68645D]">
                  Published by DELEGATES Media Directorate
                </span>
                <div className="flex items-center gap-3">
                  <Link
                    href={`/media/${readingArticle.slug}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 border border-[#171717] text-[#171717] text-xs uppercase tracking-wider font-interface font-medium hover:bg-[#171717] hover:text-[#F4F0E8] transition-colors"
                  >
                    <span>Dedicated Reader View</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                  <button
                    onClick={() => setReadingArticle(null)}
                    className="px-5 py-2 bg-[#171717] text-[#F4F0E8] text-xs uppercase tracking-wider font-interface font-medium"
                  >
                    Close Preview
                  </button>
                </div>
              </div>
            </article>
          </div>
        </div>
      )}
    </div>
  );
}

