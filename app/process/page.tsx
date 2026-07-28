import type { Metadata } from "next";
import Header from "@/components/Header";
import ProcessSection from "@/components/ProcessSection";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "4-Step Engagement Workflow — Averroes Labs",
  description:
    "Predictable 4-stage engineering engagement process eliminating project uncertainty, scope creep, and delivery delays.",
};

export default function ProcessPage() {
  return (
    <main className="min-h-screen bg-navy-dark text-paper-white relative pt-20">
      <Header />

      {/* Page Header Banner */}
      <div className="bg-navy-card/40 border-b border-navy-border/80 py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 font-mono text-xs text-paper-muted mb-3">
            <Link href="/" className="hover:text-gold-base transition-colors">HOME</Link>
            <span>/</span>
            <span className="text-gold-base">HOW WE WORK</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-6xl font-bold text-paper-white tracking-tight">
            How We Work
          </h1>
          <p className="font-sans text-paper-muted text-lg max-w-2xl mt-3">
            How we partner with you: from initial planning to live launch and 30 days of free support.
          </p>
        </div>
      </div>

      <ProcessSection />

      {/* Page Bottom CTA */}
      <section className="py-16 bg-navy-darkest border-t border-navy-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="font-heading text-3xl font-bold text-paper-white">
            Ready to Start Step 1?
          </h2>
          <p className="font-sans text-paper-muted text-base max-w-xl mx-auto">
            Send us your project details and receive a clear project plan and fixed price quote within 12 hours.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 font-mono text-xs font-bold uppercase text-navy-dark bg-gold-base hover:bg-gold-bright transition-all blueprint-corner shadow-lg shadow-gold-base/15"
            >
              <span>START YOUR PROJECT PLAN</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
