/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'lg': '0px 10px 15px -3px rgb(0 0 0 / 0.1), 0px 4px 6px -4px rgb(0 0 0 / 0.1)',
      },
    },
    plugins: [],
  }
}