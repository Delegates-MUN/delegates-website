import Link from "next/link";
import Image from "next/image";
import { ACADEMY_RESOURCES } from "@/data/academy";
import { MEDIA_ARTICLES } from "@/data/media";
import { ArrowUpRight, BookOpen, Clock, Calendar } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function FeaturedEditorial() {
  const leadStory = MEDIA_ARTICLES[0];
  const secondaryStories = MEDIA_ARTICLES.slice(1, 3);
  const topGuides = ACADEMY_RESOURCES.slice(0, 3);

  return (
    <section className="py-20 md:py-28 bg-[#EAE4D9]/40 border-b border-[#D8D0C4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#D8D0C4] pb-6 gap-6">
          <div className="space-y-3">
            <span className="font-interface text-xs uppercase tracking-[0.2em] text-[#68645D]">
              Dispatches & Pedagogy
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-[#171717] font-normal">
              Featured Learning & Media
            </h2>
          </div>
          <div className="flex items-center space-x-6">
            <Link
              href="/media"
              className="text-xs font-interface uppercase tracking-wider text-[#171717] hover:text-[#68645D] transition-colors border-b border-[#171717] pb-0.5"
            >
              All Articles →
            </Link>
            <Link
              href="/academy"
              className="text-xs font-interface uppercase tracking-wider text-[#171717] hover:text-[#68645D] transition-colors border-b border-[#171717] pb-0.5"
            >
              Academy Library →
            </Link>
          </div>
        </div>

        {/* Magazine Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Lead Story (Left Col - 7 cols) */}
          <ScrollReveal delay={0} className="lg:col-span-7 h-full">
            <div className="border border-[#D8D0C4] bg-white p-7 sm:p-9 flex flex-col justify-between group hover:border-[#171717] transition-all card-hover-lift h-full">
              <div className="space-y-6">
                {leadStory.coverImage && (
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#171717] border border-[#D8D0C4]">
                    <Image
                      src={leadStory.coverImage}
                      alt={leadStory.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 bg-[#171717] text-white text-[10px] font-interface uppercase tracking-widest">
                      Featured Dispatch
                    </div>
                  </div>
                )}

                <div className="flex items-center gap-3 text-xs text-[#68645D]">
                  <span className="font-interface uppercase tracking-widest text-[#171717] font-semibold">
                    {leadStory.category}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {leadStory.publishedDate}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {leadStory.readingTime}
                  </span>
                </div>

                <div className="space-y-3">
                  <h3 className="font-editorial text-2xl sm:text-3xl text-[#171717] font-normal leading-snug group-hover:text-[#68645D] transition-colors">
                    <Link href={`/media#${leadStory.slug}`}>
                      {leadStory.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-[#68645D] leading-relaxed">
                    {leadStory.summary}
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#D8D0C4] flex items-center justify-between">
                <span className="text-xs font-interface text-[#8E877C]">
                  By {leadStory.author}
                </span>
                <Link
                  href={`/media#${leadStory.slug}`}
                  className="inline-flex items-center gap-1 text-xs uppercase tracking-wider font-interface font-semibold text-[#171717] group-hover:underline"
                >
                  <span>Read Full Article</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Col: Secondary Stories & Academy Highlights (5 cols) */}
          <ScrollReveal delay={100} className="lg:col-span-5 h-full">
            <div className="flex flex-col justify-between space-y-6 h-full">
              {/* Secondary Stories */}
              <div className="space-y-4">
                {secondaryStories.map((story) => (
                  <div
                    key={story.id}
                    className="border border-[#D8D0C4] bg-white p-5 sm:p-6 hover:border-[#171717] transition-all group card-hover-lift"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-[11px] text-[#68645D]">
                        <span className="font-interface uppercase tracking-wider font-semibold text-[#171717]">
                          {story.category}
                        </span>
                        <span>{story.readingTime}</span>
                      </div>

                      <h4 className="font-editorial text-base sm:text-lg text-[#171717] font-medium leading-snug group-hover:text-[#68645D] transition-colors">
                        <Link href={`/media#${story.slug}`}>{story.title}</Link>
                      </h4>

                      <p className="text-xs text-[#68645D] line-clamp-2 leading-relaxed">
                        {story.summary}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Academy Module Teaser */}
              <div className="border border-[#D8D0C4] bg-[#F4F0E8] p-5 sm:p-6 space-y-3 mt-auto card-hover-lift">
                <div className="flex items-center justify-between border-b border-[#D8D0C4] pb-2">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-[#171717]" />
                    <span className="font-interface text-xs uppercase tracking-[0.18em] font-semibold text-[#171717]">
                      From the Academy
                    </span>
                  </div>
                  <Link
                    href="/academy"
                    className="text-[10px] font-interface uppercase tracking-wider text-[#68645D] hover:text-[#171717]"
                  >
                    View All →
                  </Link>
                </div>

                <div className="space-y-2.5">
                  {topGuides.map((guide) => (
                    <div
                      key={guide.id}
                      className="flex items-start justify-between pb-2 border-b border-[#D8D0C4]/70 last:border-b-0 last:pb-0"
                    >
                      <div className="space-y-0.5 pr-2">
                        <span className="text-[10px] font-interface text-[#8E877C] uppercase tracking-wider">
                          {guide.category}
                        </span>
                        <Link
                          href={`/academy#${guide.slug}`}
                          className="block font-editorial text-xs sm:text-sm text-[#171717] hover:underline"
                        >
                          {guide.title}
                        </Link>
                      </div>
                      <span className="text-[10px] font-interface uppercase text-[#68645D] flex-shrink-0 mt-1">
                        {guide.readingTime}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
