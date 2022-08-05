/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      mobile: "320px",
      tablet: "768px",
      pc: "1024px",
    },
  },
  plugins: [],
};
