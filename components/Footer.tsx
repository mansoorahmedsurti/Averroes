"use client";

import React from "react";
import Link from "next/link";
import { Compass, ArrowUp, Mail, Phone, Globe } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-navy-darkest border-t border-navy-border py-16 relative z-10 font-mono text-xs text-paper-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-navy-border/80">
          {/* Col 1: Wordmark & Slogan matching Ad */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 flex items-center justify-center bg-slate-900 border border-gold-base blueprint-corner overflow-hidden p-0.5 shadow-sm">
                <img src="/icon.png" alt="Averroes Labs Favicon" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-lg text-paper-white tracking-tight leading-none">
                  AVERROES <span className="text-gold-base font-light">LABS</span>
                </span>
                <span className="font-mono text-[9px] text-paper-subtle tracking-wider uppercase mt-0.5">
                  BUILDING INTELLIGENCE. SHAPING TOMORROW.
                </span>
              </div>
            </div>
            <p className="font-sans text-paper-muted text-xs leading-relaxed max-w-sm">
              Smart, Scalable, AI-Powered Digital Solutions. We build cross-platform mobile apps, custom web applications, AI search engines, and business process automation.
            </p>
            <div className="pt-2 font-mono text-[11px] text-gold-base font-extrabold uppercase tracking-widest">
              INTELLIGENT SOLUTIONS. EXTRAORDINARY IMPACT.
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-gold-base font-extrabold uppercase tracking-wider block text-[11px]">
              QUICK NAVIGATION
            </span>
            <ul className="space-y-2 text-paper-muted">
              <li>
                <Link href="/" className="hover:text-paper-white transition-colors">
                  HOME
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-paper-white transition-colors">
                  OUR 5 SERVICES
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
                  GET IN TOUCH
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Ad Contact Specs */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-gold-base font-extrabold uppercase tracking-wider block text-[11px]">
              OFFICIAL CONTACT CHANNELS
            </span>
            <div className="space-y-2 text-paper-muted text-[11px] bg-navy-card/80 p-4 border border-navy-border blueprint-corner">
              <div className="flex justify-between items-center">
                <span>EMAIL:</span>
                <a href="mailto:averroes00001@gmail.com" className="text-paper-white font-bold hover:text-gold-bright">
                  averroes00001@gmail.com
                </a>
              </div>
              <div className="flex justify-between items-center">
                <span>CALL / WHATSAPP:</span>
                <a href="https://wa.me/923308472442" target="_blank" rel="noopener noreferrer" className="text-gold-base font-bold hover:underline">
                  +92 330 8472442
                </a>
              </div>
              <div className="flex justify-between items-center">
                <span>WEBSITE:</span>
                <a href="https://averroes01.vercel.app" target="_blank" rel="noopener noreferrer" className="text-cyan-base font-bold hover:underline">
                  averroes01.vercel.app
                </a>
              </div>
              <div className="flex justify-between items-center pt-1 border-t border-navy-border/60 text-paper-subtle">
                <span>LEAD DEVELOPER:</span>
                <span className="text-paper-white font-semibold">Mansoor A.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-paper-subtle text-[11px]">
          <div>
            © {new Date().getFullYear()} AVERROES LABS. ALL RIGHTS RESERVED.
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <a href="mailto:averroes00001@gmail.com" className="hover:text-gold-base transition-colors">
              averroes00001@gmail.com
            </a>
            <span className="text-navy-border">|</span>
            <a href="https://averroes01.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-base transition-colors">
              averroes01.vercel.app
            </a>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-gold-base hover:text-gold-bright transition-colors ml-auto sm:ml-0 font-bold"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
