/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modues/flowbite-react/lib/esm/**/*.js"
  ],
  theme: {
    extend: {
      boxShadow: '2px 2px 5px 10px rgba(0, 0, 0, 0.3)'
    },
  },
  plugins: [require('flowbite/plugin')],
}

