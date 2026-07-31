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
          dark: "#0B132B",
          surface: "#111E38",
          card: "#152238",
          border: "#1E2D4A",
          hover: "#26395C",
        },
        gold: {
          muted: "rgba(201, 162, 39, 0.15)",
          border: "rgba(201, 162, 39, 0.35)",
          base: "#C9A227",
          bright: "#E5C158",
          glow: "#FFD700",
        },
        cyan: {
          base: "#38BDF8",
          bright: "#7DD3FC",
          muted: "rgba(56, 189, 248, 0.15)",
          border: "rgba(56, 189, 248, 0.35)",
        },
        blueprint: {
          line: "#1E2D4A",
          grid: "#111E38",
          cyan: "#38BDF8",
          amber: "#D97706",
          emerald: "#10B981",
        },
        paper: {
          white: "#FFFFFF",
          slate: "#F8FAFC",
          muted: "#CBD5E1",
          subtle: "#94A3B8",
        },
      },
      fontFamily: {
        sans: ["var(--font-ibm-sans)", "sans-serif"],
        heading: ["var(--font-space-grotesk)", "sans-serif"],
        mono: ["var(--font-ibm-mono)", "monospace"],
      },
      backgroundImage: {
        'blueprint-grid': "radial-gradient(circle, rgba(56,189,248,0.12) 1px, transparent 1px)",
        'schematic-lines': "linear-gradient(to right, rgba(30,49,77,0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(30,49,77,0.3) 1px, transparent 1px)",
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
