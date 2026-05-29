import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { company, offices } from "@/lib/data";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });

export const metadata: Metadata = {
  metadataBase: new URL("https://fhf-cpa.com"),
  title: {
    default: `${company.name} | CPA Firm | Ohio`,
    template: `%s | ${company.name}`,
  },
  description:
    "Flagel Huber Flagel is an independent CPA and advisory firm with offices in Cincinnati, Dayton, and Troy, Ohio. Serving businesses and individuals since 1933 with tax, audit, valuation, and business advisory services.",
  keywords: [
    "CPA firm Ohio",
    "Cincinnati accountant",
    "Dayton CPA",
    "Troy Ohio accounting",
    "tax planning Ohio",
    "business valuation",
    "ESOP advisory",
    "audit services Ohio",
    "small business accounting",
    "estate tax planning",
    "Flagel Huber Flagel",
    "FHF CPA",
  ],
  authors: [{ name: company.name, url: "https://fhf-cpa.com" }],
  creator: company.name,
  publisher: company.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fhf-cpa.com",
    siteName: company.name,
    title: `${company.name} | Building Lifelong Prosperity`,
    description:
      "Independent CPA and advisory firm serving families and businesses across Ohio since 1933. Tax, audit, valuations, ESOP, and business advisory.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.name} | CPA Firm | Ohio`,
    description:
      "Independent CPA and advisory firm serving families and businesses across Ohio since 1933.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: { canonical: "https://fhf-cpa.com" },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  name: company.name,
  alternateName: company.shortName,
  description: company.description,
  url: "https://fhf-cpa.com",
  email: company.email,
  foundingDate: String(company.founded),
  slogan: company.tagline,
  sameAs: [company.social.facebook, company.social.linkedin],
  location: offices.map((o) => ({
    "@type": "Place",
    name: `${company.name} - ${o.city}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: o.address,
      addressLocality: o.cityStateZip.split(",")[0],
      addressRegion: "OH",
      postalCode: o.cityStateZip.split(" ").pop(),
      addressCountry: "US",
    },
    telephone: o.phone,
  })),
  areaServed: {
    "@type": "State",
    name: "Ohio",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Accounting & Advisory Services",
    itemListElement: [
      "Tax Services",
      "Assurance Services",
      "Small Business Accounting",
      "Business Valuations",
      "Litigation Support",
      "ESOP Advisory",
      "Business Advisory",
      "Trust & Estate Tax Planning",
    ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} h-full`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
