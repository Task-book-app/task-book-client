import React from 'react'
import Brand from '../../presentational/Brand'
import { NavLink } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { useFela } from 'react-fela'


const Auth = () => {

  const { theme } = useFela()

  const { mobile_L, tablet, laptop, laptop_L } = theme.breakpoints

  // breakpoints for Brand component
  const brandBp = { 
    [mobile_L]: {
      top: '3rem',
      right: '3rem',
    },
    [tablet]: {
      right: '8rem',
    },
    [laptop]: {
      right: '5rem',
    },
    [laptop_L]: {
      right: '8rem',
    }
  }

  return (
    <div className="auth">
        <Brand
          position='absolute'
          right='1.5rem'
          top='1rem'
          bp={brandBp}
        >
            <NavLink 
              to='/'
              className={ ({isActive}) => (isActive ? "active" : "inactive")}
            >
              Log In
            </NavLink>
            <NavLink 
              to='/signup'
              className={ ({isActive}) => (isActive ? "active" : "inactive")}
            >
              Sign Up
            </NavLink>
          </Brand>
           <Outlet />
    </div>
  )
}

export default Auth