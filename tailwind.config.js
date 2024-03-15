/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F9C80E",
        softly: {
          100: "#FFFFFF",
          200: "#FFFAF0",
          300: "#C0C0C0",
        },
      },
    },
  },
  plugins: [],
};
