// Breakpoints
const bp = {
  small: '30em', // 480px
  mediumSmall: '43.75em', // 700px
  medium: '50em', // 800px
  largeMedium: '56.25em', // 900px
  large:  '64em', // 1024px
  exlarge:  '112.5em', // 1800px
}

const theme = {
  breakpoints: {
    small: `@media only screen and (min-width: ${bp.small})`, // 480px
    mediumSmall: `@media only screen and (min-width: ${bp.mediumSmall})`, // 700px
    medium: `@media only screen and (min-width: ${bp.medium})`, // 800px
    largeMedium: `@media only screen and (min-width: ${bp.largeMedium})`, // 900px
    large: `@media only screen and (min-width: ${bp.large})`, // 1024px
    exlarge: `@media only screen and (min-width: ${bp.exlarge})`, // 1800px
  },

  resetStyles : `*,
    *::before,
    *::after {
     margin:0;
     padding:0;
     box-sizing: inherit;
   }

   html {
     box-sizing: border-box;
     font-size: 62.5%;
     font-family: 'Poppins';

     color: #4B4B4B;
   }
   `,

  //  colors
  colors:{
    black: '#4B4B4B',
    blue: '#0aa7bd',
  },

  // gradients
  gradients: {
    blueGradient: 'linear-gradient(90.17deg, #09A7BC 0.19%, #2EC0EE 99.77%)',
  }

}

export default theme

