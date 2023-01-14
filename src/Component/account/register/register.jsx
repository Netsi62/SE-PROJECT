import React from 'react'


const Register= ({handleChange,pass,email,userName,openLogin}) => {
return (
    <>
      <div className='login-container'>
        <div className="title">
            <p>Register</p>
        </div>
        <div className="form">
            <form action="">
                 <div className='user'>
                <label htmlFor="user">Email</label>
                <input type="text" id='user' value={userName} placeholder='enter your name' name='user' onChange={(e)=>handleChange(e)} />
                </div>
                <div className='email'>
                <label htmlFor="name">Email</label>
                <input type="email" id='name' value={email} placeholder='enter your name' name='email' onChange={(e)=>handleChange(e)} />
                </div>
                <div className="pass">
                <label htmlFor="password">Password</label>
                <input type='password' id='password'  value={pass} name='pass'onChange={(e)=>handleChange(e)}/>
                </div>
                <button type='submit'>Register</button>
                <p >Have an account?  <span onClick={()=>openLogin()}>Login</span> </p>
            </form>
        </div>

      </div>
    </>
  )


 
      

 }
  

export default Register