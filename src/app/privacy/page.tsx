import { Metadata } from "next";
import Link from "next/link";
import { Shield, Lock, FileText, ArrowLeft, Mail } from "lucide-react";
import { SwissCornerMarks, CartographicStamp, ArchivalBadge } from "@/components/ui/SwissAccents";

export const metadata: Metadata = {
  title: "Privacy Policy | DELEGATES",
  description:
    "Official privacy policy and data governance practices of the DELEGATES platform.",
  alternates: {
    canonical: "https://www.delegates-mun.xyz/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <div className="w-full bg-[#F4F0E8] text-[#202020] py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="border-b border-[#D8D0C4] pb-8 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EAE4D9] border border-[#D8D0C4] text-[#171717]">
              <Lock className="w-3.5 h-3.5 text-[#68645D]" />
              <span className="font-interface text-[11px] uppercase tracking-[0.2em] font-medium">
                Legal & Governance
              </span>
            </div>
            <CartographicStamp
              location="DATA GOVERNANCE"
              coordinates="PRIVACY ASSURANCE"
            />
          </div>

          <h1 className="font-editorial text-4xl sm:text-5xl text-[#171717] font-normal">
            Privacy Policy
          </h1>
          <p className="font-interface text-sm text-[#68645D]">
            Last Updated: November 2026 · DELEGATES Secretariat
          </p>
        </div>

        {/* Content Box */}
        <div className="relative border border-[#D8D0C4] bg-white p-8 sm:p-12 md:p-16 space-y-8 card-hover-lift">
          <SwissCornerMarks size="w-3 h-3" />

          <section className="space-y-3">
            <h2 className="font-editorial text-2xl text-[#171717]">
              1. Institutional Commitment to Privacy
            </h2>
            <p className="font-interface text-sm text-[#68645D] leading-relaxed">
              DELEGATES is committed to upholding the highest standards of data integrity and participant privacy. We operate as a public-facing educational platform with open resources, and we do not maintain member accounts or require credentials to explore our published content.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-editorial text-2xl text-[#171717]">
              2. Information We Collect
            </h2>
            <p className="font-interface text-sm text-[#68645D] leading-relaxed">
              We collect information exclusively when you voluntarily communicate with our desk through:
            </p>
            <ul className="list-disc list-inside space-y-1.5 font-interface text-sm text-[#68645D] pl-2">
              <li><strong>Contact & Correspondence Form:</strong> Name, email address, enquiry category, subject, and message content.</li>
              <li><strong>Opportunity Submissions:</strong> Conference title, organizing body, dates, location, official URL, and contact email.</li>
              <li><strong>Technical Logs:</strong> Standard server logs, IP addresses for security and spam prevention (e.g. Cloudflare Turnstile), and aggregated anonymized traffic analytics.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-editorial text-2xl text-[#171717]">
              3. Purpose of Processing
            </h2>
            <p className="font-interface text-sm text-[#68645D] leading-relaxed">
              Any personal data provided to DELEGATES is used solely to respond to your specific inquiries, review submitted opportunities for delegate safety, and facilitate direct communications. We never monetize, sell, or rent your personal information to external commercial third parties.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-editorial text-2xl text-[#171717]">
              4. External Services & Community
            </h2>
            <p className="font-interface text-sm text-[#68645D] leading-relaxed">
              Our community forum operates via an official external WhatsApp group. When you join the WhatsApp community or interact with verified LinkedIn/Instagram channels, your participation is governed by the respective platform&apos;s privacy policies.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-editorial text-2xl text-[#171717]">
              5. Contacting the Secretariat
            </h2>
            <p className="font-interface text-sm text-[#68645D] leading-relaxed">
              If you have any questions regarding your data or wish to request the removal of submitted correspondence, please email:
            </p>
            <div className="p-4 bg-[#F4F0E8] border border-[#D8D0C4] inline-block">
              <a
                href="mailto:delegates@zohomail.in"
                className="font-interface text-xs font-semibold text-[#171717] hover:underline flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-[#B89358]" />
                <span>delegates@zohomail.in</span>
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
