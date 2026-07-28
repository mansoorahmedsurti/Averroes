"use client";

import React from "react";
import SchematicCanvas from "./SchematicCanvas";
import { ArrowRight, Terminal, ShieldCheck, Cpu, Code2 } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden border-b border-navy-border/60">
      {/* Dynamic Animated Vector Blueprint Canvas */}
      <SchematicCanvas />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          {/* Studio Meta Badge */}
          <div className="inline-flex items-center gap-2.5 px-3 py-1.5 bg-navy-card/90 border border-gold-base/30 text-gold-base text-xs font-mono mb-6 blueprint-corner">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-base animate-ping"></span>
            <span className="font-semibold uppercase tracking-wider">AVERROES LABS — WEB & AI STUDIO</span>
            <span className="text-paper-subtle">|</span>
            <span className="text-paper-muted">READY TO BUILD</span>
          </div>

          {/* Headline - Geometric Space Grotesk */}
          <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-paper-white leading-[1.08] mb-6">
            We build software and AI systems that{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-base via-gold-bright to-paper-white underline decoration-gold-base/50 underline-offset-8">
              deliver results.
            </span>
          </h1>

          {/* Subheading - IBM Plex Sans */}
          <p className="font-sans text-lg sm:text-xl text-paper-muted leading-relaxed mb-10 max-w-2.5xl">
            We design and build fast websites, mobile apps, custom AI search assistants, and business automation that help growing businesses save time and generate revenue.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-16">
            <a
              href="/contact"
              className="relative inline-flex items-center justify-center gap-3 px-7 py-4 font-mono text-sm font-bold uppercase text-navy-dark bg-gold-base hover:bg-gold-bright border border-gold-bright transition-all shadow-xl shadow-gold-base/15 blueprint-corner group"
            >
              <span>START YOUR PROJECT</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="/services"
              className="inline-flex items-center justify-center gap-3 px-7 py-4 font-mono text-sm font-semibold uppercase text-paper-white bg-navy-card/80 hover:bg-navy-surface border border-navy-border hover:border-gold-base/50 transition-all blueprint-corner"
            >
              <Terminal className="w-4 h-4 text-gold-base" />
              <span>EXPLORE SERVICES</span>
            </a>
          </div>

          {/* Key Value Highlights Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-navy-border/80">
            <div className="p-3 bg-navy-card/40 border border-navy-border/50">
              <div className="flex items-center gap-2 text-gold-base font-mono text-xs mb-1">
                <Code2 className="w-3.5 h-3.5" />
                <span>FAST WEBSITES</span>
              </div>
              <p className="font-sans text-xs text-paper-muted">Sub-second loading times</p>
            </div>

            <div className="p-3 bg-navy-card/40 border border-navy-border/50">
              <div className="flex items-center gap-2 text-gold-base font-mono text-xs mb-1">
                <Cpu className="w-3.5 h-3.5" />
                <span>SMART AI TOOLS</span>
              </div>
              <p className="font-sans text-xs text-paper-muted">Trained on your data</p>
            </div>

            <div className="p-3 bg-navy-card/40 border border-navy-border/50">
              <div className="flex items-center gap-2 text-gold-base font-mono text-xs mb-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>QUALITY GUARANTEED</span>
              </div>
              <p className="font-sans text-xs text-paper-muted">30 days free support</p>
            </div>

            <div className="p-3 bg-navy-card/40 border border-navy-border/50">
              <div className="flex items-center gap-2 text-gold-base font-mono text-xs mb-1">
                <Terminal className="w-3.5 h-3.5" />
                <span>DIRECT SUPPORT</span>
              </div>
              <p className="font-sans text-xs text-paper-muted">Direct engineer access</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
