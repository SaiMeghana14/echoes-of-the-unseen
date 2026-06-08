import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],

  theme: {
    extend: {
      colors: {
        space: "#060B17",
        nebula: "#6C63FF",
        aurora: "#4FD1FF",
        memory: "#FFD166"
      }
    }
  },

  plugins: []
};

export default config;
