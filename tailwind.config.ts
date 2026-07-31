import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          darkest: "#070D18",
          dark: "#0F172A",
          surface: "#1E293B",
          card: "#0B132B",
          border: "#334155",
          hover: "#1E293B",
          text: "#0F172A",
        },
        gold: {
          muted: "rgba(201, 162, 39, 0.15)",
          border: "rgba(201, 162, 39, 0.35)",
          base: "#C9A227",
          bright: "#D4AF37",
          glow: "#FFD700",
        },
        cyan: {
          base: "#0284C7",
          bright: "#38BDF8",
          muted: "rgba(2, 132, 199, 0.1)",
          border: "rgba(2, 132, 199, 0.3)",
        },
        paper: {
          white: "#FFFFFF",
          bg: "#F8FAFC",
          card: "#FFFFFF",
          border: "#E2E8F0",
          muted: "#475569",
          subtle: "#64748B",
        },
      },
      fontFamily: {
        sans: ["var(--font-ibm-sans)", "sans-serif"],
        heading: ["var(--font-space-grotesk)", "sans-serif"],
        mono: ["var(--font-ibm-mono)", "monospace"],
      },
      backgroundImage: {
        'blueprint-grid': "radial-gradient(circle, rgba(15,23,42,0.08) 1px, transparent 1px)",
        'schematic-lines': "linear-gradient(to right, rgba(226,232,240,0.8) 1px, transparent 1px), linear-gradient(to bottom, rgba(226,232,240,0.8) 1px, transparent 1px)",
      },
      animation: {
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'trace-line': 'traceLine 4s ease-in-out infinite',
        'scan': 'scanLine 8s linear infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', filter: 'drop-shadow(0 0 4px rgba(201,162,39,0.3))' },
          '50%': { opacity: '1', filter: 'drop-shadow(0 0 12px rgba(201,162,39,0.8))' },
        },
        traceLine: {
          '0%': { strokeDashoffset: '1000' },
          '50%': { strokeDashoffset: '0' },
          '100%': { strokeDashoffset: '-1000' },
        },
        scanLine: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        }
      }
    },
  },
  plugins: [],
};

export default config;
