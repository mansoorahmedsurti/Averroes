"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Compass, Menu, X, ArrowUpRight, Mail } from "lucide-react";

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
          ? "bg-navy-dark/95 backdrop-blur-md border-b border-navy-border py-3 shadow-2xl"
          : "bg-navy-dark/80 backdrop-blur-sm py-4 border-b border-navy-border/60"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Emblem & Wordmark matching the Ad */}
          <Link href="/" className="flex items-center gap-3 group focus:outline-none">
            <div className="relative w-9 h-9 flex items-center justify-center bg-navy-card border border-gold-base/60 blueprint-corner group-hover:border-gold-bright transition-colors shadow-md">
              <Compass className="w-5 h-5 text-gold-base group-hover:rotate-45 transition-transform duration-500" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-lg tracking-tight text-paper-white group-hover:text-gold-bright transition-colors leading-none">
                AVERROES <span className="text-gold-base font-light">LABS</span>
              </span>
              <span className="font-mono text-[9px] text-paper-subtle tracking-wider uppercase mt-0.5">
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
                      ? "text-gold-base font-bold underline underline-offset-8 decoration-gold-base"
                      : "text-paper-muted hover:text-paper-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-navy-card hover:bg-navy-surface border border-gold-base/40 hover:border-gold-base font-mono text-xs text-gold-base font-bold uppercase transition-all blueprint-corner"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>GET IN TOUCH</span>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-paper-muted hover:text-gold-base focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-navy-card/95 border-b border-navy-border backdrop-blur-lg px-4 pt-4 pb-6 space-y-4">
          <nav className="flex flex-col gap-3 font-mono text-xs pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`p-2 border-b border-navy-border/50 ${
                  pathname === link.href ? "text-gold-base font-bold" : "text-paper-white hover:text-gold-base"
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
