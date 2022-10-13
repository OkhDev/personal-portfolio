/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      header: ['GalanoGrotesque', 'sans-serif'],
      body: ['CoreSans', 'sans-serif'],
    },
    extend: {
      colors: {
        offwhite: '#F6F6F6',
        flatblack: '#313639',
        flatgray: '#4B4A4E',
        flatpurple: '#8873EF',
        lightpurple: '#b097ff',
        flatorange: '#FE481C',
        flatblue: '#5562FF',
      },
    },
  },
  plugins: [],
}
