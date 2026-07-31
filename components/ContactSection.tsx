"use client";

import React, { useState } from "react";
import { Mail, Phone, Globe, Send, CheckCircle2, AlertTriangle, Terminal, Sparkles, Shield, Cpu, MessageSquare } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    projectType: "Custom Websites & MVPs",
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
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResponseLog(null);

    try {
      const targets = ["averroes00001@gmail.com", "mansoor.ahmed11521@gmail.com"];
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
          await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json",
            },
            body: JSON.stringify(clientFormPayload),
          });
        } catch (cErr) {
          console.warn("Browser dispatch note:", cErr);
        }
      }

      const res = await fetch("/api/intake", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      setResponseLog(data);

      if (data.success) {
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          projectType: "Custom Websites & MVPs",
          message: "",
        });
      }
    } catch (err: any) {
      setResponseLog({
        success: false,
        error: "NETWORK_ERROR",
        message: "Failed to send message. Please email directly at averroes00001@gmail.com or WhatsApp +92 330 8472442",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner from Ad: WE TURN IDEAS INTO SOLUTIONS. */}
        <div className="bg-slate-900 text-white p-8 sm:p-12 mb-16 blueprint-corner border border-slate-900 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gold-base font-mono text-xs font-bold uppercase tracking-widest">
                <Sparkles className="w-4 h-4" />
                <span>AVERROES LABS STUDIO</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-5xl font-black text-white tracking-tight">
                WE TURN IDEAS <br className="hidden sm:inline" />
                <span className="text-gold-base">INTO SOLUTIONS.</span>
              </h2>
            </div>

            {/* 4 Feature Pills matching bottom of ad */}
            <div className="grid grid-cols-2 gap-3 font-mono text-xs">
              <div className="p-3 bg-slate-800 border border-slate-700 text-slate-200 flex items-center gap-2">
                <Cpu className="w-3.5 h-3.5 text-cyan-bright" />
                <span>AI-POWERED AUTOMATION</span>
              </div>
              <div className="p-3 bg-slate-800 border border-slate-700 text-slate-200 flex items-center gap-2">
                <Shield className="w-3.5 h-3.5 text-gold-base" />
                <span>SCALABLE ARCHITECTURE</span>
              </div>
              <div className="p-3 bg-slate-800 border border-slate-700 text-slate-200 flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>SECURE & RELIABLE</span>
              </div>
              <div className="p-3 bg-slate-800 border border-slate-700 text-slate-200 flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-cyan-bright" />
                <span>FUTURE-READY TECH</span>
              </div>
            </div>
          </div>
        </div>

        {/* 2-Column Grid: Direct Contact Details + Intake Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Official Contact Info from Ad */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-50 border border-slate-200 p-6 sm:p-8 blueprint-corner space-y-6">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4 font-mono text-xs">
                <span className="text-slate-900 font-extrabold uppercase flex items-center gap-2">
                  <Mail className="w-4 h-4 text-gold-base" /> DIRECT CONTACT CHANNELS
                </span>
                <span className="text-cyan-base font-bold">VERIFIED</span>
              </div>

              {/* Direct Details */}
              <div className="space-y-4 font-mono text-xs">
                {/* Email 1 */}
                <div className="p-4 bg-white border border-slate-200 blueprint-corner space-y-1">
                  <span className="text-slate-500 text-[10px] uppercase font-mono block font-bold">GET IN TOUCH (EMAIL)</span>
                  <a
                    href="mailto:averroes00001@gmail.com"
                    className="text-slate-900 hover:text-gold-base font-bold font-mono text-sm sm:text-base transition-colors block break-all"
                  >
                    averroes00001@gmail.com
                  </a>
                </div>

                {/* Phone / Call us / WhatsApp */}
                <div className="p-4 bg-white border border-slate-200 blueprint-corner space-y-1">
                  <span className="text-slate-500 text-[10px] uppercase font-mono block flex items-center gap-1 font-bold">
                    <Phone className="w-3 h-3 text-gold-base" /> CALL US / WHATSAPP
                  </span>
                  <div className="flex items-center justify-between">
                    <a
                      href="https://wa.me/923308472442"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-900 hover:text-gold-base font-bold font-mono text-sm sm:text-base transition-colors"
                    >
                      +92 330 8472442
                    </a>
                    <span className="text-slate-700 font-bold text-[11px]">Mansoor A.</span>
                  </div>
                </div>

                {/* Website URL */}
                <div className="p-4 bg-white border border-slate-200 blueprint-corner space-y-1">
                  <span className="text-slate-500 text-[10px] uppercase font-mono block flex items-center gap-1 font-bold">
                    <Globe className="w-3 h-3 text-cyan-base" /> VISIT OUR WEBSITE
                  </span>
                  <a
                    href="https://averroes01.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-base hover:underline font-bold font-mono text-sm block"
                  >
                    averroes01.vercel.app ↗
                  </a>
                </div>
              </div>

              {/* Slogan Footer Box */}
              <div className="p-4 bg-slate-900 text-white border border-slate-900 text-center space-y-1 font-mono text-xs blueprint-corner">
                <span className="text-gold-base font-extrabold uppercase tracking-wider block">
                  INTELLIGENT SOLUTIONS. EXTRAORDINARY IMPACT.
                </span>
                <span className="text-slate-300 text-[11px] block font-medium">
                  Direct lead developer access • 12-hour response SLA
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Project Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-200 p-6 sm:p-8 blueprint-corner shadow-sm relative">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-6 font-mono text-xs">
                <span className="text-slate-900 font-extrabold uppercase flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-gold-base" /> START YOUR PROJECT INQUIRY
                </span>
                <span className="text-slate-500 font-semibold">DIRECT MESSAGE</span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="font-mono text-xs text-slate-700 block mb-2 uppercase font-bold">
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alexander Wright"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 text-slate-900 font-sans text-sm focus:outline-none focus:border-slate-900 blueprint-corner"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label className="font-mono text-xs text-slate-700 block mb-2 uppercase font-bold">
                      COMPANY / ORGANIZATION
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Nexus Tech Ltd"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 text-slate-900 font-sans text-sm focus:outline-none focus:border-slate-900 blueprint-corner"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Email */}
                  <div>
                    <label className="font-mono text-xs text-slate-700 block mb-2 uppercase font-bold">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alexander@nexustech.com"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 text-slate-900 font-sans text-sm focus:outline-none focus:border-slate-900 blueprint-corner"
                    />
                  </div>

                  {/* Phone / Contact Number */}
                  <div>
                    <label className="font-mono text-xs text-slate-700 block mb-2 uppercase font-bold">
                      PHONE / WHATSAPP *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +92 330 8472442"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 text-slate-900 font-sans text-sm focus:outline-none focus:border-slate-900 blueprint-corner"
                    />
                  </div>
                </div>

                {/* Service Selection matching Ad 5 core offerings */}
                <div>
                  <label className="font-mono text-xs text-slate-700 block mb-2 uppercase font-bold">
                    SELECT CORE SERVICE *
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 text-slate-900 font-sans text-sm focus:outline-none focus:border-slate-900 blueprint-corner"
                  >
                    <option value="Mobile Apps Cross Platform">1. Mobile Apps Cross Platform (Flutter / React Native)</option>
                    <option value="Custom Websites & MVPs">2. Custom Websites & MVPs (Next.js / Postgres)</option>
                    <option value="RAG Voice & Automation">3. RAG Voice & Automation (Yapi / Retell / Bland.ai)</option>
                    <option value="Custom RAG Pipelines">4. Custom RAG Pipelines (FastAPI / Qdrant / OpenAI)</option>
                    <option value="Workflow Automation">5. Workflow Automation (n8n / Make / Zapier)</option>
                    <option value="Full Stack Custom Solution">Custom Combined Full Solution</option>
                  </select>
                </div>

                {/* Project Description */}
                <div>
                  <label className="font-mono text-xs text-slate-700 block mb-2 uppercase font-bold">
                    PROJECT DETAILS *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your project goals, timelines, and expected outcomes..."
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 text-slate-900 font-sans text-sm focus:outline-none focus:border-slate-900 blueprint-corner"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 font-mono text-xs font-extrabold uppercase text-white bg-slate-900 hover:bg-slate-800 border border-slate-900 transition-all flex items-center justify-center gap-2 blueprint-corner shadow-md"
                >
                  {loading ? (
                    <>
                      <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      <span>SENDING INQUIRY...</span>
                    </>
                  ) : (
                    <>
                      <span>SUBMIT INQUIRY</span>
                      <Send className="w-4 h-4 text-gold-base" />
                    </>
                  )}
                </button>
              </form>

              {/* Status Output */}
              {responseLog && (
                <div className="mt-6 p-4 bg-slate-50 border border-slate-200 font-mono text-xs space-y-2">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-2 text-[10px]">
                    <span className="text-slate-900 font-bold flex items-center gap-1.5">
                      {responseLog.success ? (
                        <>
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          <span>MESSAGE SENT SUCCESSFULLY</span>
                        </>
                      ) : (
                        <>
                          <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                          <span>MESSAGE DELIVERY NOTE</span>
                        </>
                      )}
                    </span>
                    <span className="text-slate-500">
                      {responseLog.receivedAt ? new Date(responseLog.receivedAt).toLocaleTimeString() : "NOW"}
                    </span>
                  </div>

                  {responseLog.success ? (
                    <div className="space-y-1 text-slate-900 text-xs pt-1">
                      <p className="text-slate-900 font-bold">
                        CONFIRMATION ID: {responseLog.intakeId}
                      </p>
                      <p className="text-slate-600 text-[11px] leading-relaxed">
                        Thank you! Your project request has been dispatched to <strong className="text-slate-900">averroes00001@gmail.com</strong>. Founder Mansoor Ahmed will respond within 12 business hours.
                      </p>
                    </div>
                  ) : (
                    <div className="text-red-600 text-xs">
                      <p>Note: {responseLog.message}</p>
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
