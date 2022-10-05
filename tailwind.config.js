/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		fontFamily: {
			body: ["CoreSans", "sans-serif"],
			header: ["GalanoGrotesque", "sans-serif"],
		},
		height: (theme) => ({
			auto: "auto",
			...theme("spacing"),
			full: "100%",
			screen: "calc(var(--vh) * 100)",
		}),
		extend: {
			colors: {
				offwhite: "#F6F6F6",
				flatgray: "#4B4A4E",
				flatpurple: "#8873EF",
				flatorange: "#FE481C",
				flatblue: "#5562FF",
			},
		},
	},
	plugins: [],
}
