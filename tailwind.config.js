/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        space: "#060B17",
        nebula: "#6C63FF",
        aurora: "#4FD1FF",
        memory: "#FFD166",
      },
    },
  },
  plugins: [],
};
