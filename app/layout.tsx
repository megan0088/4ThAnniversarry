import type { Metadata, Viewport } from "next";
import { Playfair_Display, Nunito, Dancing_Script } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  display: "swap",
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "Happy 4th Anniversary — Ega ❤️ Kiki",
  description:
    "4 years of love, memories, and forever together. A romantic anniversary celebration.",
  openGraph: {
    title: "Happy 4th Anniversary — Ega ❤️ Kiki",
    description: "4 years of love, memories, and forever together.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${nunito.variable} ${dancingScript.variable}`}
    >
      <body className="min-h-screen overflow-x-hidden bg-[#0a0e1a]">
        {children}
      </body>
    </html>
  );
}
