import React, { useState } from 'react'
// import './/src/pages/login.css'
// import '@/Login.css'

const login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleClick = () => {
    console.log(email, password)
  }

  return (
    <div className='container'>
      <div className='img-bg'>
        <img
          className='login-img'
          src='assets\images\login-img.png'
          alt='logo'
        />
      </div>
      <div className='form-container'>
        <div className='login-account'>
          <h1 className='login-title'>Login your Account</h1>
          <p className='email-lable'>Email Address</p>
          <input
            className='inputs'
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Enter your email address'
          />
          <p className='password-lable'>Password</p>
          <input
            className='inputs'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='*************'
          />
          <p className='forget-password'>
            <a href='#' className='forget'>
              Forget Password?
            </a>
          </p>
          <button onClick={handleClick} className='login-btn'>
            Login
          </button>
          <p className='sign-up'>
            Don’t have an account?&nbsp;
            <a className='signUp-clr' href='sign-up.html'>
              Sign Up
            </a>
          </p>
          <p className='or'>- OR -</p>
          <div className='continue'>
            <button className='google-btn'>
              <img src='/assets/images/google.png' alt='google' />
              <p className='continue-btns'>Continue with Google</p>
            </button>
            <button className='linkedIn-btn'>
              <img src='/assets/images/linkedin.png' alt='linkedin' />
              <p className='continue-btns'>Continue with LinkedIn</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default login
