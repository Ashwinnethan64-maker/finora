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
        background: "#FFFFFF",
        foreground: "#111827",
        primary: {
          DEFAULT: "#3B82F6",
          dark: "#2563EB",
          light: "#60A5FA",
          subtle: "#EFF6FF",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#10B981",
          dark: "#059669",
          subtle: "#ECFDF5",
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#F59E0B",
          dark: "#D97706",
          subtle: "#FEF3C7",
          foreground: "#111827",
        },
        muted: {
          DEFAULT: "#F3F4F6",
          dark: "#E5E7EB",
          foreground: "#4B5563",
          subtle: "#9CA3AF",
        },
        border: {
          DEFAULT: "#E5E7EB",
          strong: "#D1D5DB",
          dark: "#111827",
        },
        dark: {
          DEFAULT: "#111827",
          surface: "#1F2937",
          muted: "#374151",
          foreground: "#F9FAFB",
        },
        danger: {
          DEFAULT: "#EF4444",
          subtle: "#FEF2F2",
        }
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Outfit", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Outfit", "system-ui", "sans-serif"],
      },
      borderRadius: {
        sm: "6px",
        DEFAULT: "8px",
        md: "8px",
        lg: "10px",
        xl: "12px",
        full: "9999px",
      },
      borderWidth: {
        DEFAULT: "1px",
        '2': "2px",
        '4': "4px",
      },
      boxShadow: {
        none: "none",
      }
    },
  },
  plugins: [],
}
