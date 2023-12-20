import React from 'react'
import './LoginSignup.css'
// import LoginSignup from './loginsignup'

import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'
import person_icon from '../Assets/person.png' 

const LoginSignup = () => {
  return (
    <div className='container'>
        <div className='header'>
            <div className="text">Signup</div>
           <div className='underline'></div>
        </div>
        <div className='inputs'> 
            <div className='input'>
                <img className='img' src={person_icon} alt=''></img>
                <input type='text'/>
            </div>
            <div className='input'>
                <img  className='img'src={email_icon} alt='' ></img>
                <input type='email'/>
            </div>
            <div className='input'>
                <img className='img'src={password_icon} alt=''></img>
                <input type='password'/>
            </div>

        </div>
        <div className='forgot-password'>Lost password? <span>Click Here!</span></div>
        <div className='submit-container'>
            <div className='submit'>Signup</div>
            <div className='submit'>Login</div>
        </div>
    </div>
  )
}

export default LoginSignup
