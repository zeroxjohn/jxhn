import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const SITE_URL = "https://jxhn.xyz";
const NAME = "thai / john";
const DESCRIPTION =
  "industry standard for cross-chain asset movement. issuers use layerzero to deploy, expand, and connect assets to the world's most utilized blockchains.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: NAME,
    template: `%s · ${NAME}`,
  },
  description: DESCRIPTION,
  applicationName: "jxhn",
  generator: "Next.js",
  keywords: [
    "jxhn",
    "john thai",
    "0xjooohn",
    "jooohneth",
    "devrel",
    "developer relations",
    "layerzero",
    "mantle",
    "sozu haus",
    "crypto",
    "defi",
    "web3",
    "ethereum",
    "stablecoins",
    "prediction markets",
    "personal website",
  ],
  authors: [{ name: "john thai", url: SITE_URL }],
  creator: "john thai",
  publisher: "john thai",
  category: "technology",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
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
  openGraph: {
    title: NAME,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "jxhn",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: NAME,
      },
    ],
    locale: "en_US",
    type: "profile",
    firstName: "john",
    lastName: "thai",
    username: "0xjooohn",
  },
  twitter: {
    card: "summary_large_image",
    title: NAME,
    description: DESCRIPTION,
    images: [
      {
        url: "/og-image.jpg",
        alt: NAME,
      },
    ],
    creator: "@0xjooohn",
    site: "@0xjooohn",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon.ico"],
  },
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    title: NAME,
    statusBarStyle: "black-translucent",
  },
  other: {
    "telegram:channel": "@jooohnng",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f7f4" },
    { media: "(prefers-color-scheme: dark)", color: "#14120b" },
  ],
  colorScheme: "dark light",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: NAME,
  alternateName: ["john", "thai", "0xjooohn"],
  url: SITE_URL,
  image: `${SITE_URL}/og-image.jpg`,
  jobTitle: "Software Engineer (Protocol & FDE)",
  worksFor: {
    "@type": "Organization",
    name: "LayerZero",
    url: "https://layerzero.network",
  },
  sameAs: [
    "https://x.com/0xjooohn",
    "https://github.com/jooohneth",
    "https://www.linkedin.com/in/jooohneth/",
  ],
};

// Script that runs before React hydrates to prevent flash
const themeScript = `
  (function() {
    const theme = localStorage.getItem('theme');
    if (theme === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="antialiased font-sans">
        <Script
          id="person-jsonld"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
