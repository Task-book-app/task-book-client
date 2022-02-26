// import React from 'react'
import { useFela } from 'react-fela'

const H2 = ({color, children}) => {

    const { css, theme } = useFela({color})

    const rules = ({ color }) => ({
        color,
        fontFamily: theme.fontFamily.semiBold,
        fontSize: '2.4rem',
        lineHeight: '3.3rem',
        letterSpacing: '0.03rem'
    })

  return (
    <h2 className={css(rules)}>{children}</h2>
  )
}

export default H2