"use client";

import React from "react";
import SchematicCanvas from "./SchematicCanvas";
import { ArrowRight, Terminal, ShieldCheck, Cpu, Sparkles, Layers, Lock, Zap } from "lucide-react";

export default function HeroSection() {
  const adTechs = ["RAG", "NEXT.js", "n8n", "ElevenLabs", "Flutter"];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden border-b border-navy-border/80 bg-navy-dark">
      {/* Dynamic Animated Vector Blueprint Canvas */}
      <SchematicCanvas />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          {/* Ad Headline Banner Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-navy-card/90 border border-gold-base/40 text-gold-base text-xs font-mono mb-6 blueprint-corner shadow-lg">
            <span className="w-2 h-2 rounded-full bg-gold-base animate-ping"></span>
            <span className="font-bold uppercase tracking-widest text-gold-bright">AVERROES LABS</span>
            <span className="text-paper-subtle">|</span>
            <span className="text-paper-white font-medium">BUILDING INTELLIGENCE. SHAPING TOMORROW.</span>
          </div>

          {/* Main Headline directly matching the Ad */}
          <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-paper-white leading-[1.05] mb-6">
            BUILD THE FUTURE <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-base via-gold-bright to-paper-white">
              WITH US.
            </span>
          </h1>

          {/* Subheading directly matching the Ad */}
          <p className="font-sans text-lg sm:text-2xl text-paper-muted leading-relaxed mb-8 max-w-3xl font-medium">
            Smart, Scalable, AI-Powered Digital Solutions. Drive Real Results.
          </p>

          {/* Ad Featured Technologies Pill Bar */}
          <div className="flex flex-wrap items-center gap-3 mb-10 p-3 bg-navy-card/60 border border-navy-border blueprint-corner">
            <span className="font-mono text-xs text-paper-subtle uppercase tracking-wider font-semibold">
              CORE TECH & FRAMEWORKS:
            </span>
            {adTechs.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-navy-dark border border-cyan-base/30 text-cyan-base font-mono text-xs font-semibold rounded-sm tracking-wide"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-14">
            <a
              href="/contact"
              className="relative inline-flex items-center justify-center gap-3 px-8 py-4 font-mono text-xs sm:text-sm font-extrabold uppercase text-navy-dark bg-gold-base hover:bg-gold-bright border border-gold-bright transition-all shadow-xl shadow-gold-base/20 blueprint-corner group"
            >
              <span>START YOUR PROJECT</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="/services"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 font-mono text-xs sm:text-sm font-bold uppercase text-paper-white bg-navy-card/90 hover:bg-navy-surface border border-navy-border hover:border-gold-base/60 transition-all blueprint-corner"
            >
              <Terminal className="w-4 h-4 text-gold-base" />
              <span>VIEW OUR 5 SERVICES</span>
            </a>
          </div>

          {/* Strategy Tagline Decorative Bar from Ad */}
          <div className="mb-10 text-center py-2.5 px-4 bg-navy-card/40 border-y border-gold-base/30 font-mono text-xs tracking-widest text-gold-base uppercase font-bold flex flex-wrap items-center justify-around gap-2">
            <span>STRATEGY</span>
            <span className="text-paper-subtle">•</span>
            <span>AUTOMATION</span>
            <span className="text-paper-subtle">•</span>
            <span>DEVELOPMENT</span>
            <span className="text-paper-subtle">•</span>
            <span>GROWTH</span>
          </div>

          {/* Ad Key Value Pillars (4 Bottom Badges) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
            <div className="p-3.5 bg-navy-card/70 border border-navy-border hover:border-gold-base/40 transition-colors blueprint-corner">
              <div className="flex items-center gap-2 text-gold-base font-mono text-xs font-bold mb-1">
                <Sparkles className="w-4 h-4 shrink-0" />
                <span>AI-POWERED AUTOMATION</span>
              </div>
              <p className="font-sans text-xs text-paper-muted">Smart agents & workflow bots</p>
            </div>

            <div className="p-3.5 bg-navy-card/70 border border-navy-border hover:border-gold-base/40 transition-colors blueprint-corner">
              <div className="flex items-center gap-2 text-gold-base font-mono text-xs font-bold mb-1">
                <Layers className="w-4 h-4 shrink-0" />
                <span>SCALABLE ARCHITECTURE</span>
              </div>
              <p className="font-sans text-xs text-paper-muted">Built for high traffic growth</p>
            </div>

            <div className="p-3.5 bg-navy-card/70 border border-navy-border hover:border-gold-base/40 transition-colors blueprint-corner">
              <div className="flex items-center gap-2 text-gold-base font-mono text-xs font-bold mb-1">
                <Lock className="w-4 h-4 shrink-0" />
                <span>SECURE & RELIABLE</span>
              </div>
              <p className="font-sans text-xs text-paper-muted">Enterprise-grade security</p>
            </div>

            <div className="p-3.5 bg-navy-card/70 border border-navy-border hover:border-gold-base/40 transition-colors blueprint-corner">
              <div className="flex items-center gap-2 text-gold-base font-mono text-xs font-bold mb-1">
                <Zap className="w-4 h-4 shrink-0" />
                <span>FUTURE-READY TECH</span>
              </div>
              <p className="font-sans text-xs text-paper-muted">Latest Next.js, FastAPI & Flutter</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
