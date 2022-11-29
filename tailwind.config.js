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
        gray: '#4B4A4E',
        purple: '#8873EF',
        lightpurple: '#b097ff',
      },
    },
  },
  plugins: [],
}
