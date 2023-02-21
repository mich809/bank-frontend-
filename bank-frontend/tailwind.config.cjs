/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage : {
        orangeWavey : "repeating-linear-gradient( 45deg, #ed732b, #ed732b 10.5px, #e3bfab 10.5px, #e3bfab 52.5px )"
      }
    },
  },
  plugins: [],
}