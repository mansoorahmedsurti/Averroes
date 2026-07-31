"use client";

import React from "react";

export default function SchematicCanvas() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
      <svg
        className="w-full h-full opacity-30"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="traceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C9A227" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#0F172A" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#CBD5E1" stopOpacity="0.1" />
          </linearGradient>
          
          <pattern id="gridPattern" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#E2E8F0" strokeWidth="0.8" strokeDasharray="3 3" />
            <circle cx="60" cy="0" r="1.5" fill="#0F172A" opacity="0.15" />
          </pattern>
        </defs>

        {/* Grid overlay */}
        <rect width="100%" height="100%" fill="url(#gridPattern)" />

        {/* Dynamic Circuit Traces */}
        <g stroke="url(#traceGrad)" strokeWidth="1.5" fill="none">
          {/* Main Bus 1 */}
          <path d="M 100 150 L 350 150 L 450 250 L 750 250 L 850 150 L 1100 150" strokeDasharray="6 4" />
          
          {/* Main Bus 2 */}
          <path d="M 150 450 L 300 450 L 420 570 L 680 570 L 800 450 L 1050 450" strokeWidth="1" />
          
          {/* Vertical Interconnects */}
          <path d="M 450 250 L 450 420 L 520 490" strokeDasharray="4 4" />
          <path d="M 750 250 L 750 380 L 680 450" />
        </g>

        {/* Glowing Nodes */}
        <g fill="#C9A227">
          <g className="animate-pulse">
            <circle cx="350" cy="150" r="4" />
            <circle cx="350" cy="150" r="8" fill="none" stroke="#C9A227" strokeWidth="1" opacity="0.6" />
          </g>
          
          <g className="animate-pulse" style={{ animationDelay: "1s" }}>
            <circle cx="750" cy="250" r="4" fill="#0F172A" />
            <circle cx="750" cy="250" r="10" fill="none" stroke="#0F172A" strokeWidth="1" opacity="0.3" />
          </g>

          <g className="animate-pulse" style={{ animationDelay: "2s" }}>
            <circle cx="450" cy="250" r="3.5" />
          </g>

          <g className="animate-pulse" style={{ animationDelay: "1.5s" }}>
            <circle cx="680" cy="570" r="4" fill="#0284C7" />
            <circle cx="680" cy="570" r="8" fill="none" stroke="#0284C7" strokeWidth="1" opacity="0.4" />
          </g>
        </g>

        {/* Technical Coordinate Annotations */}
        <text x="360" y="142" fill="#C9A227" fontSize="10" fontFamily="monospace" opacity="0.8">AVERROES_CORE // 0x4F</text>
        <text x="760" y="242" fill="#64748B" fontSize="10" fontFamily="monospace" opacity="0.8">RAG_VOICE_ROUTE</text>
        <text x="460" y="262" fill="#0284C7" fontSize="10" fontFamily="monospace" opacity="0.8">MOBILE_CROSS_PLATFORM</text>
      </svg>
    </div>
  );
}
