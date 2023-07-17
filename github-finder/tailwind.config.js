/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  daisyui: {
    themes: [
      "night"
    ],
  },
  plugins: [require('daisyui')],
}

