import SpiralBackground from '../../presentational/SpiralBackground'
import CircleBg from '../../presentational/CircleBg'
import Auth from '../auth/Auth'
import { useFela } from 'react-fela'

const AuthLayout = () => {

  const { css, theme } = useFela()

  const { mobile_L, tablet, laptop, desktop } = theme.breakpoints

  const layoutRules = () => ({
    margin: '0 auto',
    padding: '2rem 0',
    minHeight: '100vh',
    width: '100%',
    maxHeight: '900px',
    maxWidth: '1440px',
    overflow: 'hidden',
    position: 'relative',
    ...theme.centerFlex,
    [mobile_L]: {
      "@media (orientation: 'landscape' )": {
        padding: '8rem 0',
      }
    },
    [laptop]: {
      paddingTop: '0',
      paddingBottom: '0',
      paddingRight: '8rem',
      justifyContent: 'flex-end',
    },
    [desktop]: {
      paddingRight: '10rem',
      maxWidth: '1600px',
      maxHeight: '992px',
    }
  })

  const imageBigRules = () => ({
    position: 'absolute',
    width: '160%',
    left: '-100%',
    [mobile_L]: {
      width: '180%',
      left: '-120%'
    },
    [tablet]: {
      width: '140%',
      left: '-90%',
      bottom: '-10%'
    },
    [laptop]: {
      width: '95%',
      left: '-25%',
      bottom: '-25%'
    }
  })

  return (
    <div className={css(layoutRules)}>
        
        <div className={css(imageBigRules())}>
          <SpiralBackground />
        </div>
        <div className="auth-layout__image auth-layout__image--2">
          <SpiralBackground />
        </div>
        <CircleBg />
        <Auth />
    </div>
  )
}

export default AuthLayout