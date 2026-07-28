import type { Metadata } from "next";
import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Averroes Labs",
  description:
    "Submit your software or AI project brief directly to lead engineer Mansoor Ahmed or reach out via email.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-navy-dark text-paper-white relative pt-20">
      <Header />

      {/* Page Header Banner */}
      <div className="bg-navy-card/40 border-b border-navy-border/80 py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 font-mono text-xs text-paper-muted mb-3">
            <Link href="/" className="hover:text-gold-base transition-colors">HOME</Link>
            <span>/</span>
            <span className="text-gold-base">CONTACT</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-6xl font-bold text-paper-white tracking-tight">
            Contact Us
          </h1>
          <p className="font-sans text-paper-muted text-lg max-w-2xl mt-3">
            Send us your project details or reach out to founder Mansoor Ahmed directly.
          </p>
        </div>
      </div>

      <ContactSection />

      <Footer />
    </main>
  );
}
