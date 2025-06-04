// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",         // Important for Vite projects
    "./src/**/*.{js,jsx,ts,tsx}", // Scans all JS/JSX/TS/TSX files in src/
  ],
  theme: {
    extend: {
        fontFamily: {
            inter: ['Inter', 'sans-serif'], // Defines a custom font family
        },
    },
  },
  plugins: [],
}