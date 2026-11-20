import { Metadata } from "next";
import EditorialHero from "@/components/home/EditorialHero";
import PillarsSection from "@/components/home/PillarsSection";
import DLGTSPhilosophy from "@/components/home/DLGTSPhilosophy";
import FeaturedOpportunities from "@/components/home/FeaturedOpportunities";
import FeaturedEditorial from "@/components/home/FeaturedEditorial";
import CommunityCTA from "@/components/home/CommunityCTA";

export const metadata: Metadata = {
  title: "DELEGATES — Rooted in Principles. United by Dialogue.",
  description:
    "An independent platform elevating Model United Nations through principled statesmanship, open learning, and youth-led dialogue across Community, Academy, and Media under the DLGTS framework.",
  alternates: {
    canonical: "https://www.delegates-mun.xyz",
  },
  openGraph: {
    title: "DELEGATES — Rooted in Principles. United by Dialogue.",
    description:
      "A platform for Model UN enthusiasts, aspiring diplomats, and youth leaders to connect, learn without barriers, and engage with the world.",
    url: "https://www.delegates-mun.xyz",
    siteName: "DELEGATES",
    images: [
      {
        url: "/assets/editorial/multilateralism-hall.jpg",
        width: 1200,
        height: 630,
        alt: "Diplomatic Assembly Hall — DELEGATES",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DELEGATES — Rooted in Principles. United by Dialogue.",
    description:
      "A platform for Model UN enthusiasts, aspiring diplomats, and youth leaders.",
    images: ["/assets/editorial/multilateralism-hall.jpg"],
  },
};

export default function HomePage() {
  return (
    <div className="w-full">
      <EditorialHero />
      <PillarsSection />
      <DLGTSPhilosophy />
      <FeaturedOpportunities />
      <FeaturedEditorial />
      <CommunityCTA />
    </div>
  );
}
