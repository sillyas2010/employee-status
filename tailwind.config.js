/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0095FF',
          hover: '#0076CC',
        },
        status: {
          working: '#44D600',
          vacation: '#FF3B3B',
          lunch: '#FFB800',
          business: '#0095FF',
        },
      },
      borderRadius: {
        card: '10px',
      },
    },
  },
  plugins: [],
};
