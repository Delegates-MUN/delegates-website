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
} from "lucide-react";

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EAE4D9] border border-[#D8D0C4] text-[#171717]">
            <Compass className="w-3.5 h-3.5 text-[#68645D]" />
            <span className="font-interface text-[11px] uppercase tracking-[0.2em] font-medium">
              Institutional Manifesto
            </span>
          </div>

          <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-[#171717] font-normal max-w-4xl leading-tight">
            Rooted in Principles.
            <br />
            <span className="italic">United by Dialogue.</span>
          </h1>

          <p className="font-interface text-base sm:text-lg text-[#68645D] max-w-3xl leading-relaxed">
            DELEGATES was established as an independent platform to elevate Model United Nations from a weekend contest into a continuous culture of intellectual curiosity, diplomatic statesmanship, and youth-led ambition.
          </p>
        </div>
      </section>

      {/* 2. Brand Foundations: Vision, Mission & Brand Promise */}
      <section className="py-16 md:py-24 border-b border-[#D8D0C4] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {/* Vision */}
            <div className="border border-[#D8D0C4] bg-[#F4F0E8] p-8 space-y-4 flex flex-col justify-between h-full">
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

            {/* Mission */}
            <div className="border border-[#D8D0C4] bg-[#F4F0E8] p-8 space-y-4 flex flex-col justify-between h-full">
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

            {/* Brand Promise */}
            <div className="border border-[#D8D0C4] bg-[#171717] text-white p-8 space-y-4 flex flex-col justify-between h-full">
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
          </div>
        </div>
      </section>

      {/* 3. The DLGTS Philosophy in Depth */}
      <section id="principles" className="py-20 md:py-28 border-b border-[#D8D0C4] bg-[#F4F0E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="max-w-2xl space-y-3">
            <span className="font-interface text-xs uppercase tracking-[0.2em] text-[#68645D]">
              Ethical Code
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-[#171717]">
              The DLGTS Philosophy
            </h2>
            <p className="text-sm text-[#68645D] leading-relaxed">
              Our name is our philosophy. Every letter in DLGTS represents a pillar of diplomatic statesmanship:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {dlgtsPrinciples.map((item) => (
              <div
                key={item.letter}
                className="border border-[#D8D0C4] bg-white p-6 space-y-4 hover:border-[#171717] transition-all"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-[#171717] text-white font-editorial text-2xl">
                  {item.letter}
                </div>
                <h3 className="font-editorial text-lg text-[#171717] font-semibold">
                  {item.title}
                </h3>
                <p className="text-xs text-[#68645D] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. The Three Pillars Structure */}
      <section className="py-20 md:py-28 border-b border-[#D8D0C4] bg-[#EAE4D9]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="border-b border-[#D8D0C4] pb-4">
            <span className="font-interface text-xs uppercase tracking-[0.2em] text-[#68645D]">
              Organizational Mandate
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl text-[#171717] mt-1">
              How DELEGATES Operates
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-[#D8D0C4] bg-white p-8 space-y-4">
              <span className="font-interface text-xs font-semibold uppercase tracking-[0.2em] text-[#171717]">
                Pillar 01 · Community
              </span>
              <h3 className="font-editorial text-2xl text-[#171717]">
                The Collaborative Ecosystem
              </h3>
              <p className="text-xs text-[#68645D] leading-relaxed">
                A non-hierarchical network where school delegates, university leaders, and Executive Board members share verified opportunities, review policy drafts, and exchange insights without paywalls.
              </p>
              <Link
                href="/community"
                className="inline-flex items-center gap-1.5 text-xs font-interface font-semibold text-[#171717] pt-2 hover:underline"
              >
                <span>Visit Community Hub</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="border border-[#D8D0C4] bg-white p-8 space-y-4">
              <span className="font-interface text-xs font-semibold uppercase tracking-[0.2em] text-[#171717]">
                Pillar 02 · Academy
              </span>
              <h3 className="font-editorial text-2xl text-[#171717]">
                The Public Learning Library
              </h3>
              <p className="text-xs text-[#68645D] leading-relaxed">
                Open educational materials providing demystified explanations of Rules of Procedure, treaty analysis, resolution formulation, and Executive Board adjudication standards.
              </p>
              <Link
                href="/academy"
                className="inline-flex items-center gap-1.5 text-xs font-interface font-semibold text-[#171717] pt-2 hover:underline"
              >
                <span>Visit Academy Library</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="border border-[#D8D0C4] bg-white p-8 space-y-4">
              <span className="font-interface text-xs font-semibold uppercase tracking-[0.2em] text-[#171717]">
                Pillar 03 · Media
              </span>
              <h3 className="font-editorial text-2xl text-[#171717]">
                The Editorial Voice
              </h3>
              <p className="text-xs text-[#68645D] leading-relaxed">
                Rigorous long-form dispatches, legal commentaries, and interviews examining global diplomacy, regional security architecture, and multilateral reform.
              </p>
              <Link
                href="/media"
                className="inline-flex items-center gap-1.5 text-xs font-interface font-semibold text-[#171717] pt-2 hover:underline"
              >
                <span>Read Media Publications</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
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

            <div className="lg:col-span-8 bg-[#201F1D] border border-[#33312D] p-8 sm:p-10 space-y-6">
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
