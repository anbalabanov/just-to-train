import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    keyframes: {
      upDown: {
        "0%": { height: "0" },
        "100%": { height: "25px" },
      },
      spin: {
        "0%": { transform: "rotate(0deg)" },
        "100%": { transform: "rotate(360deg)" },
      },
    },
    animation: {
      upDown1: "upDown 0.7s infinite alternate",
      upDown2: "upDown 0.6s infinite alternate",
      upDown3: "upDown 0.9s infinite alternate",
      upDown4: "upDown 0.3s infinite alternate",
      upDown5: "upDown 0.4s infinite alternate",
      spin: "spin 1s linear infinite",
    },
  },
  plugins: [],
};
export default config;
