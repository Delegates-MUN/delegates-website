import { Metadata } from "next";
import MediaView from "./MediaView";

export const metadata: Metadata = {
  title: "Media — Perspectives & Geopolitical Commentary | DELEGATES",
  description:
    "Thoughtful perspectives, independent commentary, and foundational analyses on diplomacy, geopolitics, international relations, and Model United Nations.",
  alternates: {
    canonical: "https://www.delegates-mun.xyz/media",
  },
  openGraph: {
    title: "Media — Perspectives & Geopolitical Commentary | DELEGATES",
    description:
      "Perspectives Worth Exploring. Thoughtful editorial commentary on global affairs and diplomacy.",
    url: "https://www.delegates-mun.xyz/media",
    siteName: "DELEGATES",
    images: [
      {
        url: "/assets/editorial/media-reading-room.jpg",
        width: 1200,
        height: 630,
        alt: "The Editorial Reading Room — DELEGATES Media",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Media — Perspectives & Geopolitical Commentary | DELEGATES",
    description:
      "Perspectives Worth Exploring. Thoughtful commentary on global affairs and diplomacy.",
    images: ["/assets/editorial/media-reading-room.jpg"],
  },
};

export default function MediaPage() {
  return <MediaView />;
}
