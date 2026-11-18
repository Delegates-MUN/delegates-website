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
import { SwissCornerMarks, CartographicStamp, ArchivalBadge } from "@/components/ui/SwissAccents";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 animate-fadeIn">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EAE4D9] border border-[#D8D0C4] text-[#171717]">
              <Mail className="w-3.5 h-3.5 text-[#68645D]" />
              <span className="font-interface text-[11px] uppercase tracking-[0.2em] font-medium">
                Official Correspondence
              </span>
            </div>
            <CartographicStamp
              location="OFFICIAL COMMUNICATIONS // SECRETARIAT DESK"
              coordinates="46°13′36″N 6°08′26″E"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Col: Narrative & Protocol */}
            <div className="lg:col-span-6 space-y-6">
              <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-[#171717] font-normal leading-tight animate-fadeInUp delay-100">
                Connect with DELEGATES.
                <br />
                <span className="italic font-serif font-light text-[#3A3835]">
                  Engage in dialogue.
                </span>
              </h1>

              <p className="font-interface text-base sm:text-lg text-[#68645D] leading-relaxed animate-fadeInUp delay-150">
                Whether you represent an MUN secretariat seeking academic collaboration, an aspiring writer proposing an editorial dispatch, or a delegate seeking mentorship, our desk is open.
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs font-interface text-[#171717] font-medium pt-2 animate-fadeInUp delay-200">
                <span className="px-3 py-1 bg-[#EAE4D9] border border-[#D8D0C4]">Diplomatic Enquiries</span>
                <span className="px-3 py-1 bg-[#EAE4D9] border border-[#D8D0C4]">24-48h Response SLA</span>
                <span className="px-3 py-1 bg-[#EAE4D9] border border-[#D8D0C4]">Direct Department Routing</span>
              </div>
            </div>

            {/* Right Col: Secretariat Desk Photograph */}
            <div className="lg:col-span-6 animate-fadeIn delay-150">
              <div className="relative aspect-[16/10] w-full border border-[#D8D0C4] overflow-hidden bg-[#171717] group">
                <SwissCornerMarks />
                <Image
                  src="/assets/editorial/secretariat-desk.jpg"
                  alt="Official diplomatic secretariat desk with treaty folio, fountain pen, and embossed seal"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover grayscale contrast-110 opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent p-5 sm:p-6 flex flex-col justify-between">
                  <div className="flex justify-end">
                    <ArchivalBadge label="SECRETARIAT LIAISON" classification="OFFICIAL DESK" variant="dark" />
                  </div>
                  <div className="text-white text-xs font-interface space-y-1">
                    <span className="text-[10px] uppercase tracking-widest text-[#B89358] block">
                      Secretariat Communications
                    </span>
                    <p className="font-editorial italic text-xs sm:text-sm text-white/90">
                      “All formal inquiries, conference partnerships, and submissions receive prompt archival review.”
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Content & Form Grid */}
      <section className="py-16 md:py-24 bg-[#F4F0E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Col: Contact Info & Desk Overview (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              <ScrollReveal>
                <div className="relative border border-[#D8D0C4] bg-white p-5 sm:p-8 space-y-6 card-hover-lift">
                  <SwissCornerMarks size="w-2 h-2" />
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
                    <div className="p-3.5 bg-[#F4F0E8] border border-[#D8D0C4] space-y-1.5">
                      <span className="font-semibold text-[#171717] uppercase tracking-wider text-[11px] block">
                        Official Secretariat Desk:
                      </span>
                      <a
                        href="mailto:delegates@zohomail.in"
                        className="text-[#171717] font-medium hover:underline flex items-center gap-1.5 text-xs"
                      >
                        <Mail className="w-3.5 h-3.5 text-[#B89358]" />
                        <span>delegates@zohomail.in</span>
                      </a>
                      <p className="text-[11px] text-[#68645D]">
                        All formal correspondence, partnerships, and editorial submissions.
                      </p>
                    </div>

                    <div className="p-3.5 bg-[#F4F0E8] border border-[#D8D0C4] space-y-1.5">
                      <span className="font-semibold text-[#171717] uppercase tracking-wider text-[11px] block">
                        WhatsApp Community Forum:
                      </span>
                      <a
                        href="https://chat.whatsapp.com/DgERPMtTm4f0ONCfet1ebv"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#171717] font-medium hover:underline flex items-center gap-1.5 text-xs"
                      >
                        <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                        <span>Join Open Community Group</span>
                        <ArrowRight className="w-3 h-3" />
                      </a>
                      <p className="text-[11px] text-[#68645D]">
                        Open to all interested delegates; specialized working groups selected subsequently.
                      </p>
                    </div>

                    <div className="p-3.5 bg-[#F4F0E8] border border-[#D8D0C4] space-y-1.5">
                      <span className="font-semibold text-[#171717] uppercase tracking-wider text-[11px] block">
                        Verified Network Channels:
                      </span>
                      <div className="flex items-center gap-4 pt-0.5 text-xs">
                        <a
                          href="https://www.linkedin.com/company/delegates-mun/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#171717] hover:underline flex items-center gap-1 font-medium"
                        >
                          <span>LinkedIn</span>
                          <ArrowRight className="w-2.5 h-2.5 text-[#8E877C]" />
                        </a>
                        <span className="text-[#D8D0C4]">·</span>
                        <a
                          href="https://www.instagram.com/delegates_mun/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#171717] hover:underline flex items-center gap-1 font-medium"
                        >
                          <span>Instagram</span>
                          <ArrowRight className="w-2.5 h-2.5 text-[#8E877C]" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Privacy Notice */}
              <ScrollReveal delay={50}>
                <div className="p-6 bg-[#EAE4D9] border border-[#D8D0C4] space-y-2 text-xs text-[#68645D] card-hover-lift">
                  <span className="font-semibold uppercase tracking-wider text-[11px] text-[#171717] block">
                    Data Handling & Privacy Notice:
                  </span>
                  <p className="leading-relaxed">
                    Information submitted through this portal is utilized solely for communicating regarding your specific enquiry. We never monetize, distribute, or share personal data with external third parties.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Col: Verified Form (7 cols) */}
            <div className="lg:col-span-7">
              <ScrollReveal delay={100}>
                <div className="relative border border-[#D8D0C4] bg-white p-5 sm:p-8 md:p-10 card-hover-lift">
                  <SwissCornerMarks size="w-2 h-2" />
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
                    className="w-full px-4 py-2.5 bg-[#F4F0E8]/50 border border-[#D8D0C4] text-base sm:text-sm text-[#171717] focus:outline-none focus:border-[#171717] focus:bg-white transition-all"
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
                    className="w-full px-4 py-2.5 bg-[#F4F0E8]/50 border border-[#D8D0C4] text-base sm:text-sm text-[#171717] focus:outline-none focus:border-[#171717] focus:bg-white transition-all"
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
                    className="w-full px-4 py-2.5 bg-[#F4F0E8]/50 border border-[#D8D0C4] text-base sm:text-xs text-[#171717] focus:outline-none focus:border-[#171717] focus:bg-white"
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
                    className="w-full px-4 py-2.5 bg-[#F4F0E8]/50 border border-[#D8D0C4] text-base sm:text-sm text-[#171717] focus:outline-none focus:border-[#171717] focus:bg-white transition-all"
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
                    className="w-full px-4 py-3 bg-[#F4F0E8]/50 border border-[#D8D0C4] text-base sm:text-sm text-[#171717] focus:outline-none focus:border-[#171717] focus:bg-white transition-all resize-y"
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
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#171717] text-[#F4F0E8] font-interface text-xs uppercase tracking-[0.2em] font-semibold hover:bg-black transition-all active:scale-[0.98] disabled:opacity-50"
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
          </ScrollReveal>
        </div>
      </div>
    </div>
  </section>
</div>
);
}

