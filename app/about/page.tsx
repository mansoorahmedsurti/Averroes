import type { Metadata } from "next";
import Header from "@/components/Header";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Founder & Studio Philosophy — Averroes Labs",
  description:
    "Learn about Averroes Labs founder Mansoor Ahmed (FAST-NUCES CS), AI certifications, background, and senior engineering studio philosophy.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-navy-dark text-paper-white relative pt-20">
      <Header />

      {/* Page Header Banner */}
      <div className="bg-navy-card/40 border-b border-navy-border/80 py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 font-mono text-xs text-paper-muted mb-3">
            <Link href="/" className="hover:text-gold-base transition-colors">HOME</Link>
            <span>/</span>
            <span className="text-gold-base">ABOUT US</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-6xl font-bold text-paper-white tracking-tight">
            About the Founder & Studio
          </h1>
          <p className="font-sans text-paper-muted text-lg max-w-2xl mt-3">
            Background, AI certifications, and the direct-working approach behind Averroes Labs.
          </p>
        </div>
      </div>

      <AboutSection />

      {/* Page Bottom CTA */}
      <section className="py-16 bg-navy-darkest border-t border-navy-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="font-heading text-3xl font-bold text-paper-white">
            Want to work with Mansoor Ahmed?
          </h2>
          <p className="font-sans text-paper-muted text-base max-w-xl mx-auto">
            Direct communication, clear plans, and high-quality software built for your business.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 font-mono text-xs font-bold uppercase text-navy-dark bg-gold-base hover:bg-gold-bright transition-all blueprint-corner shadow-lg shadow-gold-base/15"
            >
              <span>CONTACT MANSOOR</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
