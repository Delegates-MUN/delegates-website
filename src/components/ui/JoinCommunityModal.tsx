"use client";

import { useState, useEffect } from "react";
import { X, ArrowUpRight, MessageSquare, Mail, Compass } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SwissCornerMarks } from "@/components/ui/SwissAccents";

export default function JoinCommunityModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("open-join-community-modal", handleOpen);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("open-join-community-modal", handleOpen);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/60 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="join-modal-title"
    >
      <div
        className="relative w-full max-w-lg bg-[#F4F0E8] text-[#202020] border border-[#D8D0C4] shadow-2xl p-6 sm:p-8 md:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <SwissCornerMarks />

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 p-2 text-[#68645D] hover:text-[#171717] hover:bg-[#EAE4D9] rounded-full transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-start gap-4 mb-6 pb-5 border-b border-[#D8D0C4]">
          <div className="relative w-10 h-12 flex-shrink-0">
            <Image
              src="/assets/delegates-monogram-dark.png"
              alt="DELEGATES Official Monogram Emblem"
              fill
              sizes="40px"
              className="object-contain"
            />
          </div>
          <div>
            <span className="font-interface text-[10px] tracking-[0.2em] uppercase text-[#68645D] font-semibold">
              The DELEGATES Network
            </span>
            <h2
              id="join-modal-title"
              className="font-editorial text-2xl md:text-3xl text-[#171717] mt-0.5"
            >
              Join the Community
            </h2>
          </div>
        </div>

        {/* Body */}
        <div className="space-y-6">
          <p className="font-interface text-xs sm:text-sm text-[#68645D] leading-relaxed">
            DELEGATES brings together MUN enthusiasts, aspiring diplomats, and individuals interested in international affairs. Anyone interested in diplomacy and Model UN is welcomed into our open community forum. Specialized cohorts and working groups are planned for future phases as the community grows.
          </p>

          {/* Primary Action Card: WhatsApp */}
          <div className="p-5 bg-white border border-[#D8D0C4] space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#B89358] font-semibold">
                OPEN COMMUNITY GROUP
              </span>
              <span className="text-[10px] font-interface text-[#68645D]">Instant Access</span>
            </div>
            <p className="text-xs text-[#202020] leading-relaxed">
              Join our primary WhatsApp forum to connect with fellow delegates, share perspectives, and receive community announcements.
            </p>
            <a
              href="https://chat.whatsapp.com/DgERPMtTm4f0ONCfet1ebv"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#171717] text-white text-xs uppercase tracking-widest font-interface font-semibold hover:bg-black transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-[#25D366]" />
              <span>Enter WhatsApp Community</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Secondary Action: Email Enquiry */}
          <div className="flex items-center justify-between text-xs text-[#68645D] pt-2 border-t border-[#D8D0C4]">
            <span>Have a specific collaboration in mind?</span>
            <Link
              href="/contact"
              onClick={handleClose}
              className="text-[#171717] font-semibold hover:underline flex items-center gap-1"
            >
              <span>Contact Desk</span>
              <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
