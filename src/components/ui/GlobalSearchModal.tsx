"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ACADEMY_RESOURCES } from "@/data/academy";
import { Search, X, BookOpen, Compass, ArrowRight } from "lucide-react";

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
      ).slice(0, 4)
    : [];

  const pages = [
    { name: "Home", href: "/", desc: "Rooted in Principles. United by Dialogue." },
    { name: "Community Hub", href: "/community", desc: "A Community Built Around Dialogue & WhatsApp Forum" },
    { name: "Academy Library", href: "/academy", desc: "Foundational Model UN Learning & Procedural Guides" },
    { name: "Media Desk", href: "/media", desc: "Perspectives on Diplomacy, Geopolitics, and International Relations" },
    { name: "About DELEGATES", href: "/about", desc: "Our Vision, Mission, and the DLGTS Philosophy" },
    { name: "Contact & Correspondence", href: "/contact", desc: "Official Enquiries, Collaborations, and Submissions" },
  ];

  const pageResults = cleanQuery
    ? pages.filter(
        (p) =>
          p.name.toLowerCase().includes(cleanQuery) ||
          p.desc.toLowerCase().includes(cleanQuery)
      )
    : [];

  const hasResults = guideResults.length > 0 || pageResults.length > 0;

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
            placeholder="Search learning guides, pillars, pages... (Esc to close)"
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
              Explore DELEGATES
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {pages.slice(1, 5).map((page) => (
                <button
                  key={page.name}
                  onClick={() => navigateTo(page.href)}
                  className="p-3 bg-white border border-[#D8D0C4] text-left hover:border-[#171717] transition-colors group flex items-center justify-between"
                >
                  <div>
                    <span className="font-editorial text-sm text-[#171717] block font-medium group-hover:underline">
                      {page.name}
                    </span>
                    <span className="text-[11px] text-[#68645D] line-clamp-1">{page.desc}</span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-[#8E877C] group-hover:text-[#171717] group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                </button>
              ))}
            </div>
          </div>
        ) : hasResults ? (
          <div className="space-y-6 pt-2">
            {/* Pages Matches */}
            {pageResults.length > 0 && (
              <div className="space-y-2">
                <span className="text-[10px] font-interface uppercase tracking-widest text-[#8E877C] font-semibold flex items-center gap-1.5">
                  <Compass className="w-3 h-3" />
                  Navigation Pages
                </span>
                <div className="space-y-1.5">
                  {pageResults.map((p) => (
                    <button
                      key={p.name}
                      onClick={() => navigateTo(p.href)}
                      className="w-full p-3 bg-white border border-[#D8D0C4] text-left hover:border-[#171717] transition-colors flex items-center justify-between group"
                    >
                      <div>
                        <span className="font-editorial text-sm text-[#171717] group-hover:underline">
                          {p.name}
                        </span>
                        <p className="text-[11px] text-[#68645D]">{p.desc}</p>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-[#8E877C] group-hover:text-[#171717] group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Guide Matches */}
            {guideResults.length > 0 && (
              <div className="space-y-2">
                <span className="text-[10px] font-interface uppercase tracking-widest text-[#8E877C] font-semibold flex items-center gap-1.5">
                  <BookOpen className="w-3 h-3" />
                  Academy Learning Guides
                </span>
                <div className="space-y-1.5">
                  {guideResults.map((g) => (
                    <button
                      key={g.id}
                      onClick={() => navigateTo(`/academy#${g.slug}`)}
                      className="w-full p-3 bg-white border border-[#D8D0C4] text-left hover:border-[#171717] transition-colors flex items-center justify-between group"
                    >
                      <div>
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="text-[9px] font-interface uppercase tracking-wider bg-[#EAE4D9] px-1.5 py-0.5 text-[#171717]">
                            {g.category}
                          </span>
                          <span className="text-[10px] text-[#8E877C]">{g.readingTime}</span>
                        </div>
                        <span className="font-editorial text-sm text-[#171717] group-hover:underline">
                          {g.title}
                        </span>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-[#8E877C] group-hover:text-[#171717] group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="py-12 text-center text-xs text-[#68645D] space-y-1">
            <p className="font-editorial text-base text-[#171717]">
              No resources found matching &ldquo;{query}&rdquo;
            </p>
            <p>Try searching for general topics such as &ldquo;Rules of Procedure&rdquo;, &ldquo;Position Papers&rdquo;, or &ldquo;Community&rdquo;.</p>
          </div>
        )}
      </div>
    </div>
  );
}
