const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/component/**/*.{js,ts,jsx,tsx}',
    './src/container/**/*.{js,ts,jsx,tsx}',
    './src/lib/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      black: colors.black,
      blue: colors.blue,
      emerald: colors.emerald,
      gray: colors.gray,
      green: colors.green,
      primary: colors.sky,
      red: colors.red,
      secondary: colors.indigo,
      slate: colors.slate,
      teal: colors.teal,
      transparent: 'transparent',
      white: colors.white,
      yellow: colors.amber,
      success: '#14A44D',
      warning: '#E4A11B',
      info: '#54B4D3',
      error: '#DC4C64'
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)']
      },
      spacing: {
        72: '18rem',
        84: '21rem',
        96: '24rem'
      },
      screens: {
        xs: '480px'
      },
      backgroundImage: {
        'split-red-white': `linear-gradient(to right, ${colors.red[400]} 50%, #eee 50%);`,
        'split-white-red': `linear-gradient(to right, #eee 50%, ${colors.red[400]} 50%);`,
        'split-black-white': `linear-gradient(to right, ${colors.gray[800]} 50%, #f3f4f6 50%);`,
        'split-white-black': `linear-gradient(to right, #f3f4f6 50%, ${colors.gray[800]} 50%);`
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio')
  ]
};
