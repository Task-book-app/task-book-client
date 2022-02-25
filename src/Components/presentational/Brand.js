// import React from 'react'
import { useFela } from 'react-fela'
import SpiralBackground from './SpiralBackground'


const Brand = ({ children, position, right, top, bp }) => {
    
    const { css, theme } = useFela()

    const { laptop } = theme.breakpoints

    const rulesBrandContainer = () => ({
        zIndex:'1',
        display: 'flex',
        position,
        right,
        top,
        ...bp
    })

    const rulesIconContainer = {
        
        width: '7rem',
        height: '7rem',
    
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [laptop]: {
            width: '5.5rem',
            height: '5.5rem',

        }
    }
    
    
    const rulesHeadings = () => ({
        paddingLeft: '1rem',
        paddingRight: '1rem',
        '& a': {
            // position: 'relative',
            fontSize: '2.2rem',
            display: 'block',
            textDecoration: 'none',
            [laptop]: {
               fontSize: '1.8rem',
            },
            ':hover': {
                color: theme.colors.blue
            }
        }
    })
   
  return (
    <div className={css(rulesBrandContainer)}>
        <SpiralBackground 
            styles={rulesIconContainer}
        />
        <div className={css(rulesHeadings)}>
            {children}
        </div>
    </div>
  )
}

export default Brand