/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "nav-break": "1040px", // Custom breakpoint for navbar
      },
      colors: {
        "dark-bg": "#0a0a0b",
        "dark-secondary": "#1a1a1b",
        lavender: {
          300: "#e0d5ff",
          400: "#c7b5ff",
          500: "#a78bfa",
          600: "#8b5cf6",
          700: "#7c3aed",
        },
        "gray-light": "#e5e7eb",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.5 },
        },
      },
    },
  },
  plugins: [],
};
