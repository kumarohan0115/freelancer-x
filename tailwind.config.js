/** @type {import('tailwindcss').Config} */
// import { colors } from "tailwindcss/defaultTheme";
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      }
    },
    colors: {
      ...colors,
      text: "#ffffff",
      social_link_hover_color: "#CCA700",
      a_hover_color:"#616161",
      bg_color:"#1c1c1c",
      shadow_color:"#c3c3c3",
      alpa_bg_color:"#1c1c1c34"
    }
  },
  plugins: [],
}