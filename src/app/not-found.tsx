import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Compass, Search, Home, Mail, Users, BookOpen } from "lucide-react";
import { SwissCornerMarks, CartographicStamp, ArchivalBadge } from "@/components/ui/SwissAccents";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] w-full bg-[#F4F0E8] text-[#202020] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full">
        <div className="relative border border-[#D8D0C4] bg-white p-8 sm:p-12 md:p-14 shadow-lg text-center space-y-8 card-hover-lift">
          <SwissCornerMarks size="w-3 h-3" />

          {/* Top Archival Tag */}
          <div className="flex items-center justify-between border-b border-[#D8D0C4] pb-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
              <span className="font-interface text-[10px] uppercase tracking-[0.2em] font-semibold text-[#68645D]">
                Archival Protocol · Error 404
              </span>
            </div>
            <CartographicStamp
              location="PAGE NOT FOUND"
              coordinates="ARCHIVE DIRECTORY"
              className="hidden sm:inline-flex"
            />
          </div>

          {/* Monogram Brand Emblem */}
          <div className="w-12 h-14 mx-auto relative opacity-90">
            <Image
              src="/assets/delegates-monogram-dark.png"
              alt="DELEGATES Monogram"
              fill
              sizes="48px"
              className="object-contain"
            />
          </div>

          {/* Headline & Explanation */}
          <div className="space-y-3">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#B89358] font-semibold block">
              Folio Not Located
            </span>
            <h1 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-[#171717] font-normal leading-tight">
              Dispatch Not Found
            </h1>
            <p className="font-editorial italic text-base sm:text-lg text-[#68645D] max-w-lg mx-auto leading-relaxed">
              “The corridor or document you requested cannot be located in the DELEGATES public registry.”
            </p>
            <p className="font-interface text-xs text-[#8E877C] max-w-md mx-auto leading-relaxed pt-1">
              The page may have been relocated, archived, or the link may contain an erroneous destination.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#171717] text-[#F4F0E8] font-interface text-xs uppercase tracking-[0.18em] font-semibold hover:bg-black transition-colors"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Return Home</span>
            </Link>

            <Link
              href="/community"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 border border-[#D8D0C4] text-[#171717] font-interface text-xs uppercase tracking-[0.18em] font-medium hover:border-[#171717] transition-colors"
            >
              <Users className="w-3.5 h-3.5" />
              <span>Community Forum</span>
            </Link>
          </div>

          {/* Quick Directory Grid */}
          <div className="pt-6 border-t border-[#D8D0C4] grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
            <Link
              href="/about"
              className="p-3 bg-[#F4F0E8] border border-[#D8D0C4] hover:border-[#171717] transition-all group"
            >
              <span className="text-[10px] uppercase font-semibold text-[#171717] tracking-wider block">
                About DLGTS
              </span>
              <span className="text-[11px] text-[#68645D] group-hover:text-[#171717]">
                Philosophy →
              </span>
            </Link>

            <Link
              href="/academy"
              className="p-3 bg-[#F4F0E8] border border-[#D8D0C4] hover:border-[#171717] transition-all group"
            >
              <span className="text-[10px] uppercase font-semibold text-[#171717] tracking-wider block">
                Academy
              </span>
              <span className="text-[11px] text-[#68645D] group-hover:text-[#171717]">
                Curriculum →
              </span>
            </Link>

            <Link
              href="/media"
              className="p-3 bg-[#F4F0E8] border border-[#D8D0C4] hover:border-[#171717] transition-all group"
            >
              <span className="text-[10px] uppercase font-semibold text-[#171717] tracking-wider block">
                Media Desk
              </span>
              <span className="text-[11px] text-[#68645D] group-hover:text-[#171717]">
                Perspectives →
              </span>
            </Link>

            <Link
              href="/contact"
              className="p-3 bg-[#F4F0E8] border border-[#D8D0C4] hover:border-[#171717] transition-all group"
            >
              <span className="text-[10px] uppercase font-semibold text-[#171717] tracking-wider block">
                Contact Desk
              </span>
              <span className="text-[11px] text-[#68645D] group-hover:text-[#171717]">
                Secretariat →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
