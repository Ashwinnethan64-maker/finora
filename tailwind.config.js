/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // FINORA Centralized Semantic Color Tokens
        ember: {
          DEFAULT: "#ff5900",
          hover: "#e04e00",
          subtle: "#fff4ed",
        },
        abyss: "#000710",
        carbon: "#15191e",
        ink: "#000000",
        paper: "#ffffff",
        fog: "#f3f3f7",
        mist: "#b9bbc6",
        steel: "#8b8d98",
        pewter: "#6f737b",
        graphite: "#60646c",
        
        // Semantic mappings
        background: "#ffffff",
        foreground: "#000000",
        primary: {
          DEFAULT: "#ff5900",
          hover: "#e04e00",
          subtle: "#fff4ed",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#15191e",
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "#f3f3f7",
          foreground: "#60646c",
          subtle: "#8b8d98",
        },
        border: {
          DEFAULT: "#b9bbc6",
          light: "#e2e3ea",
          subtle: "#eceef3",
        },
        danger: {
          DEFAULT: "#dc2626",
          subtle: "#fef2f2",
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        display: ["var(--font-inter)", "Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
      },
      letterSpacing: {
        tighter: "-0.03em",
        tight: "-0.02em",
        snug: "-0.01em",
        normal: "0em",
      },
      borderRadius: {
        tag: "6px",
        sm: "6px",
        DEFAULT: "12px",
        md: "12px",
        lg: "12px",
        xl: "12px",
        card: "12px",
        input: "12px",
        btn: "12px",
        full: "9999px",
      },
      maxWidth: {
        container: "1200px",
      },
      boxShadow: {
        none: "none",
        floating: "0 8px 30px rgba(0, 0, 0, 0.08)",
      }
    },
  },
  plugins: [],
};
