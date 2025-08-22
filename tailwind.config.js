/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",               // 👈 important for Vite
    "./src/**/*.{js,jsx,ts,tsx}", // 👈 your React source files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
