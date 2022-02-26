import { useFela } from 'react-fela'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const rules  = ({ size, fontSize, bg, color}) => ({
    color,
    fontSize : `${fontSize}rem`,
    backgroundColor: bg,

    width: `${size}rem`,
    height: `${size}rem`,

    border: 'none',
    borderRadius: '.6rem',

    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
})

const Icon = ({fontIcon, size=2, fontSize=1.6, bg='none', color='inherit'}) => {

    const { css } = useFela({size, fontSize, bg, color})

  return (
      <div className={css(rules)}>
            <FontAwesomeIcon
                icon={fontIcon} 
                fontSize='inherit' 
                color="inherit"
            />
      </div> 
    )
}

export default Icon

