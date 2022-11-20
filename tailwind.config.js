/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        "425" : "repeat(4, 25%)"
      },
      gridTemplateRows: {
        "48" : "1fr 48px 48px 48px 48px 48px"
      },
    },
  },
  plugins: [],
}
