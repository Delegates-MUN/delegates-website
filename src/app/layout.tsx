import type { Metadata, Viewport } from "next";
import { Montserrat, Lora } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import JoinCommunityModal from "@/components/ui/JoinCommunityModal";
import EditorialMastheadBar from "@/components/ui/EditorialMastheadBar";
import GlobalSearchModal from "@/components/ui/GlobalSearchModal";
import SubmitOpportunityModal from "@/components/ui/SubmitOpportunityModal";
import VideoCinematicModal from "@/components/ui/VideoCinematicModal";
import NewsletterBar from "@/components/ui/NewsletterBar";
import ReadingProgress from "@/components/ui/ReadingProgress";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const viewport: Viewport = {
  themeColor: "#171717",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.delegates-mun.xyz"
  ),
  title: {
    default: "DELEGATES — Rooted in Principles. United by Dialogue.",
    template: "%s | DELEGATES",
  },
  description:
    "A premier community for MUN enthusiasts, aspiring diplomats, and youth leaders. Bridging Community, Academy, and Media under the DLGTS philosophy.",
  keywords: [
    "DELEGATES",
    "Model United Nations",
    "MUN",
    "Diplomacy",
    "International Relations",
    "Geopolitics",
    "Executive Board",
    "Youth Leadership",
    "DLGTS",
  ],
  authors: [{ name: "DELEGATES Editorial Team" }],
  openGraph: {
    title: "DELEGATES — Rooted in Principles. United by Dialogue.",
    description:
      "A premier community for MUN enthusiasts, aspiring diplomats, and youth leaders.",
    url: "https://www.delegates-mun.xyz",
    siteName: "DELEGATES",
    images: [
      {
        url: "/assets/delegates-monogram-dark.png",
        width: 1200,
        height: 630,
        alt: "DELEGATES Official Monogram",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/assets/delegates-monogram-dark.png",
    apple: "/assets/delegates-monogram-dark.png",
  },
  verification: {
    google: "google9ead6cbf74096ef9",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${lora.variable}`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-screen flex flex-col bg-[#F4F0E8] text-[#202020] antialiased selection:bg-[#171717] selection:text-[#F4F0E8]">
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}
        <ReadingProgress />
        <EditorialMastheadBar />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <NewsletterBar />
        <Footer />
        <JoinCommunityModal />
        <GlobalSearchModal />
        <SubmitOpportunityModal />
        <VideoCinematicModal />
      </body>
    </html>
  );
}
