import React from 'react'
import logo from '/home/okantey/Documents/GitHub/cinder_meals/src/images/cinder-removebg-preview.png'

const Login = () => {
  return (
    <div className='login'>
      <LoginForm labelOne='Email' labelTwo='Password' submit='Login' />
    </div>
  )
}
// brand logo component goes here and login form component goes here 
const LoginForm = (props) => {
  const logoImage = <img src={logo} alt='logo'></img>

  return (
    <div className='login-form'>
      <span className='logo-container'>
        {logoImage}
      </span>
      {/* email of the form goes here */}
      <div className='email-section'>
        <span>{props.labelOne}</span>
        <input type="text" id='email' />
      </div>
      {/* password for the form goes here */}
      <div className='password-section'>
        <span>{props.labelTwo}</span>
        <input type="password" id='password' />
      </div>

      <div className='submit-login'>
        <button id='submit-login'>{props.submit}</button>
      </div>
    </div>
  )
}
export default Login