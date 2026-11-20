import { Metadata } from "next";
import CommunityView from "./CommunityView";

export const metadata: Metadata = {
  title: "Community — The Diplomatic Forum | DELEGATES",
  description:
    "An open, multi-tier platform connecting beginner delegates, seasoned competitors, and Executive Board members through civil discourse, mutual respect, and global curiosity.",
  alternates: {
    canonical: "https://www.delegates-mun.xyz/community",
  },
  openGraph: {
    title: "Community — The Diplomatic Forum | DELEGATES",
    description:
      "Find your people. Exchange perspectives. Grow together in an open MUN diplomacy community.",
    url: "https://www.delegates-mun.xyz/community",
    siteName: "DELEGATES",
    images: [
      {
        url: "/assets/editorial/community-assembly.jpg",
        width: 1200,
        height: 630,
        alt: "Diplomatic Community Assembly Hall — DELEGATES",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Community — The Diplomatic Forum | DELEGATES",
    description:
      "Find your people. Exchange perspectives. Grow together in an open MUN diplomacy community.",
    images: ["/assets/editorial/community-assembly.jpg"],
  },
};

export default function CommunityPage() {
  return <CommunityView />;
}
