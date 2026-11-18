"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, Search, PlusCircle } from "lucide-react";
import Logo from "@/components/ui/Logo";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Community", href: "/community" },
  { name: "Academy", href: "/academy" },
  { name: "Media", href: "/media" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const handleOpenJoinModal = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-join-community-modal"));
    }
  };

  const handleOpenSearch = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-global-search"));
    }
  };

  const handleOpenSubmitModal = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-submit-opportunity-modal"));
    }
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-[#F4F0E8]/95 backdrop-blur-md shadow-xs border-b border-[#D8D0C4]/70 py-3"
            : "bg-[#F4F0E8] border-b border-[#D8D0C4] py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Logo variant="dark" size="sm" />
            </div>

            {/* Desktop Navigation */}
            <nav
              className="hidden lg:flex items-center space-x-7"
              aria-label="Main Navigation"
            >
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`font-interface text-xs uppercase tracking-[0.16em] font-medium transition-colors relative py-1 ${
                      isActive
                        ? "text-[#171717] font-semibold"
                        : "text-[#68645D] hover:text-[#171717]"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#171717]" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-3">
              {/* Search Trigger */}
              <button
                onClick={handleOpenSearch}
                className="flex items-center gap-2 px-3 py-1.5 border border-[#D8D0C4] bg-white/70 hover:bg-white hover:border-[#171717] text-[#68645D] hover:text-[#171717] transition-all text-xs font-interface"
                title="Search the site (Ctrl+K)"
              >
                <Search className="w-3.5 h-3.5" />
                <span className="text-[11px] uppercase tracking-wider">Search</span>
                <kbd className="text-[9px] bg-[#EAE4D9] px-1 py-0.5 border border-[#D8D0C4] font-mono text-[#68645D]">
                  ⌘K
                </kbd>
              </button>

              {/* Submit Opportunity Trigger */}
              <button
                onClick={handleOpenSubmitModal}
                className="hidden xl:inline-flex items-center gap-1.5 px-3 py-1.5 border border-dashed border-[#8E877C] hover:border-[#171717] text-[#68645D] hover:text-[#171717] text-xs font-interface uppercase tracking-wider transition-colors"
                title="Submit an MUN Conference or Research Call"
              >
                <PlusCircle className="w-3.5 h-3.5 text-[#B89358]" />
                <span className="text-[11px]">Submit Call</span>
              </button>

              {/* Join Community CTA */}
              <button
                onClick={handleOpenJoinModal}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#171717] text-[#F4F0E8] text-xs uppercase tracking-[0.15em] font-interface font-medium hover:bg-black transition-colors"
              >
                <span>Join Community</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile / Tablet Hamburger & Fast Action Buttons */}
            <div className="flex lg:hidden items-center space-x-2">
              <button
                onClick={handleOpenSearch}
                className="p-2 text-[#68645D] hover:text-[#171717]"
                aria-label="Search"
              >
                <Search className="w-4 h-4" />
              </button>
              <button
                onClick={handleOpenJoinModal}
                className="px-3 py-1.5 bg-[#171717] text-[#F4F0E8] text-[11px] uppercase tracking-wider font-interface font-medium"
              >
                Join
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#202020] hover:text-[#171717] focus:outline-none"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile / Tablet Slide-down Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#D8D0C4] bg-[#F4F0E8] px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
            <nav className="flex flex-col space-y-1">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block py-2.5 px-3 font-interface text-sm uppercase tracking-wider transition-colors ${
                      isActive
                        ? "bg-[#EAE4D9] text-[#171717] font-semibold"
                        : "text-[#68645D] hover:bg-[#EAE4D9]/50 hover:text-[#171717]"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            <div className="pt-3 border-t border-[#D8D0C4] space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleOpenSubmitModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 border border-[#171717] text-[#171717] text-xs uppercase tracking-widest font-interface font-medium"
              >
                <PlusCircle className="w-4 h-4 text-[#B89358]" />
                <span>Submit Opportunity / Call</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleOpenJoinModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 bg-[#171717] text-[#F4F0E8] text-xs uppercase tracking-widest font-interface font-medium"
              >
                <span>Join the Community</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
