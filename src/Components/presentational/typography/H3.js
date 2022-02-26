import React from 'react'
import { useFela } from 'react-fela'

const H3 = ({ children, color }) => {

    const { css, theme } = useFela({color})

    const rules = ({ color }) => ({
      color,
      fontFamily: theme.fontFamily.semiBold,
      fontSize: '1.8rem',
      lineHeight: '2.5rem',
      letterSpacing: '0.03rem'
    })

  return (
    <h3 className={css(rules)}>{children}</h3>
  )
}

export default H3