import React from 'react'
import SpiralBackground from '../../presentational/SpiralBackground'
import CircleBg from '../../presentational/CircleBg'
import Form from '../Form'
import FormControl from '../../presentational/FormControl'
import H1 from '../../presentational/typography/H1'
import Icon from '../../presentational/Icon'
import { faAt, faLock } from '@fortawesome/free-solid-svg-icons'
import Button from '../../presentational/Button'
import { useFela } from 'react-fela'


  
  export default function AuthLayout() {
 
  const { theme } = useFela()

  return (
    <div 
      className="auth-layout"
    >
      <div className="auth-layout__image auth-layout__image--1">
        <SpiralBackground />
      </div>

      <div className="auth-layout__image auth-layout__image--2">
        <SpiralBackground />
      </div>
      
      <CircleBg />
      



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
