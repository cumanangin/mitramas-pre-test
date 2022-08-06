/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        logo: "1.95px 1.95px 2.6px rgba(0, 0, 0, 0.15)",
      },
    },
    screens: {
      mobile: "320px",
      tablet: "768px",
      pc: "1024px",
    },
  },
  plugins: [],
};
