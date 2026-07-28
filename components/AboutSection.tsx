"use client";

import React from "react";
import { User, Shield, Code, ExternalLink, Award, BookOpen, Briefcase } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-navy-dark relative border-b border-navy-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Founder & Engineering Bio */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3 font-mono text-xs text-gold-base tracking-widest uppercase">
              <span className="px-2 py-0.5 bg-navy-card border border-gold-base/30">FOUNDER & LEAD DEVELOPER</span>
              <span className="text-paper-subtle">------------------</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-5xl font-bold text-paper-white tracking-tight leading-tight">
              Building Smart AI & High-Quality Web Applications.
            </h2>

            <div className="space-y-4 font-sans text-paper-muted text-base leading-relaxed">
              <p>
                Averroes Labs is founded and led by{" "}
                <a
                  href="https://mansoorahmedsurti.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-paper-white font-bold underline underline-offset-4 decoration-gold-base hover:text-gold-bright transition-colors"
                >
                  Mansoor Ahmed
                </a>
                , a Computer Science student at <strong className="text-paper-white font-semibold">FAST-NUCES</strong> (Class of 2029). Driven by a passion for AI tools and web software, Mansoor combines strong programming fundamentals with modern AI frameworks to build fast websites and helpful automated tools.
              </p>
              <p>
                Holding industry certifications from <strong className="text-paper-white font-semibold">IBM</strong> and <strong className="text-paper-white font-semibold">Google</strong> in Artificial Intelligence and Generative AI, alongside customer support experience serving over 6,750+ clients at IBEX Pakistan, Mansoor brings technical quality and clear communication to every project.
              </p>
              <p>
                We operate directly without account managers or sales reps. When you work with Averroes Labs, you talk directly with the developer building your software — ensuring clear planning, transparent timelines, and zero miscommunication.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 font-mono text-xs">
              <div className="p-4 bg-navy-card/60 border border-navy-border blueprint-corner">
                <div className="flex items-center gap-2 text-gold-base font-bold mb-1">
                  <Shield className="w-4 h-4" /> AI & AUTOMATION FOCUS
                </div>
                <p className="text-paper-muted font-sans text-xs">
                  Specialized in custom AI search tools, automated workflows, and fast backends that solve everyday business challenges.
                </p>
              </div>

              <div className="p-4 bg-navy-card/60 border border-navy-border blueprint-corner">
                <div className="flex items-center gap-2 text-gold-base font-bold mb-1">
                  <Code className="w-4 h-4" /> DIRECT DEVELOPER ACCESS
                </div>
                <p className="text-paper-muted font-sans text-xs">
                  Work directly with founder Mansoor Ahmed. Clear project updates, 100% code ownership, and 30 days of free support.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Founder Card */}
          <div className="lg:col-span-5">
            <div className="blueprint-card p-8 relative blueprint-corner space-y-6">
              <div className="flex items-center justify-between border-b border-navy-border pb-4 font-mono text-xs">
                <span className="text-gold-base font-bold uppercase flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5" /> MEET THE FOUNDER
                </span>
                <a
                  href="https://mansoorahmedsurti.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-paper-muted hover:text-gold-bright flex items-center gap-1 text-[11px] transition-colors"
                >
                  <span>mansoorahmedsurti.me</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Founder Details */}
              <div className="space-y-4 font-mono text-xs">
                <div className="flex items-start justify-between border-b border-navy-border/60 pb-3">
                  <span className="text-paper-muted">FOUNDER:</span>
                  <a
                    href="https://mansoorahmedsurti.me/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-paper-white font-bold text-right hover:text-gold-bright transition-colors"
                  >
                    Mansoor Ahmed
                    <span className="block text-gold-base font-normal text-[11px]">AI & Software Developer</span>
                  </a>
                </div>

                <div className="flex items-start justify-between border-b border-navy-border/60 pb-3">
                  <span className="text-paper-muted">EDUCATION:</span>
                  <span className="text-paper-white font-bold text-right">
                    BS Computer Science (2029)
                    <span className="block text-gold-base font-normal text-[11px]">FAST-NUCES (Karachi)</span>
                  </span>
                </div>

                <div className="flex items-start justify-between border-b border-navy-border/60 pb-3">
                  <span className="text-paper-muted">CERTIFICATIONS:</span>
                  <span className="text-paper-white font-semibold text-right">
                    IBM (Intro to AI)
                    <span className="block text-paper-muted text-[11px]">Google (Generative AI)</span>
                  </span>
                </div>

                <div className="flex items-start justify-between border-b border-navy-border/60 pb-3">
                  <span className="text-paper-muted">EXPERIENCE:</span>
                  <span className="text-paper-white font-semibold text-right">
                    IBEX Pakistan (Customer Support)
                    <span className="block text-gold-base text-[11px]">6,750+ Clients Helped</span>
                  </span>
                </div>

                <div className="flex items-start justify-between">
                  <span className="text-paper-muted">OUR STACK:</span>
                  <span className="text-paper-white font-semibold text-right">
                    Next.js, React, TypeScript,
                    <span className="block text-paper-muted text-[11px]">Python, AI Search, Automation</span>
                  </span>
                </div>
              </div>

              {/* Developer Links */}
              <div className="pt-2 border-t border-navy-border/60">
                <span className="font-mono text-[10px] text-gold-base uppercase font-bold block mb-2">
                  ONLINE PROFILES:
                </span>
                <div className="flex flex-wrap gap-2 font-mono text-[11px]">
                  <a
                    href="https://github.com/mansoorahmedsurti"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1 bg-navy-dark border border-navy-border text-paper-muted hover:text-paper-white hover:border-gold-base transition-colors"
                  >
                    GitHub ↗
                  </a>
                  <a
                    href="https://linkedin.com/in/mansoorahmedsurti"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1 bg-navy-dark border border-navy-border text-paper-muted hover:text-paper-white hover:border-gold-base transition-colors"
                  >
                    LinkedIn ↗
                  </a>
                  <a
                    href="https://medium.com/@mansoorahmedsurti"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1 bg-navy-dark border border-navy-border text-paper-muted hover:text-paper-white hover:border-gold-base transition-colors"
                  >
                    Medium ↗
                  </a>
                </div>
              </div>

              {/* Quote Footer */}
              <div className="p-4 bg-navy-dark/90 border border-gold-base/30 text-xs font-sans text-paper-muted italic">
                "Great software is built on clean code, fast loading speeds, and tools that solve real problems for people."
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
