import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arka Solar Energy | Rooftop Solar Solutions in Aligarh",
  description:
    "Arka Solar Energy provides residential, commercial and industrial solar solutions with government subsidy assistance, EMI options and professional installation across Aligarh and nearby areas.",

  keywords: [
    "Solar Company Aligarh",
    "Rooftop Solar",
    "Solar Panel Installation",
    "PM Surya Ghar Yojana",
    "Residential Solar",
    "Commercial Solar",
    "Industrial Solar",
    "Solar Subsidy",
    "Arka Solar Energy",
  ],

  authors: [{ name: "Arka Solar Energy" }],

  creator: "Arka Solar Energy",

  openGraph: {
    title: "Arka Solar Energy",
    description:
      "Premium rooftop solar installation with subsidy assistance and professional support.",
    type: "website",
    locale: "en_IN",
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
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}