import { Metadata } from "next";
import ContactView from "./ContactView";

export const metadata: Metadata = {
  title: "Contact & Correspondence — Secretariat Desk | DELEGATES",
  description:
    "Official correspondence channel for diplomatic inquiries, academic partnerships, and editorial submissions to the DELEGATES Secretariat.",
  alternates: {
    canonical: "https://www.delegates-mun.xyz/contact",
  },
  openGraph: {
    title: "Contact & Correspondence — Secretariat Desk | DELEGATES",
    description:
      "Connect with DELEGATES. Direct official communications with our Secretariat Desk.",
    url: "https://www.delegates-mun.xyz/contact",
    siteName: "DELEGATES",
    images: [
      {
        url: "/assets/editorial/secretariat-desk.jpg",
        width: 1200,
        height: 630,
        alt: "Official Secretariat Correspondence Desk — DELEGATES",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact & Correspondence — Secretariat Desk | DELEGATES",
    description:
      "Connect with DELEGATES. Direct official communications with our Secretariat Desk.",
    images: ["/assets/editorial/secretariat-desk.jpg"],
  },
};

export default function ContactPage() {
  return <ContactView />;
}
