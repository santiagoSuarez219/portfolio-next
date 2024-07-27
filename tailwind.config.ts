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
        secondary: "#04B4E0",
        "bakground-color": "#F2F7F9",
        "icon-color": "#B5B6B7",
        "title-color": "#222222",
        "subtitles-color": "#888888",
        "text-color": "#555555",
      },
      boxShadow: {
        layout: "0 0 100px -5px rgba(0, 0, 0, 0.25)",
        button: "0 10px 10px rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [],
};
export default config;
