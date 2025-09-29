// app/layout.jsx
import { Analytics } from "@vercel/analytics/next";
import { Inter, Noto_Serif, Public_Sans, Arimo } from "next/font/google";
import "./globals.css";
import { ReactLenis } from "lenis/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import SmoothScrollProvider from "./components/LenisProvider";

const arimo = Arimo({
  variable: "--font-arimo",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  style: ["normal", "italic"],
  subsets: ["latin"],
  // display: "swap",
});

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Spain Academy — The Study-in-Spain Starter Kit for Southeast Asians",
  description:
    "Visas, university admissions, language school, and real-life support for Southeast Asian students in Spain. From application to graduation, we’re with you all the way. Book a free consultation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${notoSerif.variable} ${publicSans.variable} ${arimo.variable} antialiased`}
      >
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
