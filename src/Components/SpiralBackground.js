import React from 'react'
import mediumSpiral from '../images/spiral/logo-spiral.svg'
// import logo from '../images/spiral/logo-spiral.svg'
import { useFela } from 'react-fela'

const rule = ({display, position, height, left, right, bottom}) => ({
  position,
  display,
  height,
  left,
  right,
  bottom,
})

export default function SpiralBackground({
  display, 
  position, 
  height, 
  left, 
  right, 
  bottom
}) {

  const { css } = useFela({display, position, height, left, right, bottom})

  return (
    <img 
      src={mediumSpiral} alt="spiral" 
      className={css(rule)}
    />
  )
}
