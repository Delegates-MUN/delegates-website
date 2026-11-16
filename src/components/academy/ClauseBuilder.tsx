"use client";

import { useState } from "react";
import { RESOLUTION_VERBS, VerbDefinition } from "@/data/tools";
import { Check, Copy, Sparkles, BookOpen, AlertCircle, FileText } from "lucide-react";

export default function ClauseBuilder() {
  const [clauseType, setClauseType] = useState<"preambulatory" | "operative">("operative");
  const [selectedOrgan, setSelectedOrgan] = useState<string>("All Organs");
  const [selectedVerb, setSelectedVerb] = useState<string>("Recommends");
  const [clauseText, setClauseText] = useState<string>(
    "that Member States establish transparent regional observation mechanisms to guarantee safe humanitarian corridors"
  );
  const [subClauses, setSubClauses] = useState<string[]>([
    "Providing unimpeded passage for essential medical supplies and potable water;",
    "Facilitating independent oversight by international monitoring teams.",
  ]);
  const [copied, setCopied] = useState<boolean>(false);

  const availableVerbs = RESOLUTION_VERBS.filter(
    (v) =>
      v.type === clauseType &&
      (selectedOrgan === "All Organs" ||
        v.recommendedOrgans.includes("All Organs") ||
        v.recommendedOrgans.includes(selectedOrgan))
  );

  const currentVerbDef =
    availableVerbs.find((v) => v.verb === selectedVerb) || availableVerbs[0] || RESOLUTION_VERBS[0];

  const handleVerbSelect = (v: VerbDefinition) => {
    setSelectedVerb(v.verb);
  };

  const handleSubClauseChange = (index: number, val: string) => {
    const updated = [...subClauses];
    updated[index] = val;
    setSubClauses(updated);
  };

  const addSubClause = () => {
    if (subClauses.length < 4) {
      setSubClauses([...subClauses, ""]);
    }
  };

  const removeSubClause = (index: number) => {
    setSubClauses(subClauses.filter((_, i) => i !== index));
  };

  // Generate formatted text
  const generateFormattedOutput = () => {
    const verb = currentVerbDef?.verb || selectedVerb;
    if (clauseType === "preambulatory") {
      // Preambulatory format: Verb italicized, ends with comma
      return `${verb} ${clauseText.trim().replace(/,+$/, "")},`;
    } else {
      // Operative format: 1. Verb italicized, subclauses with (a), (b), ends with semicolon
      if (subClauses.filter((s) => s.trim().length > 0).length === 0) {
        return `1. ${verb} ${clauseText.trim().replace(/;+$/, "")};`;
      } else {
        const validSubs = subClauses
          .filter((s) => s.trim().length > 0)
          .map((s, idx) => {
            const letter = String.fromCharCode(97 + idx); // a, b, c
            const clean = s.trim().replace(/[;.]+$/, "");
            const isLast = idx === subClauses.length - 1;
            return `    (${letter}) ${clean}${isLast ? ";" : ";"}`;
          })
          .join("\n");
        return `1. ${verb} ${clauseText.trim().replace(/[:;]+$/, "")}:\n${validSubs}`;
      }
    }
  };

  const handleCopy = () => {
    const output = generateFormattedOutput();
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="border border-[#D8D0C4] bg-white p-6 sm:p-10 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#D8D0C4] pb-6 gap-4">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-[#EAE4D9] text-[#171717] text-[10px] font-interface uppercase tracking-widest font-semibold border border-[#D8D0C4]">
            <Sparkles className="w-3 h-3 text-[#68645D]" />
            <span>Interactive Drafting Lab</span>
          </div>
          <h3 className="font-editorial text-2xl sm:text-3xl text-[#171717]">
            UN Resolution Clause Builder
          </h3>
          <p className="text-xs text-[#68645D] max-w-xl">
            Compose legally disciplined preambulatory and operative clauses following official United Nations editorial standards.
          </p>
        </div>

        {/* Clause Type Selector */}
        <div className="flex items-center p-1 bg-[#F4F0E8] border border-[#D8D0C4] rounded-none">
          <button
            onClick={() => {
              setClauseType("operative");
              setSelectedVerb("Recommends");
            }}
            className={`px-4 py-1.5 text-xs font-interface uppercase tracking-wider font-semibold transition-all ${
              clauseType === "operative"
                ? "bg-[#171717] text-[#F4F0E8] shadow-xs"
                : "text-[#68645D] hover:text-[#171717]"
            }`}
          >
            Operative (Actions)
          </button>
          <button
            onClick={() => {
              setClauseType("preambulatory");
              setSelectedVerb("Affirming");
            }}
            className={`px-4 py-1.5 text-xs font-interface uppercase tracking-wider font-semibold transition-all ${
              clauseType === "preambulatory"
                ? "bg-[#171717] text-[#F4F0E8] shadow-xs"
                : "text-[#68645D] hover:text-[#171717]"
            }`}
          >
            Preambulatory (Reasons)
          </button>
        </div>
      </div>

      {/* Configuration Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Verb Selection & Organ Filter (5 cols) */}
        <div className="lg:col-span-5 space-y-5">
          <div className="space-y-1.5">
            <label className="block text-xs font-interface font-semibold uppercase tracking-wider text-[#202020]">
              Filter by Committee Organ
            </label>
            <select
              value={selectedOrgan}
              onChange={(e) => setSelectedOrgan(e.target.value)}
              className="w-full px-3.5 py-2 bg-[#F4F0E8] border border-[#D8D0C4] text-xs text-[#171717] focus:outline-none focus:border-[#171717]"
            >
              <option value="All Organs">All Organs</option>
              <option value="UNGA">UN General Assembly (UNGA)</option>
              <option value="UNSC">UN Security Council (UNSC — Chapter VII)</option>
              <option value="ECOSOC">Economic and Social Council (ECOSOC)</option>
              <option value="UNHRC">Human Rights Council (UNHRC)</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-xs font-interface font-semibold uppercase tracking-wider text-[#202020]">
              Select Diplomatic Verb ({availableVerbs.length} available)
            </label>
            <div className="max-h-60 overflow-y-auto space-y-1.5 border border-[#D8D0C4] p-2 bg-[#F4F0E8]/50">
              {availableVerbs.map((v) => (
                <button
                  key={v.verb}
                  onClick={() => handleVerbSelect(v)}
                  className={`w-full text-left px-3 py-2 text-xs font-interface transition-all flex items-center justify-between border ${
                    selectedVerb === v.verb
                      ? "bg-[#171717] text-[#F4F0E8] border-[#171717] font-semibold"
                      : "bg-white text-[#202020] border-[#D8D0C4] hover:border-[#171717]"
                  }`}
                >
                  <span className="italic font-serif">{v.verb}</span>
                  <span
                    className={`text-[9px] uppercase px-1.5 py-0.5 ${
                      selectedVerb === v.verb ? "bg-[#333] text-[#F4F0E8]" : "bg-[#EAE4D9] text-[#68645D]"
                    }`}
                  >
                    {v.recommendedOrgans[0]}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Verb Meaning & Legal Jurisprudence Box */}
          {currentVerbDef && (
            <div className="p-4 bg-[#EAE4D9]/60 border border-[#D8D0C4] space-y-2 text-xs">
              <div className="flex items-center gap-1.5 text-[#171717] font-semibold">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Jurisprudence & Meaning</span>
              </div>
              <p className="text-[#68645D] leading-relaxed">
                {currentVerbDef.meaning}
              </p>
              {currentVerbDef.recommendedOrgans.includes("UNSC") && clauseType === "operative" && (
                <div className="flex items-start gap-1.5 text-[11px] text-amber-800 bg-amber-50 p-2 border border-amber-200 mt-2">
                  <AlertCircle className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
                  <span>
                    Binding Chapter VII verb. Only valid in the UN Security Council; prohibited in GA committees without special mandate.
                  </span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Right Column: Content Input & Real-Time UN Preview (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-2">
            <label className="block text-xs font-interface font-semibold uppercase tracking-wider text-[#202020]">
              Substantive Clause Content
            </label>
            <textarea
              rows={3}
              value={clauseText}
              onChange={(e) => setClauseText(e.target.value)}
              placeholder="e.g. that all participating delegations maintain unhindered supply routes..."
              className="w-full px-4 py-2.5 bg-[#F4F0E8] border border-[#D8D0C4] text-xs text-[#171717] focus:outline-none focus:border-[#171717] leading-relaxed"
            />
          </div>

          {clauseType === "operative" && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-interface font-semibold uppercase tracking-wider text-[#202020]">
                  Sub-Clauses (Optional — max 4)
                </label>
                {subClauses.length < 4 && (
                  <button
                    onClick={addSubClause}
                    className="text-[11px] font-interface uppercase text-[#171717] hover:underline font-semibold"
                  >
                    + Add Sub-Clause
                  </button>
                )}
              </div>

              {subClauses.map((sub, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="text-xs font-mono text-[#68645D] w-6">
                    ({String.fromCharCode(97 + idx)})
                  </span>
                  <input
                    type="text"
                    value={sub}
                    onChange={(e) => handleSubClauseChange(idx, e.target.value)}
                    placeholder="Specific actionable provision..."
                    className="flex-grow px-3 py-1.5 bg-[#F4F0E8] border border-[#D8D0C4] text-xs text-[#171717] focus:outline-none focus:border-[#171717]"
                  />
                  <button
                    onClick={() => removeSubClause(idx)}
                    className="text-xs text-[#68645D] hover:text-red-700 px-2 py-1"
                    title="Remove sub-clause"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Formatted Official Output Preview */}
          <div className="space-y-2 pt-2 border-t border-[#D8D0C4]">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-interface uppercase tracking-widest text-[#68645D] font-semibold">
                Formatted Resolution Preview (UN Standards)
              </span>
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#171717] text-[#F4F0E8] text-xs uppercase tracking-wider font-interface font-medium hover:bg-black transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Clause</span>
                  </>
                )}
              </button>
            </div>

            <div className="p-5 bg-[#F4F0E8] border border-[#D8D0C4] font-serif text-sm text-[#171717] leading-relaxed whitespace-pre-line shadow-inner">
              {clauseType === "preambulatory" ? (
                <p>
                  <em className="font-semibold text-[#171717]">{currentVerbDef?.verb || selectedVerb}</em>{" "}
                  {clauseText.trim().replace(/,+$/, "")},
                </p>
              ) : (
                <div>
                  <p>
                    <span className="font-sans font-semibold">1.</span>{" "}
                    <em className="font-semibold text-[#171717]">{currentVerbDef?.verb || selectedVerb}</em>{" "}
                    {clauseText.trim().replace(/[:;]+$/, "")}
                    {subClauses.filter((s) => s.trim().length > 0).length > 0 ? ":" : ";"}
                  </p>
                  {subClauses
                    .filter((s) => s.trim().length > 0)
                    .map((s, idx) => (
                      <p key={idx} className="pl-6 text-xs text-[#202020] mt-1.5">
                        <span className="font-sans font-medium">({String.fromCharCode(97 + idx)})</span>{" "}
                        {s.trim().replace(/[;.]+$/, "")};
                      </p>
                    ))}
                </div>
              )}
            </div>
            <p className="text-[10px] text-[#8E877C] font-interface italic">
              {clauseType === "preambulatory"
                ? "Note: Preambulatory clauses begin with an italicized verb and conclude with a comma."
                : "Note: Operative clauses begin with a number, italicized verb, and conclude with a semicolon (final clause takes a period)."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
