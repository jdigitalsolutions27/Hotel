import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#152132",
        sand: "#f8f4ef",
        pearl: "#f5f8fb",
        amber: {
          50: "#fff8eb",
          100: "#fdebc7",
          200: "#f8d58b",
          300: "#f0be4f",
          400: "#e5a927",
          500: "#cb8f1b",
          600: "#a06f14",
        },
      },
      boxShadow: {
        luxe: "0 20px 60px -28px rgba(20, 30, 45, 0.45)",
      },
      fontFamily: {
        heading: ["var(--font-playfair)", "serif"],
        body: ["var(--font-manrope)", "sans-serif"],
      },
      backgroundImage: {
        "grain-light":
          "radial-gradient(circle at 20% 10%, rgba(255,255,255,0.14), transparent 45%), radial-gradient(circle at 80% 90%, rgba(255,255,255,0.08), transparent 40%)",
      },
    },
  },
  plugins: [],
};

export default config;
