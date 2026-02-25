import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://trav-in-hotel.example.com"),
  title: {
    default: "Trav-In Hotel | Luxury Stay Experience",
    template: "%s | Trav-In Hotel",
  },
  description:
    "Trav-In Hotel offers a warm, luxury-modern stay with curated rooms, premium amenities, and seamless booking for business and leisure travelers.",
  openGraph: {
    title: "Trav-In Hotel",
    description:
      "Stay in style at Trav-In Hotel with refined rooms, elevated amenities, and effortless booking.",
    url: "https://trav-in-hotel.example.com",
    siteName: "Trav-In Hotel",
    images: [
      {
        url: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1600&q=80",
        width: 1600,
        height: 900,
        alt: "Trav-In Hotel exterior",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trav-In Hotel",
    description:
      "Luxury-modern accommodations with premium amenities and smooth digital booking.",
    images: [
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1600&q=80",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
