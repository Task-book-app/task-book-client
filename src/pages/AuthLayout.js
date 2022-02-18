import React from 'react'
import SpiralMedium from '../Components/SpiralMedium'


export default function AuthLayout({children}) {

  const style = {
    position: 'relative',
    height: "100vh",
    overflow: "hidden",
    divCircle: {
      height: "10rem",
      width: "10rem",
      borderRadius: "50%",
      position: "absolute",
      top: "-5rem",
      right: "-5rem",
      
      background: `linear-gradient(90.17deg, #09A7BC 190.88%, #2EC0EE 290.46%)`
    }
  }

  return (
    <div style={style}>
      <SpiralMedium
        position="absolute"
        height="calc(100% * 1.5)"           
        top="calc(-100% / 3.5)"
        left="calc(-100% + 82% )"
      />
      <SpiralMedium
        position="absolute"
        height="calc(100% - 55%)"      
        bottom="-5%"
        right="-9%"
      />
      <div style={style.divCircle}></div>
      {children}
    </div>
  )
}
