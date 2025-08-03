/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Include Next.js app directory
    './pages/**/*.{js,ts,jsx,tsx}', // Include pages directory (if using pages router)
    './components/**/*.{js,ts,jsx,tsx}', // Include components directory
    './src/**/*.{js,ts,jsx,tsx}', // Include src directory (if used)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}