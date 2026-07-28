"use client";

import React, { useState } from "react";
import { Mail, Clock, Send, CheckCircle2, AlertTriangle, Terminal, ArrowUpRight, ExternalLink, Globe, Github, Linkedin, BookOpen, Code2 } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    projectType: "Web Development",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [responseLog, setResponseLog] = useState<{
    success: boolean;
    intakeId?: string;
    receivedAt?: string;
    message?: string;
    error?: string;
    status?: string;
    needsActivation?: boolean;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResponseLog(null);

    let clientActivationNeeded = false;

    try {
      // 1. Direct browser submission to FormSubmit for production origin verification
      const targets = ["averroes0001@gmail.com", "mansoor.ahmed11521@gmail.com"];
      const clientFormPayload = {
        _subject: `New Project Inquiry from ${formData.name}`,
        _replyto: formData.email,
        _template: "table",
        "Client Name": formData.name,
        "Company / Organization": formData.company || "Independent",
        "Client Email": formData.email,
        "Client Phone": formData.phone,
        "Project Type": formData.projectType,
        "Project Message": formData.message,
      };

      for (const targetEmail of targets) {
        try {
          const cRes = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json",
            },
            body: JSON.stringify(clientFormPayload),
          });
          const cJson = await cRes.json().catch(() => null);
          if (cJson?.message?.includes("Activation")) {
            clientActivationNeeded = true;
          }
        } catch (cErr) {
          console.warn("Browser dispatch note:", cErr);
        }
      }

      // 2. Server API Route submission
      const res = await fetch("/api/intake", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (clientActivationNeeded) {
        data.needsActivation = true;
      }
      setResponseLog(data);

      if (data.success) {
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          projectType: "Web Development",
          message: "",
        });
      }
    } catch (err: any) {
      setResponseLog({
        success: false,
        error: "NETWORK_ERROR",
        message: "Failed to send message. Please email directly at averroes0001@gmail.com or mansoor.ahmed11521@gmail.com",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-navy-dark relative border-b border-navy-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-2 font-mono text-xs text-gold-base tracking-widest uppercase">
            <span className="px-2 py-0.5 bg-navy-card border border-gold-base/30">GET IN TOUCH</span>
            <span className="text-paper-subtle">-----------------------------</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-paper-white tracking-tight mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="font-sans text-paper-muted text-base sm:text-lg max-w-3xl">
            Fill out the form below or send us a direct email. We respond to all project inquiries within 12 business hours.
          </p>
        </div>

        {/* 2-Column Grid: Direct Info + Intake Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="blueprint-card p-6 blueprint-corner space-y-6">
              <div className="flex items-center justify-between border-b border-navy-border pb-4 font-mono text-xs">
                <span className="text-gold-base font-bold uppercase flex items-center gap-2">
                  <Mail className="w-4 h-4" /> DIRECT CONTACT EMAILS
                </span>
                <span className="text-paper-muted">VERIFIED</span>
              </div>

              {/* Email Addresses */}
              <div className="space-y-3 font-mono text-xs">
                <div className="p-3 bg-navy-dark/90 border border-gold-base/40 blueprint-corner space-y-1">
                  <span className="text-paper-muted text-[10px] uppercase font-mono block">PRIMARY EMAIL</span>
                  <a
                    href="mailto:averroes0001@gmail.com"
                    className="text-paper-white hover:text-gold-bright font-bold font-mono text-xs sm:text-sm transition-colors block break-all"
                  >
                    averroes0001@gmail.com
                  </a>
                </div>

                <div className="p-3 bg-navy-dark/90 border border-navy-border blueprint-corner space-y-1">
                  <span className="text-paper-muted text-[10px] uppercase font-mono block">SUPPORT EMAIL</span>
                  <a
                    href="mailto:mansoor.ahmed11521@gmail.com"
                    className="text-paper-white hover:text-gold-bright font-bold font-mono text-xs sm:text-sm transition-colors block break-all"
                  >
                    mansoor.ahmed11521@gmail.com
                  </a>
                </div>
              </div>

              {/* SLA Guarantee */}
              <div className="p-4 bg-navy-dark/90 border border-navy-border text-xs font-mono text-paper-muted space-y-1.5">
                <div className="flex items-center gap-2 text-gold-base font-bold">
                  <CheckCircle2 className="w-4 h-4" /> FAST RESPONSE GUARANTEE
                </div>
                <p className="font-sans text-xs">
                  All project inquiries receive a reply within 12 business hours.
                </p>
                <div className="flex justify-between text-[11px] pt-1 text-paper-subtle border-t border-navy-border/60">
                  <span>LOCATION: Karachi, Pakistan</span>
                  <span>UTC+5</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Project Contact Form */}
          <div className="lg:col-span-7">
            <div className="blueprint-card p-6 sm:p-8 blueprint-corner relative">
              <div className="flex items-center justify-between border-b border-navy-border pb-4 mb-6 font-mono text-xs">
                <span className="text-gold-base font-bold uppercase flex items-center gap-2">
                  <Terminal className="w-4 h-4" /> PROJECT CONTACT FORM
                </span>
                <span className="text-paper-muted">DIRECT MESSAGE</span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="font-mono text-xs text-paper-muted block mb-2 uppercase">
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alexander Wright"
                      className="w-full px-4 py-3 bg-navy-dark border border-navy-border text-paper-white font-sans text-sm focus:outline-none focus:border-gold-base blueprint-corner"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label className="font-mono text-xs text-paper-muted block mb-2 uppercase">
                      COMPANY / ORGANIZATION
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Nexus Tech Ltd"
                      className="w-full px-4 py-3 bg-navy-dark border border-navy-border text-paper-white font-sans text-sm focus:outline-none focus:border-gold-base blueprint-corner"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Email */}
                  <div>
                    <label className="font-mono text-xs text-paper-muted block mb-2 uppercase">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alexander@nexustech.com"
                      className="w-full px-4 py-3 bg-navy-dark border border-navy-border text-paper-white font-sans text-sm focus:outline-none focus:border-gold-base blueprint-corner"
                    />
                  </div>

                  {/* Phone / Contact Number */}
                  <div>
                    <label className="font-mono text-xs text-paper-muted block mb-2 uppercase">
                      PHONE / CONTACT NUMBER *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +1 (555) 000-0000"
                      className="w-full px-4 py-3 bg-navy-dark border border-navy-border text-paper-white font-sans text-sm focus:outline-none focus:border-gold-base blueprint-corner"
                    />
                  </div>
                </div>

                {/* Service Type */}
                <div>
                  <label className="font-mono text-xs text-paper-muted block mb-2 uppercase">
                    WHAT DO YOU NEED?
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-3 bg-navy-dark border border-navy-border text-paper-white font-sans text-sm focus:outline-none focus:border-gold-base blueprint-corner"
                  >
                    <option value="Web Development">Websites & Web Apps</option>
                    <option value="App Development">Mobile Apps (iOS / Android)</option>
                    <option value="AI & RAG Systems">Smart AI & Document Search</option>
                    <option value="Workflow Automation">Business Process Automation</option>
                    <option value="Multi-System Architecture">Custom Full Solution</option>
                  </select>
                </div>

                {/* Project Description */}
                <div>
                  <label className="font-mono text-xs text-paper-muted block mb-2 uppercase">
                    PROJECT DESCRIPTION *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your project goals, target users, and what you'd like to build..."
                    className="w-full px-4 py-3 bg-navy-dark border border-navy-border text-paper-white font-sans text-sm focus:outline-none focus:border-gold-base blueprint-corner"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 font-mono text-xs font-bold uppercase text-navy-dark bg-gold-base hover:bg-gold-bright border border-gold-bright transition-all flex items-center justify-center gap-2 blueprint-corner shadow-lg shadow-gold-base/15"
                >
                  {loading ? (
                    <>
                      <span className="w-3.5 h-3.5 border-2 border-navy-dark border-t-transparent rounded-full animate-spin"></span>
                      <span>SENDING YOUR MESSAGE...</span>
                    </>
                  ) : (
                    <>
                      <span>SEND MESSAGE</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>

              {/* Status Output */}
              {responseLog && (
                <div className="mt-6 p-4 bg-navy-dark border border-navy-border font-mono text-xs space-y-2">
                  <div className="flex items-center justify-between border-b border-navy-border pb-2 text-[10px]">
                    <span className="text-gold-base font-bold flex items-center gap-1.5">
                      {responseLog.success ? (
                        <>
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                          <span>MESSAGE SENT SUCCESSFULLY</span>
                        </>
                      ) : (
                        <>
                          <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                          <span>MESSAGE DELIVERY ERROR</span>
                        </>
                      )}
                    </span>
                    <span className="text-paper-muted">
                      {responseLog.receivedAt ? new Date(responseLog.receivedAt).toLocaleTimeString() : "TIMESTAMP"}
                    </span>
                  </div>

                  {responseLog.success ? (
                    <div className="space-y-2 text-paper-white text-xs pt-1">
                      <p className="text-gold-base font-semibold">
                        CONFIRMATION ID: {responseLog.intakeId}
                      </p>
                      {responseLog.needsActivation ? (
                        <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded text-amber-200 text-[11px] leading-relaxed space-y-1 blueprint-corner">
                          <p className="font-bold text-amber-400 flex items-center gap-1.5 font-mono text-xs">
                            <AlertTriangle className="w-4 h-4 text-amber-400" /> ONE-TIME GMAIL ACTIVATION REQUIRED
                          </p>
                          <p>
                            FormSubmit sent an activation email to <strong className="text-paper-white">averroes0001@gmail.com</strong> and <strong className="text-paper-white">mansoor.ahmed11521@gmail.com</strong>.
                          </p>
                          <p className="text-paper-muted">
                            Please open your Gmail inbox (or Spam folder) and click <strong>"Activate Form"</strong> once. After clicking that link, all form submissions will instantly land in your inbox.
                          </p>
                        </div>
                      ) : (
                        <p className="text-paper-muted text-[11px] leading-relaxed">
                          Thank you! Your inquiry has been emailed directly to <strong className="text-paper-white">averroes0001@gmail.com</strong> and <strong className="text-paper-white">mansoor.ahmed11521@gmail.com</strong>. Our team will review your message and get back to you shortly.
                        </p>
                      )}
                    </div>
                  ) : (
                    <div className="text-red-400 text-xs">
                      <p>Error: {responseLog.error}</p>
                      <p>{responseLog.message}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
