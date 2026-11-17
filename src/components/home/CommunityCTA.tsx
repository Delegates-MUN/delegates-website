"use client";

import Image from "next/image";
import { ArrowUpRight, MessageSquare } from "lucide-react";

export default function CommunityCTA() {
  const handleOpenJoinModal = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-join-community-modal"));
    }
  };

  return (
    <section className="py-24 md:py-32 bg-[#171717] text-[#F4F0E8] relative overflow-hidden border-b border-[#2D2B28]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
        {/* Monogram watermarked accent */}
        <div className="w-12 h-14 mx-auto relative opacity-80">
          <Image
            src="/assets/delegates-monogram-light.png"
            alt="DELEGATES Monogram"
            fill
            sizes="48px"
            className="object-contain"
          />
        </div>

        <span className="font-interface text-xs uppercase tracking-[0.25em] text-[#C9C2B7] block">
          Join the Movement
        </span>

        <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-normal leading-[1.15] max-w-3xl mx-auto">
          “The world is shaped by those willing to understand it.”
        </h2>

        <p className="font-interface text-sm sm:text-base text-[#C9C2B7] max-w-xl mx-auto leading-relaxed">
          Anyone interested is welcomed into our open community forum. Selected active members are invited into specialized working groups and committee cohorts subsequently.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://chat.whatsapp.com/DgERPMtTm4f0ONCfet1ebv"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white text-[#171717] font-interface text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#F4F0E8] transition-all shadow-lg active:scale-[0.98]"
          >
            <MessageSquare className="w-4 h-4 text-[#25D366]" />
            <span>Join WhatsApp Community</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <button
            onClick={handleOpenJoinModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 border border-white/40 text-white font-interface text-xs uppercase tracking-[0.2em] font-semibold hover:bg-white hover:text-[#171717] transition-all active:scale-[0.98]"
          >
            <span>Register Member Profile</span>
          </button>
        </div>

        <p className="text-[11px] font-interface text-[#8E877C] tracking-wide pt-2">
          Rooted in Principles. United by Dialogue. · Direct WhatsApp entry open to all delegates; specialized cohorts selected subsequently.
        </p>
      </div>
    </section>
  );
}
