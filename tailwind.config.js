/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#25435F',
        'dart-blue-primary': '#DFEEFC',
        'dart-blue-secondary': '#C8DBED',
        'dart-blue-tertiary': '#EDF6FE',
        'dart-red-primary': '#A8140F',
        'dart-red-secondary': '#FAE9E9',
        'dart-dark-primary': '#0F1E3A',
        'dart-table-blue': '#1F58AE',
        'dart-table-green': '#1F94AE',
        'dart-table-bg': '#F8FCFF',
      },
      lineHeight: {
        112: '112%',
        133: '133%',
        143: '143%',
      },
      screens: {
        desktop: '1440px',
        content: '940px',
      },
      borderRadius: {
        10: '10px',
      },
      boxShadow: {
        'dart-card': '0px 15px 30px rgba(37, 67, 95, 0.1)',
      },
    },
  },
  plugins: [],
}
