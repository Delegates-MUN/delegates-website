"use client";

import { useState, useEffect } from "react";
import { X, CheckCircle2, ArrowRight, Loader2, Sparkles, Building, Calendar, Globe, Mail, FileText, AlertCircle } from "lucide-react";
import Image from "next/image";

export default function SubmitOpportunityModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [referenceId, setReferenceId] = useState("");
  const [serverError, setServerError] = useState("");

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
      setServerError("");
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
    setServerError("");

    try {
      const res = await fetch("/api/submit-opportunity", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setReferenceId(data.referenceId || "DLGTS-OPP");
        setIsSuccess(true);
      } else {
        setServerError(data.error || "Unable to submit opportunity. Please try again or email delegates@zohomail.in.");
      }
    } catch {
      setServerError("Network error. Please check your connection or contact delegates@zohomail.in directly.");
    } finally {
      setIsSubmitting(false);
    }
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
              <span className="text-[10px] uppercase tracking-widest text-[#B89358] font-mono block">
                Circuit Submissions
              </span>
              <h2 id="submit-opp-title" className="font-editorial text-lg text-white">
                Submit an MUN Conference or Opportunity
              </h2>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-[#C9C2B7] hover:text-white transition-colors p-1"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSuccess ? (
          <div className="p-8 sm:p-12 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-[#171717] text-[#F4F0E8] mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8 text-[#B89358]" />
            </div>
            <div className="space-y-2">
              <span className="font-mono text-xs uppercase tracking-widest text-[#68645D]">
                Reference ID: {referenceId}
              </span>
              <h3 className="font-editorial text-2xl sm:text-3xl text-[#171717]">
                Submission Received
              </h3>
            </div>
            <p className="font-interface text-sm text-[#68645D] max-w-md mx-auto leading-relaxed">
              Thank you for submitting <strong className="text-[#171717]">{formData.title}</strong>. Our editorial desk reviews all submissions for authenticity and delegate safety prior to inclusion in the public directory.
            </p>
            <div className="p-4 bg-white border border-[#D8D0C4] text-xs text-left text-[#68645D] space-y-1">
              <p className="font-semibold text-[#171717] uppercase tracking-wider text-[11px]">
                Submission Inquiries:
              </p>
              <p>
                For expedited verification or updates, reach out to <a href="mailto:delegates@zohomail.in" className="text-[#171717] underline font-medium">delegates@zohomail.in</a> referencing your submission ID.
              </p>
            </div>
            <button
              onClick={resetForm}
              className="px-6 py-2.5 bg-[#171717] text-[#F4F0E8] text-xs uppercase tracking-widest font-interface font-medium hover:bg-black transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
            <p className="text-xs text-[#68645D] leading-relaxed">
              DELEGATES lists genuine collegiate and youth MUN conferences, writing opportunities, and academic calls. All listings are reviewed before publication.
            </p>

            {serverError && (
              <div className="p-3.5 bg-red-50 border border-red-200 text-red-800 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{serverError}</span>
              </div>
            )}

            <div className="space-y-4">
              {/* Title */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#171717] mb-1">
                  Title of Opportunity / Conference *
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="e.g. World Affairs MUN 2027"
                  className="w-full px-3.5 py-2.5 bg-white border border-[#D8D0C4] text-xs text-[#171717] focus:outline-none focus:border-[#171717]"
                />
                {errors.title && <p className="text-[11px] text-red-600 mt-1">{errors.title}</p>}
              </div>

              {/* Organizer & Category */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#171717] mb-1">
                    Organizing Institution *
                  </label>
                  <input
                    type="text"
                    value={formData.organizer}
                    onChange={(e) => setFormData({ ...formData, organizer: e.target.value })}
                    placeholder="e.g. University MUN Society"
                    className="w-full px-3.5 py-2.5 bg-white border border-[#D8D0C4] text-xs text-[#171717] focus:outline-none focus:border-[#171717]"
                  />
                  {errors.organizer && <p className="text-[11px] text-red-600 mt-1">{errors.organizer}</p>}
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#171717] mb-1">
                    Category *
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#D8D0C4] text-xs text-[#171717] focus:outline-none focus:border-[#171717]"
                  >
                    <option value="MUN Conference">MUN Conference</option>
                    <option value="Writing Competition">Writing Competition</option>
                    <option value="EB Application">EB Application</option>
                    <option value="Youth Fellowship">Youth Fellowship</option>
                  </select>
                </div>
              </div>

              {/* Location & Format */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#171717] mb-1">
                    Location / Venue *
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="e.g. New Delhi, India or Virtual"
                    className="w-full px-3.5 py-2.5 bg-white border border-[#D8D0C4] text-xs text-[#171717] focus:outline-none focus:border-[#171717]"
                  />
                  {errors.location && <p className="text-[11px] text-red-600 mt-1">{errors.location}</p>}
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#171717] mb-1">
                    Format *
                  </label>
                  <select
                    value={formData.format}
                    onChange={(e) => setFormData({ ...formData, format: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#D8D0C4] text-xs text-[#171717] focus:outline-none focus:border-[#171717]"
                  >
                    <option value="In-Person">In-Person</option>
                    <option value="Virtual">Virtual / Online</option>
                    <option value="Hybrid">Hybrid</option>
                  </select>
                </div>
              </div>

              {/* Deadline & Official URL */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#171717] mb-1">
                    Date / Registration Deadline *
                  </label>
                  <input
                    type="text"
                    value={formData.deadline}
                    onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                    placeholder="e.g. December 15, 2026"
                    className="w-full px-3.5 py-2.5 bg-white border border-[#D8D0C4] text-xs text-[#171717] focus:outline-none focus:border-[#171717]"
                  />
                  {errors.deadline && <p className="text-[11px] text-red-600 mt-1">{errors.deadline}</p>}
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#171717] mb-1">
                    Official Portal / Information URL *
                  </label>
                  <input
                    type="url"
                    value={formData.url}
                    onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                    placeholder="https://example.org/register"
                    className="w-full px-3.5 py-2.5 bg-white border border-[#D8D0C4] text-xs text-[#171717] focus:outline-none focus:border-[#171717]"
                  />
                  {errors.url && <p className="text-[11px] text-red-600 mt-1">{errors.url}</p>}
                </div>
              </div>

              {/* Verification Contact Email */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#171717] mb-1">
                  Organizer Contact Email (for verification) *
                </label>
                <input
                  type="email"
                  value={formData.contactEmail}
                  onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                  placeholder="secretariat@example.org"
                  className="w-full px-3.5 py-2.5 bg-white border border-[#D8D0C4] text-xs text-[#171717] focus:outline-none focus:border-[#171717]"
                />
                {errors.contactEmail && <p className="text-[11px] text-red-600 mt-1">{errors.contactEmail}</p>}
              </div>

              {/* Description */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#171717] mb-1">
                  Brief Overview
                </label>
                <textarea
                  rows={3}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Summary of committees, agendas, eligibility..."
                  className="w-full px-3.5 py-2 bg-white border border-[#D8D0C4] text-xs text-[#171717] focus:outline-none focus:border-[#171717] resize-none"
                />
              </div>

              {/* Integrity Confirmation */}
              <div className="pt-2">
                <label className="flex items-start gap-2.5 cursor-pointer text-xs text-[#68645D]">
                  <input
                    type="checkbox"
                    checked={formData.confirmedAuthentic}
                    onChange={(e) => setFormData({ ...formData, confirmedAuthentic: e.target.checked })}
                    className="mt-0.5 accent-[#171717]"
                  />
                  <span>
                    I confirm that this opportunity is genuine, active, and adheres to ethical youth event standards.
                  </span>
                </label>
                {errors.confirmedAuthentic && (
                  <p className="text-[11px] text-red-600 mt-1">{errors.confirmedAuthentic}</p>
                )}
              </div>
            </div>

            <div className="pt-4 border-t border-[#D8D0C4] flex items-center justify-between">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 text-xs font-interface text-[#68645D] hover:text-[#171717]"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#171717] text-[#F4F0E8] text-xs font-interface uppercase tracking-wider font-semibold hover:bg-black transition-colors disabled:opacity-60"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <span>Submit for Review</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
