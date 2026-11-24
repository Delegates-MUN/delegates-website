"use client";

import { useState } from "react";
import Link from "next/link";
import { OPPORTUNITIES_DATA } from "@/data/opportunities";
import {
  Calendar,
  MapPin,
  Building,
  ArrowUpRight,
  PlusCircle,
  Clock,
} from "lucide-react";
import { SwissCornerMarks } from "@/components/ui/SwissAccents";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function FeaturedOpportunities() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    "MUN Conference",
    "Writing Competition",
    "EB Application",
  ];

  const filteredOpportunities =
    selectedCategory === "All"
      ? OPPORTUNITIES_DATA
      : OPPORTUNITIES_DATA.filter((opp) => opp.category === selectedCategory);

  const handleOpenSubmitModal = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-submit-opportunity-modal"));
    }
  };

  return (
    <section id="opportunities" className="py-20 md:py-28 bg-[#F4F0E8] border-b border-[#D8D0C4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#D8D0C4] pb-6 gap-6">
          <div className="space-y-3">
            <span className="font-interface text-xs uppercase tracking-[0.2em] text-[#68645D]">
              Circuit & Opportunities Hub
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-[#171717] font-normal">
              Featured Opportunities
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleOpenSubmitModal}
              className="inline-flex items-center gap-1.5 px-4 py-2 border border-[#171717] bg-[#171717] text-[#F4F0E8] text-xs font-interface uppercase tracking-wider hover:bg-black transition-colors"
            >
              <PlusCircle className="w-3.5 h-3.5 text-[#B89358]" />
              <span>Submit Opportunity</span>
            </button>
          </div>
        </div>

        {/* Opportunities Content or Welcoming Secretariat Callout */}
        {filteredOpportunities.length === 0 ? (
          <ScrollReveal>
            <div className="relative border border-[#D8D0C4] bg-white p-6 sm:p-10 md:p-14 text-center max-w-3xl mx-auto space-y-6 card-hover-lift">
              <SwissCornerMarks size="w-3 h-3" />
              <div className="w-14 h-14 mx-auto rounded-full bg-[#F4F0E8] border border-[#D8D0C4] flex items-center justify-center text-[#171717]">
                <PlusCircle className="w-6 h-6 text-[#171717]" />
              </div>
              <div className="space-y-2">
                <span className="font-interface text-[10px] uppercase tracking-[0.22em] text-[#B89358] font-semibold block">
                  Circuit Notice & Call for Submissions
                </span>
                <h3 className="font-editorial text-2xl sm:text-3xl text-[#171717] font-normal">
                  Hosting an MUN Conference or Youth Summit?
                </h3>
              </div>
              <p className="font-interface text-sm text-[#68645D] max-w-xl mx-auto leading-relaxed">
                DELEGATES provides free circuit listings for school, university, and independent MUN conferences worldwide. Reach hundreds of passionate debaters, publish your committee matrix, and announce EB applications at zero cost.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleOpenSubmitModal}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#171717] text-[#F4F0E8] text-xs font-interface uppercase tracking-wider font-semibold hover:bg-black transition-colors"
                >
                  <PlusCircle className="w-3.5 h-3.5 text-[#B89358]" />
                  <span>List Your Conference for Free</span>
                </button>
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-6 py-3 border border-[#D8D0C4] text-[#171717] text-xs font-interface uppercase tracking-wider hover:border-[#171717] transition-colors"
                >
                  <span>Secretariat Inquiries</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredOpportunities.map((opp, idx) => (
              <ScrollReveal key={opp.id} delay={(idx % 3) * 75} className="h-full">
                <div className="relative border border-[#D8D0C4] bg-white p-6 sm:p-7 flex flex-col justify-between hover:border-[#171717] transition-all group card-hover-lift h-full">
                  <SwissCornerMarks size="w-2 h-2" />
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-interface text-[10px] font-semibold uppercase tracking-[0.18em] px-2.5 py-1 bg-[#EAE4D9] text-[#171717] border border-[#D8D0C4]">
                        {opp.category}
                      </span>
                      <span className="font-interface text-[11px] text-[#8E877C]">
                        {opp.location.includes("Virtual") ? "Online" : "In-Person"}
                      </span>
                    </div>

                    <h3 className="font-editorial text-xl text-[#171717] group-hover:underline">
                      {opp.title}
                    </h3>

                    <p className="font-interface text-xs text-[#68645D] leading-relaxed line-clamp-2">
                      {opp.description}
                    </p>

                    <div className="space-y-2 pt-3 border-t border-[#D8D0C4] text-xs text-[#68645D]">
                      <div className="flex items-center gap-2">
                        <Building className="w-3.5 h-3.5 flex-shrink-0 text-[#171717]" />
                        <span className="truncate">{opp.organizer}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3.5 h-3.5 flex-shrink-0 text-[#171717]" />
                        <span>{opp.dateOrDeadline}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 flex-shrink-0 text-[#171717]" />
                        <span className="truncate">{opp.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-5 mt-auto border-t border-[#D8D0C4] flex items-center justify-between">
                    <a
                      href={opp.sourceUrl}
                      target={opp.sourceUrl.startsWith("http") ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs uppercase tracking-wider font-interface font-semibold text-[#171717] group-hover:underline"
                    >
                      <span>Apply / Info</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
