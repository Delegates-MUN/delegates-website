"use client";

import { Search, Globe2 } from "lucide-react";

export default function EditorialMastheadBar() {
  const handleOpenSearch = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-global-search"));
    }
  };

  return (
    <div className="bg-[#171717] text-[#C9C2B7] text-[10px] font-interface border-b border-[#2D2B28] py-1.5 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Dateline & Issue */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-white font-medium uppercase tracking-widest">
            <Globe2 className="w-3 h-3 text-[#B89358]" />
            <span>GLOBAL DISPATCH DESK</span>
          </div>
          <span className="hidden md:inline text-[#68645D]">|</span>
          <span className="hidden md:inline tracking-wider uppercase">
            EST. 2026 · VOL. I · ISSUE Nº 01
          </span>
          <span className="hidden lg:inline text-[#68645D]">|</span>
          <span className="hidden lg:inline font-editorial italic text-white/90">
            “Rooted in Principles. United by Dialogue.”
          </span>
        </div>

        {/* Right: Quick Search Pill & DLGTS Tag */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleOpenSearch}
            className="flex items-center gap-1.5 px-2 py-0.5 bg-[#252422] border border-[#33312D] text-white hover:border-[#68645D] transition-colors rounded-none"
            aria-label="Search site"
          >
            <Search className="w-3 h-3 text-[#C9C2B7]" />
            <span className="text-[9px] uppercase tracking-wider hidden sm:inline">Search</span>
            <kbd className="text-[9px] bg-[#171717] px-1 py-0.2 border border-[#444] text-[#C9C2B7] font-mono">
              Ctrl K
            </kbd>
          </button>
        </div>
      </div>
    </div>
  );
}
