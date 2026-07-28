import type { Metadata } from "next";
import Header from "@/components/Header";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, Terminal } from "lucide-react";

export const metadata: Metadata = {
  title: "Averroes Labs",
  description:
    "Production-grade Web Development, Mobile Apps, AI & RAG Retrieval Systems, and Workflow Automation engineered by Averroes Labs.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-navy-dark text-paper-white relative pt-20">
      <Header />

      {/* Page Header Banner */}
      <div className="bg-navy-card/40 border-b border-navy-border/80 py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 font-mono text-xs text-paper-muted mb-3">
            <Link href="/" className="hover:text-gold-base transition-colors">HOME</Link>
            <span>/</span>
            <span className="text-gold-base">SERVICES</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-6xl font-bold text-paper-white tracking-tight">
            Our Services
          </h1>
          <p className="font-sans text-paper-muted text-lg max-w-2xl mt-3">
            High-quality software solutions: modern websites, mobile apps, smart AI search tools, and business automation.
          </p>
        </div>
      </div>

      <ServicesSection />

      {/* Page Bottom CTA */}
      <section className="py-16 bg-navy-darkest border-t border-navy-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="font-heading text-3xl font-bold text-paper-white">
            Have a project in mind?
          </h2>
          <p className="font-sans text-paper-muted text-base max-w-xl mx-auto">
            Tell us what you want to build and get a clear response and project plan directly from founder Mansoor Ahmed.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 font-mono text-xs font-bold uppercase text-navy-dark bg-gold-base hover:bg-gold-bright transition-all blueprint-corner shadow-lg shadow-gold-base/15"
            >
              <span>GET IN TOUCH WITH US</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
