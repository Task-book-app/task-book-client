import { createRenderer } from 'fela'
import theme from './theme'
import Nunito from '../fonts/Nunito/Nunito-VariableFont_wght.ttf'
import NunitoItalic from '../fonts/Nunito/Nunito-Italic-VariableFont_wght.ttf'
import Montserrat from '../fonts/Montserrat/Montserrat-VariableFont_wght.ttf'
import MontserratItalic from '../fonts/Montserrat/Montserrat-Italic-VariableFont_wght.ttf'
import { bold, poppins } from '../fonts/Poppins/poppins'


const renderer = createRenderer()

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