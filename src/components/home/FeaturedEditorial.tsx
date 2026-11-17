import Link from "next/link";
import { ACADEMY_RESOURCES } from "@/data/academy";
import { MEDIA_ARTICLES } from "@/data/media";
import { ArrowUpRight, BookOpen, Clock, Newspaper, ArrowRight } from "lucide-react";
import { SwissCornerMarks } from "@/components/ui/SwissAccents";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function FeaturedEditorial() {
  const topGuides = ACADEMY_RESOURCES.slice(0, 3);

  return (
    <section className="py-20 md:py-28 bg-[#EAE4D9]/40 border-b border-[#D8D0C4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#D8D0C4] pb-6 gap-6">
          <div className="space-y-3">
            <span className="font-interface text-xs uppercase tracking-[0.2em] text-[#68645D]">
              Knowledge & Editorial
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-[#171717] font-normal">
              Academy & Perspectives
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Col (7 cols): Perspectives Worth Exploring (Editorial Desk) */}
          <ScrollReveal delay={0} className="lg:col-span-7 h-full">
            <div className="relative border border-[#D8D0C4] bg-white p-8 sm:p-10 flex flex-col justify-between group hover:border-[#171717] transition-all card-hover-lift h-full">
              <SwissCornerMarks size="w-3 h-3" />
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Newspaper className="w-4 h-4 text-[#68645D]" />
                    <span className="font-interface text-[10px] uppercase tracking-[0.2em] font-semibold text-[#171717]">
                      Editorial Desk · Media
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-[#8E877C] uppercase tracking-wider">
                    DELEGATES DISPATCH
                  </span>
                </div>

                <div className="space-y-3">
                  <h3 className="font-editorial text-2xl sm:text-3xl text-[#171717] font-normal leading-snug">
                    Perspectives Worth Exploring
                  </h3>
                  <p className="font-interface text-sm text-[#68645D] leading-relaxed">
                    DELEGATES is building an editorial space for thoughtful perspectives on diplomacy, geopolitics, international relations, and Model United Nations.
                  </p>
                </div>

                {/* Empty State Card */}
                <div className="p-6 bg-[#F4F0E8] border border-[#D8D0C4] space-y-2">
                  <span className="font-interface text-[10px] uppercase tracking-widest text-[#B89358] font-semibold block">
                    Curatorial Status
                  </span>
                  <p className="font-editorial italic text-base text-[#171717]">
                    “Our editorial desk is preparing its first collection of stories. Stay connected for updates.”
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#D8D0C4] flex items-center justify-between">
                <span className="text-xs font-interface text-[#8E877C]">
                  Independent Directorate
                </span>
                <Link
                  href="/media"
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-interface font-semibold text-[#171717] group-hover:underline"
                >
                  <span>Explore Media Desk</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Col (5 cols): Authentic Academy Foundational Guides */}
          <ScrollReveal delay={100} className="lg:col-span-5 h-full">
            <div className="flex flex-col justify-between space-y-6 h-full">
              <div className="space-y-3">
                <div className="flex items-center gap-2 pb-1 border-b border-[#D8D0C4]">
                  <BookOpen className="w-4 h-4 text-[#171717]" />
                  <span className="font-interface text-xs uppercase tracking-[0.2em] font-semibold text-[#171717]">
                    Foundational Learning Guides
                  </span>
                </div>

                {topGuides.map((guide) => (
                  <Link
                    key={guide.id}
                    href={`/academy#${guide.slug}`}
                    className="block border border-[#D8D0C4] bg-white p-5 hover:border-[#171717] transition-all group card-hover-lift"
                  >
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between text-[11px] text-[#68645D]">
                        <span className="font-interface uppercase tracking-wider font-semibold text-[#171717]">
                          {guide.category}
                        </span>
                        <span>{guide.readingTime}</span>
                      </div>
                      <h4 className="font-editorial text-base text-[#171717] font-medium leading-snug group-hover:text-[#68645D] transition-colors">
                        {guide.title}
                      </h4>
                      <p className="text-xs text-[#68645D] line-clamp-2 leading-relaxed">
                        {guide.summary}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="p-4 bg-[#F4F0E8] border border-[#D8D0C4] flex items-center justify-between text-xs mt-auto">
                <span className="font-interface text-[#68645D]">Open-access MUN curriculum</span>
                <Link
                  href="/academy"
                  className="font-interface font-semibold text-[#171717] hover:underline flex items-center gap-1"
                >
                  <span>View All 6 Guides</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
