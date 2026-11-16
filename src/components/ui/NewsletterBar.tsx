"use client";

import { useState } from "react";
import { Mail, CheckCircle2, ArrowRight, Loader2, Sparkles, ShieldCheck } from "lucide-react";

export default function NewsletterBar() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    await new Promise((resolve) => setTimeout(resolve, 750));

    try {
      const existing = JSON.parse(
        localStorage.getItem("delegates_dispatch_subscribers") || "[]"
      );
      if (!existing.includes(email)) {
        existing.push({ email, subscribedAt: new Date().toISOString() });
        localStorage.setItem(
          "delegates_dispatch_subscribers",
          JSON.stringify(existing)
        );
      }
    } catch {
      // LocalStorage fallback
    }

    setStatus("success");
    setEmail("");
  };

  return (
    <section className="relative bg-[#171717] text-[#F4F0E8] border-t border-b border-[#2D2B28] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Editorial Invitation */}
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#252422] border border-[#33312D] text-[#C9C2B7]">
              <Sparkles className="w-3 h-3 text-[#B89358]" />
              <span className="font-interface text-[10px] uppercase tracking-[0.22em] font-medium">
                Fortnightly Intelligence Briefing
              </span>
            </div>

            <h3 className="font-editorial text-3xl sm:text-4xl text-white font-normal leading-tight">
              The Diplomatic Dispatch
            </h3>

            <p className="font-interface text-sm text-[#C9C2B7] leading-relaxed">
              Curated analyses of global shifts, procedural masterclasses, and verified circuit opportunities delivered directly to your inbox every second Sunday.
            </p>

            <div className="flex items-center gap-3 pt-2 text-xs text-[#8E877C] font-interface">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#B89358]" />
                Zero Spam
              </span>
              <span>·</span>
              <span>Unsubscribe Anytime</span>
              <span>·</span>
              <span>Peer-Reviewed</span>
            </div>
          </div>

          {/* Right Column: Input & Subscription Flow */}
          <div className="lg:col-span-6">
            {status === "success" ? (
              <div className="p-6 bg-[#252422] border border-[#33312D] space-y-3 animate-fadeIn">
                <div className="flex items-center gap-2.5 text-emerald-400">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <span className="font-interface text-xs uppercase tracking-widest font-semibold">
                    Subscription Confirmed
                  </span>
                </div>
                <p className="font-editorial text-base text-white">
                  Welcome to The Diplomatic Dispatch.
                </p>
                <p className="font-interface text-xs text-[#C9C2B7] leading-relaxed">
                  Your email has been registered for the next dispatch. Please check your inbox for our introductory reader dossier.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-xs uppercase tracking-wider text-[#B89358] hover:underline font-interface pt-1"
                >
                  Subscribe another reader
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="flex flex-col sm:flex-row gap-2">
                  <div className="relative flex-grow">
                    <Mail className="w-4 h-4 absolute left-3.5 top-3.5 text-[#8E877C]" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (status === "error") setStatus("idle");
                      }}
                      placeholder="Enter your institutional or personal email..."
                      className="w-full pl-10 pr-4 py-3 bg-[#252422] border border-[#33312D] text-white text-xs sm:text-sm placeholder-[#8E877C] focus:outline-none focus:border-white transition-colors"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#F4F0E8] text-[#171717] font-interface text-xs uppercase tracking-[0.16em] font-semibold hover:bg-white hover:shadow-md transition-colors disabled:opacity-60 flex-shrink-0"
                  >
                    {status === "loading" ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <>
                        <span>Subscribe</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>

                {status === "error" && (
                  <p className="text-xs text-red-400 font-interface">{errorMessage}</p>
                )}

                <p className="text-[11px] text-[#8E877C] font-interface">
                  By subscribing, you agree to receive DELEGATES editorial digests in accordance with our principled privacy guidelines.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
