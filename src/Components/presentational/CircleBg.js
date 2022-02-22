// import React from 'react'
import { useFela } from "react-fela"


const CircleBg = () => {
    
    const { css, theme } = useFela()
    
    const rules = {
        height: "12rem",
        width: "12rem",
        borderRadius: "50%",
        top: "-5rem",
        right: "-5rem",
        position: "absolute",
        background: theme.gradients.blueGradient
      }

  return <div className={css(rules)}></div>
}

export default CircleBg