/** @type {import('next').NextConfig} */
module.exports = {
	reactStrictMode: false,
	module: {
		rules: [
			{
				test: /\.svg$/i,
				issuer: /\.[jt]sx?$/,
				use: [{ loader: "@svgr/webpack", options: { icon: true } }],
			},
		],
	},
}
