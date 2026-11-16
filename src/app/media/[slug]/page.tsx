import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { MEDIA_ARTICLES } from "@/data/media";
import { Metadata } from "next";
import { ArrowLeft, Clock, Calendar, ArrowRight } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return MEDIA_ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = MEDIA_ARTICLES.find((a) => a.slug === slug);
  if (!article) return { title: "Article Not Found" };

  return {
    title: `${article.title} | DELEGATES Media`,
    description: article.summary,
    openGraph: {
      title: `${article.title} — DELEGATES Media`,
      description: article.summary,
      url: `https://delegates.org/media/${article.slug}`,
      type: "article",
      images: article.coverImage
        ? [
            {
              url: article.coverImage,
              width: 1200,
              height: 630,
              alt: article.title,
            },
          ]
        : undefined,
    },
  };
}

export default async function MediaArticleDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const article = MEDIA_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const related = MEDIA_ARTICLES.filter((a) => a.id !== article.id).slice(0, 2);

  return (
    <div className="w-full bg-[#F4F0E8] text-[#202020] min-h-screen">
      {/* Top Breadcrumb Bar */}
      <div className="border-b border-[#D8D0C4] bg-[#EAE4D9]/60 py-3">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs font-interface">
          <Link
            href="/media"
            className="inline-flex items-center gap-2 text-[#68645D] hover:text-[#171717] font-semibold uppercase tracking-wider transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Media</span>
          </Link>
          <span className="text-[#8E877C] hidden sm:inline">
            DELEGATES Media Directorate · Vol. I
          </span>
        </div>
      </div>

      {/* Main Editorial Article Container */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-10">
        {/* Article Header */}
        <header className="space-y-6 border-b border-[#D8D0C4] pb-8">
          <div className="flex flex-wrap items-center gap-3 text-xs font-interface text-[#68645D]">
            <span className="px-3 py-1 bg-[#171717] text-[#F4F0E8] font-semibold uppercase tracking-widest text-[10px]">
              {article.category}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {article.publishedDate}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {article.readingTime}
            </span>
          </div>

          <h1 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-[#171717] font-normal leading-[1.14]">
            {article.title}
          </h1>

          <p className="font-editorial italic text-lg sm:text-xl text-[#68645D] leading-relaxed">
            {article.subtitle}
          </p>

          <div className="pt-4 border-t border-[#D8D0C4]/70 flex items-center justify-between text-xs font-interface text-[#202020]">
            <div>
              <span className="font-semibold text-[#171717]">{article.author}</span>
              <span className="text-[#68645D]"> · {article.authorRole}</span>
            </div>
            <span className="text-[#8E877C] italic">Rooted in Principles</span>
          </div>
        </header>

        {/* Featured Cover Image if available */}
        {article.coverImage && (
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#171717] border border-[#D8D0C4]">
            <Image
              src={article.coverImage}
              alt={article.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 896px"
              className="object-cover"
            />
          </div>
        )}

        {/* Executive Summary Callout */}
        <div className="p-6 sm:p-8 bg-[#EAE4D9] border-l-4 border-[#171717] border-y border-r border-[#D8D0C4] space-y-2">
          <span className="text-[10px] font-interface uppercase tracking-widest text-[#68645D] font-semibold block">
            Executive Summary
          </span>
          <p className="font-editorial text-base sm:text-lg text-[#171717] leading-relaxed">
            {article.summary}
          </p>
        </div>

        {/* Main Body Paragraphs & Pull Quotes */}
        <div className="space-y-8 font-interface text-base sm:text-lg text-[#202020] leading-relaxed">
          {article.content.map((section, idx) => (
            <div key={idx} className="space-y-4">
              {section.heading && (
                <h2 className="font-editorial text-2xl sm:text-3xl text-[#171717] pt-4 pb-1 border-b border-[#D8D0C4]">
                  {section.heading}
                </h2>
              )}

              {section.paragraphs.map((p, pIdx) => {
                if (idx === 0 && pIdx === 0) {
                  const firstLetter = p.charAt(0);
                  const rest = p.slice(1);
                  return (
                    <p key={pIdx} className="leading-relaxed">
                      <span className="float-left text-5xl md:text-6xl font-editorial font-light leading-none mr-3 text-[#171717]">
                        {firstLetter}
                      </span>
                      {rest}
                    </p>
                  );
                }
                return (
                  <p key={pIdx} className="leading-relaxed text-[#202020]">
                    {p}
                  </p>
                );
              })}

              {section.quote && (
                <div className="my-8 p-8 border-l-2 border-[#171717] bg-[#EAE4D9]/60 italic font-editorial text-xl sm:text-2xl text-[#171717]">
                  “{section.quote}”
                </div>
              )}
            </div>
          ))}

          {/* Sources and Archives */}
          {article.sources && (
            <div className="pt-8 border-t border-[#D8D0C4] text-xs text-[#68645D] space-y-2">
              <span className="font-semibold uppercase tracking-widest text-[10px] text-[#171717] block">
                Official Sources & Jurisprudential Citations:
              </span>
              <ul className="list-disc list-inside space-y-1">
                {article.sources.map((src, sIdx) => (
                  <li key={sIdx} className="text-[#68645D]">
                    {src}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Related Articles */}
        {related.length > 0 && (
          <div className="pt-10 border-t border-[#D8D0C4] space-y-6">
            <h3 className="font-editorial text-2xl text-[#171717]">
              More from DELEGATES Media
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {related.map((item) => (
                <Link
                  key={item.id}
                  href={`/media/${item.slug}`}
                  className="p-6 border border-[#D8D0C4] bg-white hover:border-[#171717] transition-all group block space-y-2.5"
                >
                  <span className="text-[10px] font-interface uppercase tracking-wider text-[#68645D]">
                    {item.category} · {item.readingTime}
                  </span>
                  <h4 className="font-editorial text-lg text-[#171717] group-hover:text-[#68645D] transition-colors leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#68645D] line-clamp-2">
                    {item.summary}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Bottom Back Button */}
        <div className="pt-8 border-t border-[#D8D0C4] flex items-center justify-between">
          <Link
            href="/media"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#171717] text-[#F4F0E8] text-xs uppercase tracking-widest font-interface font-semibold hover:bg-black transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Media</span>
          </Link>
        </div>
      </article>
    </div>
  );
}
