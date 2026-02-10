import { useState } from 'react'
import './App.css'

export default function App() {
  const IMGURL = import.meta.env.BASE_URL;

  const [isLoginView, setIsLoginView] = useState(true);
  const [togglePassword, setTogglePassword] = useState("password");

  function switchView() {
    setIsLoginView(!isLoginView);
  }

  function togglePwd() {
    setTogglePassword(prev =>
      prev === "password" ? "text" : "password"
    );
  }

  return (
    <div className='app'>
      {isLoginView && 
        <div className='login-container'>
          <h2>Sign in with email</h2>

          <div className='input-group'>
            <img className='left-icon' src={IMGURL + "1.jpg"} alt='email icon'/>
            <input type='email' placeholder='Enter an email id' />
          </div>

          <div className='input-group'>
            <img className='left-icon' src={IMGURL + "4.jpg"} alt='password icon'/>
            <input type={togglePassword} placeholder='Enter a valid password'/>
            <img className='right-icon' src={IMGURL + "2.jpg"} alt='show password' onClick={togglePwd}/>
          </div>

          <p> Don't have an account?
            <label onClick={switchView}> Sign up</label>
          </p>
          <button>Sign in</button>
        </div>
      }

      {!isLoginView && (
        <div className='signup-container'>
          <h2>Register for a new account</h2>
          <div className='input-group'>
            <img className='left-icon' src={IMGURL + "5.jpg"} alt='email icon'/>
            <input type='text' placeholder='Enter First Name' />
          </div>
          <div className='input-group'>
            <img className='left-icon' src={IMGURL + "5.jpg"} alt='email icon'/>
            <input type='text' placeholder='Last Name' />
          </div>
          <div className='input-group'>
            <img className='left-icon' src={IMGURL + "3.jpg"} alt='email icon'/>
            <input type='text' placeholder='Phone Number' />
          </div>
          <div className='input-group'>
            <img className='left-icon' src={IMGURL + "4.jpg"} alt='email icon'/>
            <input type={togglePassword} placeholder='Password' />
            <img className='right-icon' src={IMGURL + "2.jpg"} alt='show password' onClick={togglePwd}/>
          </div>
          <p> Already have an account?
            <label onClick={switchView}> Sign in</label>
          </p>
          <button>Create an account</button>
        </div>
      )}
    </div>
  );
}