/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        marker: ['"Permanent Marker"', 'cursive'],
        satoshi: ['"Satoshi"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

