"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Compass, Menu, X, Mail } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/services", label: "SERVICES" },
    { href: "/process", label: "HOW WE WORK" },
    { href: "/about", label: "ABOUT US" },
    { href: "/contact", label: "CONTACT" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200 py-3 shadow-md"
          : "bg-white/80 backdrop-blur-sm py-4 border-b border-slate-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Emblem & Wordmark with Favicon */}
          <Link href="/" className="flex items-center gap-3 group focus:outline-none">
            <div className="relative w-9 h-9 flex items-center justify-center bg-slate-900 border border-gold-base blueprint-corner shadow-sm overflow-hidden p-0.5">
              <img src="/icon.png" alt="Averroes Labs Favicon" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-lg tracking-tight text-slate-900 group-hover:text-gold-base transition-colors leading-none">
                AVERROES <span className="text-gold-base font-light">LABS</span>
              </span>
              <span className="font-mono text-[9px] text-slate-500 tracking-wider uppercase mt-0.5 font-semibold">
                BUILDING INTELLIGENCE. SHAPING TOMORROW.
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 ml-auto">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-mono text-xs tracking-wider transition-colors ${
                    isActive
                      ? "text-slate-900 font-bold underline underline-offset-8 decoration-gold-base"
                      : "text-slate-600 hover:text-slate-900 font-medium"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-mono text-xs font-bold uppercase transition-all blueprint-corner shadow-sm"
            >
              <Mail className="w-3.5 h-3.5 text-gold-base" />
              <span>GET IN TOUCH</span>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-700 hover:text-gold-base focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/98 border-b border-slate-200 backdrop-blur-lg px-4 pt-4 pb-6 space-y-4">
          <nav className="flex flex-col gap-3 font-mono text-xs pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`p-2 border-b border-slate-100 ${
                  pathname === link.href ? "text-slate-900 font-bold" : "text-slate-700 hover:text-gold-base"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
