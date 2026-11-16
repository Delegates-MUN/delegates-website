"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ACADEMY_RESOURCES } from "@/data/academy";
import { MEDIA_ARTICLES } from "@/data/media";
import { OPPORTUNITIES_DATA } from "@/data/opportunities";
import { Search, X, BookOpen, Newspaper, Compass, Wrench, ArrowRight } from "lucide-react";

export default function GlobalSearchModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    const handleCustomOpen = () => setIsOpen(true);

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("open-global-search", handleCustomOpen);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("open-global-search", handleCustomOpen);
    };
  }, [isOpen]);

  const cleanQuery = query.toLowerCase().trim();

  // Search Results
  const guideResults = cleanQuery
    ? ACADEMY_RESOURCES.filter(
        (g) =>
          g.title.toLowerCase().includes(cleanQuery) ||
          g.category.toLowerCase().includes(cleanQuery) ||
          g.summary.toLowerCase().includes(cleanQuery)
      ).slice(0, 3)
    : [];

  const articleResults = cleanQuery
    ? MEDIA_ARTICLES.filter(
        (a) =>
          a.title.toLowerCase().includes(cleanQuery) ||
          a.category.toLowerCase().includes(cleanQuery) ||
          a.summary.toLowerCase().includes(cleanQuery)
      ).slice(0, 3)
    : [];

  const oppResults = cleanQuery
    ? OPPORTUNITIES_DATA.filter(
        (o) =>
          o.title.toLowerCase().includes(cleanQuery) ||
          o.organizer.toLowerCase().includes(cleanQuery) ||
          o.category.toLowerCase().includes(cleanQuery)
      ).slice(0, 2)
    : [];

  const tools = [
    {
      title: "UN Resolution Clause Builder",
      desc: "Draft verified Preambulatory and Operative clauses with official verbs",
      href: "/academy?tab=lab",
    },
    {
      title: "Rules of Procedure (RoP) Decision Matrix",
      desc: "Instant parliamentary remedies for committee dilemmas and points",
      href: "/academy?tab=lab",
    },
    {
      title: "Country Dossier & Redline Planner",
      desc: "Structure national foreign policy redlines and alliances",
      href: "/academy?tab=lab",
    },
  ];

  const toolResults = cleanQuery
    ? tools.filter(
        (t) =>
          t.title.toLowerCase().includes(cleanQuery) ||
          t.desc.toLowerCase().includes(cleanQuery)
      )
    : [];

  const hasResults =
    guideResults.length > 0 ||
    articleResults.length > 0 ||
    oppResults.length > 0 ||
    toolResults.length > 0;

  const navigateTo = (href: string) => {
    setIsOpen(false);
    setQuery("");
    router.push(href);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-2xl bg-[#F4F0E8] border border-[#D8D0C4] shadow-2xl p-6 text-[#202020] space-y-4 max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Header */}
        <div className="flex items-center gap-3 border-b border-[#D8D0C4] pb-4">
          <Search className="w-5 h-5 text-[#68645D]" />
          <input
            type="text"
            placeholder="Search guides, articles, opportunities, or tools... (Esc to close)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="flex-grow bg-transparent text-sm sm:text-base text-[#171717] focus:outline-none placeholder:text-[#8E877C]"
          />
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 text-[#68645D] hover:text-[#171717]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Area */}
        {!cleanQuery ? (
          <div className="py-6 space-y-4 text-xs text-[#68645D]">
            <span className="font-interface uppercase tracking-wider text-[10px] text-[#8E877C] block font-semibold">
              Quick Suggestions
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <button
                onClick={() => navigateTo("/academy")}
                className="text-left p-3 border border-[#D8D0C4] bg-white hover:border-[#171717] transition-colors"
              >
                <span className="font-semibold text-[#171717] block">Rules of Procedure</span>
                <span className="text-[11px] text-[#68645D]">Parliamentary motions & voting guides</span>
              </button>
              <button
                onClick={() => navigateTo("/media")}
                className="text-left p-3 border border-[#D8D0C4] bg-white hover:border-[#171717] transition-colors"
              >
                <span className="font-semibold text-[#171717] block">Geopolitics Desks</span>
                <span className="text-[11px] text-[#68645D]">Multilateralism & sovereignty analysis</span>
              </button>
              <button
                onClick={() => navigateTo("/community#opportunities")}
                className="text-left p-3 border border-[#D8D0C4] bg-white hover:border-[#171717] transition-colors"
              >
                <span className="font-semibold text-[#171717] block">Upcoming MUNs</span>
                <span className="text-[11px] text-[#68645D]">Verified collegiate conferences & EB calls</span>
              </button>
              <button
                onClick={() => navigateTo("/academy")}
                className="text-left p-3 border border-[#D8D0C4] bg-white hover:border-[#171717] transition-colors"
              >
                <span className="font-semibold text-[#171717] block">Diplomatic Lab Tools</span>
                <span className="text-[11px] text-[#68645D]">Clause Builder & Dossier Worksheet</span>
              </button>
            </div>
          </div>
        ) : !hasResults ? (
          <div className="py-12 text-center text-xs text-[#68645D] space-y-1">
            <p className="font-editorial text-base text-[#171717]">
              No results found for “{query}”
            </p>
            <p>Try searching for “procedure”, “resolution”, “geopolitics”, or “opportunities”.</p>
          </div>
        ) : (
          <div className="space-y-6 py-2">
            {/* Tools */}
            {toolResults.length > 0 && (
              <div className="space-y-2">
                <span className="text-[10px] font-interface uppercase tracking-widest text-[#8E877C] font-semibold flex items-center gap-1.5">
                  <Wrench className="w-3.5 h-3.5" />
                  <span>Diplomatic Tools</span>
                </span>
                <div className="space-y-1.5">
                  {toolResults.map((t) => (
                    <button
                      key={t.title}
                      onClick={() => navigateTo(t.href)}
                      className="w-full text-left p-3 bg-white border border-[#D8D0C4] hover:border-[#171717] transition-all flex items-center justify-between"
                    >
                      <div className="space-y-0.5">
                        <span className="font-editorial text-sm text-[#171717] font-medium block">
                          {t.title}
                        </span>
                        <span className="text-xs text-[#68645D] line-clamp-1">
                          {t.desc}
                        </span>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-[#171717] flex-shrink-0" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Academy Guides */}
            {guideResults.length > 0 && (
              <div className="space-y-2">
                <span className="text-[10px] font-interface uppercase tracking-widest text-[#8E877C] font-semibold flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Academy Curriculum</span>
                </span>
                <div className="space-y-1.5">
                  {guideResults.map((g) => (
                    <button
                      key={g.id}
                      onClick={() => navigateTo(`/academy/${g.slug}`)}
                      className="w-full text-left p-3 bg-white border border-[#D8D0C4] hover:border-[#171717] transition-all flex items-center justify-between"
                    >
                      <div className="space-y-0.5">
                        <span className="text-[10px] font-interface uppercase tracking-wider text-[#68645D]">
                          {g.category} · {g.readingTime}
                        </span>
                        <span className="font-editorial text-sm text-[#171717] font-medium block">
                          {g.title}
                        </span>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-[#171717] flex-shrink-0" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Media Articles */}
            {articleResults.length > 0 && (
              <div className="space-y-2">
                <span className="text-[10px] font-interface uppercase tracking-widest text-[#8E877C] font-semibold flex items-center gap-1.5">
                  <Newspaper className="w-3.5 h-3.5" />
                  <span>Media Publications</span>
                </span>
                <div className="space-y-1.5">
                  {articleResults.map((a) => (
                    <button
                      key={a.id}
                      onClick={() => navigateTo(`/media/${a.slug}`)}
                      className="w-full text-left p-3 bg-white border border-[#D8D0C4] hover:border-[#171717] transition-all flex items-center justify-between"
                    >
                      <div className="space-y-0.5">
                        <span className="text-[10px] font-interface uppercase tracking-wider text-[#68645D]">
                          {a.category} · {a.readingTime}
                        </span>
                        <span className="font-editorial text-sm text-[#171717] font-medium block">
                          {a.title}
                        </span>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-[#171717] flex-shrink-0" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Opportunities */}
            {oppResults.length > 0 && (
              <div className="space-y-2">
                <span className="text-[10px] font-interface uppercase tracking-widest text-[#8E877C] font-semibold flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5" />
                  <span>Opportunities Hub</span>
                </span>
                <div className="space-y-1.5">
                  {oppResults.map((o) => (
                    <button
                      key={o.id}
                      onClick={() => navigateTo("/community#opportunities")}
                      className="w-full text-left p-3 bg-white border border-[#D8D0C4] hover:border-[#171717] transition-all flex items-center justify-between"
                    >
                      <div className="space-y-0.5">
                        <span className="text-[10px] font-interface uppercase tracking-wider text-[#68645D]">
                          {o.category} · {o.organizer}
                        </span>
                        <span className="font-editorial text-sm text-[#171717] font-medium block">
                          {o.title}
                        </span>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-[#171717] flex-shrink-0" />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Footer tip */}
        <div className="pt-2 border-t border-[#D8D0C4] flex items-center justify-between text-[10px] font-interface text-[#8E877C]">
          <span>Tip: Press Ctrl+K (or Cmd+K) anywhere to search</span>
          <span>Press Esc to close</span>
        </div>
      </div>
    </div>
  );
}
