/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // For the app directory (you might want to keep this if you use any app routes)
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Add any other directories where you use Tailwind classes
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}