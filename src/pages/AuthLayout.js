import React from 'react'
import SpiralBackground from '../Components/SpiralBackground'
import { useFela } from 'react-fela'
import Form from '../Components/form-components/Form'
import FormControl from '../Components/form-components/FormControl'
import H1 from '../Components/typography/H1'
import Icon from '../Components/Icon'
import { faAt, faLock } from '@fortawesome/free-solid-svg-icons'


const layout = {
    position: 'relative',
    height: "100vh",
    overflow: "hidden",
  }
  
  const circle = {
    position: "absolute",
    height: "10rem",
    width: "10rem",
    borderRadius: "50%",
    top: "-5rem",
    right: "-4rem",
    background: `linear-gradient(90.17deg, #09A7BC 190.88%, #2EC0EE 290.46%)`
  }

export default function AuthLayout({children}) {
  const { css, theme } = useFela()
  
  return (
    <div 
      className={css(layout)}
    >
      <SpiralBackground
        position="absolute"
        height="calc(100% * 1.5)"           
        top="calc(-100% / 3.5)"
        left="calc(-100% + 82% )"
      />
      <SpiralBackground
        position="absolute"
        height="calc(100% - 55%)"      
        bottom="-5%"
        right="-9%"
      />
      <div className={css(circle)}></div>
      <Form>
          <H1>Sign Up</H1>
          <FormControl
            my={4}
          >
            <Icon
              fontSize={2}
              size={3}
              // bg='green'
              color={theme.colors.blue}
              fontIcon={faAt}
            />
            <Icon
              fontSize={2}
              size={3}
              // bg='purple'
              color={theme.colors.blue}
              fontIcon={faLock}
            />
            </FormControl>
        </Form>
    </div>
  )
}
