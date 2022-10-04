/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				purple: "#8873EF",
			},
		},
		fontFamily: {
			body: ["CoreSans", "sans-serif"],
		},
	},
	plugins: [],
}
