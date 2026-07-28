import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const ibmSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-sans",
  display: "swap",
});

const ibmMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Averroes Labs — Production Software & AI Systems",
  description:
    "Averroes Labs builds high-performance web applications, cross-platform software, AI & RAG engines, and workflow automation for growing businesses and startups.",
  keywords: [
    "Averroes Labs",
    "Software Studio",
    "AI Systems",
    "RAG Architecture",
    "Next.js Development",
    "Web Applications",
    "FAST-NUCES CS",
    "Custom Software Engineering",
  ],
  authors: [{ name: "Averroes Labs" }],
  openGraph: {
    title: "Averroes Labs — Production Software & AI Systems",
    description:
      "We design, build, and ship high-rigor web apps, AI search systems, and automated workflows.",
    url: "https://averroeslabs.com",
    siteName: "Averroes Labs",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Averroes Labs — Production Software & AI Systems",
    description:
      "High-rigor software and AI engineering studio delivering production-grade web, app, and AI work.",
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
    <html lang="en" className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${ibmSans.variable} ${ibmMono.variable} bg-navy-dark text-paper-white antialiased min-h-screen relative selection:bg-gold-base/30 selection:text-paper-white`}
      >
        {/* Subtle grid background texture */}
        <div 
          className="fixed inset-0 blueprint-grid-bg opacity-40 pointer-events-none z-0" 
          aria-hidden="true" 
        />
        
        {/* Subtle top ambient glow */}
        <div 
          className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-navy-surface/30 via-gold-base/5 to-transparent pointer-events-none z-0 blur-3xl" 
          aria-hidden="true" 
        />

        <div className="relative z-10 flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
