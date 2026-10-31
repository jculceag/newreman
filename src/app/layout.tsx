import type { Metadata, Viewport } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import { getSiteUrl } from "@/lib/env";
import {
  ADDRESS,
  EMAIL,
  PHONE_TEL,
  PRODUCTS,
  WHATSAPP_URL,
} from "@/lib/site";
import {
  SEO_DESCRIPTION,
  SEO_GEO,
  SEO_KEYWORDS,
  SEO_TITLE,
  SITE_NAME,
} from "@/lib/seo";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const siteUrl = getSiteUrl();

export const viewport: Viewport = {
  themeColor: "#0c1118",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: SEO_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SEO_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [...SEO_KEYWORDS],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "automotive",
  icons: {
    icon: [
      { url: "/brand/favicon.png", type: "image/png" },
      { url: "/brand/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/brand/favicon.png",
    apple: "/brand/apple-touch-icon.png",
  },
  manifest: "/manifest.webmanifest",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: SITE_NAME,
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  other: {
    "geo.region": "BR-SP",
    "geo.placename": "São Paulo",
    "geo.position": `${SEO_GEO.latitude};${SEO_GEO.longitude}`,
    ICBM: `${SEO_GEO.latitude}, ${SEO_GEO.longitude}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["AutoRepair", "LocalBusiness"],
        "@id": `${siteUrl}/#business`,
        name: SITE_NAME,
        alternateName: "New Reman Recuperadora de Peças Elétricas Automotivas",
        description: SEO_DESCRIPTION,
        url: siteUrl,
        telephone: PHONE_TEL,
        email: EMAIL,
        image: `${siteUrl}/brand/new-reman-logo.png`,
        logo: `${siteUrl}/brand/new-reman-logo.png`,
        priceRange: "$$",
        currenciesAccepted: "BRL",
        paymentAccepted: "Cash, Credit Card, Debit Card, PIX",
        address: {
          "@type": "PostalAddress",
          streetAddress: ADDRESS.street,
          addressLocality: ADDRESS.city,
          addressRegion: ADDRESS.state,
          postalCode: ADDRESS.cep,
          addressCountry: "BR",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: SEO_GEO.latitude,
          longitude: SEO_GEO.longitude,
        },
        areaServed: {
          "@type": "City",
          name: "São Paulo",
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
          ],
          opens: "08:00",
          closes: "18:00",
        },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "sales",
          telephone: PHONE_TEL,
          availableLanguage: ["Portuguese"],
          url: WHATSAPP_URL,
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Peças elétricas recuperadas",
          itemListElement: PRODUCTS.map((product) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: `Recuperação de ${product.name}`,
              description: product.blurb,
            },
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: SITE_NAME,
        description: SEO_DESCRIPTION,
        publisher: { "@id": `${siteUrl}/#business` },
        inLanguage: "pt-BR",
      },
      {
        "@type": "WebPage",
        "@id": `${siteUrl}/#webpage`,
        url: siteUrl,
        name: SEO_TITLE,
        description: SEO_DESCRIPTION,
        isPartOf: { "@id": `${siteUrl}/#website` },
        about: { "@id": `${siteUrl}/#business` },
        inLanguage: "pt-BR",
      },
    ],
  };

  return (
    <html lang="pt-BR" className={`${display.variable} ${body.variable}`}>
      <body className="min-h-screen bg-steel font-sans text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
