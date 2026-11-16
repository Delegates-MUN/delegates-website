"use client";

import { useState } from "react";
import { ROP_SCENARIOS, RoPScenario } from "@/data/tools";
import { Scale, Search, CheckCircle2, AlertTriangle, ArrowRight, Shield } from "lucide-react";

export default function RoPMatrix() {
  const [filterCategory, setFilterCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedScenario, setSelectedScenario] = useState<RoPScenario | null>(ROP_SCENARIOS[0]);

  const categories = ["All", "Points", "Motions", "Voting", "Debate Dynamics"];

  const filtered = ROP_SCENARIOS.filter((s) => {
    const matchCat = filterCategory === "All" || s.category === filterCategory;
    const matchQuery =
      s.scenario.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.correctAction.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.explanation.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchQuery;
  });

  return (
    <div className="border border-[#D8D0C4] bg-white p-6 sm:p-10 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#D8D0C4] pb-6 gap-4">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-[#EAE4D9] text-[#171717] text-[10px] font-interface uppercase tracking-widest font-semibold border border-[#D8D0C4]">
            <Scale className="w-3 h-3 text-[#68645D]" />
            <span>Parliamentary Decision Engine</span>
          </div>
          <h3 className="font-editorial text-2xl sm:text-3xl text-[#171717]">
            Rules of Procedure (RoP) Decision Matrix
          </h3>
          <p className="text-xs text-[#68645D] max-w-xl">
            A quick-reference navigator to determine which point or motion to raise, when interruption is legally permissible, and the required voting thresholds.
          </p>
        </div>

        {/* Search */}
        <div className="relative w-full sm:w-64">
          <Search className="w-3.5 h-3.5 text-[#68645D] absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search scenario or motion..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 bg-[#F4F0E8] border border-[#D8D0C4] text-xs text-[#171717] focus:outline-none focus:border-[#171717]"
          />
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setFilterCategory(c)}
            className={`px-3 py-1 text-xs font-interface uppercase tracking-wider transition-all border ${
              filterCategory === c
                ? "bg-[#171717] text-[#F4F0E8] border-[#171717]"
                : "bg-[#F4F0E8] text-[#68645D] border-[#D8D0C4] hover:border-[#171717]"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Grid: Scenario Selector on Left (5 cols), Active Detail on Right (7 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Scenario List */}
        <div className="lg:col-span-6 space-y-3 max-h-[460px] overflow-y-auto pr-1">
          {filtered.map((item) => {
            const isSelected = selectedScenario?.id === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedScenario(item)}
                className={`w-full text-left p-4 border transition-all space-y-2 ${
                  isSelected
                    ? "bg-[#F4F0E8] border-[#171717] shadow-xs"
                    : "bg-white border-[#D8D0C4] hover:border-[#8E877C]"
                }`}
              >
                <div className="flex items-center justify-between text-[10px] font-interface">
                  <span className="uppercase tracking-widest font-semibold px-2 py-0.5 bg-[#EAE4D9] text-[#171717]">
                    {item.category}
                  </span>
                  <span className="text-[#68645D]">
                    {item.interruptionAllowed ? "Can Interrupt Speaker" : "Between Speeches"}
                  </span>
                </div>
                <p className="font-editorial text-sm text-[#171717] leading-snug line-clamp-2">
                  “{item.scenario}”
                </p>
                <div className="flex items-center gap-1.5 text-xs font-interface font-semibold text-[#171717]">
                  <span>Action:</span>
                  <span className="underline decoration-[#68645D]">{item.correctAction}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Detail Panel */}
        <div className="lg:col-span-6 border border-[#D8D0C4] bg-[#F4F0E8] p-6 sm:p-8 space-y-6">
          {selectedScenario ? (
            <div className="space-y-6">
              <div className="space-y-2 border-b border-[#D8D0C4] pb-4">
                <span className="font-interface text-[10px] uppercase tracking-widest text-[#68645D] font-semibold">
                  Prescribed Parliamentary Remedy
                </span>
                <h4 className="font-editorial text-2xl text-[#171717] leading-snug">
                  {selectedScenario.correctAction}
                </h4>
              </div>

              {/* Scenario Context */}
              <div className="p-4 bg-white border border-[#D8D0C4] space-y-1">
                <span className="font-interface text-[10px] uppercase tracking-wider text-[#8E877C] font-semibold">
                  When this dilemma arises:
                </span>
                <p className="font-editorial italic text-sm text-[#171717] leading-relaxed">
                  “{selectedScenario.scenario}”
                </p>
              </div>

              {/* Jurisprudential Explanation */}
              <div className="space-y-2">
                <span className="font-interface text-[10px] uppercase tracking-wider text-[#68645D] font-semibold block">
                  Procedural Rule & Application:
                </span>
                <p className="text-xs text-[#202020] leading-relaxed">
                  {selectedScenario.explanation}
                </p>
              </div>

              {/* Precedence & Voting Specs */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#D8D0C4]">
                <div className="space-y-1">
                  <span className="text-[10px] font-interface uppercase tracking-wider text-[#68645D] block">
                    Interruption Rule:
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#171717]">
                    {selectedScenario.interruptionAllowed ? (
                      <>
                        <AlertTriangle className="w-3.5 h-3.5 text-amber-700" />
                        <span>Permitted (Inaudibility only)</span>
                      </>
                    ) : (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                        <span>Cannot Interrupt Speaker</span>
                      </>
                    )}
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] font-interface uppercase tracking-wider text-[#68645D] block">
                    Voting Threshold:
                  </span>
                  <div className="text-xs font-semibold text-[#171717]">
                    {selectedScenario.voteRequired}
                  </div>
                </div>
              </div>

              {/* Precedence Reminder */}
              <div className="p-3 bg-[#EAE4D9]/80 border border-[#D8D0C4] text-[11px] text-[#68645D] flex items-start gap-2">
                <Shield className="w-3.5 h-3.5 text-[#171717] flex-shrink-0 mt-0.5" />
                <span>
                  Points always take precedence over motions. Points of Order are resolved immediately by the Chair before any pending motions are entertained.
                </span>
              </div>
            </div>
          ) : (
            <p className="text-xs text-[#68645D]">Select any scenario to review its parliamentary ruling.</p>
          )}
        </div>
      </div>
    </div>
  );
}
