import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "HDXCLOUD | Affordable Minecraft Hosting & VPS Solutions",
    template: "%s | HDXCLOUD",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "HDXCLOUD",
    "HDXCLOUD Minecraft hosting",
    "cheap Minecraft hosting",
    "affordable Minecraft server hosting",
    "Minecraft hosting price per GB",
    "budget Minecraft hosting",
    "performance Minecraft hosting",
    "HDXCLOUD VPS hosting",
    "VPS / VM hosting",
    "affordable game server hosting",
  ],
  authors: [{ name: "HDXCLOUD", url: siteConfig.url }],
  creator: "HDXCLOUD",
  publisher: "HDXCLOUD",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "HDXCLOUD | Affordable Minecraft Hosting & VPS Solutions",
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.assets.ogImage,
        width: 1200,
        height: 630,
        alt: "HDXCLOUD hosting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HDXCLOUD | Affordable Minecraft Hosting & VPS Solutions",
    description: siteConfig.description,
    images: [siteConfig.assets.ogImage],
  },
  icons: {
    icon: [{ url: "/favicon.ico" }],
    apple: [{ url: "/logo/hdxcloud-logo.png" }],
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
};

export const viewport: Viewport = {
  themeColor: "#05070d",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="min-h-screen bg-ink-950 font-sans text-[--fg] antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-accent-cyan focus:px-4 focus:py-2 focus:text-ink-950"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}