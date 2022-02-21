import { useFela } from 'react-fela'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const rules  = ({ size, fontSize, bg, color}) => ({
  color,
  fontSize : `${fontSize}rem`,
  backgroundColor: bg,
  width: size ? `${size}rem` : 'fit-content',
  height: size ? `${size}rem` : '',
//   height: `${size}rem`,
  padding: '.5rem',
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: 'none'
  
  
})

const Icon = ({fontIcon, size, fontSize, bg, color}) => {

    const { css } = useFela({size, fontSize, bg, color})

  return (
    
      <div className={css(rules)}>
            <FontAwesomeIcon icon={fontIcon}  fontSize='inherit' color="inherit"/>
      </div> 
    )
}

export default Icon

