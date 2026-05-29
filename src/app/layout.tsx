import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Caveat, JetBrains_Mono } from "next/font/google";
import "./globals.css";

/**
 * Brand typography (from the original Webflow site):
 *  --font-display  Bagnard Sans (local OTF) — h1/h2/h3/h4 serif
 *  --font-body     Jost (local OTF, 400/500 + italics) — body & UI
 *  --font-sign     Caveat — handwritten accents
 *  --font-mono     JetBrains Mono — eyebrows + lang-chip
 */
const display = localFont({
  src: [
    {
      path: "../../public/fonts/BagnardSans.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-display",
  display: "swap",
  fallback: ["Georgia", "Cambria", "Times New Roman", "serif"],
});

const body = localFont({
  src: [
    {
      path: "../../public/fonts/Jost-400-Book.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Jost-400-BookItalic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/Jost-500-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Jost-500-MediumItalic.otf",
      weight: "500",
      style: "italic",
    },
  ],
  variable: "--font-body",
  display: "swap",
  fallback: ["Helvetica Neue", "Helvetica", "system-ui", "sans-serif"],
});

const sign = Caveat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sign",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mesonalegria.com"),
  title: {
    default: "Mesón Alegría — Asador granadino desde 1979",
    template: "%s · Mesón Alegría",
  },
  description:
    "El asador por excelencia del buen comer andaluz. Carne a la brasa con carbón de encina, tradición granadina desde 1979, en el centro de Granada.",
  icons: {
    icon: "/svg/granada.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#fbf4e4",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es"
      className={`${display.variable} ${body.variable} ${sign.variable} ${mono.variable}`}
    >
      <body className="min-h-dvh antialiased bg-cream text-ink-900">
        {children}
      </body>
    </html>
  );
}
