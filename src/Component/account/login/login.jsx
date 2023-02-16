import React from 'react'
import { Link } from 'react-router-dom'


const Login = ({handleChange,pass,email,openREgister}) => {
return (
    <>
      <div className='login-container'>
        <div className="title">
            <p>Login</p>
        </div>
        <div className="form">
            <form action="">
                <div className='email'>
                <label htmlFor="name">Email</label>
                <input type="email" id='name' value={email} placeholder='enter your name' name='email' onChange={(e)=>handleChange(e)} />
                </div>
                <div className="pass">
                <label htmlFor="password">Password</label>
                <input type='password' id='password'  value={pass} name='pass'onChange={(e)=>handleChange(e)}/>
                </div>
                <button type='submit'>Login</button>
                <p >new here?  <Link to={`/register`}>REGISTER</Link> </p>
            </form>
        </div>

      </div>
    </>
  )


 
      

 }
  

export default Login