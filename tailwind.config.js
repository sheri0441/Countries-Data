/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'nunito' : ['Nunito Sans', 'sans-serif'],
      },
      colors: {
        'whiteBG' : 'hsl(0, 0%, 98%)',
        'blackTX' : 'hsl(200, 15%, 8%)',
        'grayIN'  : 'hsl(0, 0%, 52%)',
        'whiteN'  : 'hsl(0, 0%, 100%)',
        'VDGrayBG' : 'hsl(207, 26%, 17%)',
        'darkG' : 'hsl(209, 23%, 22%)',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
