import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://uzair.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Uzair Rehman — Web Developer & Automation Builder",
    template: "%s | Uzair Rehman"
  },
  description: "Portfolio of Uzair Rehman, a Pakistan-based web developer building premium websites, WordPress and Shopify experiences, Next.js projects, landing pages, and AI automation systems.",
  keywords: [
    "Uzair Rehman", "web developer Pakistan", "WordPress developer", "Shopify developer", "Next.js developer", "landing page developer", "AI automation builder", "freelance web developer", "Solana developer"
  ],
  authors: [{ name: "Uzair Rehman", url: siteUrl }],
  creator: "Uzair Rehman",
  openGraph: {
    title: "Uzair Rehman — Web Developer & Automation Builder",
    description: "Premium websites, automations, landing pages, WordPress, Shopify, Next.js, and future Solana builds.",
    url: siteUrl,
    siteName: "Uzair Rehman Portfolio",
    images: [{ url: "/og.svg", width: 1200, height: 630, alt: "Uzair Rehman Portfolio" }],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Uzair Rehman — Web Developer & Automation Builder",
    description: "Premium websites, automations, landing pages, and digital product builds.",
    images: ["/og.svg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 }
  },
  alternates: { canonical: siteUrl }
};

export const viewport: Viewport = {
  themeColor: "#050507",
  colorScheme: "dark"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} noise font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
