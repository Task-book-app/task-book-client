import React from 'react'
import SpiralBackground from '../Components/SpiralBackground'
import { useFela } from 'react-fela'
import Form from '../Components/form-components/Form'
import FormControl from '../Components/form-components/FormControl'
import H1 from '../Components/typography/H1'
import Icon from '../Components/Icon'
import { faAt, faLock } from '@fortawesome/free-solid-svg-icons'
import Button from '../Components/Button'


const rules = ({paddingRight})=> ({
    position: 'relative',
    height: "100vh",
    overflow: "hidden",
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingRight
  })
  
  export default function AuthLayout({ paddingRight }) {

    const { css, theme } = useFela({paddingRight})

    const circle = {
      position: "absolute",
      height: "12rem",
      width: "12rem",
      borderRadius: "50%",
      top: "-5rem",
      right: "-5rem",
      background: theme.gradients.blueGradient
    }
  
  return (
    <div 
      className={css(rules)}
    >
      <SpiralBackground
        position="absolute"
        height={['80rem', '90rem', "125rem", "110rem" ]}          
        bottom={[, , ,"-20%", "-15%"]}
        left={[ "0rem" , "-15rem", "-20%", "-15%"]}
        
      />
      <SpiralBackground
        position="absolute"
        height={[  , , "45rem", "42rem"]}     
        bottom={[ , ,"-5rem", "-4rem"]}
        right={[  , , "-16%", "-10%"]}
      />

      <div className={css(circle)}></div>

      <Form>
          <H1>Wellcome</H1>
          <H1>Sign Up</H1>
          <FormControl
            mt={5}
          >
            <label htmlFor="email">E-mail</label>
            <div>
              <Icon
                color={theme.colors.blue}
                fontIcon={faAt}
              />
              <input type="text" name="email" id="email"/>
            </div>
          </FormControl>
          <FormControl
            mt={3}
          >
            <label htmlFor="password">Password</label>
            <div>
              <Icon
                color={theme.colors.blue}
                fontIcon={faLock}
              />
              <input type="password" name="password" id="password"/>
            </div>
          </FormControl>
          <FormControl
            mt={8}
          >
            <Button
              type="button"
            >
              Sign Up
            </Button>
          </FormControl>
        </Form>
    </div>
  )
}
