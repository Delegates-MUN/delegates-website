"use client";

import { useState } from "react";
import Link from "next/link";
import { OPPORTUNITIES_DATA } from "@/data/opportunities";
import {
  Calendar,
  MapPin,
  Building,
  ArrowUpRight,
  Filter,
  CheckCircle,
} from "lucide-react";

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

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            <Filter className="w-4 h-4 text-[#68645D] mr-1 hidden sm:block" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 font-interface text-xs uppercase tracking-wider transition-all border ${
                  selectedCategory === cat
                    ? "bg-[#171717] text-[#F4F0E8] border-[#171717]"
                    : "bg-white text-[#68645D] border-[#D8D0C4] hover:border-[#171717] hover:text-[#171717]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Note on data integrity */}
        <div className="flex items-center gap-2 text-xs text-[#68645D] bg-[#EAE4D9]/60 px-4 py-2 border border-[#D8D0C4]">
          <CheckCircle className="w-3.5 h-3.5 text-[#171717]" />
          <span>
            Curated conference directories and institutional application calls verified for youth delegates.
          </span>
        </div>

        {/* Opportunities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredOpportunities.map((opp) => (
            <div
              key={opp.id}
              className="border border-[#D8D0C4] bg-white p-6 sm:p-7 flex flex-col justify-between hover:border-[#171717] transition-all group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-interface text-[10px] font-semibold uppercase tracking-[0.18em] px-2.5 py-1 bg-[#EAE4D9] text-[#171717] border border-[#D8D0C4]">
                    {opp.category}
                  </span>
                  {opp.isOnline && (
                    <span className="font-interface text-[10px] uppercase tracking-wider text-[#68645D] border-b border-[#68645D]/40">
                      Virtual / Hybrid
                    </span>
                  )}
                </div>

                <div className="min-h-[3.75rem] flex items-start">
                  <h3 className="font-editorial text-lg sm:text-xl text-[#171717] font-medium leading-snug group-hover:text-[#68645D] transition-colors">
                    {opp.title}
                  </h3>
                </div>

                <p className="text-xs text-[#68645D] line-clamp-3 leading-relaxed min-h-[3.25rem]">
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
                <div className="flex flex-wrap gap-1">
                  {opp.tags.slice(0, 2).map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-interface text-[#8E877C] bg-[#F4F0E8] px-2 py-0.5"
                    >
                      {t}
                    </span>
                  ))}
                </div>

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
          ))}
        </div>

        {/* View all opportunities link */}
        <div className="pt-4 text-center">
          <Link
            href="/community#opportunities"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-interface font-semibold text-[#171717] hover:text-[#68645D] transition-colors border-b border-[#171717] pb-1"
          >
            <span>View Full Opportunities Directory in Community Hub</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
