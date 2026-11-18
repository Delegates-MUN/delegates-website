"use client";

import { useState } from "react";
import { Shield, Scale, Globe2, CheckCircle, Award } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface Principle {
  letter: "D" | "L" | "G" | "T" | "S";
  title: string;
  subtitle: string;
  description: string;
  icon: typeof Shield;
  application: string;
}

const PRINCIPLES: Principle[] = [
  {
    letter: "D",
    title: "Diplomacy / Democracy",
    subtitle: "The Foundation of Consensus",
    description:
      "Diplomacy is the art of reconciling competing sovereign interests through structured discourse, mutual respect, and compromise without capitulation. Democracy ensures every participant, regardless of background or experience, holds an equitable voice in shaping shared resolutions.",
    icon: Shield,
    application:
      "In committee, this principle is reflected in delegates who prioritize substantive consensus over aggressive rhetoric and welcome divergent perspectives.",
  },
  {
    letter: "L",
    title: "Law & Order",
    subtitle: "The Safeguard of Predictability",
    description:
      "International jurisprudence, statutory charters, and rules of procedure provide the bedrock for civil coexistence. Without adherence to legal norms and procedural integrity, international deliberation collapses into arbitrary force.",
    icon: Scale,
    application:
      "Demonstrated through rigorous adherence to UN Charters, precise resolution clause mechanics, and respect for parliamentary decorum.",
  },
  {
    letter: "G",
    title: "Geopolitics",
    subtitle: "The Reality of Statecraft",
    description:
      "Grounded understanding of geographic vulnerabilities, historical security pacts, resource dependencies, and structural power dynamics that govern how sovereign nations behave on the world stage.",
    icon: Globe2,
    application:
      "Expressed through research that moves past superficial media headlines to understand the structural realities driving state policy.",
  },
  {
    letter: "T",
    title: "Truth / Trust",
    subtitle: "The Currency of Credibility",
    description:
      "In an era of misdirection and polarized posturing, intellectual honesty and institutional credibility are indispensable. Trust is painstakingly cultivated through verified facts, authentic commitments, and transparency.",
    icon: CheckCircle,
    application:
      "Reflected in evidence-based position papers, verified citations, and authentic negotiations where commitments are honored.",
  },
  {
    letter: "S",
    title: "Sovereignty",
    subtitle: "The Bedrock of International Relations",
    description:
      "Respect for the political independence, territorial integrity, and self-determination of sovereign nations as enshrined in Article 2 of the United Nations Charter.",
    icon: Award,
    application:
      "Recognizing that global solutions must respect state sovereignty and domestic constitutional frameworks rather than imposing external coercion.",
  },
];

export default function DLGTSPhilosophy() {
  const [activeLetter, setActiveLetter] = useState<"D" | "L" | "G" | "T" | "S">("D");

  const activePrinciple =
    PRINCIPLES.find((p) => p.letter === activeLetter) || PRINCIPLES[0];
  const IconComponent = activePrinciple.icon;

  return (
    <section className="py-20 md:py-28 bg-[#171717] text-[#F4F0E8] border-b border-[#2D2B28]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#2D2B28] pb-8 gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-8 h-[1px] bg-white" />
              <span className="font-interface text-xs uppercase tracking-[0.22em] text-[#C9C2B7]">
                Brand Philosophy
              </span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-white font-normal">
              The DLGTS Framework
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#C9C2B7] max-w-md font-interface leading-relaxed">
            Five non-negotiable principles that inform every educational resource we publish, every community discussion we moderate, and every delegate we mentor.
          </p>
        </div>

        {/* 5-Letter Navigation Bar */}
        <div className="grid grid-cols-5 gap-1.5 sm:gap-4">
          {PRINCIPLES.map((item) => {
            const isSelected = activeLetter === item.letter;
            return (
              <button
                key={item.letter}
                onClick={() => setActiveLetter(item.letter)}
                className={`py-3 sm:py-6 px-1 sm:px-4 text-center border transition-all relative ${
                  isSelected
                    ? "bg-[#252422] border-white text-white shadow-md ring-1 ring-white"
                    : "bg-[#1E1D1B] border-[#2D2B28] text-[#8E877C] hover:text-[#C9C2B7] hover:border-[#444]"
                }`}
              >
                {isSelected && (
                  <span className="absolute top-0 left-0 right-0 h-1 bg-white" />
                )}
                <span className="block font-editorial text-2xl sm:text-4xl md:text-5xl font-light">
                  {item.letter}
                </span>
                <span className="mt-1 block font-interface text-[8px] sm:text-[10px] md:text-xs uppercase tracking-tight sm:tracking-wider truncate">
                  {item.letter === "T"
                    ? "Truth / Trust"
                    : item.letter === "D"
                    ? "Diplomacy / Democracy"
                    : item.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Principle Detailed Showcase */}
        <ScrollReveal delay={100}>
          <div key={activeLetter} className="bg-[#201F1D] border border-[#33312D] p-5 sm:p-8 md:p-12 animate-fadeIn card-hover-lift">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
              {/* Letter Callout */}
              <div className="lg:col-span-3 text-center lg:text-left border-b lg:border-b-0 lg:border-r border-[#33312D] pb-6 lg:pb-0 lg:pr-8 flex flex-col justify-between space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#171717] border border-[#33312D] text-white mx-auto lg:mx-0 transition-transform duration-300 hover:scale-105">
                  <IconComponent className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <span className="font-editorial text-5xl sm:text-6xl text-white block">
                    {activePrinciple.letter}
                  </span>
                  <span className="font-interface text-xs uppercase tracking-[0.2em] text-[#C9C2B7] font-semibold block">
                    {activePrinciple.title}
                  </span>
                </div>
              </div>

              {/* Content & Application */}
              <div className="lg:col-span-9 space-y-6">
                <div className="space-y-2">
                  <span className="font-interface text-[11px] uppercase tracking-widest text-[#8E877C]">
                    {activePrinciple.subtitle}
                  </span>
                  <p className="font-editorial text-xl sm:text-2xl text-white leading-relaxed">
                    “{activePrinciple.description}”
                  </p>
                </div>

                <div className="p-4 bg-[#171717] border border-[#2D2B28] text-xs text-[#C9C2B7] space-y-1">
                  <span className="font-interface font-semibold uppercase tracking-wider text-[10px] text-white block">
                    Practical Application in Diplomacy & MUN:
                  </span>
                  <p className="leading-relaxed">
                    {activePrinciple.application}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
