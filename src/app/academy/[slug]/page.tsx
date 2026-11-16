import { notFound } from "next/navigation";
import Link from "next/link";
import { ACADEMY_RESOURCES } from "@/data/academy";
import { Metadata } from "next";
import {
  ArrowLeft,
  Clock,
  CheckCircle,
  Share2,
  BookOpen,
  ArrowRight,
  Bookmark,
} from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ACADEMY_RESOURCES.map((resource) => ({
    slug: resource.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const resource = ACADEMY_RESOURCES.find((r) => r.slug === slug);
  if (!resource) return { title: "Guide Not Found" };

  return {
    title: `${resource.title} | DELEGATES Academy`,
    description: resource.summary,
    openGraph: {
      title: `${resource.title} — DELEGATES Academy`,
      description: resource.summary,
      url: `https://delegates.org/academy/${resource.slug}`,
      type: "article",
    },
  };
}

export default async function AcademyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const resource = ACADEMY_RESOURCES.find((r) => r.slug === slug);

  if (!resource) {
    notFound();
  }

  const related = ACADEMY_RESOURCES.filter(
    (r) => r.category === resource.category && r.id !== resource.id
  ).slice(0, 2);

  return (
    <div className="w-full bg-[#F4F0E8] text-[#202020] min-h-screen">
      {/* Top Navigation Bar */}
      <div className="border-b border-[#D8D0C4] bg-[#EAE4D9]/60 py-3">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs font-interface">
          <Link
            href="/academy"
            className="inline-flex items-center gap-2 text-[#68645D] hover:text-[#171717] font-semibold uppercase tracking-wider transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Academy</span>
          </Link>
          <span className="text-[#8E877C] hidden sm:inline">
            DELEGATES Academy · Open Curriculum
          </span>
        </div>
      </div>

      {/* Main Editorial Article Container */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-12">
        {/* Article Header */}
        <header className="space-y-6 border-b border-[#D8D0C4] pb-8">
          <div className="flex flex-wrap items-center gap-3 text-xs font-interface text-[#68645D]">
            <span className="px-3 py-1 bg-[#171717] text-[#F4F0E8] font-semibold uppercase tracking-widest text-[10px]">
              {resource.category}
            </span>
            <span>•</span>
            <span className="uppercase tracking-wider">{resource.difficulty}</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {resource.readingTime}
            </span>
          </div>

          <h1 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-[#171717] font-normal leading-[1.14]">
            {resource.title}
          </h1>

          <p className="font-interface text-base sm:text-lg text-[#68645D] leading-relaxed">
            {resource.summary}
          </p>

          <div className="pt-4 border-t border-[#D8D0C4]/70 flex items-center justify-between text-xs font-interface text-[#8E877C]">
            <span>Published {resource.publishedDate} by DELEGATES Academic Directorate</span>
            <span className="italic">Grounded in Principles</span>
          </div>
        </header>

        {/* Takeaways Box */}
        <div className="p-6 sm:p-8 bg-[#EAE4D9] border border-[#D8D0C4] space-y-4">
          <span className="font-interface text-xs font-semibold uppercase tracking-widest text-[#171717] block">
            Core Takeaways for Delegates & Chairs:
          </span>
          <ul className="space-y-2.5">
            {resource.keyTakeaways.map((takeaway, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-[#202020]">
                <CheckCircle className="w-4 h-4 text-[#171717] flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">{takeaway}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Body Paragraphs with first drop cap */}
        <div className="space-y-6 text-[#202020] font-interface text-base sm:text-lg leading-relaxed">
          {resource.content.map((paragraph, idx) => {
            if (idx === 0) {
              const firstLetter = paragraph.charAt(0);
              const rest = paragraph.slice(1);
              return (
                <p key={idx} className="leading-relaxed">
                  <span className="float-left text-5xl md:text-6xl font-editorial font-light leading-none mr-3 text-[#171717]">
                    {firstLetter}
                  </span>
                  {rest}
                </p>
              );
            }
            return (
              <p key={idx} className="leading-relaxed">
                {paragraph}
              </p>
            );
          })}
        </div>

        {/* Philosophy Footer Box */}
        <div className="p-6 bg-white border border-[#D8D0C4] space-y-3">
          <span className="text-[10px] font-interface uppercase tracking-[0.2em] font-semibold text-[#8E877C] block">
            Brand Standard Alignment
          </span>
          <p className="font-editorial italic text-base text-[#171717]">
            “A space to learn without barriers, connect without boundaries, and engage in dialogue grounded in principles.”
          </p>
        </div>

        {/* Related Guides */}
        {related.length > 0 && (
          <div className="pt-8 border-t border-[#D8D0C4] space-y-6">
            <h3 className="font-editorial text-2xl text-[#171717]">
              Related Modules in {resource.category}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {related.map((item) => (
                <Link
                  key={item.id}
                  href={`/academy/${item.slug}`}
                  className="p-5 border border-[#D8D0C4] bg-white hover:border-[#171717] transition-all group block space-y-2"
                >
                  <span className="text-[10px] font-interface uppercase tracking-wider text-[#68645D]">
                    {item.difficulty} · {item.readingTime}
                  </span>
                  <h4 className="font-editorial text-lg text-[#171717] group-hover:text-[#68645D] transition-colors">
                    {item.title}
                  </h4>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Bottom Back Button */}
        <div className="pt-8 border-t border-[#D8D0C4] flex items-center justify-between">
          <Link
            href="/academy"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#171717] text-[#F4F0E8] text-xs uppercase tracking-widest font-interface font-semibold hover:bg-black transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Academy</span>
          </Link>
        </div>
      </article>
    </div>
  );
}
