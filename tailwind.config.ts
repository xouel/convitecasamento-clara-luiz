import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FAF6F0",
        primary: {
          DEFAULT: "#6B3F2A",
          hover: "#542F1E",
          active: "#542F1E",
        },
        accent: {
          DEFAULT: "#B88A6A",
          light: "#E4D5C3",
        },
        envelope: {
          DEFAULT: "#F1E7DB",
          dark: "#E4D5C3",
        },
        secondary: "#72655D",
        weddingText: "#3A2A22",
      },
      fontFamily: {
        "great-vibes": ["var(--font-great-vibes)", "cursive"],
        playfair: ["var(--font-playfair)", "serif"],
        montserrat: ["var(--font-montserrat)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        display: ["var(--font-great-vibes)", "cursive"],
      },
      boxShadow: {
        "stationery-sm": "0 2px 8px -1px rgba(107, 63, 42, 0.08), 0 1px 3px -1px rgba(107, 63, 42, 0.05)",
        "stationery-md": "0 10px 25px -3px rgba(107, 63, 42, 0.09), 0 4px 10px -2px rgba(107, 63, 42, 0.05)",
        "stationery-lg": "0 20px 35px -5px rgba(107, 63, 42, 0.12), 0 8px 16px -4px rgba(107, 63, 42, 0.06)",
        "stationery-button": "0 6px 16px -2px rgba(107, 63, 42, 0.25), 0 2px 6px -1px rgba(107, 63, 42, 0.15)",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
