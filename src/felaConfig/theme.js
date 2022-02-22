// Breakpoints
const bp = {
  small: '30em', // 480px
  mediumSmall: '43.75em', // 700px
  medium: '50em', // 800px
  largeMedium: '56.25em', // 900px
  large:  '64em', // 1024px
  largeExlarge: '75em', // 1200px
  exlarge:  '100em' // 1600px
}

const theme = {
  breakpoints: {
    small: `@media (min-width: ${bp.small})`, // 480px
    mediumSmall: `@media (min-width: ${bp.mediumSmall})`, // 700px
    medium: `@media (min-width: ${bp.medium})`, // 800px
    largeMedium: `@media (min-width: ${bp.largeMedium})`, // 900px
    large: `@media (min-width: ${bp.large})`, // 1024px
    largeExlarge: `@media (min-width: ${bp.largeExlarge})`, // 1200px
    exlarge: `@media (min-width: ${bp.exlarge})`, // 1600px
  },

  //  colors
  colors:{
    black: '#4B4B4B',
    blue: '#0aa7bd',
  },

  // gradients
  gradients: {
    blueGradient: 'linear-gradient(90.17deg, #09A7BC 0.19%, #2EC0EE 99.77%)',
  },

  // box-shadow
  shadows: {
    boxShadow_1: '0 1rem 2rem rgba(0, 0, 0, 0.1)',
    boxShadow_2: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'
  }
}

export default theme

