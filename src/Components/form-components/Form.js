import React from 'react'
import { useFela } from 'react-fela'

const rules = () => ({
    padding: '8rem',
    borderRadius: '2rem',

    // width: '40%',
    // width: '588px',
    // height: '588px',
    position: 'absolute',
    left: '49.56%',
    right: '7.39%',
    top: '11.3%',
    bottom: '11.43%',


    // top: '50%',
    // left: '70%',
    // transform: 'translate(-50%,-50%)',

    filter: 'drop-shadow(0px 4px 60px rgba(0, 0, 0, 0.2))',
    backdropFilter: 'blur(20px)', 

    '@supports not (backdrop-filter : blur(20px))': {
        background: 'rgba(255, 255, 255, 0.5)',
    },
})

export default function Form({children}) {

    const { css } = useFela()
    
  return (
    <form
        className={css(rules)}
    >
     {children}
    </form>
  )
}
