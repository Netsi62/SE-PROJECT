import React  from 'react'
import './Header.css'
import logo from '../../assets/logo.png'
import Login from '../account/login/login'
import { useState } from 'react'
import Register from '../account/register/register'


const Header = () => {

const [email, setEmail]=useState('')
const [pass, setPass]=useState('')
const [user, setUser]=useState('')
const [isLogin,setIslogin]=useState(false)
const [isRegister,setRegister]=useState(false)
const handleChange=(e) =>{
    switch(e.target.name){
        case('pass') :{setPass(e.target.value)}
        case('email') :{setEmail(e.target.value)}
        case('user') :{setUser(e.target.value)}

    }
}
const openREgister=()=>{
    setIslogin(false)
    setRegister(!isRegister)
}
const openLogin=()=>{
    setIslogin(!isLogin)
    setRegister(false)
}




  return (
    <div className="header">
        <div className="header-logo">
            <img src={logo} alt="picture" className='logo' />
        </div>
        <div className="nav">
        <ul className='header-menu'>
            <li>HOME</li>
            <li>CONTACT</li>
            <li>ABOUT</li>
            <li>ETHIOPIA</li>
        </ul>
        </div>
    <div className="header-btn">
        <button onClick={()=>openLogin() } >LOGIN</button>
        <button  onClick={()=>openREgister()}>REGISTER</button>
    </div>
    {isLogin && <Login handleChange={handleChange} email={email} pass={pass} openREgister={openREgister}/>}
    {isRegister && <Register handleChange={handleChange} email={email} pass={pass} user={user} openLogin={openLogin}/>}
    </div>
    
    )
}

export default Header