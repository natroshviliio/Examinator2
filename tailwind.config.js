/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: '2px 2px 5px 10px rgba(0, 0, 0, 0.3)'
    },
  },
  plugins: [],
}

