import React, { useState } from 'react'

// icons
import { IoClose } from 'react-icons/io5'

function mavLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleClick = () => {
    console.log(email, password)
  }
  return (
    <>
      <div className='login-bg'>
        <div className='container'>
          <div>
            <div className='logo-box'>
              <img
                className='mav-login-logo'
                src='/assets/images/mav-login-logo.png'
                alt='logo'
              />
              <button className='close-btn'>
                <IoClose />
              </button>
            </div>
            <h1 className='login-title'>Log in </h1>
            <p className='email-lable'>Username or Email</p>
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
            Stay Logged in
            <button onClick={handleClick} className='login-btn'>
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default mavLogin
