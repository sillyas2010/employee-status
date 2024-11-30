import tailwindColors from 'tailwindcss/colors'

const primaryPalette = { ...tailwindColors.sky, 500: '#109CF1' }
const colors = {
	primary: {
		...primaryPalette,
		DEFAULT: primaryPalette[500],
	},
	secondary: {
		...tailwindColors.gray,
		500: '#7B808D',
		DEFAULT: tailwindColors.neutral[200],
	},
	background: tailwindColors.neutral[100],
}

export default colors
