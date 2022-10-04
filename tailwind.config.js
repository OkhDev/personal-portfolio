/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		fontFamily: {
			body: ["CoreSans", "sans-serif"],
			header: ["Janna", "sans-serif"],
		},
		extend: {
			colors: {
				offwhite: "#EDEDED",
				flatgray: "#4B4A4E",
				flatpurple: "#8873EF",
				flatorange: "#FE481C",
				flatblue: "#5562FF",
			},
		},
	},
	plugins: [],
}
