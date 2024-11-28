import tailwindColors from 'tailwindcss/colors';

const primaryPalette = { ...tailwindColors.blue, 500: "#479AEA" }
const colors = {
  primary: {
    ...primaryPalette,
    DEFAULT: primaryPalette[500],
  },
  secondary: {
    ...tailwindColors.neutral,
    DEFAULT: tailwindColors.neutral[200],
  },
  background: tailwindColors.neutral[100],
}

export default colors
