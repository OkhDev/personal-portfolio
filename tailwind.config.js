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
				purple: "#8873EF",
				offwhite: "#EDEDED",
			},
		},
	},
	plugins: [],
}
