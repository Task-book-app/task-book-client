// import React from 'react'
import { useFela } from 'react-fela'


export default function Form({children}) {
    
    const { css, theme } = useFela()

    const rules = () => ({
        padding: '8rem',
        borderRadius: '2rem',
    
        width: '45%',
        boxShadow: theme.shadows.boxShadow_2,
    
        filter: 'drop-shadow(0px 4px 60px rgba(0, 0, 0, 0.2))',
        backdropFilter: 'blur(20px)', 
    
        '@supports not (backdrop-filter : blur(20px))': {
            background: 'rgba(255, 255, 255, 0.5)',
        },
    })
    
  return (
    <form
        className={css(rules)}
    >
     {children}
    </form>
  )
}
