import "./register.css"
import { Link } from "react-router-dom";
export default function Register() {
  return (
    <div className='start1'>
    <div className='wrapper1'>
      <form action=''>
        <h1 style={{ marginBottom: '20px' }}>Signup</h1>
        <div className='inputbox1' style={{ marginBottom: '20px' }}>
          <input type='text' placeholder='Email' required/>
        </div>
        <div className='inputbox1' style={{ marginBottom: '20px' }}>
          <input type='text' placeholder='Enter Username of Choice' required/>
          <i className="icon1 fa-regular fa-circle-user"></i>
        </div>
        
        <div className='inputbox1' style={{ marginBottom: '20px' }}>
          <input type='password' placeholder='Password' required/>
          <i className="licon1 fa-solid fa-lock"></i>
        </div>
        <div className='inputbox1' style={{ marginBottom: '20px' }}>
          <input type='password' placeholder='Re-Enter the Password' required/>
          <i className="licon21 fa-solid fa-lock"></i>
        </div> 
        <button type='submit'>Register</button>
        <div className='noaccount'>
     <p>Already have an account?  <Link to="/login">Login</Link></p>
        
      </div>
      </form>
    </div>
    </div>
  )
}
