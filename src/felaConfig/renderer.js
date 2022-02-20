import { createRenderer } from 'fela'
import responsiveValue from 'fela-plugin-responsive-value'
import theme from './theme'
import Nunito from '../fonts/Nunito/Nunito-VariableFont_wght.ttf'
import NunitoItalic from '../fonts/Nunito/Nunito-Italic-VariableFont_wght.ttf'
import Montserrat from '../fonts/Montserrat/Montserrat-VariableFont_wght.ttf'
import MontserratItalic from '../fonts/Montserrat/Montserrat-Italic-VariableFont_wght.ttf'
import { bold, poppins } from '../fonts/Poppins/poppins'

const getMediaQueries = (values, props) => {
   
  const { small, mediumSmall, medium, largeMedium, large, exlarge } = props.theme.breakpoints
  // we can even return different breakpoints depending on the number of passed values
  // remember the first value is always the default value
  switch (values.length) {
    case 2:
      return [large]
    case 3:
      return [small, large]
    case 4: 
      return [small, medium, large]
    case 5: 
      return [small, medium, large, exlarge]  
    default:
      return [small, mediumSmall, medium,  largeMedium, large, exlarge]
  }
}

const responsiveProps = {
  fontSize: true,
  padding: true,
  paddingLeft: true,
  paddingRight: true,
  paddingTop: true,
  paddingBottom: true,
  margin: true,
  marginLeft: true,
  marginRight: true,
  marginTop: true,
  marginBottom: true,
  width: true,
  height: true,
  position: true,
  display: true,
}

 const renderer = createRenderer({
  plugins: [responsiveValue(getMediaQueries, responsiveProps)],
})

renderer.renderStatic(theme.resetStyles)

// font-family
const nunito = renderer.renderFont('Nunito', [ Nunito, NunitoItalic ])
const montserrat = renderer.renderFont('Montserrat', [ Montserrat, MontserratItalic ])
renderer.renderFont('Poppins', poppins )
const poppinsBold = renderer.renderFont('Poppins-Bold', bold, {fontWeight :'bold'})

// send fonts in theme object to your app
theme.fontFamily = { 
  nunito, 
  montserrat,
  poppinsBold
}

export default renderer