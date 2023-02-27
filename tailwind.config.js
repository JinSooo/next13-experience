/** @type {import('tailwindcss').Config} */
module.exports = {
	// darkMode: 'media',
	content: ['./app/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	// @tailwindcss/typography消除tailwindcss清除的HTML默认样式
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
	daisyui: {
		themes: ['dark', ';light'],
	},
	theme: {
		extend: {
			keyframes: {
				shimmer: {
					'100%': {
						transform: 'translateX(100%)',
					},
				},
			},
		},
	},
}
