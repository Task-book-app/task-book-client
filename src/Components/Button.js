import React from 'react'
import { useFela } from 'react-fela'

const rule = ({ fontSize }) => ({
    padding: `1rem`,
    background:'red',
    borderRadius: '5px',
    border: '1px solid green',
    fontSize,
    fontFamily: 'inherit',
    color:'darkblue',
    ':hover': {
        color: 'blue',
        cursor: 'pointer',
        backgroundColor: 'purple'
    }
})

export default function Button({children, fontSize, event=null}) {
    const { css } = useFela({fontSize})


  return (
    <button
        onClick={event}
        className={css(rule)}
    >{children}</button>
  )
}
