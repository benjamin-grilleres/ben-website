/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    inset: {
      '-45': '-45px',
      '4': '4px',
      '8': '8px',
      '12': '12px',
      '16': '16px',
      '1/2': '50%'
    },
    extend: {
      screens: {
        sm: '576px',
        md: '768px',
        lg: '992px',
        ipad: '1024px',
        xl: '1200px',
        '2xl': '1440px'
      },
      colors: {
        'black': '#2E3029',
        'grey' : '#f5f5f5',
        'green': '#41b883',
        'light-blue': '#1bbcb9',
        'dark-blue': '#35495e'
      },
      fontFamily: {
        'avenir-bold': ['AvenirNextBold'],
        'avenir-regular': ['AvenirNextRegular'],
        'avenir-medium': ['AvenirNextMedium'],
      },
      backgroundSize: {
          '100': '100%'
      },
      zIndex: {
        '-1': '-1',
      },
    },
    lineHeight: {
      'none': '1',
      '18': '18px',
    },
  },
  variants: {},
  plugins: []
}
