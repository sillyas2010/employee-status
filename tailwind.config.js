/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'
import { screens } from './src/client/constants/breakpoints'
import colors from './src/client/constants/colors'
import fontSize from './src/client/constants/fontSize'

export default {
	content: ['./index.html', './src/client/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Noto Sans', ...defaultTheme.fontFamily.sans],
				madet: ['Madet', ...defaultTheme.fontFamily.sans],
			},
			fontSize,
			borderRadius: {
				button: '0.325rem',
			},
			colors,
			screens,
			maxWidth: {
				container: '80rem',
			},
			width: {
				container: '80rem',
			},
		},
	},
	plugins: [],
}
