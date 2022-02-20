import React from 'react'
import mediumSpiral from '../images/spiral/medium-spiral.svg'
// import logo from '../images/spiral/logo-spiral.svg'
import { useFela } from 'react-fela'

const rule = ({display, position, width, height, top, left, right, bottom}) => ({
  position,
  display,
  width,
  height,
  top,
  left,
  right,
  bottom,
})

export default function SpiralBackground({
  display, 
  position, 
  width, 
  height, 
  top, left, 
  right, 
  bottom
}) {

  const { css } = useFela({display, position, width, height, top, left, right, bottom})

  return (
    <img 
      src={mediumSpiral} alt="spiral" 
      className={css(rule)}
    />
  )
}
