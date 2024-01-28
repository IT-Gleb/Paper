/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,vue}"],
  theme: {
    extend: {
      screens: {
        sm: "576px",
        md: "768px",
        lg: "1440px",
      },
      colors: {
        col1: {
          100: "#7875FE",
          200: "#DAD9FB",
          300: "#7B61FF",
          400: "#4946B4",
          500: "#D1D1E5",
          550: "#B5B5BD",
          600: "#EBEBEB",
          650: "#BCBCBC",
          700: "#85859B",
          750: "#C0C0C0",
          800: "#4C5866",
          850: "#DDDDDD",
          900: "#333333",
          950: "#666666",
        },
      },
    },
    fontFamily: {
      ubuntu: ["Ubuntu", "Ubuntu-Bold"],
      roboto: ["Roboto", "Roboto-Light", "Roboto-Bold"],
    },
  },
  plugins: [],
};
