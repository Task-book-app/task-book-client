// import React from 'react'
import logo from '../../images/spiral/logo-spiral.svg'
import { useFela } from 'react-fela'

const rules = () => ({
  width: '100%',
  zIndex:'-1'
})

 const SpiralBackground = () => {
  const { css } = useFela()
  return (
    <img 
      src={logo} alt="spiral" 
      className={css(rules)}
    />
  )
}

export default SpiralBackground
