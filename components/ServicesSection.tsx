"use client";

import React from "react";
import { Layout, Smartphone, Bot, Workflow, CheckCircle2, ArrowRight } from "lucide-react";

const services = [
  {
    id: "web",
    title: "Websites & Web Apps",
    icon: Layout,
    outcome: "Fast, modern websites and custom web applications built to impress visitors, load instantly, and turn traffic into paying clients.",
    deliverables: [
      "Ultra-fast loading times (loads in under 1 second)",
      "Custom admin portals to easily manage your data & content",
      "Built for Google Search (SEO optimized) & works on all screens",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel", "Python"],
    metric: "< 1s Average Page Load",
  },
  {
    id: "mobile",
    title: "Mobile & Web Apps",
    icon: Smartphone,
    outcome: "Easy-to-use mobile apps for iPhone, Android, and web that keep your business running smoothly, even when offline.",
    deliverables: [
      "Single codebase that works on iPhone (iOS), Android & Web",
      "Instant data updates with offline state support",
      "Secure user login and protected account information",
    ],
    stack: ["Flutter", "Supabase", "PostgreSQL", "REST APIs", "WebSockets"],
    metric: "Smooth 60FPS UI",
  },
  {
    id: "ai",
    title: "Smart AI & Search Tools",
    icon: Bot,
    outcome: "Custom AI assistants and search engines trained on your company's own documents to give accurate, instant answers with exact source links.",
    deliverables: [
      "Instant AI search across your PDFs, manuals & team files",
      "Accurate answers with direct links back to original documents",
      "Built-in safety checks so the AI never makes up information",
    ],
    stack: ["Python", "FastAPI", "Qdrant", "Neon DB", "OpenAI SDK", "LangChain"],
    metric: "99.4% Citation Accuracy",
  },
  {
    id: "automation",
    title: "Business Process Automation",
    icon: Workflow,
    outcome: "Eliminate repetitive manual data entry and connect your favorite software tools so your team saves dozens of hours every week.",
    deliverables: [
      "Automatic data syncing between your CRM, email, and spreadsheet tools",
      "Instant notifications and lead enrichment workflows",
      "Error-proof background automation that runs 24/7",
    ],
    stack: ["n8n", "Make.com", "Zapier", "Python", "Webhooks"],
    metric: "15+ Hours Saved/Week",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-navy-dark relative border-b border-navy-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-2 font-mono text-xs text-gold-base tracking-widest uppercase">
            <span className="px-2 py-0.5 bg-navy-card border border-gold-base/30">WHAT WE DO</span>
            <span className="text-paper-subtle">-----------------------------</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-paper-white tracking-tight mb-4">
            Services Built for Real Business Results.
          </h2>
          <p className="font-sans text-paper-muted text-base sm:text-lg max-w-3xl">
            We focus on software that solves real problems. Whether you need a stunning new website, a mobile app, or smart AI tools, we build solutions that work reliably.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.id}
                className="blueprint-card p-6 sm:p-8 relative group flex flex-col justify-between blueprint-corner"
              >
                {/* Header info */}
                <div>
                  <div className="flex items-center justify-between mb-6 border-b border-navy-border pb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 bg-navy-dark border border-gold-base/40 text-gold-base">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-heading text-xl sm:text-2xl font-bold text-paper-white group-hover:text-gold-bright transition-colors">
                          {svc.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Outcome description */}
                  <p className="font-sans text-paper-white text-base leading-relaxed mb-6 font-medium">
                    {svc.outcome}
                  </p>

                  {/* Key Deliverables Bullet Points */}
                  <ul className="space-y-2.5 mb-8">
                    {svc.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs font-sans text-paper-muted">
                        <CheckCircle2 className="w-4 h-4 text-gold-base shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Supporting Credibility - Tech Stack */}
                <div className="pt-6 border-t border-navy-border/80">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-[11px] text-paper-muted uppercase tracking-wider">
                      TECHNOLOGY USED
                    </span>
                    <span className="font-mono text-[11px] text-gold-base font-semibold">
                      {svc.metric}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {svc.stack.map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Services Bottom CTA */}
        <div className="mt-12 p-6 bg-navy-card/60 border border-navy-border flex flex-col sm:flex-row items-center justify-between gap-4 blueprint-corner">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-gold-base font-bold">[CUSTOM PROJECT]</span>
            <span className="font-sans text-sm text-paper-muted">
              Need a tailored project combining Web + AI + Automation?
            </span>
          </div>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase font-bold text-gold-base hover:text-gold-bright transition-colors whitespace-nowrap"
          >
            <span>Ask Us About Your Custom Project</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
