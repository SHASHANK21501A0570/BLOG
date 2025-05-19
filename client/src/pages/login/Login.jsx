import "./login.css"
import React from 'react';
import { Link} from "react-router-dom";
export default function Login() {
  return (
    <div className='start'>
    <div className='wrapper'>
      <form action=''>
        <h1 style={{ marginBottom: '20px' }}>Login</h1>
        <div className='inputbox' style={{ marginBottom: '20px' }}>
          <input type='text' placeholder='Username' required/>
          <i className="icon fa-regular fa-circle-user"></i>
        </div>
        <div className='inputbox' style={{ marginBottom: '20px' }}>
          <input type='password' placeholder='Password' required/>
          <i className="licon fa-solid fa-lock"></i>
        </div>
        <div className='rememberme' style={{ marginBottom: '20px' }} >
          <label>
            <input type='checkbox' />
            Remember me
          </label>
          
          <a href="#">Forgot Password?</a>
        </div>
        <button type='submit'>Login</button>
      </form>
     <div className='noaccount'>
     <p>Don't have an account?<Link to="/register">Register</Link></p>
        
      </div>
    </div>
    </div>
  )
}
