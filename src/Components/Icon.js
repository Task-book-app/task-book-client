import React from 'react'
import { useFela } from 'react-fela'

const rules  = ({ fontSize}) => ({
  color: 'pink',
  fontSize : `${fontSize}rem`
})


export default function Icon({fontIcon, fontSize=1}) {

    const { css } = useFela({fontSize})

  return (
    <i 
        className={`${css(rules)} ${fontIcon}`}
    ></i>  )
}
