import React, { useState } from 'react'
import { FaPhoneAlt } from "react-icons/fa";

function Contact() {

    const[fullInfo,setFullInfo] = useState({})

    const handleChange = (e) =>{
        const {name,value} = e.target;
        setFullInfo({...fullInfo, [name]:value})
    }

    const handleSend = (e) =>{
        e.preventDefault()
        console.log(fullInfo)
    }

  return (
    <div className="contact">
        <div className="banner">
            <h1>Contact Us</h1>
            <p>Discover your next travel.</p>
            <img src="" alt="" />
        </div>

        <div className="getin">
            <h4>Get In Touch</h4>
            <div className="form">
                <form onSubmit={(e) => handleSend(e)} >
                    <input type="text" name='subject' onChange={handleChange} placeholder='Enter subject' /> <br />
                    <textarea name="message" onChange={handleChange} placeholder='Enter Message' id="" cols="30" rows="10"></textarea>
                    <div className="personal-info">
                    <input type="text" name='name' onChange={handleChange} placeholder='Enter your name'/>
                    <input type="email" name='email' onChange={handleChange} placeholder='Email' />
                    </div>
                    <button type='submit'>SEND</button>
                </form>

                <div className="icons">
                    <div className="call">
                        <p><FaPhoneAlt/> +251 9 123 456</p>
                        <p>Call Us</p>
                    </div>
                    <div className="email">
                        <p>tour.ET@gmail.com</p>
                        <p>Send us an email</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Contact