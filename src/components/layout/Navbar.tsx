"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
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
              className="hidden md:flex items-center space-x-8"
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

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={handleOpenJoinModal}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#171717] text-[#F4F0E8] text-xs uppercase tracking-[0.15em] font-interface font-medium hover:bg-black transition-colors"
              >
                <span>Join Community</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden items-center space-x-3">
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

        {/* Mobile Slide-down Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#D8D0C4] bg-[#F4F0E8] px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
            <nav className="flex flex-col space-y-2">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
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
            <div className="pt-3 border-t border-[#D8D0C4]">
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
