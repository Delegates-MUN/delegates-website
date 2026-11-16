"use client";

import Link from "next/link";
import Logo from "@/components/ui/Logo";
import { ArrowUpRight, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = 2026;

  const handleOpenJoinModal = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-join-community-modal"));
    }
  };

  return (
    <>
      <footer className="bg-[#171717] text-[#F4F0E8] border-t border-[#2D2B28] pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#2D2B28]">
            {/* Col 1: Brand & Tagline */}
            <div className="md:col-span-5 space-y-6">
              <Logo variant="light" size="md" />

              <div className="space-y-3">
                <p className="font-editorial text-xl sm:text-2xl text-white font-normal leading-snug">
                  “Rooted in Principles.
                  <br />
                  United by Dialogue.”
                </p>
                <p className="text-xs text-[#C9C2B7] max-w-sm leading-relaxed">
                  A platform for MUN enthusiasts, aspiring diplomats, and youth leaders to connect, learn without barriers, and engage with the world through principled discourse.
                </p>
              </div>

              {/* DLGTS Matrix Quick Reference */}
              <div className="pt-2">
                <span className="font-interface text-[10px] tracking-[0.2em] uppercase text-[#8E877C] block mb-2">
                  The DLGTS Philosophy
                </span>
                <div className="flex flex-wrap gap-2 text-[11px] font-interface text-[#C9C2B7]">
                  <span className="px-2 py-0.5 bg-[#252422] border border-[#33312D]">
                    <strong className="text-white">D</strong>iplomacy / Democracy
                  </span>
                  <span className="px-2 py-0.5 bg-[#252422] border border-[#33312D]">
                    <strong className="text-white">L</strong>aw & Order
                  </span>
                  <span className="px-2 py-0.5 bg-[#252422] border border-[#33312D]">
                    <strong className="text-white">G</strong>eopolitics
                  </span>
                  <span className="px-2 py-0.5 bg-[#252422] border border-[#33312D]">
                    <strong className="text-white">T</strong>ruth / Trust
                  </span>
                  <span className="px-2 py-0.5 bg-[#252422] border border-[#33312D]">
                    <strong className="text-white">S</strong>overeignty
                  </span>
                </div>
              </div>
            </div>

            {/* Col 2: The Three Pillars */}
            <div className="md:col-span-3 space-y-4">
              <h4 className="font-interface text-xs font-semibold uppercase tracking-[0.2em] text-white">
                The Three Pillars
              </h4>
              <ul className="space-y-2.5 text-xs text-[#C9C2B7] font-interface">
                <li>
                  <Link
                    href="/community"
                    className="hover:text-white transition-colors flex items-center justify-between group"
                  >
                    <span>01 — Community</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/academy"
                    className="hover:text-white transition-colors flex items-center justify-between group"
                  >
                    <span>02 — Academy</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/media"
                    className="hover:text-white transition-colors flex items-center justify-between group"
                  >
                    <span>03 — Media</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
                <li className="pt-2">
                  <button
                    onClick={handleOpenJoinModal}
                    className="text-white hover:text-[#F4F0E8] underline underline-offset-4 decoration-[#68645D]"
                  >
                    Join the Community →
                  </button>
                </li>
              </ul>
            </div>

            {/* Col 3: Navigation & Organization */}
            <div className="md:col-span-2 space-y-4">
              <h4 className="font-interface text-xs font-semibold uppercase tracking-[0.2em] text-white">
                Platform
              </h4>
              <ul className="space-y-2.5 text-xs text-[#C9C2B7] font-interface">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="hover:text-white transition-colors"
                  >
                    About DELEGATES
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact & Enquiries
                  </Link>
                </li>
                <li>
                  <Link
                    href="/community#opportunities"
                    className="hover:text-white transition-colors"
                  >
                    MUN Opportunities
                  </Link>
                </li>
                <li>
                  <Link
                    href="/community#faq"
                    className="hover:text-white transition-colors"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 4: Channels & Engagement */}
            <div className="md:col-span-2 space-y-4">
              <h4 className="font-interface text-xs font-semibold uppercase tracking-[0.2em] text-white">
                Channels
              </h4>
              <ul className="space-y-2.5 text-xs text-[#C9C2B7] font-interface">
                <li>
                  <a
                    href="https://www.instagram.com/delegatesofficial"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <span>Instagram</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/delegates"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <span>LinkedIn</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </li>
                <li className="pt-2">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs text-white hover:text-[#C9C2B7]"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Official Desk</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar: Copyright & Legal */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#8E877C] font-interface gap-4">
            <div>
              © {currentYear} DELEGATES. All rights reserved. “Rooted in Principles. United by Dialogue.”
            </div>
            <div className="flex items-center space-x-6">
              <Link
                href="/about#principles"
                className="hover:text-[#C9C2B7] transition-colors"
              >
                Principles & Ethics
              </Link>
              <Link
                href="/contact"
                className="hover:text-[#C9C2B7] transition-colors"
              >
                Privacy & Data
              </Link>
              <Link
                href="/contact"
                className="hover:text-[#C9C2B7] transition-colors"
              >
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
