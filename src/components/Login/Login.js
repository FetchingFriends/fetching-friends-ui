import React from 'react'
import './Login.css'


const Login = () => {

  return (
    <form className='login-form'>
      <input className='username-login input'
        type='text'
        placeholder='Username'
        aria-label='Username Input'
      />
      <button className='login button'>Login</button>
    </form>
  )
}

export default Login
