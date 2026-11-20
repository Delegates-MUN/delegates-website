"use client";

import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, ArrowRight, Home, MessageSquare, ArrowUpRight, Mail } from "lucide-react";
import { SwissCornerMarks, CartographicStamp, ArchivalBadge } from "@/components/ui/SwissAccents";

export default function ThankYouContent() {
  const searchParams = useSearchParams();
  const ref = searchParams.get("ref") || "DLGTS-CONFIRMED";
  const type = searchParams.get("type") || "enquiry";

  const isOpportunity = type === "opportunity";

  return (
    <div className="w-full bg-[#F4F0E8] text-[#202020] py-20 md:py-28 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-3xl w-full">
        <div className="relative border border-[#D8D0C4] bg-white p-8 sm:p-12 md:p-16 shadow-xl space-y-8 card-hover-lift">
          <SwissCornerMarks size="w-3 h-3" />

          {/* Header Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#D8D0C4] gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#171717] text-[#F4F0E8] flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-5 h-5 text-[#B89358]" />
              </div>
              <div>
                <span className="font-interface text-[10px] uppercase tracking-[0.2em] font-semibold text-[#68645D] block">
                  Official Registry · Status: Confirmed
                </span>
                <span className="font-mono text-xs text-[#171717] font-semibold">
                  Reference: {ref}
                </span>
              </div>
            </div>

            <ArchivalBadge
              label="SECRETARIAT DISPATCH"
              classification="TRANSMITTED"
              variant="dark"
            />
          </div>

          {/* Central Monogram */}
          <div className="w-12 h-14 mx-auto relative opacity-90">
            <Image
              src="/assets/delegates-monogram-dark.png"
              alt="DELEGATES Monogram"
              fill
              sizes="48px"
              className="object-contain"
            />
          </div>

          {/* Narrative */}
          <div className="text-center space-y-3">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#B89358] font-semibold block">
              {isOpportunity ? "Circuit Call Received" : "Official Transmission Logged"}
            </span>
            <h1 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-[#171717] font-normal">
              Thank You for Connecting
            </h1>
            <p className="font-editorial italic text-base sm:text-lg text-[#68645D] max-w-xl mx-auto leading-relaxed">
              “Your correspondence has been securely logged with the DELEGATES Secretariat and registered in our central desk.”
            </p>
            <p className="font-interface text-xs sm:text-sm text-[#8E877C] max-w-lg mx-auto leading-relaxed pt-2">
              {isOpportunity
                ? "Our editorial desk reviews all conference submissions for delegate safety, institutional authenticity, and non-predatory standards before public listing."
                : "Our secretariat desk reviews formal inquiries and partnership proposals directly. A confirmation receipt has been delivered, and we will follow up with you via email."}
            </p>
          </div>

          {/* Next Steps Card */}
          <div className="p-6 bg-[#F4F0E8] border border-[#D8D0C4] space-y-4">
            <span className="font-interface text-[10px] uppercase tracking-[0.2em] font-semibold text-[#171717] block">
              Immediate Next Steps
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-interface text-[#68645D]">
              <div className="space-y-1">
                <span className="font-semibold text-[#171717] block">1. Secretariat Review</span>
                <p>Direct review by the appropriate department without automated filtering.</p>
              </div>
              <div className="space-y-1">
                <span className="font-semibold text-[#171717] block">2. Email Correspondence</span>
                <p>Follow-up communications will originate directly from delegates@zohomail.in.</p>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a
              href="https://chat.whatsapp.com/DgERPMtTm4f0ONCfet1ebv"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#171717] text-[#F4F0E8] font-interface text-xs uppercase tracking-[0.18em] font-semibold hover:bg-black transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-[#25D366]" />
              <span>Join WhatsApp Community</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-[#D8D0C4] text-[#171717] font-interface text-xs uppercase tracking-[0.18em] font-medium hover:border-[#171717] transition-colors"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Return to Homepage</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
