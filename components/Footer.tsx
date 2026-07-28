"use client";

import React from "react";
import Link from "next/link";
import { Shield, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-navy-darkest border-t border-navy-border py-16 relative z-10 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-navy-border/60">
          {/* Col 1: Wordmark & Emblem */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 flex items-center justify-center bg-navy-card border border-gold-base/50 blueprint-corner">
                <span className="text-xs font-bold text-gold-base">AL</span>
              </div>
              <span className="font-heading font-bold text-lg text-paper-white tracking-tight">
                AVERROES <span className="text-gold-base font-light">LABS</span>
              </span>
            </div>
            <p className="font-sans text-paper-muted text-xs leading-relaxed max-w-sm">
              Digital services company. We build modern web applications, mobile solutions, custom AI search tools, and business process automation.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-gold-base font-bold uppercase tracking-wider block text-[11px]">
              NAVIGATION & PAGES
            </span>
            <ul className="space-y-2 text-paper-muted">
              <li>
                <Link href="/services" className="hover:text-paper-white transition-colors">
                  SERVICES
                </Link>
              </li>
              <li>
                <Link href="/process" className="hover:text-paper-white transition-colors">
                  HOW WE WORK
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-paper-white transition-colors">
                  ABOUT US
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-paper-white transition-colors">
                  CONTACT US
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Technology Specs */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-gold-base font-bold uppercase tracking-wider block text-[11px]">
              BUILT WITH MODERN TECH
            </span>
            <div className="space-y-1.5 text-paper-muted text-[11px] bg-navy-card/40 p-4 border border-navy-border blueprint-corner">
              <div className="flex justify-between">
                <span>FRAMEWORK:</span>
                <span className="text-paper-white">Next.js 14 & React</span>
              </div>
              <div className="flex justify-between">
                <span>STYLING:</span>
                <span className="text-paper-white">TypeScript & Tailwind CSS</span>
              </div>
              <div className="flex justify-between">
                <span>BACKEND & AI:</span>
                <span className="text-paper-white">Python, FastAPI, Qdrant AI</span>
              </div>
              <div className="flex justify-between">
                <span>LOCATION:</span>
                <span className="text-gold-base">Karachi, Pakistan</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-paper-muted text-[11px]">
          <div>
            © {new Date().getFullYear()} AVERROES LABS. ALL RIGHTS RESERVED.
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <a href="mailto:averroes0001@gmail.com" className="hover:text-gold-base transition-colors">
              averroes0001@gmail.com
            </a>
            <span className="text-navy-border">|</span>
            <a href="mailto:mansoor.ahmed11521@gmail.com" className="hover:text-gold-base transition-colors">
              mansoor.ahmed11521@gmail.com
            </a>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-gold-base hover:text-gold-bright transition-colors ml-auto sm:ml-0"
            >
              <span>TOP</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
