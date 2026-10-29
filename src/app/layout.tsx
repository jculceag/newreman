import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import { getSiteUrl } from "@/lib/env";
import {
  ADDRESS,
  EMAIL,
  PHONE_TEL,
  SITE_NAME,
  SITE_TAGLINE,
} from "@/lib/site";
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
const title = `${SITE_NAME} | ${SITE_TAGLINE}`;
const description =
  "Recuperadora de peças elétricas automotivas para oficinas em São Paulo. Motor de partida, alternador, ventoinha e mais, com garantia de 3 meses.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: SITE_NAME,
  keywords: [
    "NEW REMAN",
    "remanufatura",
    "motor de partida",
    "alternador",
    "peças elétricas automotivas",
    "oficina",
    "São Paulo",
  ],
  icons: {
    icon: [
      { url: "/brand/favicon.png", type: "image/png" },
      { url: "/brand/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/brand/favicon.png",
    apple: "/brand/new-reman-logo.png",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: SITE_NAME,
    title,
    description,
    images: [
      {
        url: "/brand/new-reman-logo.png",
        width: 512,
        height: 512,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/brand/new-reman-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: SITE_NAME,
    description,
    url: siteUrl,
    telephone: PHONE_TEL,
    email: EMAIL,
    image: `${siteUrl}/brand/new-reman-logo.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: ADDRESS.street,
      addressLocality: ADDRESS.city,
      addressRegion: ADDRESS.state,
      postalCode: ADDRESS.cep,
      addressCountry: "BR",
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
