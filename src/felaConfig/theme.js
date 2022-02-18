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
     font-family: 'Nunito', sans-serif;
   }
   `,
}

export default theme

