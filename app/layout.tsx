import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Nostalgia Lovers Festival Casablanca | Retro Music & Culture Event Morocco",
  description: "Join Nostalgia Lovers Festival in Casablanca - Morocco's premier celebration of classic music, vintage culture, and timeless memories. Experience the golden era with live performances, retro vibes, and nostalgic entertainment in the heart of Casablanca.",
  keywords: [
    "Nostalgia Lovers Festival",
    "Casablanca festival",
    "Morocco music festival",
    "retro music event",
    "vintage festival Morocco",
    "classic music Casablanca",
    "nostalgia event",
    "cultural festival Casablanca",
    "live music Morocco",
    "throwback festival",
    "golden era music",
    "Casablanca events",
    "Morocco entertainment",
    "retro culture festival",
    "nostalgia lovers",
  ],
  authors: [{ name: "Nostalgia Lovers Festival" }],
  creator: "Nostalgia Lovers Festival",
  publisher: "Nostalgia Lovers Festival",
  metadataBase: new URL("https://nostalgialovers.ma"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nostalgialovers.ma",
    title: "Nostalgia Lovers Festival Casablanca | Retro Music & Culture Event Morocco",
    description: "Join Nostalgia Lovers Festival in Casablanca - Morocco's premier celebration of classic music, vintage culture, and timeless memories. Experience the golden era with live performances.",
    siteName: "Nostalgia Lovers Festival"
  },
  twitter: {
    card: "summary_large_image",
    title: "Nostalgia Lovers Festival Casablanca | Retro Music & Culture Event",
    description: "Morocco's premier celebration of classic music, vintage culture, and timeless memories in Casablanca.",
    images: ["/twitter-image.jpg"], // Add your festival image
    creator: "@nostalgialovers", // Replace with actual Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Additional SEO optimizations */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} antialiased`}
      >
        {children}
      </body>
      <GoogleAnalytics gaId="G-WXWZ3M7XL4" />
    </html>
  );
}