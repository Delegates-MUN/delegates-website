"use client";

import { ArrowUpRight, MessageSquare, Mail, Globe, Share2 } from "lucide-react";
import { SwissCornerMarks } from "@/components/ui/SwissAccents";

export default function NewsletterBar() {
  return (
    <section className="relative bg-[#171717] text-[#F4F0E8] border-t border-b border-[#2D2B28] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="relative border border-[#33312D] bg-[#1E1D1B] p-5 sm:p-8 md:p-12">
          <SwissCornerMarks borderColor="border-white/30" />
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            {/* Left Column: Heading and Supporting Text */}
            <div className="space-y-3 max-w-xl">
              <span className="font-interface text-[10px] uppercase tracking-[0.22em] text-[#B89358] font-semibold block">
                Official Channels
              </span>
              <h3 className="font-editorial text-2xl sm:text-3xl md:text-4xl text-white font-normal leading-tight">
                Stay Connected with DELEGATES
              </h3>
              <p className="font-interface text-xs sm:text-sm text-[#C9C2B7] leading-relaxed">
                Follow our platforms for updates, learning resources, and community announcements.
              </p>
            </div>

            {/* Right Column: Verified Social & Community Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-wrap items-center gap-2.5 sm:gap-3">
              <a
                href="https://chat.whatsapp.com/DgERPMtTm4f0ONCfet1ebv"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-3 bg-white text-[#171717] font-interface text-xs uppercase tracking-[0.16em] font-semibold hover:bg-[#F4F0E8] transition-colors active:scale-[0.98]"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="https://www.linkedin.com/company/delegates-mun/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 border border-[#33312D] bg-[#252422] text-white hover:text-white hover:border-white font-interface text-xs uppercase tracking-[0.16em] font-medium transition-colors active:scale-[0.98]"
              >
                {/* LinkedIn SVG */}
                <svg className="w-4 h-4 fill-current text-[#0077B5]" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28" />
                </svg>
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="https://www.instagram.com/delegates_mun/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 border border-[#33312D] bg-[#252422] text-white hover:text-white hover:border-white font-interface text-xs uppercase tracking-[0.16em] font-medium transition-colors active:scale-[0.98]"
              >
                {/* Instagram SVG */}
                <svg className="w-4 h-4 fill-current text-[#E4405F]" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span>Instagram</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="mailto:delegates@zohomail.in"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 border border-[#33312D] bg-[#252422] text-white hover:text-white hover:border-white font-interface text-xs uppercase tracking-[0.16em] font-medium transition-colors active:scale-[0.98]"
              >
                <Mail className="w-4 h-4 text-[#B89358]" />
                <span>Email Desk</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
