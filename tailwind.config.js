/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        fantasy: "#F3E5D8",
        lavenderBlush: "#fff4fa",
      },
      textColor: {
        raspberry: "#872657",
        nutmeg: "#744B3D",
      },
      fontFamily: {
        YoungSerif: ["Young Serif"],
        OutfitParagraph: ["Outfit"],
      },
      fontSize: {
        title: "2rem",
        paragraph: "1.5rem",
      },
      spacing: {
        // No left padding
        pnl: "1.6rem 1.6rem 1.6rem 0",
      },
      borderRadius: {
        lg: "1.5rem",
        md: "0.7rem",
      },
      padding: {
        7: "2.5rem",
      },
    },
  },
  plugins: [],
};
