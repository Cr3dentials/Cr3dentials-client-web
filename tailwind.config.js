import withMT from '@material-tailwind/react/utils/withMT'

/** @type {import('tailwindcss').Config} */
export default withMT({
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      white: '#fff',
      black: '#0E0E0E',
      primary: {
        0: '#4B56E3',
      },
      gray: {
        25: '#A8AEBF',
        100: '#F5F6FA',
        200: '#F4F5FD',
        300: '#EBEDF0',
        400: '#C8CCD9',
        800: '#333743',
        1000: '#000000',
      },
      success: '#12B76A',
      danger: {
        100: '#F5222D',
      },
      warn: '#F3A712',
      secondary: '#475467',
    },
    fontFamily: {
      manrope: ['Manrope', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
})
