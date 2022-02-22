// import React from 'react'
import { useFela } from 'react-fela'


const H1 = ({children}) => {
    
    const { css, theme } = useFela()

    const rule = () => ({
        fontFamily: theme.fontFamily.poppinsBold,
        fontSize: '3rem',
        lineHeight: '4.8rem',
        // fontWeight: 'bold',
    })

  return (
    <h1
        className={css(rule)}
    >{children}</h1>
  )
}

export default H1