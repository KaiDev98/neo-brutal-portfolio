/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Neo‑Brutal Sci‑Fi palette (distinct from moord)
        bg: "#0b0f12",
        panel: "#0f1720",
        accent: "#00ffd5",
        accent2: "#ff3d81",
        stone: "#d6d6d6",
        brut: "#f6f7f8",
        warn: "#ffb84d"
      },
      boxShadow: {
        brutal: "8px 8px 0px rgba(0,0,0,0.6)"
      },
      fontFamily: {
        display: ["Inter", "ui-sans-serif", "system-ui"]
      }
    }
  },
  plugins: []
};
