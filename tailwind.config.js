/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      fontFamily: {
        inter: ["Inter"],
        poppins: ["Poppins"],
        roboto: ["Roboto"],
      },
      colors: {
        primary: "#f43f5e",
        secondary: "#64748b",
        dark: "#0f172a",
      },
      screens: {
        "2xl": "1320px",
        hp: { max: "640px" },
      },
    },
  },
  plugins: [],
};
