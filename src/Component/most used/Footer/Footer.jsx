import React from 'react'
import './Footer.css'
import inst from '../../../assets/inst.png'
import face from '../../../assets/face.png'
import what from '../../../assets/what.png'
import logo from '../../../assets/logo.png'
import {  } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="footer">
        <img src={logo} alt="" />
        
        <div className="discover">
            <p>Ethiopia is a unique and a capitivating destination for travlers. offering a diverse range of experiances and cultural attraction.</p>
            <p><span>Discover</span>all that this amazing country has to offer!</p>
        </div>

        <div className="site-map">
            <h3>SITE MAP</h3>
            <ul>
                <li>Home</li>
                <li><a href="/about">About Us</a></li>
                <li>Packages</li>
                <li><a href="">Explore</a></li>
            </ul>
        </div>

        <div className="subscribe">
            <h3>SUBSCRIBE</h3>
            <h5>sin up</h5>
            <h5>sin in</h5>
        </div>

        <p className='copyright'>&copy; 2023 copyright reserved Tour Et</p>
    </div>
    )
}

export default Footer