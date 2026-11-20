import { Metadata } from "next";
import { Suspense } from "react";
import ThankYouContent from "./ThankYouContent";

export const metadata: Metadata = {
  title: "Transmission Confirmed | DELEGATES",
  description:
    "Your enquiry or submission has been securely registered with the DELEGATES Secretariat.",
  alternates: {
    canonical: "https://www.delegates-mun.xyz/thank-you",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-[70vh] bg-[#F4F0E8] flex items-center justify-center">
          <p className="font-interface text-sm text-[#68645D]">Loading confirmation...</p>
        </div>
      }
    >
      <ThankYouContent />
    </Suspense>
  );
}
