/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        bgLoki: "url('./assets/images/loki2.jpg')",
      }
    },
  },
  plugins: [],
}