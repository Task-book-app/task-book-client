import React from 'react'
import { useFela } from 'react-fela'


export default function H1({children}) {
    
    const { css, theme } = useFela()

    const rule = () => ({
        fontFamily: theme.fontFamily.poppinsBold,
        fontSize: '3rem',
        lineHeight: '4.5rem',
        fontWeight: 'bold',
       
    })

  return (
    <h1
        className={css(rule)}
    >{children}</h1>
  )
}
