import { Analytics } from "@vercel/analytics/next";
import { Inter, Noto_Serif, Public_Sans, Arimo } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import SmoothScrollProvider from "./temp/LenisProvider";
import { ReactLenisProvider } from "./temp/ReactLenis";
import LenisProvider from "./temp/LenisProvider";

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
  title: "Spain Academy - The Study-in-Spain Starter Kit for Southeast Asians",
  description:
    "Visas, university admissions, language school, and real-life support for Southeast Asian students in Spain. From application to graduation, we're with you all the way. Book a free consultation.",
  openGraph: {
    title: "Spain Academy - Your StudyinSpain Starter Kit",
    description:
      "From visas and admissions to life admin, culture, and careers - everything you wish someone had told you, in one place.",
    images: [
      {
        url: "/favicon.ico",
        alt: 'Two students smiling on a tram in Seville; headline overlay: "From here to Spain."',
      },
    ],
  },
  keywords: [
    "study in Spain",
    "Southeast Asian students Spain",
    "Spanish student visa help",
    "Spain university admission",
    "Spanish language course A1-B2",
    "Erasmus SICUE Andalusia tuition",
    "life in Spain for students",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${notoSerif.variable} ${publicSans.variable} ${arimo.variable} antialiased`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
