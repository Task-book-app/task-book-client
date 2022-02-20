import React from 'react'
import SpiralBackground from '../Components/SpiralBackground'
import { useFela } from 'react-fela'

const layout = {
    position: 'relative',
    height: "100vh",
    overflow: "hidden",
  }
  
  const circle = {
    position: "absolute",
    height: "10rem",
    width: "10rem",
    borderRadius: "50%",
    top: "-5rem",
    right: "-4rem",
    background: `linear-gradient(90.17deg, #09A7BC 190.88%, #2EC0EE 290.46%)`
  }

export default function AuthLayout({children}) {
  const { css } = useFela()
  
  return (
    <div 
      className={css(layout)}
    >
      <SpiralBackground
        position="absolute"
        height="calc(100% * 1.5)"           
        top="calc(-100% / 3.5)"
        left="calc(-100% + 82% )"
      />
      <SpiralBackground
        position="absolute"
        height="calc(100% - 55%)"      
        bottom="-5%"
        right="-9%"
      />
      <div className={css(circle)}></div>
      {children}
    </div>
  )
}
