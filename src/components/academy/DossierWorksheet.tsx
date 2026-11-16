"use client";

import { useState } from "react";
import { FileDown, Copy, Check, Sparkles, Shield, Bookmark } from "lucide-react";

export default function DossierWorksheet() {
  const [country, setCountry] = useState("Federative Republic of Brazil");
  const [committee, setCommittee] = useState("UNEP (United Nations Environment Programme)");
  const [agenda, setAgenda] = useState("Sovereignty, Biodiversity Conservation, and Fair Climate Financing");
  const [redline1, setRedline1] = useState("No external oversight or extraterritorial zoning over Amazon basin resources.");
  const [redline2, setRedline2] = useState("Mandatory technology transfer and non-repayable grants from Annex I nations.");
  const [redline3, setRedline3] = useState("Opposition to unilateral carbon border adjustment taxes penalizing developing economies.");
  const [treaties, setTreaties] = useState("Paris Agreement (2015), CBD Kunming-Montreal Global Biodiversity Framework (2022)");
  const [allies, setAllies] = useState("G77 + China, BRICS+, Amazon Cooperation Treaty Organization (ACTO)");
  const [copied, setCopied] = useState(false);

  const generateMarkdownDossier = () => {
    return `# DELEGATES COUNTRY DOSSIER & STRATEGY BRIEF
**Sovereign State:** ${country}
**Committee:** ${committee}
**Agenda Item:** ${agenda}
**Generated:** ${new Date().toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}

---

## 1. Non-Negotiable Diplomatic Redlines
1. ${redline1}
2. ${redline2}
3. ${redline3}

## 2. Statutory Treaty Precedents & Jurisprudence
- ${treaties}

## 3. Strategic Coalition & Alliance Architecture
- Primary Blocs & Natural Allies: ${allies}

## 4. Brand Philosophy Alignment (DLGTS)
- **Diplomacy:** Reconcile ecological protection with sovereign industrial development.
- **Law & Order:** Demand compliance with Common But Differentiated Responsibilities (CBDR).
- **Geopolitics:** Leverage regional forest compacts to counter unilateral sanctions.
- **Truth / Trust:** Anchor emissions data in verified IPCC science.
- **Sovereignty:** Reiterate Article 2(1) non-intervention regarding domestic resource management.

---
*Created via DELEGATES Academy Country Dossier Worksheet.*`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateMarkdownDossier());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const text = generateMarkdownDossier();
    const blob = new Blob([text], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${country.replace(/\s+/g, "_")}_Strategy_Brief.md`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="border border-[#D8D0C4] bg-white p-6 sm:p-10 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#D8D0C4] pb-6 gap-4">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-[#EAE4D9] text-[#171717] text-[10px] font-interface uppercase tracking-widest font-semibold border border-[#D8D0C4]">
            <Shield className="w-3 h-3 text-[#68645D]" />
            <span>Delegate Strategy Workbench</span>
          </div>
          <h3 className="font-editorial text-2xl sm:text-3xl text-[#171717]">
            Country Dossier & Redline Planner
          </h3>
          <p className="text-xs text-[#68645D] max-w-xl">
            Structure your delegation's core redlines, treaties, and alliance partners before formal debate commences. Export as a conference-ready briefing document.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#171717] text-[#F4F0E8] text-xs uppercase tracking-wider font-interface font-medium hover:bg-black transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Markdown</span>
              </>
            )}
          </button>
          <button
            onClick={handleDownload}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-[#171717] text-[#171717] text-xs uppercase tracking-wider font-interface font-medium hover:bg-[#F4F0E8] transition-colors"
          >
            <FileDown className="w-3.5 h-3.5" />
            <span>Download .md</span>
          </button>
        </div>
      </div>

      {/* Form Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-1.5">
          <label className="block text-xs font-interface font-semibold uppercase tracking-wider text-[#202020]">
            Assigned Sovereign State
          </label>
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="w-full px-3.5 py-2 bg-[#F4F0E8] border border-[#D8D0C4] text-xs text-[#171717] focus:outline-none focus:border-[#171717]"
          />
        </div>

        <div className="space-y-1.5">
          <label className="block text-xs font-interface font-semibold uppercase tracking-wider text-[#202020]">
            Committee & Organ
          </label>
          <input
            type="text"
            value={committee}
            onChange={(e) => setCommittee(e.target.value)}
            className="w-full px-3.5 py-2 bg-[#F4F0E8] border border-[#D8D0C4] text-xs text-[#171717] focus:outline-none focus:border-[#171717]"
          />
        </div>

        <div className="md:col-span-2 space-y-1.5">
          <label className="block text-xs font-interface font-semibold uppercase tracking-wider text-[#202020]">
            Agenda Item / Crisis Description
          </label>
          <input
            type="text"
            value={agenda}
            onChange={(e) => setAgenda(e.target.value)}
            className="w-full px-3.5 py-2 bg-[#F4F0E8] border border-[#D8D0C4] text-xs text-[#171717] focus:outline-none focus:border-[#171717]"
          />
        </div>

        {/* 3 Redlines */}
        <div className="md:col-span-2 space-y-3 p-4 bg-[#F4F0E8]/70 border border-[#D8D0C4]">
          <span className="text-xs font-interface font-semibold uppercase tracking-wider text-[#171717] block">
            Three Non-Negotiable National Redlines (Principles your delegation will never compromise)
          </span>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-[#68645D] w-5">01.</span>
              <input
                type="text"
                value={redline1}
                onChange={(e) => setRedline1(e.target.value)}
                className="flex-grow px-3 py-1.5 bg-white border border-[#D8D0C4] text-xs text-[#171717] focus:outline-none focus:border-[#171717]"
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-[#68645D] w-5">02.</span>
              <input
                type="text"
                value={redline2}
                onChange={(e) => setRedline2(e.target.value)}
                className="flex-grow px-3 py-1.5 bg-white border border-[#D8D0C4] text-xs text-[#171717] focus:outline-none focus:border-[#171717]"
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-[#68645D] w-5">03.</span>
              <input
                type="text"
                value={redline3}
                onChange={(e) => setRedline3(e.target.value)}
                className="flex-grow px-3 py-1.5 bg-white border border-[#D8D0C4] text-xs text-[#171717] focus:outline-none focus:border-[#171717]"
              />
            </div>
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="block text-xs font-interface font-semibold uppercase tracking-wider text-[#202020]">
            Relevant Treaties & UN Conventions
          </label>
          <input
            type="text"
            value={treaties}
            onChange={(e) => setTreaties(e.target.value)}
            className="w-full px-3.5 py-2 bg-[#F4F0E8] border border-[#D8D0C4] text-xs text-[#171717] focus:outline-none focus:border-[#171717]"
          />
        </div>

        <div className="space-y-1.5">
          <label className="block text-xs font-interface font-semibold uppercase tracking-wider text-[#202020]">
            Strategic Blocs & Natural Allies
          </label>
          <input
            type="text"
            value={allies}
            onChange={(e) => setAllies(e.target.value)}
            className="w-full px-3.5 py-2 bg-[#F4F0E8] border border-[#D8D0C4] text-xs text-[#171717] focus:outline-none focus:border-[#171717]"
          />
        </div>
      </div>
    </div>
  );
}
