import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  MessageSquare,
  ArrowUpRight,
  Clock,
  Sparkles,
} from "lucide-react";
import { SwissCornerMarks, CartographicStamp, ArchivalBadge } from "@/components/ui/SwissAccents";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Academy — Curriculum & Pedagogical Desk | DELEGATES",
  description:
    "Open-access Model United Nations educational framework and guidance, making diplomatic knowledge and procedural statecraft accessible to all youth delegates without paywalls.",
  alternates: {
    canonical: "https://www.delegates-mun.xyz/academy",
  },
  openGraph: {
    title: "Academy — Curriculum & Pedagogical Desk | DELEGATES",
    description:
      "Learn. Understand. Engage. Accessible MUN resources and practical statesmanship.",
    url: "https://www.delegates-mun.xyz/academy",
    siteName: "DELEGATES",
    images: [
      {
        url: "/assets/editorial/academy-amphitheater.jpg",
        width: 1200,
        height: 630,
        alt: "Diplomatic Lecture Amphitheater — DELEGATES Academy",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Academy — Curriculum & Pedagogical Desk | DELEGATES",
    description:
      "Learn. Understand. Engage. Accessible MUN guidance and resources.",
    images: ["/assets/editorial/academy-amphitheater.jpg"],
  },
};

export default function AcademyPage() {
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
                <span className="px-3 py-1 bg-[#EAE4D9] border border-[#D8D0C4]">Accessible Guidance</span>
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
                    <ArchivalBadge label="PEDAGOGICAL VAULT" classification="IN PREPARATION" variant="dark" />
                  </div>
                  <div className="text-white text-xs font-interface space-y-1">
                    <span className="text-[10px] uppercase tracking-widest text-[#B89358] block">
                      The Diplomatic Amphitheater
                    </span>
                    <p className="font-editorial italic text-xs sm:text-sm text-white/90">
                      “Where procedural knowledge and diplomatic tradecraft will be shared openly with the next generation.”
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
          <ScrollReveal>
            <div className="relative border border-[#D8D0C4] bg-white p-6 sm:p-12 md:p-16 text-center space-y-6 card-hover-lift">
              <SwissCornerMarks size="w-3 h-3" />
              <div className="w-16 h-16 mx-auto rounded-full bg-[#F4F0E8] border border-[#D8D0C4] flex items-center justify-center text-[#171717]">
                <BookOpen className="w-7 h-7 text-[#68645D]" />
              </div>

              <div className="space-y-2">
                <span className="font-interface text-[10px] uppercase tracking-[0.22em] text-[#8E877C] font-semibold block">
                  Curriculum Status
                </span>
                <h2 className="font-editorial text-2xl sm:text-3xl text-[#171717] font-normal">
                  New Learning Resources in the Works
                </h2>
              </div>

              <p className="font-editorial italic text-base sm:text-lg text-[#68645D] max-w-xl mx-auto leading-relaxed">
                “New learning resources are in the works. Stay connected for upcoming guides and educational content.”
              </p>

              <p className="font-interface text-xs text-[#8E877C] max-w-md mx-auto leading-relaxed">
                The DELEGATES Academy aims to make Model United Nations knowledge more accessible through learning resources, practical guidance, and insights into diplomacy and international affairs.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                <a
                  href="https://chat.whatsapp.com/DgERPMtTm4f0ONCfet1ebv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#171717] text-[#F4F0E8] text-xs font-interface uppercase tracking-wider font-semibold hover:bg-black transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-[#25D366]" />
                  <span>Join Community for Updates</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <Link
                  href="/community"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 border border-[#D8D0C4] text-[#171717] text-xs font-interface uppercase tracking-wider font-medium hover:border-[#171717] transition-colors"
                >
                  <span>Explore Community Hub</span>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
