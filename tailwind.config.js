/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        play: ["'Fredoka'", "cursive"],
      },
      colors: {
        'brand-yellow': '#dbf112',
        'brand-fucsia': "#B00076",
        'brand-azzurro' : "#00CFFF", // Azzurro fresco
        'brand-lime' : "#A2FF00", // Verde lime
        'brand-rosa' : "#FF4ECB", // Rosa
        'brand-dark' : "#0F0F0F", // Nero
      },

    },
  },
  plugins: [],
};
