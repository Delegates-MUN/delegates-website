import Link from "next/link";
import { ArrowUpRight, BookOpen, Newspaper, Clock, ArrowRight } from "lucide-react";
import { SwissCornerMarks } from "@/components/ui/SwissAccents";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { ACADEMY_RESOURCES } from "@/data/academy";
import { MEDIA_ARTICLES } from "@/data/media";

export default function FeaturedEditorial() {
  const featuredGuide = ACADEMY_RESOURCES[0];
  const featuredArticle = MEDIA_ARTICLES[0];

  return (
    <section className="py-20 md:py-28 bg-[#EAE4D9]/40 border-b border-[#D8D0C4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#D8D0C4] pb-6 gap-6">
          <div className="space-y-3">
            <span className="font-interface text-xs uppercase tracking-[0.2em] text-[#68645D]">
              Knowledge & Commentary
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-[#171717] font-normal">
              Academy & Dispatches
            </h2>
          </div>
          <div className="flex items-center space-x-6">
            <Link
              href="/academy"
              className="text-xs font-interface uppercase tracking-wider text-[#171717] hover:text-[#68645D] transition-colors border-b border-[#171717] pb-0.5"
            >
              Academy Library →
            </Link>
            <Link
              href="/media"
              className="text-xs font-interface uppercase tracking-wider text-[#171717] hover:text-[#68645D] transition-colors border-b border-[#171717] pb-0.5"
            >
              Media Desk →
            </Link>
          </div>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Left Col: Academy Field Manual */}
          <ScrollReveal delay={0} className="h-full">
            <div className="relative border border-[#D8D0C4] bg-white p-6 sm:p-8 md:p-10 flex flex-col justify-between group hover:border-[#171717] transition-all card-hover-lift h-full">
              <SwissCornerMarks size="w-3 h-3" />
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <BookOpen className="w-4 h-4 text-[#68645D]" />
                    <span className="font-interface text-[10px] uppercase tracking-[0.2em] font-semibold text-[#171717]">
                      Field Manual · Academy
                    </span>
                  </div>
                  <span className="font-interface text-[10px] text-[#8E877C] uppercase tracking-wider">
                    FREE CURRICULUM
                  </span>
                </div>

                <div className="space-y-3">
                  <h3 className="font-editorial text-2xl sm:text-3xl text-[#171717] font-normal leading-snug">
                    Learn Without Gatekeeping
                  </h3>
                  <p className="font-interface text-sm text-[#68645D] leading-relaxed">
                    Battle-tested parliamentary cheat sheets, speech formulas, and negotiation playbooks written by delegates who have spent years in committee rooms.
                  </p>
                </div>

                {/* Featured Guide Card */}
                {featuredGuide && (
                  <div className="p-5 sm:p-6 bg-[#F4F0E8] border border-[#D8D0C4] space-y-3">
                    <div className="flex items-center justify-between text-[10px] font-interface uppercase tracking-wider text-[#8E877C]">
                      <span className="px-2 py-0.5 bg-white border border-[#D8D0C4] text-[#171717] font-medium">
                        {featuredGuide.category}
                      </span>
                      <span className="flex items-center gap-1 text-[#68645D]">
                        <Clock className="w-3 h-3" />
                        <span>{featuredGuide.readingTime}</span>
                      </span>
                    </div>
                    <h4 className="font-editorial text-lg sm:text-xl text-[#171717] leading-snug">
                      {featuredGuide.title}
                    </h4>
                    <p className="text-xs text-[#68645D] line-clamp-2">
                      {featuredGuide.summary}
                    </p>
                  </div>
                )}
              </div>

              <div className="pt-6 mt-6 border-t border-[#D8D0C4] flex items-center justify-between">
                <span className="text-xs font-interface text-[#8E877C]">
                  Level: {featuredGuide?.difficulty || "All Levels"}
                </span>
                <Link
                  href="/academy"
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-interface font-semibold text-[#171717] group-hover:underline"
                >
                  <span>Explore All Guides</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Col: Media Dispatches */}
          <ScrollReveal delay={100} className="h-full">
            <div className="relative border border-[#D8D0C4] bg-white p-6 sm:p-8 md:p-10 flex flex-col justify-between group hover:border-[#171717] transition-all card-hover-lift h-full">
              <SwissCornerMarks size="w-3 h-3" />
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Newspaper className="w-4 h-4 text-[#68645D]" />
                    <span className="font-interface text-[10px] uppercase tracking-[0.2em] font-semibold text-[#171717]">
                      Dispatches · Media Desk
                    </span>
                  </div>
                  <span className="font-interface text-[10px] text-[#8E877C] uppercase tracking-wider">
                    STUDENT COMMENTARY
                  </span>
                </div>

                <div className="space-y-3">
                  <h3 className="font-editorial text-2xl sm:text-3xl text-[#171717] font-normal leading-snug">
                    Perspectives Worth Reading
                  </h3>
                  <p className="font-interface text-sm text-[#68645D] leading-relaxed">
                    Independent commentary on diplomatic culture, treaty analysis, and youth statecraft—grounded in research rather than performative rhetoric.
                  </p>
                </div>

                {/* Featured Article Card */}
                {featuredArticle && (
                  <div className="p-5 sm:p-6 bg-[#F4F0E8] border border-[#D8D0C4] space-y-3">
                    <div className="flex items-center justify-between text-[10px] font-interface uppercase tracking-wider text-[#8E877C]">
                      <span className="px-2 py-0.5 bg-white border border-[#D8D0C4] text-[#171717] font-medium">
                        {featuredArticle.category}
                      </span>
                      <span className="flex items-center gap-1 text-[#68645D]">
                        <Clock className="w-3 h-3" />
                        <span>{featuredArticle.readingTime}</span>
                      </span>
                    </div>
                    <h4 className="font-editorial text-lg sm:text-xl text-[#171717] leading-snug">
                      {featuredArticle.title}
                    </h4>
                    <p className="text-xs text-[#68645D] line-clamp-2">
                      {featuredArticle.summary}
                    </p>
                  </div>
                )}
              </div>

              <div className="pt-6 mt-6 border-t border-[#D8D0C4] flex items-center justify-between">
                <span className="text-xs font-interface text-[#8E877C]">
                  By: {featuredArticle?.author || "DELEGATES Editorial"}
                </span>
                <Link
                  href="/media"
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-interface font-semibold text-[#171717] group-hover:underline"
                >
                  <span>Read Dispatches</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
