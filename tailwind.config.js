/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			screens: {
				laptop: "1152px",
				sm: "375px",
			},

			fontFamily: {
				fontHeebo: ['"Heebo", "sans-serif"'],
			},

			colors: {
				primaryColor: "hsla(234, 46%, 24%, 1)",
				orangeColor: "hsla(0, 61%, 100%, 1)",
				skyBlue:     "hsla(194, 5%, 98%, 1)",
				secondaryColor: "hsla(191, 100%, 80%, 1)",
                blackColor:     "hsba(0, 0%, 0%, 1)",
				dimBlackColor: "hsla(234, 30%, 18%, 1)",
				grayColor:  "hsla(210, 14%, 58%, 1)",
				ashBlack:  "hsla(220, 60%, 20%, 1)",

			},
        

		},
	},
	plugins: [],
};

