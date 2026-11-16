"use client";

import { useState, useEffect } from "react";
import { X, CheckCircle2, ArrowRight, Loader2, Sparkles, Building, Calendar, Globe, Mail, FileText } from "lucide-react";
import Image from "next/image";

export default function SubmitOpportunityModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    organizer: "",
    category: "MUN Conference",
    format: "In-Person",
    location: "",
    deadline: "",
    url: "",
    contactEmail: "",
    description: "",
    confirmedAuthentic: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
      setIsSuccess(false);
    };
    window.addEventListener("open-submit-opportunity-modal", handleOpen);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("open-submit-opportunity-modal", handleOpen);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.title.trim()) errs.title = "Opportunity or conference title is required.";
    if (!formData.organizer.trim()) errs.organizer = "Organizing body or institution is required.";
    if (!formData.location.trim()) errs.location = "Location or host platform is required.";
    if (!formData.deadline.trim()) errs.deadline = "Deadline or conference date is required.";
    if (!formData.url.trim()) {
      errs.url = "Official link or application portal is required.";
    } else if (!formData.url.startsWith("http://") && !formData.url.startsWith("https://")) {
      errs.url = "Please enter a valid URL starting with https:// or http://";
    }
    if (!formData.contactEmail.trim()) {
      errs.contactEmail = "Official verification contact email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.contactEmail)) {
      errs.contactEmail = "Please enter a valid email address.";
    }
    if (!formData.confirmedAuthentic) {
      errs.confirmedAuthentic = "Please verify that this is an authentic, non-predatory initiative.";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 800));

    try {
      const existing = JSON.parse(
        localStorage.getItem("delegates_submitted_opportunities") || "[]"
      );
      existing.push({
        ...formData,
        submittedAt: new Date().toISOString(),
      });
      localStorage.setItem(
        "delegates_submitted_opportunities",
        JSON.stringify(existing)
      );
    } catch {
      // LocalStorage fallback
    }

    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const resetForm = () => {
    setFormData({
      title: "",
      organizer: "",
      category: "MUN Conference",
      format: "In-Person",
      location: "",
      deadline: "",
      url: "",
      contactEmail: "",
      description: "",
      confirmedAuthentic: false,
    });
    setErrors({});
    setIsSuccess(false);
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="submit-opp-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0"
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-2xl bg-[#F4F0E8] border border-[#D8D0C4] shadow-2xl max-h-[90vh] overflow-y-auto z-10">
        {/* Top Header */}
        <div className="sticky top-0 bg-[#171717] text-[#F4F0E8] px-6 py-4 flex items-center justify-between border-b border-[#33312D] z-20">
          <div className="flex items-center gap-3">
            <div className="w-6 h-8 relative">
              <Image
                src="/assets/delegates-monogram-light.png"
                alt="DELEGATES Monogram"
                fill
                sizes="24px"
                className="object-contain"
              />
            </div>
            <div>
              <span className="font-interface text-[10px] uppercase tracking-[0.2em] text-[#C9C2B7] block">
                DELEGATES Circuit Desk
              </span>
              <h2
                id="submit-opp-title"
                className="font-editorial text-lg sm:text-xl font-normal text-white"
              >
                Submit an Opportunity or Call for Papers
              </h2>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1.5 text-[#C9C2B7] hover:text-white hover:bg-[#252422] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8">
          {isSuccess ? (
            <div className="py-8 text-center space-y-6 animate-fadeIn">
              <div className="w-14 h-14 mx-auto rounded-full bg-[#EAE4D9] border border-[#D8D0C4] flex items-center justify-center text-[#171717]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div className="space-y-3 max-w-lg mx-auto">
                <h3 className="font-editorial text-2xl sm:text-3xl text-[#171717]">
                  Submission Received for Editorial Review
                </h3>
                <p className="font-interface text-sm text-[#68645D] leading-relaxed">
                  Thank you for contributing to the DELEGATES Circuit. Our editorial secretariat verifies all conference calls, writing competitions, and fellowship postings within 24 to 48 hours to ensure zero-predatory practices before indexation on our public directory.
                </p>
                <div className="p-4 bg-[#EAE4D9]/80 border border-[#D8D0C4] text-xs font-interface text-left text-[#202020] space-y-1">
                  <span className="font-semibold block uppercase tracking-wider text-[10px] text-[#68645D]">
                    Submission Summary
                  </span>
                  <p><strong>Title:</strong> {formData.title}</p>
                  <p><strong>Organizing Body:</strong> {formData.organizer}</p>
                  <p><strong>Verification Contact:</strong> {formData.contactEmail}</p>
                </div>
              </div>

              <div className="pt-4 flex justify-center">
                <button
                  onClick={resetForm}
                  className="px-6 py-3 bg-[#171717] text-[#F4F0E8] font-interface text-xs uppercase tracking-[0.16em] font-semibold hover:bg-black transition-colors"
                >
                  Close & Return
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="bg-[#EAE4D9]/70 border border-[#D8D0C4] p-4 text-xs text-[#68645D] font-interface space-y-1">
                <p className="font-semibold text-[#171717]">
                  Editorial Standards Notice:
                </p>
                <p>
                  DELEGATES indexes verified opportunities without pay-to-list fees. All submissions must carry an official host domain or transparent secretariat contact.
                </p>
              </div>

              {/* Grid 1: Title and Category */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="block font-interface text-xs uppercase tracking-wider font-semibold text-[#171717]">
                    Opportunity / Conference Title *
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="e.g. Geneva Model UN 2026"
                    className="w-full px-3.5 py-2.5 bg-white border border-[#D8D0C4] text-sm text-[#202020] placeholder-[#8E877C] focus:outline-none focus:border-[#171717] transition-colors"
                  />
                  {errors.title && (
                    <p className="text-xs text-red-600 font-interface">{errors.title}</p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label className="block font-interface text-xs uppercase tracking-wider font-semibold text-[#171717]">
                    Category *
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#D8D0C4] text-sm text-[#202020] focus:outline-none focus:border-[#171717] transition-colors"
                  >
                    <option value="MUN Conference">MUN Conference</option>
                    <option value="Writing Competition">Writing Competition / Essay</option>
                    <option value="EB Application">Executive Board (EB) Application</option>
                    <option value="Youth Fellowship">Youth Diplomatic Fellowship</option>
                    <option value="Call for Papers">Call for Papers / Research Journal</option>
                  </select>
                </div>
              </div>

              {/* Grid 2: Host & Format */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="block font-interface text-xs uppercase tracking-wider font-semibold text-[#171717]">
                    Organizing Body / Institution *
                  </label>
                  <div className="relative">
                    <Building className="w-4 h-4 absolute left-3 top-3 text-[#8E877C]" />
                    <input
                      type="text"
                      value={formData.organizer}
                      onChange={(e) => setFormData({ ...formData, organizer: e.target.value })}
                      placeholder="e.g. Harvard International Relations Council"
                      className="w-full pl-9 pr-3.5 py-2.5 bg-white border border-[#D8D0C4] text-sm text-[#202020] placeholder-[#8E877C] focus:outline-none focus:border-[#171717] transition-colors"
                    />
                  </div>
                  {errors.organizer && (
                    <p className="text-xs text-red-600 font-interface">{errors.organizer}</p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label className="block font-interface text-xs uppercase tracking-wider font-semibold text-[#171717]">
                    Format & Mode
                  </label>
                  <select
                    value={formData.format}
                    onChange={(e) => setFormData({ ...formData, format: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#D8D0C4] text-sm text-[#202020] focus:outline-none focus:border-[#171717] transition-colors"
                  >
                    <option value="In-Person">In-Person</option>
                    <option value="Online / Virtual">Online / Virtual</option>
                    <option value="Hybrid">Hybrid</option>
                  </select>
                </div>
              </div>

              {/* Grid 3: Location and Deadline */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="block font-interface text-xs uppercase tracking-wider font-semibold text-[#171717]">
                    Location / Platform *
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="e.g. Geneva, Switzerland / Online"
                    className="w-full px-3.5 py-2.5 bg-white border border-[#D8D0C4] text-sm text-[#202020] placeholder-[#8E877C] focus:outline-none focus:border-[#171717] transition-colors"
                  />
                  {errors.location && (
                    <p className="text-xs text-red-600 font-interface">{errors.location}</p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label className="block font-interface text-xs uppercase tracking-wider font-semibold text-[#171717]">
                    Deadline or Conference Date *
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 absolute left-3 top-3 text-[#8E877C]" />
                    <input
                      type="text"
                      value={formData.deadline}
                      onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                      placeholder="e.g. Registration closes May 15, 2026"
                      className="w-full pl-9 pr-3.5 py-2.5 bg-white border border-[#D8D0C4] text-sm text-[#202020] placeholder-[#8E877C] focus:outline-none focus:border-[#171717] transition-colors"
                    />
                  </div>
                  {errors.deadline && (
                    <p className="text-xs text-red-600 font-interface">{errors.deadline}</p>
                  )}
                </div>
              </div>

              {/* Grid 4: Official URL & Contact Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="block font-interface text-xs uppercase tracking-wider font-semibold text-[#171717]">
                    Official Application Portal / Link *
                  </label>
                  <div className="relative">
                    <Globe className="w-4 h-4 absolute left-3 top-3 text-[#8E877C]" />
                    <input
                      type="url"
                      value={formData.url}
                      onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                      placeholder="https://..."
                      className="w-full pl-9 pr-3.5 py-2.5 bg-white border border-[#D8D0C4] text-sm text-[#202020] placeholder-[#8E877C] focus:outline-none focus:border-[#171717] transition-colors"
                    />
                  </div>
                  {errors.url && (
                    <p className="text-xs text-red-600 font-interface">{errors.url}</p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label className="block font-interface text-xs uppercase tracking-wider font-semibold text-[#171717]">
                    Organizer Verification Email *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 absolute left-3 top-3 text-[#8E877C]" />
                    <input
                      type="email"
                      value={formData.contactEmail}
                      onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                      placeholder="secretariat@domain.org"
                      className="w-full pl-9 pr-3.5 py-2.5 bg-white border border-[#D8D0C4] text-sm text-[#202020] placeholder-[#8E877C] focus:outline-none focus:border-[#171717] transition-colors"
                    />
                  </div>
                  {errors.contactEmail && (
                    <p className="text-xs text-red-600 font-interface">{errors.contactEmail}</p>
                  )}
                </div>
              </div>

              {/* Description */}
              <div className="space-y-1.5">
                <label className="block font-interface text-xs uppercase tracking-wider font-semibold text-[#171717]">
                  Short Description & Committee Focus (Optional)
                </label>
                <textarea
                  rows={3}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Outline committee agendas, delegate eligibility, awards, or registration tiers..."
                  className="w-full px-3.5 py-2.5 bg-white border border-[#D8D0C4] text-sm text-[#202020] placeholder-[#8E877C] focus:outline-none focus:border-[#171717] transition-colors"
                />
              </div>

              {/* Authenticity Checkbox */}
              <div className="space-y-1.5 pt-2">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.confirmedAuthentic}
                    onChange={(e) =>
                      setFormData({ ...formData, confirmedAuthentic: e.target.checked })
                    }
                    className="mt-1 h-4 w-4 border-[#D8D0C4] text-[#171717] rounded-none focus:ring-0"
                  />
                  <span className="font-interface text-xs text-[#68645D] leading-snug">
                    I confirm this is an authentic, reputable opportunity aligned with youth leadership and non-exploitative MUN practices.
                  </span>
                </label>
                {errors.confirmedAuthentic && (
                  <p className="text-xs text-red-600 font-interface">
                    {errors.confirmedAuthentic}
                  </p>
                )}
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#D8D0C4] flex items-center justify-end gap-4">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-5 py-2.5 border border-[#D8D0C4] text-xs uppercase tracking-wider font-interface text-[#68645D] hover:text-[#171717] hover:border-[#171717] transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#171717] text-[#F4F0E8] font-interface text-xs uppercase tracking-[0.16em] font-semibold hover:bg-black transition-colors disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Verifying...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit for Verification</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
