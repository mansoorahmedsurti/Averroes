"use client";

import React from "react";
import { Smartphone, Layout, Mic, Database, Workflow, CheckCircle2, ArrowRight, Globe, Zap } from "lucide-react";

const adServices = [
  {
    num: "1",
    id: "mobile",
    title: "MOBILE APPS CROSS PLATFORM",
    icon: Smartphone,
    bullets: [
      "High-performance native & cross-platform apps.",
      "Single codebase, rapid development.",
      "Scalable backends, real impact.",
    ],
    badges: ["Fast Development", "Native Performance", "Single Codebase", "Scalable Backends"],
    tech: ["FLUTTER", "REACT NATIVE", "DART", "KOTLIN", "SWIFT"],
    sideBox: {
      title: "iOS & Android",
      desc: "ONE APP. EVERY DEVICE. REAL IMPACT.",
    },
  },
  {
    num: "2",
    id: "web",
    title: "CUSTOM WEBSITES & MVPS",
    icon: Layout,
    bullets: [
      "Fast, scalable, user-centric web applications.",
      "From concept to MVP launch.",
      "Performance focused, SEO optimized.",
    ],
    badges: ["Blazing Fast", "Responsive by Design", "Secure & Scalable", "MVP in Days"],
    tech: ["NEXT.JS", "REACT", "TAILWIND CSS", "NODE.JS", "POSTGRES"],
    sideBox: {
      title: "Live Website",
      link: "averroes01.vercel.app",
      items: ["Modern UI/UX", "SEO Optimized", "Performance Focused", "Deployed on Vercel"],
    },
  },
  {
    num: "3",
    id: "rag-voice",
    title: "RAG VOICE & AUTOMATION",
    icon: Mic,
    bullets: [
      "24/7 AI callers for support, FAQs, & appointment booking",
      "Speed-to-lead outbound calls to qualify leads instantly",
      "Integrate with Calendars, CRM, & business tools",
    ],
    badges: ["24/7 AI Callers", "Speed-to-Lead", "Calendar & CRM Sync"],
    tech: ["YAPI", "RETELL", "BLAND.AI"],
    sideBox: null,
  },
  {
    num: "4",
    id: "rag-pipelines",
    title: "CUSTOM RAG PIPELINES",
    icon: Database,
    bullets: [
      "Train bots on your PDFs, docs, and databases",
      "Context-aware answers with grounded results",
      "Built with FastAPI, Qdrant, and Neon Postgres",
    ],
    badges: ["PDF & Doc Training", "Grounded Results", "Vector Search"],
    tech: ["FASTAPI", "QDRANT", "NEON", "OPENAI"],
    sideBox: null,
  },
  {
    num: "5",
    id: "workflow-automation",
    title: "WORKFLOW AUTOMATION",
    icon: Workflow,
    bullets: [
      "Automate processes across multiple apps & platforms",
      "Custom integration in APIs, webhooks & microservices",
      "Orchestrated data & workflows for real time business impact",
    ],
    badges: ["Cross-App Sync", "APIs & Webhooks", "Real-Time Impact"],
    tech: ["N8N", "MAKE.COM", "ZAPIER", "APIS"],
    sideBox: null,
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-white relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-2 font-mono text-xs text-gold-base tracking-widest uppercase font-bold">
            <span className="px-2.5 py-0.5 bg-slate-100 border border-slate-200 text-slate-900">OUR 5 CORE SERVICES</span>
            <span className="text-slate-300">-----------------------------</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Smart, Scalable, AI-Powered Digital Solutions.
          </h2>
          <p className="font-sans text-slate-600 text-base sm:text-lg max-w-3xl font-medium">
            From cross-platform mobile apps to custom RAG pipelines and workflow automation, we build software that drives real business results.
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-8">
          {adServices.map((svc) => {
            return (
              <div
                key={svc.id}
                className="bg-white p-6 sm:p-8 relative blueprint-corner border border-slate-200 hover:border-gold-base transition-all shadow-sm hover:shadow-md"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Column: Number Badge & Main Details */}
                  <div className={svc.sideBox ? "lg:col-span-8" : "lg:col-span-12"}>
                    <div className="flex items-center gap-4 mb-4">
                      {/* Numbered Box from Ad */}
                      <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-slate-900 border-2 border-slate-900 text-white font-heading text-xl sm:text-2xl font-black shrink-0 blueprint-corner">
                        {svc.num}
                      </div>
                      <div>
                        <h3 className="font-heading text-xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                          {svc.title}
                        </h3>
                      </div>
                    </div>

                    {/* Bullet Points */}
                    <ul className="space-y-2.5 mb-6 pl-14">
                      {svc.bullets.map((b, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-sm sm:text-base font-sans text-slate-800 font-semibold">
                          <CheckCircle2 className="w-4 h-4 text-gold-base shrink-0 mt-1" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Feature Badges from Ad */}
                    {svc.badges && (
                      <div className="flex flex-wrap gap-2 pl-14 mb-6">
                        {svc.badges.map((badge) => (
                          <span
                            key={badge}
                            className="px-2.5 py-1 bg-slate-50 border border-slate-200 text-slate-700 font-mono text-xs flex items-center gap-1.5 font-bold"
                          >
                            <Zap className="w-3 h-3 text-cyan-base" />
                            <span>{badge}</span>
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Tech Badges Row */}
                    <div className="pt-4 border-t border-slate-100 pl-14 flex flex-wrap items-center gap-2 font-mono text-xs">
                      <span className="text-slate-500 font-bold uppercase tracking-wider mr-2">
                        TECHNOLOGIES:
                      </span>
                      {svc.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 bg-slate-100 border border-slate-200 text-slate-900 font-mono text-xs font-bold"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Side Feature Box (for items 1 & 2 matching Ad) */}
                  {svc.sideBox && (
                    <div className="lg:col-span-4 p-5 bg-slate-50 border border-slate-200 blueprint-corner space-y-3">
                      <div className="flex items-center gap-2 text-slate-900 font-mono text-xs font-extrabold uppercase border-b border-slate-200 pb-2">
                        <Globe className="w-4 h-4 text-gold-base" />
                        <span>{svc.sideBox.title}</span>
                      </div>
                      {svc.sideBox.desc && (
                        <p className="font-heading font-extrabold text-lg text-slate-900 tracking-tight">
                          {svc.sideBox.desc}
                        </p>
                      )}
                      {svc.sideBox.link && (
                        <a
                          href={`https://${svc.sideBox.link}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-xs text-cyan-base hover:underline block font-bold"
                        >
                          {svc.sideBox.link} ↗
                        </a>
                      )}
                      {svc.sideBox.items && (
                        <ul className="space-y-1.5 pt-2 border-t border-slate-200">
                          {svc.sideBox.items.map((item, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-xs font-sans text-slate-700 font-medium">
                              <CheckCircle2 className="w-3.5 h-3.5 text-gold-base" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Services Bottom CTA */}
        <div className="mt-12 p-6 bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4 blueprint-corner shadow-lg">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-gold-base font-bold">[CUSTOM SOLUTION]</span>
            <span className="font-sans text-sm text-slate-300 font-medium">
              Need a custom architecture combining Web + Voice + RAG + Automation?
            </span>
          </div>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase font-extrabold text-slate-900 bg-gold-base hover:bg-gold-bright px-5 py-3 transition-all whitespace-nowrap blueprint-corner"
          >
            <span>DISCUSS CUSTOM PROJECT</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
