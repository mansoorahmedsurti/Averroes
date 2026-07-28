"use client";

import React from "react";
import { Search, Code2, Rocket, ShieldCheck, CheckCircle2 } from "lucide-react";

const steps = [
  {
    phase: "01",
    title: "Discovery & Planning",
    timeline: "Week 1",
    icon: Search,
    summary: "We discuss your goals, map out the required features, and provide a clear project plan and fixed price quote before any work begins.",
    deliverables: [
      "Clear project specification & feature checklist",
      "Interactive visual mockups of your app pages",
      "Guaranteed timeline and fixed milestone pricing",
    ],
  },
  {
    phase: "02",
    title: "Building & Regular Demos",
    timeline: "Weeks 2 - 4",
    icon: Code2,
    summary: "We build your software step-by-step and provide live preview links so you can test features and see progress along the way.",
    deliverables: [
      "Live preview website updated regularly",
      "Thorough testing on mobile & desktop browsers",
      "Direct chat channel with lead developer Mansoor",
    ],
  },
  {
    phase: "03",
    title: "Launch & Full Hand-Off",
    timeline: "Launch Week",
    icon: Rocket,
    summary: "We launch your application live to the web or app stores with full security setup, custom domain connection, and monitoring.",
    deliverables: [
      "Smooth, zero-downtime launch to production",
      "100% full source code and account ownership transferred to you",
      "Admin walkthrough video & easy documentation guide",
    ],
  },
  {
    phase: "04",
    title: "30-Day Free Support",
    timeline: "30 Days Included",
    icon: ShieldCheck,
    summary: "Every project comes with 30 days of post-launch support to fix any bugs, adjust performance, and ensure everything runs flawlessly.",
    deliverables: [
      "30-day 100% free bug fix guarantee",
      "Performance & security sign-off check",
      "Option for ongoing maintenance & updates",
    ],
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-24 bg-navy-dark relative border-b border-navy-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-2 font-mono text-xs text-gold-base tracking-widest uppercase">
            <span className="px-2 py-0.5 bg-navy-card border border-gold-base/30">HOW WE WORK</span>
            <span className="text-paper-subtle">-----------------------------</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-paper-white tracking-tight mb-4">
            A Simple 4-Step Process. Clear & Risk-Free.
          </h2>
          <p className="font-sans text-paper-muted text-base sm:text-lg max-w-3xl">
            We follow a structured, transparent approach so your project is completed on time, within budget, and with zero unexpected surprises.
          </p>
        </div>

        {/* Process Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.phase}
                className="blueprint-card p-6 relative flex flex-col justify-between blueprint-corner group"
              >
                <div>
                  {/* Step Banner */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-navy-border">
                    <div className="p-2.5 bg-navy-dark border border-gold-base/40 text-gold-base">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Timeline */}
                  <div className="mb-4">
                    <span className="font-mono text-[10px] text-paper-muted uppercase tracking-wider block mb-1">
                      TIMELINE: {step.timeline}
                    </span>
                    <h3 className="font-heading text-xl font-bold text-paper-white group-hover:text-gold-bright transition-colors">
                      {step.title}
                    </h3>
                  </div>

                  {/* Summary */}
                  <p className="font-sans text-paper-muted text-xs leading-relaxed mb-6">
                    {step.summary}
                  </p>

                  {/* Deliverables */}
                  <div className="space-y-2 border-t border-navy-border/60 pt-4">
                    <span className="font-mono text-[10px] text-gold-base uppercase font-bold block mb-2">
                      WHAT YOU GET:
                    </span>
                    {step.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-[11px] font-sans text-paper-white">
                        <CheckCircle2 className="w-3.5 h-3.5 text-gold-base shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-navy-border text-right">
                  <span className="font-mono text-[10px] text-paper-muted">
                    GUARANTEED QUALITY
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
