"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MEDIA_ARTICLES } from "@/data/media";
import {
  Newspaper,
  Search,
  MessageSquare,
  ArrowUpRight,
  Clock,
  Sparkles,
} from "lucide-react";
import { SwissCornerMarks, CartographicStamp, ArchivalBadge } from "@/components/ui/SwissAccents";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function MediaPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Geopolitics",
    "Diplomacy & International Relations",
    "MUN Insights",
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
              location="EDITORIAL DESK // ARCHIVES"
              coordinates="46°13′36″N 6°08′26″E"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Col: Narrative & Principles */}
            <div className="lg:col-span-6 space-y-6">
              <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-[#171717] font-normal leading-tight animate-fadeInUp delay-100">
                Perspectives Worth Exploring
              </h1>

              <p className="font-interface text-base sm:text-lg text-[#68645D] leading-relaxed animate-fadeInUp delay-150">
                DELEGATES is building an editorial space for thoughtful perspectives on diplomacy, geopolitics, international relations, and Model United Nations.
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs font-interface text-[#171717] font-medium pt-2 animate-fadeInUp delay-200">
                <span className="px-3 py-1 bg-[#EAE4D9] border border-[#D8D0C4]">Principled Commentary</span>
                <span className="px-3 py-1 bg-[#EAE4D9] border border-[#D8D0C4]">Geopolitical Analysis</span>
                <span className="px-3 py-1 bg-[#EAE4D9] border border-[#D8D0C4]">Independent Voice</span>
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
                    <ArchivalBadge label="EDITORIAL DESK" classification="IN PREPARATION" variant="dark" />
                  </div>
                  <div className="text-white text-xs font-interface space-y-1">
                    <span className="text-[10px] uppercase tracking-widest text-[#B89358] block">
                      The Editorial Reading Room
                    </span>
                    <p className="font-editorial italic text-xs sm:text-sm text-white/90">
                      “Examining global affairs through primary source treaties, sovereign history, and legal precedent.”
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Content & Polished Empty State */}
      <section className="py-20 md:py-28 bg-[#F4F0E8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredArticles.length === 0 ? (
            <ScrollReveal>
              <div className="relative border border-[#D8D0C4] bg-white p-12 sm:p-16 text-center space-y-6 card-hover-lift">
                <SwissCornerMarks size="w-3 h-3" />
                <div className="w-16 h-16 mx-auto rounded-full bg-[#F4F0E8] border border-[#D8D0C4] flex items-center justify-center text-[#171717]">
                  <Newspaper className="w-7 h-7 text-[#68645D]" />
                </div>

                <div className="space-y-2">
                  <span className="font-interface text-[10px] uppercase tracking-[0.22em] text-[#8E877C] font-semibold block">
                    Editorial Desk Announcement
                  </span>
                  <h2 className="font-editorial text-2xl sm:text-3xl text-[#171717] font-normal">
                    Perspectives Worth Exploring
                  </h2>
                </div>

                <p className="font-editorial italic text-base sm:text-lg text-[#68645D] max-w-xl mx-auto leading-relaxed">
                  “Our editorial desk is preparing its first collection of stories. Stay connected for updates.”
                </p>

                <p className="font-interface text-xs text-[#8E877C] max-w-md mx-auto leading-relaxed">
                  DELEGATES is building an editorial space for thoughtful perspectives on diplomacy, geopolitics, international relations, and Model United Nations.
                </p>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="https://chat.whatsapp.com/DgERPMtTm4f0ONCfet1ebv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#171717] text-[#F4F0E8] text-xs font-interface uppercase tracking-wider font-semibold hover:bg-black transition-colors"
                  >
                    <MessageSquare className="w-4 h-4 text-[#25D366]" />
                    <span>Join Community for Updates</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                  <Link
                    href="/academy"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-[#D8D0C4] text-[#171717] text-xs font-interface uppercase tracking-wider font-medium hover:border-[#171717] transition-colors"
                  >
                    <span>Explore Academy Guides</span>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ) : (
            <div className="space-y-6">
              {filteredArticles.map((article) => (
                <div key={article.id} className="border border-[#D8D0C4] bg-white p-6">
                  <h3 className="font-editorial text-xl text-[#171717]">{article.title}</h3>
                  <p className="text-xs text-[#68645D]">{article.summary}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
