"use client";

import { useState, useEffect } from "react";
import { X, CheckCircle2, ArrowRight, Loader2 } from "lucide-react";
import Image from "next/image";

export default function JoinCommunityModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    experienceLevel: "First-time MUN Participant",
    primaryInterest: "Community Discussions & Networking",
    statement: "",
    consent: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("open-join-community-modal", handleOpen);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("open-join-community-modal", handleOpen);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      errs.fullName = "Full name is required.";
    }
    if (!formData.email.trim()) {
      errs.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please provide a valid email address.";
    }
    if (!formData.consent) {
      errs.consent = "You must agree to the community standards to proceed.";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate real submission to show proper state handling
    await new Promise((resolve) => setTimeout(resolve, 900));

    // Save to local storage for persistence demonstration
    try {
      const existing = JSON.parse(
        localStorage.getItem("delegates_community_inquiries") || "[]"
      );
      existing.push({
        ...formData,
        submittedAt: new Date().toISOString(),
      });
      localStorage.setItem(
        "delegates_community_inquiries",
        JSON.stringify(existing)
      );
    } catch {
      // LocalStorage fallback
    }

    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    // Reset state after transition
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({
        fullName: "",
        email: "",
        experienceLevel: "First-time MUN Participant",
        primaryInterest: "Community Discussions & Networking",
        statement: "",
        consent: false,
      });
      setErrors({});
    }, 200);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/60 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="join-modal-title"
    >
      <div
        className="relative w-full max-w-xl bg-[#F4F0E8] text-[#202020] border border-[#D8D0C4] shadow-2xl p-6 sm:p-8 md:p-10 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 p-2 text-[#68645D] hover:text-[#171717] hover:bg-[#EAE4D9] rounded-full transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="py-8 text-center space-y-5 animate-fadeIn">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#171717] text-[#F4F0E8] flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <span className="font-interface text-xs uppercase tracking-[0.2em] text-[#68645D]">
                Application Received
              </span>
              <h3
                id="join-modal-title"
                className="font-editorial text-2xl md:text-3xl text-[#171717]"
              >
                Welcome to DELEGATES
              </h3>
            </div>
            <p className="text-sm text-[#68645D] max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-[#171717]">{formData.fullName}</strong>. Your expression of interest has been recorded in our community registry. You will receive an onboarding briefing at <strong className="text-[#171717]">{formData.email}</strong> shortly.
            </p>
            <div className="p-4 bg-[#EAE4D9] border border-[#D8D0C4] text-xs text-[#202020] text-left space-y-1">
              <p className="font-semibold uppercase tracking-wider text-[11px]">
                Brand Promise:
              </p>
              <p className="italic font-editorial text-sm text-[#68645D]">
                “A space to learn without barriers, connect without boundaries, and engage in dialogue grounded in principles.”
              </p>
            </div>
            <button
              onClick={handleClose}
              className="mt-4 px-6 py-2.5 bg-[#171717] text-[#F4F0E8] text-xs uppercase tracking-widest font-interface font-medium hover:bg-black transition-colors"
            >
              Return to Website
            </button>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="flex items-start gap-4 mb-6 pb-5 border-b border-[#D8D0C4]">
              <div className="relative w-10 h-12 flex-shrink-0">
                <Image
                  src="/assets/delegates-monogram-dark.png"
                  alt="DELEGATES"
                  fill
                  sizes="40px"
                  className="object-contain"
                />
              </div>
              <div>
                <span className="font-interface text-[11px] tracking-[0.2em] uppercase text-[#68645D]">
                  Community Membership
                </span>
                <h2
                  id="join-modal-title"
                  className="font-editorial text-2xl md:text-3xl text-[#171717] mt-0.5"
                >
                  Join the DELEGATES Community
                </h2>
                <p className="text-xs text-[#68645D] mt-1">
                  Rooted in Principles. United by Dialogue.
                </p>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
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
                  placeholder="e.g. Elena Rostova"
                  className="w-full px-3.5 py-2.5 bg-white border border-[#D8D0C4] text-sm text-[#171717] focus:outline-none focus:border-[#171717] transition-colors"
                />
                {errors.fullName && (
                  <p className="text-[11px] text-red-600 mt-1 font-medium">
                    {errors.fullName}
                  </p>
                )}
              </div>

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
                  placeholder="e.g. elena@university.edu"
                  className="w-full px-3.5 py-2.5 bg-white border border-[#D8D0C4] text-sm text-[#171717] focus:outline-none focus:border-[#171717] transition-colors"
                />
                {errors.email && (
                  <p className="text-[11px] text-red-600 mt-1 font-medium">
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-interface font-semibold uppercase tracking-wider text-[#202020] mb-1.5">
                    Experience Level
                  </label>
                  <select
                    value={formData.experienceLevel}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        experienceLevel: e.target.value,
                      })
                    }
                    className="w-full px-3.5 py-2.5 bg-white border border-[#D8D0C4] text-xs text-[#171717] focus:outline-none focus:border-[#171717]"
                  >
                    <option value="First-time MUN Participant">
                      First-time MUN Participant
                    </option>
                    <option value="Regular Delegate (1-4 Conferences)">
                      Regular Delegate (1-4 Conferences)
                    </option>
                    <option value="Experienced Delegate (5+ Conferences)">
                      Experienced Delegate (5+ Conferences)
                    </option>
                    <option value="Executive Board Member / Chair">
                      Executive Board Member / Chair
                    </option>
                    <option value="MUN Secretariat / Organizer">
                      MUN Secretariat / Organizer
                    </option>
                    <option value="Student of International Affairs">
                      Student of International Affairs
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-interface font-semibold uppercase tracking-wider text-[#202020] mb-1.5">
                    Primary Interest
                  </label>
                  <select
                    value={formData.primaryInterest}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        primaryInterest: e.target.value,
                      })
                    }
                    className="w-full px-3.5 py-2.5 bg-white border border-[#D8D0C4] text-xs text-[#171717] focus:outline-none focus:border-[#171717]"
                  >
                    <option value="Community Discussions & Networking">
                      Community & Networking
                    </option>
                    <option value="Academy Educational Guides">
                      Academy Research & Guides
                    </option>
                    <option value="Media Editorial & Articles">
                      Media & Geopolitical Writing
                    </option>
                    <option value="Executive Board Mentorship">
                      Executive Board Mentorship
                    </option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-interface font-semibold uppercase tracking-wider text-[#202020] mb-1.5">
                  Brief Note or What You Hope to Contribute / Learn (Optional)
                </label>
                <textarea
                  rows={2}
                  value={formData.statement}
                  onChange={(e) =>
                    setFormData({ ...formData, statement: e.target.value })
                  }
                  placeholder="Share your background or the diplomatic areas you care about..."
                  className="w-full px-3.5 py-2 bg-white border border-[#D8D0C4] text-sm text-[#171717] focus:outline-none focus:border-[#171717] resize-none"
                />
              </div>

              <div className="pt-2">
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
                    I commit to engaging in civil, principled dialogue adhering to DELEGATES community standards.
                  </span>
                </label>
                {errors.consent && (
                  <p className="text-[11px] text-red-600 mt-1 font-medium">
                    {errors.consent}
                  </p>
                )}
              </div>

              <div className="pt-4 flex items-center justify-between border-t border-[#D8D0C4]">
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-4 py-2.5 text-xs uppercase tracking-wider font-interface font-medium text-[#68645D] hover:text-[#171717]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#171717] text-[#F4F0E8] text-xs uppercase tracking-widest font-interface font-semibold hover:bg-black transition-all disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Application</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
