import type { Metadata } from "next";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, Layout, Workflow, User, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Averroes Labs — Smart, Scalable, AI-Powered Digital Solutions",
  description:
    "Averroes Labs is an AI & software studio building Mobile Apps, Custom Websites, RAG Voice & Automation, RAG Pipelines, and Workflow Automation.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-navy-dark text-paper-white relative">
      <Header />
      <HeroSection />

      {/* Overview Navigation Grid Section */}
      <section className="py-20 bg-navy-dark border-b border-navy-border/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-2 font-mono text-xs text-gold-base tracking-widest uppercase font-semibold">
              <span className="px-2.5 py-0.5 bg-navy-card border border-gold-base/30">EXPLORE OUR STUDIO</span>
              <span className="text-paper-subtle">-----------------------------</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-paper-white tracking-tight">
              Explore Our Capabilities
            </h2>
            <p className="font-sans text-paper-muted text-base max-w-2xl mt-2">
              Learn more about our 5 core services, simple 4-step workflow, and lead developer credentials.
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
                  Our 5 Core Services
                </h3>
                <p className="font-sans text-paper-muted text-xs leading-relaxed">
                  Mobile Apps, Websites & MVPs, RAG Voice, Custom RAG Pipelines, and Workflow Automation.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-navy-border/60 flex items-center gap-1.5 font-mono text-xs text-gold-base font-semibold group-hover:translate-x-1 transition-transform">
                <span>VIEW 5 SERVICES</span>
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
                  Simple, transparent 4-step workflow: Discovery, Building, Launch, and 30 days free support.
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
                  Lead developer Mansoor Ahmed (FAST-NUCES CS). AI certifications and work approach.
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

      {/* Services Section */}
      <ServicesSection />

      {/* Contact Section */}
      <ContactSection />

      <Footer />
    </main>
  );
}
