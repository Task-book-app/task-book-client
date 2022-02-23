import React from 'react'
import SpiralBackground from '../../presentational/SpiralBackground'
import CircleBg from '../../presentational/CircleBg'
// import { Outlet } from 'react-router-dom'
import Auth from '../auth/Auth'


const AuthLayout = () => {
 
  return (
    <div className="auth-layout">
      <div className="auth-layout__image auth-layout__image--1">
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
