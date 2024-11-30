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
			dropShadow: {
				gray: '-2px 5px 16px rgb(204, 204, 204, 0.4)',
				primary: '-2px 5px 16px rgba(16, 156, 241, 0.4)',
			},
		},
	},
	plugins: [],
}
