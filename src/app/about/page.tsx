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
} from "lucide-react";
import { SwissCornerMarks, CartographicStamp, ArchivalBadge } from "@/components/ui/SwissAccents";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function AboutPage() {
  const dlgtsPrinciples = [
    {
      letter: "D",
      title: "Diplomacy / Democracy",
      description:
        "Cultivating the capacity to negotiate through difference without rancor, ensuring that every participant, regardless of background, has an equitable voice in shaping shared consensus.",
    },
    {
      letter: "L",
      title: "Law & Order",
      description:
        "Upholding international statutory frameworks, treaty precedents, and parliamentary decorum as the vital safeguards of global stability.",
    },
    {
      letter: "G",
      title: "Geopolitics",
      description:
        "Grounding debate in structural reality: geography, energy trade, security pacts, and national sovereignty rather than superficial rhetoric.",
    },
    {
      letter: "T",
      title: "Truth / Trust",
      description:
        "Institutional credibility forged through rigorous verification, evidence-based citations, and honoring diplomatic commitments.",
    },
    {
      letter: "S",
      title: "Sovereignty",
      description:
        "Defending the fundamental principle of sovereign equality enshrined in Article 2(1) of the United Nations Charter.",
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
                Our Purpose & Principles
              </span>
            </div>
            <CartographicStamp
              location="ARCHITECTURAL INSPIRATION // MULTILATERALISM"
              coordinates="46°13′36″N 6°08′26″E"
              className="animate-fadeIn delay-100"
            />
          </div>

          <div className="space-y-4">
            <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-[#171717] font-normal max-w-4xl leading-tight animate-fadeInUp delay-100">
              Rooted in Principles.
              <br />
              <span className="italic">United by Dialogue.</span>
            </h1>

            <p className="font-interface text-base sm:text-lg text-[#68645D] max-w-3xl leading-relaxed animate-fadeInUp delay-150">
              DELEGATES was established as an independent platform to elevate Model United Nations from a weekend contest into a continuous culture of intellectual curiosity, diplomatic statesmanship, and youth-led ambition.
            </p>
          </div>

          {/* Architectural Monumental Hero Photograph */}
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
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent p-4 sm:p-6 flex flex-col justify-between">
              <div className="flex justify-end">
                <ArchivalBadge label="PALAIS DES NATIONS // SEAT OF MULTILATERALISM" classification="EST. 1936" variant="dark" />
              </div>
              <div className="text-white text-xs font-interface max-w-xl space-y-1">
                <span className="text-[10px] uppercase tracking-widest text-[#B89358] block">
                  Historical Precedent
                </span>
                <p className="font-editorial italic text-xs sm:text-base leading-snug">
                  “Where sovereign nations assemble to arbitrate conflict through the enduring instrument of civil dialogue.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Brand Foundations: Vision, Mission & Brand Promise */}
      <section className="py-16 md:py-24 border-b border-[#D8D0C4] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {/* Vision */}
            <ScrollReveal delay={0} className="h-full">
              <div className="relative border border-[#D8D0C4] bg-[#F4F0E8] p-8 space-y-4 flex flex-col justify-between h-full card-hover-lift group">
                <SwissCornerMarks />
                <div className="space-y-3">
                  <span className="text-[10px] font-interface uppercase tracking-[0.2em] font-semibold text-[#68645D]">
                    01 · Vision
                  </span>
                  <h3 className="font-editorial text-2xl text-[#171717] min-h-[3.5rem] flex items-start">
                    Global Awareness & Principled Leadership
                  </h3>
                </div>
                <p className="font-editorial italic text-base text-[#171717] leading-relaxed pt-2">
                  “To cultivate a globally aware, principled, and empowered generation that shapes the future through diplomacy, dialogue, and leadership.”
                </p>
              </div>
            </ScrollReveal>

            {/* Mission */}
            <ScrollReveal delay={100} className="h-full">
              <div className="relative border border-[#D8D0C4] bg-[#F4F0E8] p-8 space-y-4 flex flex-col justify-between h-full card-hover-lift group">
                <SwissCornerMarks />
                <div className="space-y-3">
                  <span className="text-[10px] font-interface uppercase tracking-[0.2em] font-semibold text-[#68645D]">
                    02 · Mission
                  </span>
                  <h3 className="font-editorial text-2xl text-[#171717] min-h-[3.5rem] flex items-start">
                    Connect, Educate & Empower
                  </h3>
                </div>
                <p className="font-editorial italic text-base text-[#171717] leading-relaxed pt-2">
                  “To connect, educate, and empower MUN enthusiasts through meaningful networking, accessible learning, and impactful media, fostering a culture of informed dialogue, critical thinking, and principled leadership.”
                </p>
              </div>
            </ScrollReveal>

            {/* Brand Promise */}
            <ScrollReveal delay={200} className="h-full">
              <div className="relative border border-[#D8D0C4] bg-[#171717] text-white p-8 space-y-4 flex flex-col justify-between h-full card-hover-lift group">
                <SwissCornerMarks borderColor="border-white/40" />
                <div className="space-y-3">
                  <span className="text-[10px] font-interface uppercase tracking-[0.2em] font-semibold text-[#C9C2B7]">
                    03 · Brand Promise
                  </span>
                  <h3 className="font-editorial text-2xl text-white min-h-[3.5rem] flex items-start">
                    Uncompromising Inclusivity
                  </h3>
                </div>
                <p className="font-editorial italic text-base text-[#EAE4D9] leading-relaxed pt-2">
                  “A space to learn without barriers, connect without boundaries, and engage in dialogue grounded in principles.”
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 3. The DLGTS Philosophy */}
      <section className="py-20 md:py-28 border-b border-[#D8D0C4] bg-[#EAE4D9]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="font-interface text-xs uppercase tracking-[0.2em] text-[#68645D]">
              Ethical & Strategic Foundations
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-[#171717]">
              The DLGTS Framework
            </h2>
            <p className="font-interface text-sm sm:text-base text-[#68645D] leading-relaxed">
              Every initiative, curriculum module, and editorial dispatch published under DELEGATES adheres to five foundational pillars that distinguish serious diplomatic deliberation from partisan debate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dlgtsPrinciples.map((item, idx) => (
              <ScrollReveal key={item.letter} delay={(idx % 3) * 60} className="h-full">
                <div
                  className="relative border border-[#D8D0C4] bg-white p-8 space-y-4 hover:border-[#171717] transition-all group card-hover-lift h-full"
                >
                  <SwissCornerMarks size="w-2 h-2" />
                  <div className="flex items-center justify-between">
                    <span className="font-editorial text-4xl font-normal text-[#171717] group-hover:scale-105 transition-transform">
                      {item.letter}
                    </span>
                    <span className="font-interface text-[10px] uppercase tracking-widest text-[#8E877C]">
                      Pillar
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
                    These five ideals are not abstract virtues; they are practical standards enforced across all DELEGATES simulations, publications, and mentorship tracks.
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

      {/* 4. The Three Pillars Architecture */}
      <section className="py-20 md:py-28 border-b border-[#D8D0C4] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="border-b border-[#D8D0C4] pb-6">
            <span className="font-interface text-xs uppercase tracking-[0.2em] text-[#68645D]">
              Institutional Structure
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl text-[#171717] mt-1">
              The Three Pillars
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <ScrollReveal delay={0} className="h-full">
              <div className="relative border border-[#D8D0C4] bg-[#F4F0E8] p-8 space-y-4 card-hover-lift group h-full flex flex-col justify-between">
                <SwissCornerMarks size="w-2 h-2" />
                <div className="space-y-3">
                  <span className="font-interface text-xs font-semibold uppercase tracking-[0.2em] text-[#171717]">
                    Pillar 01 · Community
                  </span>
                  <h3 className="font-editorial text-2xl text-[#171717]">
                    The Human Network
                  </h3>
                  <p className="text-xs text-[#68645D] leading-relaxed">
                    A non-hierarchical space connecting first-time delegates, university competitors, and Executive Board members through open dialogue and conference collaboration.
                  </p>
                </div>
                <Link
                  href="/community"
                  className="inline-flex items-center gap-1.5 text-xs font-interface font-semibold text-[#171717] pt-2 hover:underline group-hover:translate-x-0.5 transition-transform"
                >
                  <span>Explore Community</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100} className="h-full">
              <div className="relative border border-[#D8D0C4] bg-[#F4F0E8] p-8 space-y-4 card-hover-lift group h-full flex flex-col justify-between">
                <SwissCornerMarks size="w-2 h-2" />
                <div className="space-y-3">
                  <span className="font-interface text-xs font-semibold uppercase tracking-[0.2em] text-[#171717]">
                    Pillar 02 · Academy
                  </span>
                  <h3 className="font-editorial text-2xl text-[#171717]">
                    The Pedagogical Space
                  </h3>
                  <p className="text-xs text-[#68645D] leading-relaxed">
                    An educational space dedicated to making Model United Nations knowledge, guidance, and diplomatic insights accessible with zero paywalls.
                  </p>
                </div>
                <Link
                  href="/academy"
                  className="inline-flex items-center gap-1.5 text-xs font-interface font-semibold text-[#171717] pt-2 hover:underline group-hover:translate-x-0.5 transition-transform"
                >
                  <span>Explore Academy</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200} className="h-full">
              <div className="relative border border-[#D8D0C4] bg-[#F4F0E8] p-8 space-y-4 card-hover-lift group h-full flex flex-col justify-between">
                <SwissCornerMarks size="w-2 h-2" />
                <div className="space-y-3">
                  <span className="font-interface text-xs font-semibold uppercase tracking-[0.2em] text-[#171717]">
                    Pillar 03 · Media
                  </span>
                  <h3 className="font-editorial text-2xl text-[#171717]">
                    The Editorial Voice
                  </h3>
                  <p className="text-xs text-[#68645D] leading-relaxed">
                    An editorial space dedicated to thoughtful perspectives on diplomacy, geopolitics, international relations, and Model United Nations.
                  </p>
                </div>
                <Link
                  href="/media"
                  className="inline-flex items-center gap-1.5 text-xs font-interface font-semibold text-[#171717] pt-2 hover:underline group-hover:translate-x-0.5 transition-transform"
                >
                  <span>Explore Media Desk</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 5. Editorial Standards & Brand Mark Integrity */}
      <section className="py-20 md:py-28 border-b border-[#D8D0C4] bg-[#171717] text-[#F4F0E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-4 text-center lg:text-left space-y-4">
              <div className="w-20 h-24 mx-auto lg:mx-0 relative">
                <Image
                  src="/assets/delegates-monogram-light.png"
                  alt="DELEGATES Monogram"
                  fill
                  sizes="80px"
                  className="object-contain"
                />
              </div>
              <h3 className="font-editorial text-2xl text-white">
                The Official Monogram
              </h3>
              <p className="text-xs text-[#C9C2B7] leading-relaxed">
                The abstract interlocking monogram represents the intersection of sovereign states engaging in principled dialogue. It stands as the permanent, immutable visual seal of DELEGATES.
              </p>
            </div>

            <div className="lg:col-span-8 bg-[#201F1D] border border-[#33312D] p-8 sm:p-10 space-y-6 relative">
              <SwissCornerMarks borderColor="border-white/30" />
              <span className="font-interface text-xs uppercase tracking-[0.2em] text-[#8E877C]">
                Institutional Commitments
              </span>

              <div className="space-y-4 text-sm text-[#C9C2B7]">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                  <p>
                    <strong className="text-white">Authentic Transparency:</strong> We never manufacture synthetic testimonials, exaggerated delegate counts, or fabricated accolades.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                  <p>
                    <strong className="text-white">Open Knowledge:</strong> All educational guides and study curricula remain open and free for any student of diplomacy.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                  <p>
                    <strong className="text-white">Intellectual Integrity:</strong> We treat geopolitical topics with nuance and fidelity to international law rather than partisan polemics.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#33312D]">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#171717] font-interface text-xs uppercase tracking-wider font-semibold hover:bg-[#F4F0E8] transition-colors"
                >
                  <span>Connect with DELEGATES</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

