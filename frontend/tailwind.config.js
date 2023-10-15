/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ["ui-serif", "Georgia", "Cambria", "Times New Roman", "Times", "serif"],
      },
    },
  },
  plugins: [],
}