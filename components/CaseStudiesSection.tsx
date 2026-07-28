"use client";

import React, { useState } from "react";
import { Terminal, Cpu, Database, Server, ExternalLink, Layers, Check, Search, Calculator, ShieldCheck } from "lucide-react";

type CaseStudyId = "rag" | "college" | "unit";

export default function CaseStudiesSection() {
  const [activeCase, setActiveCase] = useState<CaseStudyId>("rag");

  // RAG Demo Interactive State
  const [ragQuery, setRagQuery] = useState("How do I configure OAuth2 refresh token expiration?");
  const [ragResults, setRagResults] = useState<{
    answer: string;
    sources: string[];
    latency: string;
    score: number;
  } | null>({
    answer: "OAuth2 refresh token expiration is set in your security manifest under 'token_lifetime_seconds'. The default value is 2,592,000 seconds (30 days). Ensure refresh token rotation is enabled.",
    sources: ["docs/security/oauth2_spec.md #L142", "docs/api/auth_config.json #L18"],
    latency: "142ms",
    score: 0.984,
  });

  const handleRagSearch = (query: string) => {
    setRagQuery(query);
    if (query.toLowerCase().includes("auth") || query.toLowerCase().includes("token")) {
      setRagResults({
        answer: "OAuth2 authentication requires signing bearer tokens using RS256 algorithm. Refresh tokens expire in 30 days unless revoked in active sessions table.",
        sources: ["docs/security/auth.md #L45", "docs/api/keys.json #L88"],
        latency: "128ms",
        score: 0.991,
      });
    } else if (query.toLowerCase().includes("database") || query.toLowerCase().includes("index")) {
      setRagResults({
        answer: "Vector indices are built using HNSW graph algorithm with M=16, ef_construct=200 in Qdrant Vector Engine for optimal recall.",
        sources: ["docs/db/vector_indexing.md #L12", "src/qdrant_client.py #L55"],
        latency: "94ms",
        score: 0.976,
      });
    } else {
      setRagResults({
        answer: `Retrieved canonical documentation context for '${query}'. All cited snippets are validated against repository commit HEAD.`,
        sources: ["docs/general/architecture.md #L10", "docs/api/overview.md #L22"],
        latency: "115ms",
        score: 0.952,
      });
    }
  };

  // College Platform Interactive View State
  const [collegeRole, setCollegeRole] = useState<"admin" | "faculty" | "student">("admin");

  // Unit Converter Interactive State
  const [unitVal, setUnitVal] = useState<number>(100);
  const [unitFrom, setUnitFrom] = useState<"PSI" | "Bar" | "KPa">("PSI");
  const [unitTo, setUnitTo] = useState<"PSI" | "Bar" | "KPa">("Bar");

  const convertUnits = (val: number, from: string, to: string): string => {
    let inKpa = val;
    if (from === "PSI") inKpa = val * 6.89476;
    if (from === "Bar") inKpa = val * 100;
    if (from === "KPa") inKpa = val;

    let res = inKpa;
    if (to === "PSI") res = inKpa / 6.89476;
    if (to === "Bar") res = inKpa / 100;
    if (to === "KPa") res = inKpa;

    return res.toFixed(4);
  };

  return (
    <section id="work" className="py-24 bg-navy-dark relative border-b border-navy-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-2 font-mono text-xs text-gold-base tracking-widest uppercase">
            <span className="px-2 py-0.5 bg-navy-card border border-gold-base/30">02 // FEATURED PROJECTS</span>
            <span className="text-paper-subtle">-----------------------------</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-paper-white tracking-tight mb-4">
            Featured Projects & Interactive Demos
          </h2>
          <p className="font-sans text-paper-muted text-base sm:text-lg max-w-3xl">
            Explore real projects we have built, see how we solved key business challenges, and try out live interactive software demos right on this page.
          </p>
        </div>

        {/* Case File Selector Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 border-b border-navy-border pb-4 font-mono text-xs">
          <button
            onClick={() => setActiveCase("rag")}
            className={`px-4 py-2.5 border transition-all blueprint-corner ${
              activeCase === "rag"
                ? "bg-gold-base text-navy-dark font-bold border-gold-bright shadow-lg"
                : "bg-navy-card/60 text-paper-muted border-navy-border hover:text-paper-white hover:border-gold-base/40"
            }`}
          >
            PROJECT 01 // SMART AI DOCUMENT SEARCH
          </button>

          <button
            onClick={() => setActiveCase("college")}
            className={`px-4 py-2.5 border transition-all blueprint-corner ${
              activeCase === "college"
                ? "bg-gold-base text-navy-dark font-bold border-gold-bright shadow-lg"
                : "bg-navy-card/60 text-paper-muted border-navy-border hover:text-paper-white hover:border-gold-base/40"
            }`}
          >
            PROJECT 02 // COLLEGE MANAGEMENT SYSTEM
          </button>

          <button
            onClick={() => setActiveCase("unit")}
            className={`px-4 py-2.5 border transition-all blueprint-corner ${
              activeCase === "unit"
                ? "bg-gold-base text-navy-dark font-bold border-gold-bright shadow-lg"
                : "bg-navy-card/60 text-paper-muted border-navy-border hover:text-paper-white hover:border-gold-base/40"
            }`}
          >
            PROJECT 03 // UNIT CONVERSION TOOL
          </button>
        </div>

        {/* Case File 01: RAG Documentation Chatbot */}
        {activeCase === "rag" && (
          <div className="blueprint-card p-6 sm:p-10 blueprint-corner space-y-10">
            {/* Header info */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-navy-border pb-6">
              <div>
                <span className="font-mono text-xs text-gold-base font-semibold block mb-1">
                  PROJECT #01 // SMART AI SEARCH
                </span>
                <h3 className="font-heading text-2xl sm:text-4xl font-bold text-paper-white">
                  Smart AI Document Search Engine
                </h3>
              </div>
              <div className="flex items-center gap-3">
                <span className="tech-tag">Python</span>
                <span className="tech-tag">FastAPI</span>
                <span className="tech-tag">Qdrant</span>
                <span className="tech-tag">Neon DB</span>
              </div>
            </div>

            {/* Problem & Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 bg-navy-dark/80 border border-navy-border/80">
                <h4 className="font-mono text-xs text-gold-base uppercase tracking-wider mb-2 flex items-center gap-2">
                  <Terminal className="w-4 h-4" /> THE CHALLENGE
                </h4>
                <p className="font-sans text-paper-muted text-sm leading-relaxed">
                  Engineers and support teams wasted hundreds of hours digging through thousands of pages of complex manuals. Traditional keyword search often failed, and standard AI chatbots gave inaccurate or made-up answers.
                </p>
              </div>

              <div className="p-6 bg-navy-dark/80 border border-navy-border/80">
                <h4 className="font-mono text-xs text-gold-base uppercase tracking-wider mb-2 flex items-center gap-2">
                  <Cpu className="w-4 h-4" /> OUR SOLUTION
                </h4>
                <p className="font-sans text-paper-muted text-sm leading-relaxed">
                  We built a smart AI document search system that processes company PDFs and guides, understands natural language questions, and instantly returns verified answers with direct source links.
                </p>
              </div>
            </div>

            {/* Schematic Node Architecture Diagram */}
            <div className="p-6 bg-navy-dark border border-navy-border">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-paper-muted uppercase tracking-wider">
                  HOW IT WORKS // STEP-BY-STEP PROCESS
                </span>
                <span className="font-mono text-[10px] text-gold-base">RESPONSE TIME: ~140ms</span>
              </div>

              {/* Process Flow Diagram */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-center font-mono text-xs py-4">
                <div className="p-4 bg-navy-card border border-gold-base/30 blueprint-corner">
                  <span className="text-gold-base block font-bold mb-1">01. IMPORT DOCS</span>
                  <span className="text-paper-muted text-[11px]">PDFs, Guides & Technical Manuals</span>
                </div>
                <div className="p-4 bg-navy-card border border-navy-border relative">
                  <span className="text-gold-base block font-bold mb-1">02. INDEX DATA</span>
                  <span className="text-paper-muted text-[11px]">Smart AI Data Indexing</span>
                </div>
                <div className="p-4 bg-navy-card border border-navy-border">
                  <span className="text-gold-base block font-bold mb-1">03. SEARCH</span>
                  <span className="text-paper-muted text-[11px]">Semantic Question Matching</span>
                </div>
                <div className="p-4 bg-navy-card border border-gold-base/50 blueprint-corner">
                  <span className="text-gold-base block font-bold mb-1">04. ANSWER</span>
                  <span className="text-paper-muted text-[11px]">Accurate Answer + Source Links</span>
                </div>
              </div>
            </div>

            {/* Key Technical Decisions */}
            <div>
              <h4 className="font-heading text-lg font-bold text-paper-white mb-4">
                Key Technical Decisions
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-sans text-sm">
                <div className="p-4 bg-navy-card/40 border border-navy-border/60">
                  <span className="font-mono text-xs text-gold-base font-bold block mb-1">
                    1. Hybrid Search (Keywords + Meaning)
                  </span>
                  <p className="text-paper-muted text-xs">
                    Combining exact keyword matching with conceptual search ensured that both general questions and specific technical part numbers returned correct results.
                  </p>
                </div>
                <div className="p-4 bg-navy-card/40 border border-navy-border/60">
                  <span className="font-mono text-xs text-gold-base font-bold block mb-1">
                    2. Verified Source Attribution
                  </span>
                  <p className="text-paper-muted text-xs">
                    Every answer is automatically cross-referenced with exact file names and line numbers so users can double-check the source material instantly.
                  </p>
                </div>
              </div>
            </div>

            {/* Live Interactive Demo Widget */}
            <div className="p-6 bg-navy-dark border border-gold-base/30 blueprint-corner">
              <div className="flex items-center justify-between mb-4 border-b border-navy-border pb-3">
                <span className="font-mono text-xs text-gold-base font-bold uppercase flex items-center gap-2">
                  <Search className="w-4 h-4" /> TRY THE AI SEARCH DEMO
                </span>
                <span className="font-mono text-[10px] text-paper-muted">INTERACTIVE DEMO</span>
              </div>

              <div className="flex gap-2 mb-4">
                <input
                  type="text"
                  value={ragQuery}
                  onChange={(e) => handleRagSearch(e.target.value)}
                  placeholder="Ask a question..."
                  className="flex-1 px-4 py-2 bg-navy-card border border-navy-border text-paper-white font-mono text-xs focus:outline-none focus:border-gold-base"
                />
                <button
                  onClick={() => handleRagSearch(ragQuery)}
                  className="px-4 py-2 bg-gold-base text-navy-dark font-mono text-xs font-bold uppercase hover:bg-gold-bright"
                >
                  SEARCH
                </button>
              </div>

              {/* Demo Query Preset Chips */}
              <div className="flex flex-wrap gap-2 mb-4 font-mono text-[11px]">
                <span className="text-paper-muted">TRY PRESETS:</span>
                <button
                  onClick={() => handleRagSearch("How do I configure OAuth2 refresh token expiration?")}
                  className="px-2 py-0.5 bg-navy-card border border-navy-border text-gold-base hover:border-gold-base"
                >
                  OAuth2 Tokens
                </button>
                <button
                  onClick={() => handleRagSearch("Vector index parameters in Qdrant?")}
                  className="px-2 py-0.5 bg-navy-card border border-navy-border text-gold-base hover:border-gold-base"
                >
                  Qdrant Vector Index
                </button>
              </div>

              {/* RAG Results Box */}
              {ragResults && (
                <div className="p-4 bg-navy-card/90 border border-navy-border font-mono text-xs space-y-3">
                  <div className="flex items-center justify-between text-paper-muted text-[10px] border-b border-navy-border pb-2">
                    <span>LATENCY: {ragResults.latency}</span>
                    <span>CONFIDENCE: {(ragResults.score * 100).toFixed(1)}%</span>
                  </div>
                  <p className="text-paper-white leading-relaxed">{ragResults.answer}</p>
                  <div className="pt-2 border-t border-navy-border/60">
                    <span className="text-gold-base text-[10px] uppercase font-bold block mb-1">
                      VERIFIED CITED SOURCES:
                    </span>
                    <div className="space-y-1">
                      {ragResults.sources.map((src, i) => (
                        <div key={i} className="text-paper-muted text-[11px] flex items-center gap-1.5">
                          <Check className="w-3 h-3 text-gold-base" />
                          <span>{src}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Case File 02: College Management Platform */}
        {activeCase === "college" && (
          <div className="blueprint-card p-6 sm:p-10 blueprint-corner space-y-10">
            {/* Header info */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-navy-border pb-6">
              <div>
                <span className="font-mono text-xs text-gold-base font-semibold block mb-1">
                  CASE FILE #02 // WEB & OPERATIONS OS
                </span>
                <h3 className="font-heading text-2xl sm:text-4xl font-bold text-paper-white">
                  Multi-Tenant College Operations & Academic Platform
                </h3>
              </div>
              <div className="flex items-center gap-3">
                <span className="tech-tag">Next.js 14</span>
                <span className="tech-tag">TypeScript</span>
                <span className="tech-tag">Supabase</span>
                <span className="tech-tag">PostgreSQL RLS</span>
              </div>
            </div>

            {/* Problem & Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 bg-navy-dark/80 border border-navy-border/80">
                <h4 className="font-mono text-xs text-gold-base uppercase tracking-wider mb-2 flex items-center gap-2">
                  <Terminal className="w-4 h-4" /> THE CLIENT PROBLEM
                </h4>
                <p className="font-sans text-paper-muted text-sm leading-relaxed">
                  Legacy academic management software suffered from fragmented student portals, delayed grade posting, manual transcript generation, and database server crashes during peak semester registration windows.
                </p>
              </div>

              <div className="p-6 bg-navy-dark/80 border border-navy-border/80">
                <h4 className="font-mono text-xs text-gold-base uppercase tracking-wider mb-2 flex items-center gap-2">
                  <Cpu className="w-4 h-4" /> THE ARCHITECTURAL SOLUTION
                </h4>
                <p className="font-sans text-paper-muted text-sm leading-relaxed">
                  Designed a unified Next.js multi-tenant platform with Supabase PostgreSQL. Enforced strict Row-Level Security (RLS) for tenant data isolation, real-time WebSocket attendance updates, and automated PDF transcript generation.
                </p>
              </div>
            </div>

            {/* Schematic Node Architecture */}
            <div className="p-6 bg-navy-dark border border-navy-border">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-paper-muted uppercase tracking-wider">
                  SYSTEM ARCHITECTURE DIAGRAM // MULTI-TENANT EDGE ROUTING
                </span>
                <span className="font-mono text-[10px] text-gold-base">RLS POLICIES: 42 ENFORCED</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-center font-mono text-xs py-4">
                <div className="p-4 bg-navy-card border border-gold-base/30 blueprint-corner">
                  <span className="text-gold-base block font-bold mb-1">EDGE MIDDLEWARE</span>
                  <span className="text-paper-muted text-[11px]">Tenant Subdomain & Token Auth</span>
                </div>
                <div className="p-4 bg-navy-card border border-navy-border">
                  <span className="text-gold-base block font-bold mb-1">SUPABASE POSTGRES</span>
                  <span className="text-paper-muted text-[11px]">RLS Isolation + Realtime Channels</span>
                </div>
                <div className="p-4 bg-navy-card border border-navy-border">
                  <span className="text-gold-base block font-bold mb-1">SERVER ACTIONS</span>
                  <span className="text-paper-muted text-[11px]">Optimistic Grade & Fee Mutators</span>
                </div>
                <div className="p-4 bg-navy-card border border-gold-base/50 blueprint-corner">
                  <span className="text-gold-base block font-bold mb-1">PDF ENGINE</span>
                  <span className="text-paper-muted text-[11px]">Background Transcript Generation</span>
                </div>
              </div>
            </div>

            {/* Key Technical Decisions */}
            <div>
              <h4 className="font-heading text-lg font-bold text-paper-white mb-4">
                Key Technical Decisions & Trade-Offs
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-sans text-sm">
                <div className="p-4 bg-navy-card/40 border border-navy-border/60">
                  <span className="font-mono text-xs text-gold-base font-bold block mb-1">
                    1. PostgreSQL Row-Level Security (RLS)
                  </span>
                  <p className="text-paper-muted text-xs">
                    Enforced multi-tenant isolation directly at the database layer rather than application code, preventing accidental cross-tenant data leaks.
                  </p>
                </div>
                <div className="p-4 bg-navy-card/40 border border-navy-border/60">
                  <span className="font-mono text-xs text-gold-base font-bold block mb-1">
                    2. Realtime WebSocket Event Subscriptions
                  </span>
                  <p className="text-paper-muted text-xs">
                    Enabled instant attendance and grade publishing across faculty and student portals without expensive database polling interval loops.
                  </p>
                </div>
              </div>
            </div>

            {/* Live Interactive Demo Widget */}
            <div className="p-6 bg-navy-dark border border-gold-base/30 blueprint-corner">
              <div className="flex items-center justify-between mb-4 border-b border-navy-border pb-3">
                <span className="font-mono text-xs text-gold-base font-bold uppercase flex items-center gap-2">
                  <Layers className="w-4 h-4" /> MULTI-TENANT ROLE PERSPECTIVE SWITCHER
                </span>
                <span className="font-mono text-[10px] text-paper-muted">INTERACTIVE DEMO</span>
              </div>

              <div className="flex gap-2 mb-4 font-mono text-xs">
                <button
                  onClick={() => setCollegeRole("admin")}
                  className={`px-3 py-1.5 border ${
                    collegeRole === "admin"
                      ? "bg-gold-base text-navy-dark font-bold border-gold-bright"
                      : "bg-navy-card text-paper-muted border-navy-border"
                  }`}
                >
                  ADMIN VIEW
                </button>
                <button
                  onClick={() => setCollegeRole("faculty")}
                  className={`px-3 py-1.5 border ${
                    collegeRole === "faculty"
                      ? "bg-gold-base text-navy-dark font-bold border-gold-bright"
                      : "bg-navy-card text-paper-muted border-navy-border"
                  }`}
                >
                  FACULTY VIEW
                </button>
                <button
                  onClick={() => setCollegeRole("student")}
                  className={`px-3 py-1.5 border ${
                    collegeRole === "student"
                      ? "bg-gold-base text-navy-dark font-bold border-gold-bright"
                      : "bg-navy-card text-paper-muted border-navy-border"
                  }`}
                >
                  STUDENT VIEW
                </button>
              </div>

              <div className="p-4 bg-navy-card border border-navy-border font-mono text-xs space-y-3">
                <div className="flex justify-between text-[10px] text-gold-base">
                  <span>ACTIVE ROLE: {collegeRole.toUpperCase()}</span>
                  <span>ENFORCED RLS SCOPE: tenant_id = 'fast_campus_01'</span>
                </div>

                {collegeRole === "admin" && (
                  <div className="space-y-2 text-paper-white">
                    <p className="text-xs">System Status: 1,420 Active Student Sessions</p>
                    <div className="grid grid-cols-3 gap-2 text-[11px] text-paper-muted pt-2 border-t border-navy-border">
                      <div>Total Enrollment: 3,850</div>
                      <div>Faculty Active: 142</div>
                      <div>Tuition Collected: 98.4%</div>
                    </div>
                  </div>
                )}

                {collegeRole === "faculty" && (
                  <div className="space-y-2 text-paper-white">
                    <p className="text-xs">Course: CS-401 Advanced Software Architecture</p>
                    <div className="grid grid-cols-2 gap-2 text-[11px] text-paper-muted pt-2 border-t border-navy-border">
                      <div>Enrolled Students: 45</div>
                      <div>Midterm Grades Posted: 45/45</div>
                    </div>
                  </div>
                )}

                {collegeRole === "student" && (
                  <div className="space-y-2 text-paper-white">
                    <p className="text-xs">Student ID: 21F-8104 (GPA: 3.88)</p>
                    <div className="grid grid-cols-2 gap-2 text-[11px] text-paper-muted pt-2 border-t border-navy-border">
                      <div>Current Credits: 18</div>
                      <div>Transcript PDF Status: Verified</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Case File 03: Unit Conversion Engine */}
        {activeCase === "unit" && (
          <div className="blueprint-card p-6 sm:p-10 blueprint-corner space-y-10">
            {/* Header info */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-navy-border pb-6">
              <div>
                <span className="font-mono text-xs text-gold-base font-semibold block mb-1">
                  CASE FILE #03 // HIGH-PRECISION MATHEMATICAL ENGINE
                </span>
                <h3 className="font-heading text-2xl sm:text-4xl font-bold text-paper-white">
                  Dimensional Analysis & Unit Conversion Engine
                </h3>
              </div>
              <div className="flex items-center gap-3">
                <span className="tech-tag">Python</span>
                <span className="tech-tag">FastAPI</span>
                <span className="tech-tag">Exact Rational Math</span>
                <span className="tech-tag">REST API</span>
              </div>
            </div>

            {/* Problem & Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 bg-navy-dark/80 border border-navy-border/80">
                <h4 className="font-mono text-xs text-gold-base uppercase tracking-wider mb-2 flex items-center gap-2">
                  <Terminal className="w-4 h-4" /> THE CLIENT PROBLEM
                </h4>
                <p className="font-sans text-paper-muted text-sm leading-relaxed">
                  Engineering simulation workflows suffered from accumulated floating-point rounding errors when converting values across complex multi-variable dimensions (pressure, dynamic viscosity, flow rates). Standard floating-point arithmetic created catastrophic drift in down-stream calculations.
                </p>
              </div>

              <div className="p-6 bg-navy-dark/80 border border-navy-border/80">
                <h4 className="font-mono text-xs text-gold-base uppercase tracking-wider mb-2 flex items-center gap-2">
                  <Cpu className="w-4 h-4" /> THE ARCHITECTURAL SOLUTION
                </h4>
                <p className="font-sans text-paper-muted text-sm leading-relaxed">
                  Developed a unit conversion service using Python exact decimal math and modular unit scaling. Ensures zero cumulative floating-point rounding loss across multi-step unit conversions.
                </p>
              </div>
            </div>

            {/* Schematic Node Architecture */}
            <div className="p-6 bg-navy-dark border border-navy-border">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-paper-muted uppercase tracking-wider">
                  SYSTEM ARCHITECTURE DIAGRAM // UNIT CONVERSION PIPELINE
                </span>
                <span className="font-mono text-[10px] text-gold-base">PRECISION: EXACT DECIMAL</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-center font-mono text-xs py-4">
                <div className="p-4 bg-navy-card border border-gold-base/30 blueprint-corner">
                  <span className="text-gold-base block font-bold mb-1">01. INPUT PARSER</span>
                  <span className="text-paper-muted text-[11px]">Input Value & Unit Validation</span>
                </div>
                <div className="p-4 bg-navy-card border border-navy-border">
                  <span className="text-gold-base block font-bold mb-1">02. BASE CONVERSION</span>
                  <span className="text-paper-muted text-[11px]">Canonical Unit Normalization</span>
                </div>
                <div className="p-4 bg-navy-card border border-navy-border">
                  <span className="text-gold-base block font-bold mb-1">03. EXACT MATH</span>
                  <span className="text-paper-muted text-[11px]">Rational Multiplicative Scaling</span>
                </div>
                <div className="p-4 bg-navy-card border border-gold-base/50 blueprint-corner">
                  <span className="text-gold-base block font-bold mb-1">04. OUTPUT</span>
                  <span className="text-paper-muted text-[11px]">Target Unit Formatted Result</span>
                </div>
              </div>
            </div>

            {/* Live Interactive Unit Conversion Widget */}
            <div className="p-6 bg-navy-dark border border-gold-base/30 blueprint-corner">
              <div className="flex items-center justify-between mb-4 border-b border-navy-border pb-3">
                <span className="font-mono text-xs text-gold-base font-bold uppercase flex items-center gap-2">
                  <Calculator className="w-4 h-4" /> LIVE DIMENSIONAL CONVERSION WIDGET
                </span>
                <span className="font-mono text-[10px] text-paper-muted">INTERACTIVE DEMO</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="font-mono text-[11px] text-paper-muted block mb-1">VALUE</label>
                  <input
                    type="number"
                    value={unitVal}
                    onChange={(e) => setUnitVal(Number(e.target.value))}
                    className="w-full px-3 py-2 bg-navy-card border border-navy-border text-paper-white font-mono text-xs focus:outline-none focus:border-gold-base"
                  />
                </div>
                <div>
                  <label className="font-mono text-[11px] text-paper-muted block mb-1">FROM UNIT</label>
                  <select
                    value={unitFrom}
                    onChange={(e) => setUnitFrom(e.target.value as any)}
                    className="w-full px-3 py-2 bg-navy-card border border-navy-border text-paper-white font-mono text-xs focus:outline-none focus:border-gold-base"
                  >
                    <option value="PSI">PSI (Pounds / Sq Inch)</option>
                    <option value="Bar">Bar (Barometric)</option>
                    <option value="KPa">KPa (Kilopascals)</option>
                  </select>
                </div>
                <div>
                  <label className="font-mono text-[11px] text-paper-muted block mb-1">TO UNIT</label>
                  <select
                    value={unitTo}
                    onChange={(e) => setUnitTo(e.target.value as any)}
                    className="w-full px-3 py-2 bg-navy-card border border-navy-border text-paper-white font-mono text-xs focus:outline-none focus:border-gold-base"
                  >
                    <option value="Bar">Bar (Barometric)</option>
                    <option value="PSI">PSI (Pounds / Sq Inch)</option>
                    <option value="KPa">KPa (Kilopascals)</option>
                  </select>
                </div>
              </div>

              <div className="p-4 bg-navy-card border border-navy-border font-mono text-xs flex items-center justify-between">
                <div>
                  <span className="text-paper-muted block text-[10px]">CONVERTED EXACT RESULT:</span>
                  <span className="text-gold-base text-lg font-bold">
                    {convertUnits(unitVal, unitFrom, unitTo)} {unitTo}
                  </span>
                </div>
                <div className="text-right text-[10px] text-paper-muted">
                  <span>DIMENSION: [M¹ L⁻¹ T⁻²]</span>
                  <span className="block text-gold-base">PRECISION: EXACT RATIONAL</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
