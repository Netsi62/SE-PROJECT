import React, { useContext }  from 'react'
import './Header.css'
import logo from '../../../assets/logo.png'
import Login from '../../account/login/login'
import { useState } from 'react'
import {FaShoppingCart} from 'react-icons/fa'
import Register from '../../account/register/register'
import Home from '../../Home/Home'
import Packages from '../../Packages/Packages'
import { Link } from 'react-router-dom'
import {context} from '../../context'



const Header = () => {

const [email, setEmail]=useState('')
const [pass, setPass]=useState('')
const [user, setUser]=useState('')
// const [isLogin,setIslogin]=useState(false)
// const [isRegister,setRegister]=useState(false)
const handleChange=(e) =>{
    switch(e.target.name){
        case('pass') :{setPass(e.target.value)}
        case('email') :{setEmail(e.target.value)}
        case('user') :{setUser(e.target.value)}

    }
}
// const openREgister=()=>{
//     setIslogin(false)
//     setRegister(!isRegister)
// }
// const openLogin=()=>{
//     setIslogin(!isLogin)
//     setRegister(false)
// }
const {cartItems} = useContext(context)



  return (
    <div className="header">
        <div className="header-logo">
            <img src={logo} alt="picture" className='logo' />
        </div>
        <div className="nav">
        <ul className='header-menu'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/package'>package</Link></li>
            <li><Link to='/contact'>contact</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/ethiopia'>ETHIOPIA</Link></li>
        </ul>
        </div>

        
    <div className="header-btn">
        <Link to={`/login`}>LOG IN</Link>
        <Link to={`/register`}>REGISTER</Link>
    </div>

    <div className="cart">
            <span>{cartItems.length}</span>
            <Link to='/Cart'><FaShoppingCart /></Link>
            
        </div>

    {/* {isLogin && <Login handleChange={handleChange} email={email} pass={pass} openREgister={openREgister}/>}
    {isRegister && <Register handleChange={handleChange} email={email} pass={pass} user={user} openLogin={openLogin}/>} */}
    </div>
    
    )
}

export default Header