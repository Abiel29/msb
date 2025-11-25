import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/ui/scroll-to-top";
import FloatingSocials from "@/components/ui/floating-socials";
import { firmInfo } from "@/lib/dummy-data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://msblawfirm.id"),
  title: {
    default: firmInfo.seo_title || firmInfo.name,
    template: "%s | MSB & Partners",
  },
  description: firmInfo.seo_description || firmInfo.tagline,
  keywords: [
    "MSB & Partners",
    "MSB law firm",
    "MSB firma hukum",
    "firma hukum",
    "law firm",
    "pengacara",
    "lawyer",
    "advokat",
    "konsultasi hukum",
    "legal consultation",
    "firma hukum jakarta",
    "jakarta law firm",
    "jakarta",
    "indonesia",
    "hukum perdata",
    "civil law",
    "hukum pidana",
    "criminal law",
    "hukum korporasi",
    "corporate law",
    "legal review",
    "legal opinion",
    "perizinan usaha",
    "business licensing",
    "corporate legal",
    "corporate compliance",
    "compliance",
    "litigasi",
    "litigation",
    "kontrak bisnis",
    "business contracts",
    "sengketa bisnis",
    "dispute resolution",
    "arbitrase",
    "arbitration",
    "hak kekayaan intelektual",
    "intellectual property",
    "hubungan industrial",
    "employment law",
    "konsultasi gratis",
    "free consultation",
  ],
  authors: [{ name: firmInfo.name }],
  alternates: {
    canonical: "/",
    languages: {
      "id-ID": "https://msblawfirm.id/",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: firmInfo.seo_title || firmInfo.name,
    description: firmInfo.seo_description || firmInfo.tagline,
    type: "website",
    locale: "id_ID",
    url: "https://msblawfirm.id/",
    siteName: "MSB & Partners",
    images: [
      {
        url: "/msb.png",
        width: 1200,
        height: 630,
        alt: firmInfo.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: firmInfo.seo_title || firmInfo.name,
    description: firmInfo.seo_description || firmInfo.tagline,
    images: ["/msb.png"],
  },
  manifest: "/manifest.webmanifest",
  icons: {
    icon: "/favicon.ico",
    apple: "/msb.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`} suppressHydrationWarning>
        {children}
        <FloatingSocials />
        <ScrollToTop />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LegalService",
              name: firmInfo.name,
              alternateName: [
                "MSB Law Firm",
                "MSB Firma Hukum",
                "MSB & Partners"
              ],
              url: "https://msblawfirm.id/",
              logo: "https://msblawfirm.id/msb.png",
              image: "https://msblawfirm.id/msb.png",
              description: firmInfo.seo_description || firmInfo.tagline,
              telephone: firmInfo.phone,
              email: firmInfo.email,
              address: {
                "@type": "PostalAddress",
                streetAddress: firmInfo.address,
                addressCountry: "ID",
              },
              openingHours: "Mo-Fr 09:00-18:00",
              priceRange: "RpRpRp",
            }),
          }}
        />
      </body>
    </html>
  );
}
