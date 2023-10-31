/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-color": "var(--main-color)",
        "sec-color": "var(--sec-color)",
        "third-color": "var(--third-color)"
      },
    },
  },
  plugins: [],
};