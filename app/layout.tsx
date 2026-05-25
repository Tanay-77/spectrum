import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Spectrum Labs — AI-Powered Color Intelligence",
  description:
    "Discover how color influences perception, emotion, and creativity. Spectrum Labs bridges art and neuroscience with AI-powered color analysis tools for designers, brands, and creators.",
  keywords: [
    "color intelligence",
    "AI color analysis",
    "color psychology",
    "design tools",
    "palette analyzer",
    "brand colors",
  ],
  openGraph: {
    title: "Spectrum Labs — AI-Powered Color Intelligence",
    description:
      "Bridge art and neuroscience with AI-powered color analysis tools for designers, brands, and creators.",
    type: "website",
    siteName: "tanay labe",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spectrum Labs — AI-Powered Color Intelligence",
    description:
      "Bridge art and neuroscience with AI-powered color analysis tools.",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
