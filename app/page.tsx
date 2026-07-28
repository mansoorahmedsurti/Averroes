import type { Metadata } from "next";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, Layout, Terminal, Workflow, User, Mail, ShieldCheck, Cpu } from "lucide-react";

export const metadata: Metadata = {
  title: "Averroes Labs",
  description:
    "Averroes Labs is a software and AI studio founded by Mansoor Ahmed (FAST-NUCES CS). Building Next.js web applications, AI & RAG search engines, and workflow automation.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-navy-dark text-paper-white relative">
      <Header />
      <HeroSection />

      {/* Overview Navigation Grid Section */}
      <section className="py-20 bg-navy-dark border-b border-navy-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-2 font-mono text-xs text-gold-base tracking-widest uppercase">
              <span className="px-2 py-0.5 bg-navy-card border border-gold-base/30">EXPLORE OUR STUDIO</span>
              <span className="text-paper-subtle">-----------------------------</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-paper-white tracking-tight">
              Explore What We Do
            </h2>
            <p className="font-sans text-paper-muted text-base max-w-2xl mt-2">
              Learn more about our core services, real project demos, simple 4-step process, and founder background.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Services */}
            <Link
              href="/services"
              className="blueprint-card p-6 blueprint-corner group flex flex-col justify-between hover:border-gold-base transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 bg-navy-dark border border-gold-base/40 text-gold-base">
                    <Layout className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="font-heading text-xl font-bold text-paper-white group-hover:text-gold-bright transition-colors mb-2">
                  Our Services
                </h3>
                <p className="font-sans text-paper-muted text-xs leading-relaxed">
                  Websites, mobile apps, custom AI search tools, and business automation.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-navy-border/60 flex items-center gap-1.5 font-mono text-xs text-gold-base font-semibold group-hover:translate-x-1 transition-transform">
                <span>VIEW SERVICES</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>

            {/* Card 2: Process */}
            <Link
              href="/process"
              className="blueprint-card p-6 blueprint-corner group flex flex-col justify-between hover:border-gold-base transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 bg-navy-dark border border-gold-base/40 text-gold-base">
                    <Workflow className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="font-heading text-xl font-bold text-paper-white group-hover:text-gold-bright transition-colors mb-2">
                  How We Work
                </h3>
                <p className="font-sans text-paper-muted text-xs leading-relaxed">
                  Simple, transparent workflow: Planning, Building, Hand-off, and 30 days free support.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-navy-border/60 flex items-center gap-1.5 font-mono text-xs text-gold-base font-semibold group-hover:translate-x-1 transition-transform">
                <span>HOW WE WORK</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>

            {/* Card 3: About Founder */}
            <Link
              href="/about"
              className="blueprint-card p-6 blueprint-corner group flex flex-col justify-between hover:border-gold-base transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 bg-navy-dark border border-gold-base/40 text-gold-base">
                    <User className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="font-heading text-xl font-bold text-paper-white group-hover:text-gold-bright transition-colors mb-2">
                  About Us
                </h3>
                <p className="font-sans text-paper-muted text-xs leading-relaxed">
                  Founded by Mansoor Ahmed. Background, AI certifications, and work approach.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-navy-border/60 flex items-center gap-1.5 font-mono text-xs text-gold-base font-semibold group-hover:translate-x-1 transition-transform">
                <span>LEARN ABOUT US</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Founder Highlight Banner */}
      <section className="py-20 bg-navy-darkest border-b border-navy-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center blueprint-card p-8 sm:p-12 blueprint-corner">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-navy-dark border border-gold-base/30 text-gold-base font-mono text-xs">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>FOUNDED & OPERATED BY MANSOOR AHMED</span>
              </div>
              <h3 className="font-heading text-2xl sm:text-4xl font-bold text-paper-white">
                Work Directly With the Builder. No Middlemen.
              </h3>
              <p className="font-sans text-paper-muted text-sm sm:text-base leading-relaxed">
                When you partner with Averroes Labs, you work directly with founder and lead developer Mansoor Ahmed. Honest advice, clear plans, and software delivered on time.
              </p>
            </div>
            <div className="lg:col-span-4 text-left lg:text-right">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-7 py-4 font-mono text-xs font-bold uppercase text-navy-dark bg-gold-base hover:bg-gold-bright border border-gold-bright transition-all blueprint-corner shadow-lg shadow-gold-base/15"
              >
                <span>TALK TO MANSOOR</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
