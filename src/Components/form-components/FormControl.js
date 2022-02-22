// import React from 'react'
import { useFela } from 'react-fela'


const FormControl = ({ children, m, mx, my, mt, mb, ml, mr, p, px, py, pt, pb, pl, pr }) => {
    
    const { css, theme } = useFela({ m, mx, my, mt, mb, ml, mr, p, px, py, pt, pb, pl, pr })

    const rule = ({m, mx, my, mt, mb, ml, mr, p, px, py, pt, pb, pl, pr}) => ({
        width: "100%",
        marginTop: `${mt}rem`,
        marginBottom: `${mb}rem`,
        marginLeft: `${ml}rem`,
        marginRight: `${mr}rem`,
        margin: mx ? `0 ${mx}rem` : my ? `${my}rem 0`: `${m}rem`,
        paddingTop: `${pt}rem`,
        paddingBottom: `${pb}rem`,
        paddingLeft: `${pl}rem`,
        paddingRight: `${pr}rem`,
        padding: px ? `0 ${px}rem` : py ? `${py}rem 0`: `${p}rem`,
        // display: 'flex',
    
        
        '& label': {
            // display: 'block',
            marginLeft: '4.7rem',
            fontSize: '1.4rem',
            lineHeight: '3rem'
        },
    
        '& div ': {
            display: 'flex',
            alignItems: 'center',
            
        },
    
        '& div input':{
            transition: 'all 0.21s',
            fontSize: '1.8rem',
            padding: '.5rem 1.5rem',
            border: 'none',
            marginLeft: '1.9rem',
            borderRadius:'.5rem',
            outline: 'none',
            backgroundColor: '#80808024',
            width: '100%',
            height: '3.5rem',
            ':focus':{
                boxShadow: theme.shadows.boxShadow_1,
                border: `2px solid ${theme.colors.blue}`,
            }
    
        }
        
    })

  return (
    <div
        className={css(rule)}
    >{children}</div>
  )
}

export default FormControl