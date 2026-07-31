import type { Metadata } from "next";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, Layout, Workflow, User, Sparkles, CheckCircle2, Cpu, Shield, Terminal } from "lucide-react";

export const metadata: Metadata = {
  title: "Averroes Labs — Smart, Scalable, AI-Powered Digital Solutions",
  description:
    "Averroes Labs is an AI & software studio building Mobile Apps, Custom Websites, RAG Voice & Automation, RAG Pipelines, and Workflow Automation.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 relative">
      <Header />
      <HeroSection />

      {/* Overview Navigation Cards Section */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 text-slate-700 font-mono text-xs font-bold uppercase mb-3">
              <span className="w-2 h-2 rounded-full bg-gold-base"></span>
              <span>EXPLORE AVERROES LABS</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Simple, Powerful Solutions.
            </h2>
            <p className="font-sans text-slate-600 text-base mt-2">
              Select a section below to explore our 5 core services, 4-step workflow, or founder credentials.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: 5 Core Services */}
            <Link
              href="/services"
              className="bg-white p-8 border border-slate-200 hover:border-gold-base transition-all blueprint-corner group flex flex-col justify-between shadow-sm hover:shadow-md"
            >
              <div>
                <div className="w-12 h-12 flex items-center justify-center bg-slate-900 text-gold-base mb-6 blueprint-corner">
                  <Layout className="w-6 h-6" />
                </div>
                <span className="font-mono text-xs text-slate-500 font-bold uppercase block mb-1">
                  OUR OFFERINGS
                </span>
                <h3 className="font-heading text-2xl font-extrabold text-slate-900 group-hover:text-gold-base transition-colors mb-3">
                  5 Core Services
                </h3>
                <p className="font-sans text-slate-600 text-sm leading-relaxed">
                  Mobile Apps, Custom Websites & MVPs, RAG Voice, Custom RAG Pipelines, and Workflow Automation.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center gap-2 font-mono text-xs text-slate-900 font-bold group-hover:translate-x-1 transition-transform">
                <span>EXPLORE SERVICES</span>
                <ArrowRight className="w-4 h-4 text-gold-base" />
              </div>
            </Link>

            {/* Card 2: Process */}
            <Link
              href="/process"
              className="bg-white p-8 border border-slate-200 hover:border-gold-base transition-all blueprint-corner group flex flex-col justify-between shadow-sm hover:shadow-md"
            >
              <div>
                <div className="w-12 h-12 flex items-center justify-center bg-slate-900 text-gold-base mb-6 blueprint-corner">
                  <Workflow className="w-6 h-6" />
                </div>
                <span className="font-mono text-xs text-slate-500 font-bold uppercase block mb-1">
                  HOW WE WORK
                </span>
                <h3 className="font-heading text-2xl font-extrabold text-slate-900 group-hover:text-gold-base transition-colors mb-3">
                  Simple 4-Step Process
                </h3>
                <p className="font-sans text-slate-600 text-sm leading-relaxed">
                  Discovery, Building with live previews, smooth launch, and 30-day free support included.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center gap-2 font-mono text-xs text-slate-900 font-bold group-hover:translate-x-1 transition-transform">
                <span>VIEW WORKFLOW</span>
                <ArrowRight className="w-4 h-4 text-gold-base" />
              </div>
            </Link>

            {/* Card 3: About Founder */}
            <Link
              href="/about"
              className="bg-white p-8 border border-slate-200 hover:border-gold-base transition-all blueprint-corner group flex flex-col justify-between shadow-sm hover:shadow-md"
            >
              <div>
                <div className="w-12 h-12 flex items-center justify-center bg-slate-900 text-gold-base mb-6 blueprint-corner">
                  <User className="w-6 h-6" />
                </div>
                <span className="font-mono text-xs text-slate-500 font-bold uppercase block mb-1">
                  ABOUT US
                </span>
                <h3 className="font-heading text-2xl font-extrabold text-slate-900 group-hover:text-gold-base transition-colors mb-3">
                  Direct Developer Access
                </h3>
                <p className="font-sans text-slate-600 text-sm leading-relaxed">
                  Work directly with founder Mansoor Ahmed (FAST-NUCES CS). Honest advice, clear timelines, zero middlemen.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center gap-2 font-mono text-xs text-slate-900 font-bold group-hover:translate-x-1 transition-transform">
                <span>MEET THE BUILDER</span>
                <ArrowRight className="w-4 h-4 text-gold-base" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Ad Solution Banner Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 text-white p-8 sm:p-12 blueprint-corner border border-slate-900 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gold-base font-mono text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>AVERROES LABS</span>
              </div>
              <h3 className="font-heading text-3xl sm:text-5xl font-black tracking-tight text-white">
                WE TURN IDEAS <br className="hidden sm:inline" />
                <span className="text-gold-base">INTO SOLUTIONS.</span>
              </h3>
              <p className="font-sans text-slate-300 text-sm sm:text-base max-w-xl">
                Ready to build your web app, mobile solution, or custom AI pipeline? Get in touch today.
              </p>
            </div>

            <div className="shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 font-mono text-xs sm:text-sm font-extrabold uppercase text-slate-900 bg-gold-base hover:bg-gold-bright transition-all blueprint-corner shadow-lg"
              >
                <span>GET IN TOUCH</span>
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
