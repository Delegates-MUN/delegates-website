"use client";

import { useState, useEffect } from "react";
import { X, CheckCircle2, ArrowRight, ArrowUpRight, Loader2, MessageSquare } from "lucide-react";
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
              <CheckCircle2 className="w-8 h-8 text-[#B89358]" />
            </div>
            <div className="space-y-2">
              <span className="font-interface text-xs uppercase tracking-[0.2em] text-[#68645D]">
                Registration Received
              </span>
              <h3
                id="join-modal-title"
                className="font-editorial text-2xl md:text-3xl text-[#171717]"
              >
                Welcome to DELEGATES
              </h3>
            </div>
            <p className="text-sm text-[#68645D] max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-[#171717]">{formData.fullName}</strong>. Your profile has been recorded in our community registry.
            </p>

            {/* Direct WhatsApp Group Card on Success */}
            <div className="p-5 bg-white border border-[#D8D0C4] text-left space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#B89358] font-semibold">
                  STEP 02 // JOIN THE COMMUNITY GROUP
                </span>
                <span className="text-[10px] font-interface text-[#68645D]">Instant Access</span>
              </div>
              <p className="text-xs text-[#202020] leading-relaxed">
                We add all interested members to our main WhatsApp Community group right now. Our directors will review profiles and add selected delegates to specialized cohorts and working groups later.
              </p>
              <a
                href="https://chat.whatsapp.com/DgERPMtTm4f0ONCfet1ebv"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#171717] text-white text-xs uppercase tracking-widest font-interface font-semibold hover:bg-black transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366]" />
                <span>Enter WhatsApp Community Group</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

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
              className="mt-4 px-6 py-2.5 border border-[#171717] text-[#171717] text-xs uppercase tracking-widest font-interface font-medium hover:bg-[#171717] hover:text-white transition-colors"
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

            {/* Direct Fast-Track Community Join */}
            <div className="mb-6 p-4 bg-[#EAE4D9]/80 border border-[#D8D0C4] space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-wider font-semibold text-[#171717] bg-white px-2 py-0.5 border border-[#D8D0C4]">
                  DIRECT ACCESS // OPEN FORUM
                </span>
                <span className="text-[10px] font-interface text-[#68645D]">Instant WhatsApp Entry</span>
              </div>
              <p className="text-xs text-[#202020] leading-relaxed">
                Anyone interested in diplomacy and Model UN is invited directly into our open community forum. Join now:
              </p>
              <a
                href="https://chat.whatsapp.com/DgERPMtTm4f0ONCfet1ebv"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#171717] text-[#F4F0E8] text-xs uppercase tracking-[0.16em] font-interface font-semibold hover:bg-black transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                <span>Join WhatsApp Community Group</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <p className="text-[10px] text-[#68645D] italic">
                *We add all interested members to this central community group; selected active members will be invited into specialized cohorts later.
              </p>
            </div>

            <div className="relative flex py-1 items-center mb-5">
              <div className="flex-grow border-t border-[#D8D0C4]"></div>
              <span className="flex-shrink mx-3 text-[10px] font-interface uppercase tracking-widest text-[#8E877C]">
                Or Register Profile for Specialized Selection
              </span>
              <div className="flex-grow border-t border-[#D8D0C4]"></div>
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
