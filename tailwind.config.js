const availableColors = ["red", "emerald", "orange","purple","lime","yellow","amber","blue","violet","indigo"];
const colorSafeList = [];

availableColors.forEach((shade)=> {
    colorSafeList.push(`bg-${shade}-500/20`)
    colorSafeList.push(`fill-${shade}-500/20`)
})
/** @type {import('tailwindcss').Config} \*/
module.exports = {
    safelist: colorSafeList,
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	plugins: [require("daisyui")],
	daisyui: {
		themes: [
			{
				standard: {
					primary: "#0891b2",

					secondary: "#0d9488",

					accent: "#0891b2",

					neutral: "#202020",

					"base-100": "#101010",

					info: "#22d3ee",

					success: "#3AD97F",

					warning: "#facc15",

					error: "#991b1b",
				},
			},
		],
	},
};
