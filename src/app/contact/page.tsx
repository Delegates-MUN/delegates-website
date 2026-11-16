"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Mail,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  MessageSquare,
  Globe,
  ArrowRight,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    enquiryType: "General Enquiries",
    subject: "",
    message: "",
    consent: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<{
    success: boolean;
    message?: string;
    referenceId?: string;
    error?: string;
  } | null>(null);

  const enquiryOptions = [
    "General Enquiries",
    "Collaboration Enquiries",
    "Partnership Enquiries",
    "Content Submissions",
    "Community-related Enquiries",
  ];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      errs.fullName = "Full name is required.";
    }
    if (!formData.email.trim()) {
      errs.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim()) {
      errs.message = "Message cannot be empty.";
    } else if (formData.message.trim().length < 10) {
      errs.message = "Please provide at least 10 characters for context.";
    }
    if (!formData.consent) {
      errs.consent = "Consent to communication is required to submit.";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmissionResult(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmissionResult({
          success: true,
          message: data.message,
          referenceId: data.referenceId,
        });
        setFormData({
          fullName: "",
          email: "",
          enquiryType: "General Enquiries",
          subject: "",
          message: "",
          consent: false,
        });
        setErrors({});
      } else {
        setSubmissionResult({
          success: false,
          error:
            data.error ||
            "Unable to log your submission at this time. Please try again.",
        });
      }
    } catch {
      setSubmissionResult({
        success: false,
        error:
          "Network connection error. Please verify your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-[#F4F0E8] text-[#202020]">
      {/* 1. Hero Section */}
      <section className="border-b border-[#D8D0C4] pt-14 pb-16 md:pt-20 md:pb-24 bg-[#F4F0E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EAE4D9] border border-[#D8D0C4] text-[#171717]">
            <Mail className="w-3.5 h-3.5 text-[#68645D]" />
            <span className="font-interface text-[11px] uppercase tracking-[0.2em] font-medium">
              Official Correspondence
            </span>
          </div>

          <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-[#171717] font-normal max-w-4xl leading-tight">
            Connect with DELEGATES.
            <br />
            <span className="italic">Engage in dialogue.</span>
          </h1>

          <p className="font-interface text-base sm:text-lg text-[#68645D] max-w-2xl leading-relaxed">
            Whether you represent an MUN secretariat seeking academic collaboration, an aspiring writer proposing an editorial dispatch, or a delegate seeking mentorship, our desk is open.
          </p>
        </div>
      </section>

      {/* 2. Main Content & Form Grid */}
      <section className="py-16 md:py-24 bg-[#F4F0E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Col: Contact Info & Desk Overview (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div className="border border-[#D8D0C4] bg-white p-8 space-y-6">
                <div className="space-y-2">
                  <span className="text-[10px] font-interface uppercase tracking-[0.2em] text-[#68645D]">
                    Direct Inquiries
                  </span>
                  <h3 className="font-editorial text-2xl text-[#171717]">
                    Official Desks
                  </h3>
                  <p className="text-xs text-[#68645D] leading-relaxed">
                    Choose the appropriate channel for expedited review by our directors.
                  </p>
                </div>

                <div className="space-y-4 pt-2 border-t border-[#D8D0C4] text-xs">
                  <div className="p-3 bg-[#F4F0E8] border border-[#D8D0C4] space-y-1">
                    <span className="font-semibold text-[#171717] uppercase tracking-wider text-[11px] block">
                      General & Secretariat Inquiries:
                    </span>
                    <p className="text-[#68645D]">
                      contact@delegates.org (or submit form opposite)
                    </p>
                  </div>

                  <div className="p-3 bg-[#F4F0E8] border border-[#D8D0C4] space-y-1">
                    <span className="font-semibold text-[#171717] uppercase tracking-wider text-[11px] block">
                      Editorial & Media Submissions:
                    </span>
                    <p className="text-[#68645D]">
                      Accepting policy analyses, legal briefs, and interview pitches.
                    </p>
                  </div>

                  <div className="p-3 bg-[#F4F0E8] border border-[#D8D0C4] space-y-1">
                    <span className="font-semibold text-[#171717] uppercase tracking-wider text-[11px] block">
                      Academic & Mentorship Labs:
                    </span>
                    <p className="text-[#68645D]">
                      Partnerships for collegiate and high-school MUN training.
                    </p>
                  </div>
                </div>
              </div>

              {/* Privacy Notice */}
              <div className="p-6 bg-[#EAE4D9] border border-[#D8D0C4] space-y-2 text-xs text-[#68645D]">
                <span className="font-semibold uppercase tracking-wider text-[11px] text-[#171717] block">
                  Data Handling & Privacy Notice:
                </span>
                <p className="leading-relaxed">
                  Information submitted through this portal is utilized solely for communicating regarding your specific enquiry. We never monetize, distribute, or share personal data with external third parties.
                </p>
              </div>
            </div>

            {/* Right Col: Verified Form (7 cols) */}
            <div className="lg:col-span-7 border border-[#D8D0C4] bg-white p-8 sm:p-10">
              <div className="border-b border-[#D8D0C4] pb-4 mb-6">
                <span className="font-interface text-xs uppercase tracking-[0.2em] text-[#68645D]">
                  Official Correspondence Form
                </span>
                <h2 className="font-editorial text-2xl sm:text-3xl text-[#171717] mt-1">
                  Send an Enquiry
                </h2>
              </div>

              {submissionResult && submissionResult.success && (
                <div className="p-6 mb-6 bg-[#F4F0E8] border border-[#171717] space-y-3 animate-fadeIn">
                  <div className="flex items-center gap-2 text-[#171717]">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                    <span className="font-interface font-semibold text-xs uppercase tracking-widest">
                      Transmission Confirmed
                    </span>
                  </div>
                  <p className="text-xs text-[#68645D] leading-relaxed">
                    {submissionResult.message}
                  </p>
                  {submissionResult.referenceId && (
                    <p className="text-[11px] font-interface text-[#171717] font-mono">
                      Tracking Reference: {submissionResult.referenceId}
                    </p>
                  )}
                </div>
              )}

              {submissionResult && !submissionResult.success && (
                <div className="p-4 mb-6 bg-red-50 border border-red-200 text-red-700 flex items-start gap-2.5 text-xs animate-fadeIn">
                  <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>{submissionResult.error}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-interface font-semibold uppercase tracking-wider text-[#202020] mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    placeholder="e.g. Marcus Thorne"
                    className="w-full px-4 py-2.5 bg-[#F4F0E8]/50 border border-[#D8D0C4] text-sm text-[#171717] focus:outline-none focus:border-[#171717] focus:bg-white transition-all"
                  />
                  {errors.fullName && (
                    <p className="text-[11px] text-red-600 mt-1 font-medium">
                      {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-xs font-interface font-semibold uppercase tracking-wider text-[#202020] mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="e.g. marcus@university.org"
                    className="w-full px-4 py-2.5 bg-[#F4F0E8]/50 border border-[#D8D0C4] text-sm text-[#171717] focus:outline-none focus:border-[#171717] focus:bg-white transition-all"
                  />
                  {errors.email && (
                    <p className="text-[11px] text-red-600 mt-1 font-medium">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Enquiry Type */}
                <div>
                  <label className="block text-xs font-interface font-semibold uppercase tracking-wider text-[#202020] mb-1.5">
                    Enquiry Type *
                  </label>
                  <select
                    value={formData.enquiryType}
                    onChange={(e) =>
                      setFormData({ ...formData, enquiryType: e.target.value })
                    }
                    className="w-full px-4 py-2.5 bg-[#F4F0E8]/50 border border-[#D8D0C4] text-xs text-[#171717] focus:outline-none focus:border-[#171717] focus:bg-white"
                  >
                    {enquiryOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-interface font-semibold uppercase tracking-wider text-[#202020] mb-1.5">
                    Subject Line (Optional)
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    placeholder="e.g. Editorial Submission: Security Council Reform"
                    className="w-full px-4 py-2.5 bg-[#F4F0E8]/50 border border-[#D8D0C4] text-sm text-[#171717] focus:outline-none focus:border-[#171717] focus:bg-white transition-all"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-interface font-semibold uppercase tracking-wider text-[#202020] mb-1.5">
                    Detailed Message *
                  </label>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Please outline your enquiry, background, or proposal with clarity..."
                    className="w-full px-4 py-3 bg-[#F4F0E8]/50 border border-[#D8D0C4] text-sm text-[#171717] focus:outline-none focus:border-[#171717] focus:bg-white transition-all resize-y"
                  />
                  {errors.message && (
                    <p className="text-[11px] text-red-600 mt-1 font-medium">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Consent Checkbox */}
                <div className="pt-1">
                  <label className="flex items-start gap-2.5 cursor-pointer text-xs text-[#68645D]">
                    <input
                      type="checkbox"
                      checked={formData.consent}
                      onChange={(e) =>
                        setFormData({ ...formData, consent: e.target.checked })
                      }
                      className="mt-0.5 accent-[#171717] w-4 h-4 cursor-pointer"
                    />
                    <span>
                      I consent to DELEGATES storing and processing this information for the purpose of responding to my inquiry.
                    </span>
                  </label>
                  {errors.consent && (
                    <p className="text-[11px] text-red-600 mt-1 font-medium">
                      {errors.consent}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-4 border-t border-[#D8D0C4]">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#171717] text-[#F4F0E8] font-interface text-xs uppercase tracking-[0.2em] font-semibold hover:bg-black transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Transmitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Official Enquiry</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
