import type { Config } from "tailwindcss";

/**
 * Design system — Mesón Alegría (premium editorial / late-checkout fusion)
 *
 *  cream         → warm Andalusian whitewash, slightly peachy
 *  terracotta    → Fajalauza pottery, Alhambra walls — primary accent
 *  granada       → the official #00a376, kept as secondary
 *  oro / wood    → gilt frames & rodapié (atmosphere)
 *  ink           → text, never pure black
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx,js,jsx,mdx}"],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#f3e7d2",
          light: "#fbf4e4",
          50: "#fbf4e4",
          100: "#f6ecd9",
          200: "#f1e3c8",
          300: "#e8d6b1",
          400: "#dcc290",
        },
        bone: {
          50: "#fffaf2",
          100: "#fbf5e9",
          200: "#f3ead6",
          300: "#e8dcbe",
          400: "#d6c89e",
        },
        terracotta: {
          50: "#fbeee6",
          100: "#f4d8c5",
          200: "#e9b394",
          300: "#dc8d65",
          400: "#cb6c44",
          500: "#b8503d", // primary accent
          600: "#9a3f30",
          700: "#7d3326",
          800: "#5c2820",
        },
        granada: {
          50: "#e6f7f0",
          100: "#c2ebd9",
          200: "#90dab9",
          300: "#52c592",
          400: "#1eb277",
          500: "#00a376",
          600: "#008a63",
          700: "#006d4f",
          800: "#055340",
          900: "#063a2e",
        },
        wood: {
          400: "#a77c52",
          500: "#8a5c35",
          600: "#6b3f1d",
          700: "#4f2d12",
          800: "#2f1a0a",
        },
        oro: {
          200: "#f5e8c8",
          300: "#e9d4a9",
          400: "#dcb87a",
          500: "#c89a52",
          600: "#a07434",
        },
        clay: {
          400: "#d99b6a",
          500: "#bf7846",
          600: "#9b5b30",
        },
        ink: {
          900: "#1a1410",
          800: "#2a2218",
          700: "#3d3328",
          600: "#5a4d3c",
          500: "#7a6a52",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        sign: ["var(--font-sign)", "cursive"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        "8xl": ["6rem", { lineHeight: "0.95" }],
        "9xl": ["8rem", { lineHeight: "0.9" }],
        "10xl": ["10rem", { lineHeight: "0.86" }],
        "11xl": ["12rem", { lineHeight: "0.82" }],
      },
      letterSpacing: {
        ultratight: "-0.04em",
        tightish: "-0.025em",
        ember: "0.18em",
        cenefa: "0.32em",
        nav: "0.42em",
      },
      animation: {
        "slide-up": "slideUp 0.9s cubic-bezier(0.22,1,0.36,1) both",
        "fade-in": "fadeIn 1.2s ease-out both",
      },
      keyframes: {
        slideUp: {
          from: { opacity: "0", transform: "translate3d(0,36px,0)" },
          to: { opacity: "1", transform: "translate3d(0,0,0)" },
        },
        fadeIn: { from: { opacity: "0" }, to: { opacity: "1" } },
      },
      boxShadow: {
        ember:
          "0 14px 40px -12px rgba(184,80,61,0.45), 0 0 0 1px rgba(184,80,61,0.18)",
        plate: "0 30px 60px -30px rgba(75,52,35,0.45)",
        soft: "0 1px 0 rgba(255,255,255,0.6) inset, 0 18px 40px -28px rgba(75,52,35,0.35)",
        card: "0 40px 80px -40px rgba(75,52,35,0.55), 0 8px 28px -16px rgba(75,52,35,0.25)",
      },
      borderRadius: {
        card: "1.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
