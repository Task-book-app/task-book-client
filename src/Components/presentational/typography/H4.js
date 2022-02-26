import React from 'react'
import { useFela } from 'react-fela'

const H4 = ({children, color}) => {
   
    const { css, theme } = useFela({color})

    const rules = ({ color }) => ({
        color,
        fontFamily: theme.fontFamily.semiBold,
        fontSize: '1.6rem',
        lineHeight: '2.2rem',
        letterSpacing: '0.025rem'
    })

  return (
    <h4 className={css(rules)}>{children}</h4>
  )
}

export default H4