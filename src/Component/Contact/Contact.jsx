import React, { useState } from 'react'
import { FaPhoneAlt } from "react-icons/fa";

function Contact() {

    const[subject,setSubject] = useState('')
    const[message,setMessage] = useState('')
    const[name,setName] = useState('')
    const[email,setEmail] = useState('')
    const[fullInfo,setFullInfo] = useState({})

    const handleSend = (e) =>{
        const name = e.target.name
        const value = e.target.value
        e.preventDefault()
        setFullInfo({...fullInfo,})
    }

  return (
    <div className="contact">
        <div className="banner">
            <h1>dljf;s</h1>
            <p>lfjsdlf</p>
            <img src="" alt="" />
        </div>

        <div className="getin">
            <h4>Get In Touch</h4>
            <div className="form">
                <form onSubmit={(e) => handleSend(e)} >
                    <input type="text" name='subject' value={subject} onChange={(e)=>setSubject(e.target.value)} placeholder='Enter subject' />
                    <textarea name="message" value={message} onChange={(e)=>setMessage(e.target.value)} placeholder='Enter Message' id="" cols="30" rows="10"></textarea>
                    <div className="personal-info">
                    <input type="text" name='name' value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter your name'/>
                    <input type="email" name='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email' />
                    </div>
                    <button>SEND</button>
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