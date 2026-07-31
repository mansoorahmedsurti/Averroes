"use client";

import React from "react";
import SchematicCanvas from "./SchematicCanvas";
import { ArrowRight, Terminal, Sparkles, Layers, Lock, Zap } from "lucide-react";

export default function HeroSection() {
  const adTechs = ["RAG", "NEXT.js", "n8n", "ElevenLabs", "Flutter"];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden border-b border-slate-200 bg-white">
      {/* Dynamic Animated Vector Blueprint Canvas */}
      <SchematicCanvas />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          {/* Ad Headline Banner Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-slate-900 text-white text-xs font-mono mb-6 blueprint-corner shadow-md">
            <span className="w-2 h-2 rounded-full bg-gold-base animate-ping"></span>
            <span className="font-bold uppercase tracking-widest text-gold-bright">AVERROES LABS</span>
            <span className="text-slate-400">|</span>
            <span className="text-slate-200 font-medium">BUILDING INTELLIGENCE. SHAPING TOMORROW.</span>
          </div>

          {/* Main Headline matching top of Ad */}
          <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-[1.05] mb-6">
            BUILD THE FUTURE <br className="hidden sm:inline" />
            <span className="text-slate-900 border-b-4 border-gold-base pb-1">
              WITH US.
            </span>
          </h1>

          {/* Subheading directly matching the Ad */}
          <p className="font-sans text-lg sm:text-2xl text-slate-700 leading-relaxed mb-8 max-w-3xl font-semibold">
            Smart, Scalable, AI-Powered Digital Solutions. Drive Real Results.
          </p>

          {/* Ad Featured Technologies Pill Bar */}
          <div className="flex flex-wrap items-center gap-3 mb-10 p-3.5 bg-slate-50 border border-slate-200 blueprint-corner">
            <span className="font-mono text-xs text-slate-500 uppercase tracking-wider font-bold">
              CORE TECH:
            </span>
            {adTechs.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-white border border-slate-300 text-slate-900 font-mono text-xs font-bold rounded-sm shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
            <a
              href="/contact"
              className="relative inline-flex items-center justify-center gap-3 px-8 py-4 font-mono text-xs sm:text-sm font-extrabold uppercase text-white bg-slate-900 hover:bg-slate-800 border border-slate-900 transition-all shadow-lg blueprint-corner group"
            >
              <span>START YOUR PROJECT</span>
              <ArrowRight className="w-4 h-4 text-gold-base group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="/services"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 font-mono text-xs sm:text-sm font-bold uppercase text-slate-800 bg-white hover:bg-slate-100 border border-slate-300 transition-all blueprint-corner shadow-sm"
            >
              <Terminal className="w-4 h-4 text-gold-base" />
              <span>OUR 5 SERVICES</span>
            </a>
          </div>

          {/* Strategy Tagline Decorative Bar from Ad */}
          <div className="mb-8 text-center py-2.5 px-4 bg-slate-900 font-mono text-xs tracking-widest text-gold-base uppercase font-bold flex flex-wrap items-center justify-around gap-2 blueprint-corner">
            <span>STRATEGY</span>
            <span className="text-slate-500">•</span>
            <span>AUTOMATION</span>
            <span className="text-slate-500">•</span>
            <span>DEVELOPMENT</span>
            <span className="text-slate-500">•</span>
            <span>GROWTH</span>
          </div>
        </div>
      </div>
    </section>
  );
}
