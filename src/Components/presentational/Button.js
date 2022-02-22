import { useFela } from 'react-fela'

const Button = ({children, fontSize=1.4, type, event=null }) => {
    const { css, theme } = useFela({fontSize})

    const rule = ({ fontSize }) => ({
      width: '100%',
      padding: `1rem 2rem`,
      background: theme.gradients.blueGradient,
      borderRadius: '.5rem',
      
      border: 'none',
      fontSize: `${fontSize}rem`,
      fontFamily: theme.fontFamily.poppinsBold,
      letterSpacing:'.1rem',

      transition: 'all 0.2s',
      color:'#f9f7f6',
      ':hover': {
        transform: 'translateY(-2px)',
        cursor: 'pointer',
        boxShadow: theme.shadows.boxShadow_1
      },
      ':active': {
        transform: 'translateY(0)',
      }
  })

  return (
    <button
        type={type}
        onClick={event}
        className={css(rule)}
    >{children}</button>
  )
}

export default Button