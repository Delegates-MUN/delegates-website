import { Metadata } from "next";
import AcademyView from "./AcademyView";

export const metadata: Metadata = {
  title: "Academy — Field Manual, ROP Cheat Sheets & Strategy | DELEGATES",
  description:
    "Open-access Model United Nations educational framework: ROP cheat sheets, GSL speech formulas, and strategy guides written by delegates without paywalls.",
  alternates: {
    canonical: "https://www.delegates-mun.xyz/academy",
  },
  openGraph: {
    title: "Academy — Field Manual, ROP Cheat Sheets & Strategy | DELEGATES",
    description:
      "Learn without gatekeeping. Practical MUN rules of procedure, speech formulas, and negotiation guides.",
    url: "https://www.delegates-mun.xyz/academy",
    siteName: "DELEGATES",
    images: [
      {
        url: "/assets/editorial/academy-amphitheater.jpg",
        width: 1200,
        height: 630,
        alt: "Diplomatic Lecture Amphitheater — DELEGATES Academy",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Academy — Field Manual, ROP Cheat Sheets & Strategy | DELEGATES",
    description:
      "Learn without gatekeeping. Practical MUN rules of procedure, speech formulas, and negotiation guides.",
    images: ["/assets/editorial/academy-amphitheater.jpg"],
  },
};

export default function AcademyPage() {
  return <AcademyView />;
}
