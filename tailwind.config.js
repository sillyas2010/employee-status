/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';
import colors from './src/client/constants/colors';
import fontSize from './src/client/constants/fontSize';
import { screens } from './src/client/constants/breakpoints';

export default {
  content: ['./index.html', './src/client/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Noto Sans', ...defaultTheme.fontFamily.sans],
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
};
