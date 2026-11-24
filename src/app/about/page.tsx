import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Compass,
  Scale,
  Shield,
  Award,
  Globe2,
  CheckCircle,
  ArrowRight,
  Sparkles,
  HeartHandshake,
  BookOpen,
  Users,
  MessageSquare,
} from "lucide-react";
import { SwissCornerMarks, CartographicStamp, ArchivalBadge } from "@/components/ui/SwissAccents";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "About Us — The Story, Mission & Secretariat | DELEGATES",
  description:
    "Why we founded DELEGATES: to make Model United Nations education accessible without gatekeeping, replace shouting matches with principled statesmanship, and build an all-year community for youth diplomats.",
  alternates: {
    canonical: "https://www.delegates-mun.xyz/about",
  },
  openGraph: {
    title: "About Us — The Story, Mission & Secretariat | DELEGATES",
    description:
      "Rooted in Principles. United by Dialogue. Learn why DELEGATES was built by students, for students.",
    url: "https://www.delegates-mun.xyz/about",
    siteName: "DELEGATES",
    images: [
      {
        url: "/assets/editorial/about-architecture.jpg",
        width: 1200,
        height: 630,
        alt: "Diplomatic Assembly Architecture — DELEGATES",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us — The Story, Mission & Secretariat | DELEGATES",
    description:
      "Rooted in Principles. United by Dialogue. Learn why DELEGATES was built by students, for students.",
    images: ["/assets/editorial/about-architecture.jpg"],
  },
};

export default function AboutPage() {
  const dlgtsPrinciples = [
    {
      letter: "D",
      title: "Diplomacy / Democracy",
      description:
        "The ability to negotiate differences without rancor. In committee, this means prioritizing substantive consensus over aggressive theatrics, ensuring every participant—regardless of school or experience—has a voice.",
    },
    {
      letter: "L",
      title: "Law & Order",
      description:
        "Respect for parliamentary rules of procedure and international legal charters. Procedure is not red tape—it is the safeguard that keeps 80 delegates deliberating civilly rather than shouting over one another.",
    },
    {
      letter: "G",
      title: "Geopolitics",
      description:
        "Grounding debate in structural reality: maritime trade routes, energy dependence, historical alliances, and national security rather than superficial rhetoric or Wikipedia soundbites.",
    },
    {
      letter: "T",
      title: "Truth / Trust",
      description:
        "Intellectual honesty and verified research. Trust is earned through cited resolutions, authentic commitments during unmoderated caucuses, and refusing to fabricate statistics.",
    },
    {
      letter: "S",
      title: "Sovereignty",
      description:
        "Honoring the political independence and territorial integrity of all nations as codified in Article 2 of the UN Charter. Solutions must respect domestic jurisdiction rather than imposing external coercion.",
    },
  ];

  return (
    <div className="w-full bg-[#F4F0E8] text-[#202020]">
      {/* 1. Masthead & Hero */}
      <section className="border-b border-[#D8D0C4] pt-14 pb-16 md:pt-20 md:pb-24 bg-[#F4F0E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EAE4D9] border border-[#D8D0C4] text-[#171717] animate-fadeInUp delay-50">
              <Compass className="w-3.5 h-3.5 text-[#68645D]" />
              <span className="font-interface text-[11px] uppercase tracking-[0.2em] font-medium">
                Our Purpose & Origins
              </span>
            </div>
            <CartographicStamp
              location="FOUNDED BY STUDENTS"
              coordinates="FOR ASPIRING DIPLOMATS WORLDWIDE"
              className="animate-fadeIn delay-100"
            />
          </div>

          <div className="space-y-4">
            <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-[#171717] font-normal max-w-4xl leading-tight animate-fadeInUp delay-100">
              Rooted in Principles.
              <br />
              <span className="italic font-serif font-light text-[#3A3835]">
                United by Dialogue.
              </span>
            </h1>

            <p className="font-interface text-base sm:text-lg text-[#68645D] max-w-3xl leading-relaxed animate-fadeInUp delay-150">
              DELEGATES was established by youth debaters and Model UN organizers to transform debate from an expensive, weekend-only competition into a year-round culture of accessible learning, principled statesmanship, and genuine community.
            </p>
          </div>

          {/* Monumental Hero Photograph */}
          <div className="relative aspect-[16/10] sm:aspect-[21/9] w-full border border-[#D8D0C4] overflow-hidden bg-[#171717] mt-8 group card-hover-lift animate-fadeIn delay-200">
            <SwissCornerMarks />
            <Image
              src="/assets/editorial/about-architecture.jpg"
              alt="Monumental neoclassical diplomatic architecture of the Palais des Nations"
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover grayscale contrast-110 opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent p-5 sm:p-8 flex flex-col justify-between">
              <div className="flex justify-end">
                <ArchivalBadge label="DELEGATES" classification="FOUNDING MANIFESTO" variant="dark" />
              </div>
              <div className="text-white text-xs font-interface max-w-2xl space-y-1.5">
                <span className="text-[10px] uppercase tracking-widest text-[#B89358] block font-semibold">
                  The Diplomatic Ideal
                </span>
                <p className="font-editorial italic text-xs sm:text-base leading-snug text-white/95">
                  “Where sovereign individuals assemble to arbitrate friction through the enduring instrument of principled civil dialogue.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Authentic Letter from the Secretariat (The Human Heart of the Site) */}
      <section className="py-20 md:py-28 border-b border-[#D8D0C4] bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <ScrollReveal>
            <div className="relative border border-[#D8D0C4] bg-[#F4F0E8] p-8 sm:p-12 md:p-16 space-y-8 card-hover-lift">
              <SwissCornerMarks size="w-3.5 h-3.5" />
              <div className="space-y-3">
                <span className="font-interface text-[10px] uppercase tracking-[0.25em] text-[#B89358] font-semibold block">
                  A Letter from the Secretariat
                </span>
                <h2 className="font-editorial text-3xl sm:text-4xl text-[#171717] leading-snug">
                  Why We Built DELEGATES
                </h2>
              </div>

              <div className="space-y-5 text-sm sm:text-base text-[#171717] leading-relaxed font-editorial">
                <p>
                  If you have ever sat in a committee room and felt overwhelmed by aggressive delegates shouting over each other, or if you could not attend a conference because the delegate registration fee was absurdly high—this platform was built for you.
                </p>
                <p>
                  We founded DELEGATES because we were tired of three troubling patterns that have overtaken the modern Model United Nations circuit:
                </p>

                <div className="grid grid-cols-1 gap-4 pt-2 font-interface">
                  <div className="p-4 bg-white border border-[#D8D0C4] space-y-1">
                    <strong className="text-xs uppercase tracking-wider text-[#171717] block">
                      1. The Financial Gatekeeping
                    </strong>
                    <p className="text-xs text-[#68645D] leading-relaxed">
                      Conferences routinely charge $60 to $150+ in delegate and delegation fees, while elite private schools hoard research binders and private coaching. Basic diplomacy training should never be gated behind wealth.
                    </p>
                  </div>

                  <div className="p-4 bg-white border border-[#D8D0C4] space-y-1">
                    <strong className="text-xs uppercase tracking-wider text-[#171717] block">
                      2. The Shouting Match Culture
                    </strong>
                    <p className="text-xs text-[#68645D] leading-relaxed">
                      Too many competitive gavels are awarded to whoever dominates the unmoderated caucus circle by screaming the loudest. That is not diplomacy—that is theater. Real statesmanship is about listening, understanding complex treaties, and building coalitions with empathy.
                    </p>
                  </div>

                  <div className="p-4 bg-white border border-[#D8D0C4] space-y-1">
                    <strong className="text-xs uppercase tracking-wider text-[#171717] block">
                      3. The Post-Conference Void
                    </strong>
                    <p className="text-xs text-[#68645D] leading-relaxed">
                      Delegates spend months preparing for a single 3-day weekend, and the moment the closing ceremony gavel bangs, the connections and momentum dissolve until the next conference cycle.
                    </p>
                  </div>
                </div>

                <p className="pt-2">
                  DELEGATES is our collective answer. An independent, permanent home where curriculum is 100% free, community membership has zero barriers, and young leaders can hone their foreign policy skills year-round.
                </p>
              </div>

              <div className="pt-6 border-t border-[#D8D0C4] flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-interface">
                <div className="space-y-0.5">
                  <span className="text-xs font-semibold text-[#171717] block">
                    The DELEGATES Secretariat & Collective
                  </span>
                  <span className="text-[11px] text-[#8E877C]">
                    Youth Debaters, Committee Chairs & MUN Alumni
                  </span>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#171717] hover:underline"
                >
                  <span>Connect With the Team</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. Brand Foundations: Vision, Mission & Brand Promise */}
      <section className="py-16 md:py-24 border-b border-[#D8D0C4] bg-[#F4F0E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-2">
            <span className="font-interface text-xs uppercase tracking-[0.2em] text-[#68645D]">
              Guiding Principles
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl text-[#171717]">
              Our Institutional Pillars
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {/* Vision */}
            <ScrollReveal delay={0} className="h-full">
              <div className="relative border border-[#D8D0C4] bg-white p-8 space-y-4 flex flex-col justify-between h-full card-hover-lift group">
                <SwissCornerMarks />
                <div className="space-y-3">
                  <span className="text-[10px] font-interface uppercase tracking-[0.2em] font-semibold text-[#68645D]">
                    01 · Vision
                  </span>
                  <h3 className="font-editorial text-2xl text-[#171717]">
                    Principled Leadership
                  </h3>
                </div>
                <p className="font-editorial italic text-base text-[#171717] leading-relaxed pt-2">
                  “To cultivate an empowered generation that shapes the global future through statesmanship, dialogue, and collaborative negotiation.”
                </p>
              </div>
            </ScrollReveal>

            {/* Mission */}
            <ScrollReveal delay={100} className="h-full">
              <div className="relative border border-[#D8D0C4] bg-white p-8 space-y-4 flex flex-col justify-between h-full card-hover-lift group">
                <SwissCornerMarks />
                <div className="space-y-3">
                  <span className="text-[10px] font-interface uppercase tracking-[0.2em] font-semibold text-[#68645D]">
                    02 · Mission
                  </span>
                  <h3 className="font-editorial text-2xl text-[#171717]">
                    Connect & Educate
                  </h3>
                </div>
                <p className="font-editorial italic text-base text-[#171717] leading-relaxed pt-2">
                  “To connect and educate youth debaters through open-access curriculum, genuine community support, and thoughtful geopolitical analysis.”
                </p>
              </div>
            </ScrollReveal>

            {/* Brand Promise */}
            <ScrollReveal delay={200} className="h-full">
              <div className="relative border border-[#171717] bg-[#171717] text-white p-8 space-y-4 flex flex-col justify-between h-full card-hover-lift group">
                <SwissCornerMarks borderColor="border-white/40" />
                <div className="space-y-3">
                  <span className="text-[10px] font-interface uppercase tracking-[0.2em] font-semibold text-[#C9C2B7]">
                    03 · Promise
                  </span>
                  <h3 className="font-editorial text-2xl text-white">
                    Uncompromising Access
                  </h3>
                </div>
                <p className="font-editorial italic text-base text-[#EAE4D9] leading-relaxed pt-2">
                  “A space to learn without financial barriers, connect without school pedigree boundaries, and debate with integrity.”
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 4. The DLGTS Philosophy */}
      <section className="py-20 md:py-28 border-b border-[#D8D0C4] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="font-interface text-xs uppercase tracking-[0.2em] text-[#68645D]">
              Ethical & Strategic Foundations
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-[#171717]">
              The DLGTS Framework
            </h2>
            <p className="font-interface text-sm sm:text-base text-[#68645D] leading-relaxed">
              Every guide we write, every article we publish, and every discussion we moderate is guided by five foundational principles that separate serious statesmanship from performative debate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dlgtsPrinciples.map((item, idx) => (
              <ScrollReveal key={item.letter} delay={(idx % 3) * 60} className="h-full">
                <div
                  className="relative border border-[#D8D0C4] bg-[#F4F0E8] p-8 space-y-4 hover:border-[#171717] transition-all group card-hover-lift h-full"
                >
                  <SwissCornerMarks size="w-2 h-2" />
                  <div className="flex items-center justify-between">
                    <span className="font-editorial text-4xl font-normal text-[#171717] group-hover:scale-105 transition-transform">
                      {item.letter}
                    </span>
                    <span className="font-interface text-[10px] uppercase tracking-widest text-[#8E877C]">
                      Principle
                    </span>
                  </div>
                  <h3 className="font-editorial text-xl text-[#171717]">
                    {item.title}
                  </h3>
                  <p className="font-interface text-xs text-[#68645D] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}

            {/* Sixth Card: Integrative Summary */}
            <ScrollReveal delay={180} className="h-full">
              <div className="relative border border-[#171717] bg-[#171717] text-[#F4F0E8] p-8 space-y-4 flex flex-col justify-between card-hover-lift group h-full">
                <SwissCornerMarks borderColor="border-white/40" size="w-2 h-2" />
                <div className="space-y-2">
                  <span className="font-interface text-[10px] uppercase tracking-[0.2em] text-[#B89358]">
                    Synthesis
                  </span>
                  <h3 className="font-editorial text-xl text-white">
                    Principles in Action
                  </h3>
                  <p className="font-interface text-xs text-[#C9C2B7] leading-relaxed">
                    These five principles are not abstract theories. They are practical standards that help delegates write realistic resolutions and negotiate with credibility.
                  </p>
                </div>
                <div className="pt-2 text-xs font-editorial italic text-white/80">
                  “Dialogue without principles is theater; principles without dialogue is deadlock.”
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 5. The Three Pillars Architecture */}
      <section className="py-20 md:py-28 border-b border-[#D8D0C4] bg-[#F4F0E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="border-b border-[#D8D0C4] pb-6">
            <span className="font-interface text-xs uppercase tracking-[0.2em] text-[#68645D]">
              Our Three Initiatives
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl text-[#171717] mt-1">
              Community, Academy & Media
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <ScrollReveal delay={0} className="h-full">
              <div className="relative border border-[#D8D0C4] bg-white p-8 space-y-4 card-hover-lift group h-full flex flex-col justify-between">
                <SwissCornerMarks size="w-2 h-2" />
                <div className="space-y-3">
                  <span className="font-interface text-xs font-semibold uppercase tracking-[0.2em] text-[#171717]">
                    01 · Community
                  </span>
                  <h3 className="font-editorial text-2xl text-[#171717]">
                    The Delegate Network
                  </h3>
                  <p className="text-xs text-[#68645D] leading-relaxed">
                    An open forum connecting first-timers, collegiate debaters, and conference secretariats for questions, partner finding, and conference collaboration.
                  </p>
                </div>
                <Link
                  href="/community"
                  className="inline-flex items-center gap-1.5 text-xs font-interface font-semibold text-[#171717] pt-2 hover:underline group-hover:translate-x-0.5 transition-transform"
                >
                  <span>Join the Community</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100} className="h-full">
              <div className="relative border border-[#D8D0C4] bg-white p-8 space-y-4 card-hover-lift group h-full flex flex-col justify-between">
                <SwissCornerMarks size="w-2 h-2" />
                <div className="space-y-3">
                  <span className="font-interface text-xs font-semibold uppercase tracking-[0.2em] text-[#171717]">
                    02 · Academy
                  </span>
                  <h3 className="font-editorial text-2xl text-[#171717]">
                    The Field Manual
                  </h3>
                  <p className="text-xs text-[#68645D] leading-relaxed">
                    Zero-cost parliamentary cheat sheets, ROP guides, GSL speech templates, and resolution drafting guides written by experienced delegates.
                  </p>
                </div>
                <Link
                  href="/academy"
                  className="inline-flex items-center gap-1.5 text-xs font-interface font-semibold text-[#171717] pt-2 hover:underline group-hover:translate-x-0.5 transition-transform"
                >
                  <span>Explore Academy Guides</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200} className="h-full">
              <div className="relative border border-[#D8D0C4] bg-white p-8 space-y-4 card-hover-lift group h-full flex flex-col justify-between">
                <SwissCornerMarks size="w-2 h-2" />
                <div className="space-y-3">
                  <span className="font-interface text-xs font-semibold uppercase tracking-[0.2em] text-[#171717]">
                    03 · Media
                  </span>
                  <h3 className="font-editorial text-2xl text-[#171717]">
                    Dispatches & Analysis
                  </h3>
                  <p className="text-xs text-[#68645D] leading-relaxed">
                    Thoughtful, long-form commentary on geopolitics, international treaties, and student diplomacy culture with an open invitation for guest writers.
                  </p>
                </div>
                <Link
                  href="/media"
                  className="inline-flex items-center gap-1.5 text-xs font-interface font-semibold text-[#171717] pt-2 hover:underline group-hover:translate-x-0.5 transition-transform"
                >
                  <span>Read Dispatches</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 6. Authentic Transparency & Open Invitation */}
      <section className="py-20 md:py-28 border-b border-[#D8D0C4] bg-[#171717] text-[#F4F0E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 text-center lg:text-left space-y-4">
              <div className="w-16 h-20 mx-auto lg:mx-0 relative">
                <Image
                  src="/assets/delegates-monogram-light.png"
                  alt="DELEGATES Monogram"
                  fill
                  sizes="64px"
                  className="object-contain"
                />
              </div>
              <h3 className="font-editorial text-2xl sm:text-3xl text-white">
                Built by Students, Open to All
              </h3>
              <p className="text-xs text-[#C9C2B7] leading-relaxed max-w-md">
                DELEGATES is completely independent and volunteer-driven. We do not sell ads, charge for guides, or monetize student participation. We believe in the power of youth dialogue.
              </p>
            </div>

            <div className="lg:col-span-7 bg-[#201F1D] border border-[#33312D] p-8 sm:p-10 space-y-6 relative">
              <SwissCornerMarks borderColor="border-white/30" />
              <span className="font-interface text-xs uppercase tracking-[0.2em] text-[#B89358] font-semibold">
                Our Transparent Commitments
              </span>

              <div className="space-y-4 text-xs sm:text-sm text-[#C9C2B7]">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                  <p>
                    <strong className="text-white">Zero Paywalls, Always:</strong> All educational guides, cheat sheets, and curriculum resources will remain permanently free.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                  <p>
                    <strong className="text-white">Authentic Community:</strong> We never manufacture synthetic testimonials or exaggerated numbers. Real delegates, real dialogue.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                  <p>
                    <strong className="text-white">Open to Contributors:</strong> Whether you want to write an article, share your school&apos;s conference opportunity, or mentor first-timers, our doors are open.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#33312D] flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#171717] font-interface text-xs uppercase tracking-wider font-semibold hover:bg-[#F4F0E8] transition-colors"
                >
                  <span>Connect with Secretariat</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <a
                  href="https://chat.whatsapp.com/DgERPMtTm4f0ONCfet1ebv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-white font-interface text-xs uppercase tracking-wider font-semibold hover:bg-white hover:text-[#171717] transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>Join WhatsApp Forum</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
