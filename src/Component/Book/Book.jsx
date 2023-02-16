import React from 'react'
import { useState } from 'react';
import {FaUserCircle  } from 'react-icons/fa';
import './Book.css'


function Book({site, isBook, setIsBook}) {
    const {id,name,price} = site;

    const [book,setBook] = useState({})
    const [numTour,setNumTour] = useState(1)

    const handleChange = (e) => {
        const {name,value} = e.target;
        setBook({...book, [name]:value, total:numTour * price})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(book)
    }

  return (
      <div className="book">
        <h2>{name} </h2>

            <label htmlFor="date">Start Date : </label>
        <input type="date" name="date" />

        <input id='user' type="number" pattern="^\d+$" inputMode="numeric" step="1" min="1" max="99" value={numTour} onChange={(e) => setNumTour(e.target.value)}  /> 
        <label htmlFor="user" ><FaUserCircle /></label>

        <h3>Total : { numTour * price} </h3>

        <form onSubmit={handleSubmit} >
        <h3>Name : </h3>
        <input type="text" placeholder='first name' name="firstName" onChange={handleChange}/> 
        <input type="text" placeholder='last name' name="lastName" onChange={handleChange} />
        <input type="tel" placeholder='Enter phone number' name="phone" onChange={handleChange} />
        <h3>Tele Birr<input type="radio" name='payment' value='teleBirr' onChange={handleChange} /></h3>
        <h3>CBE birr<input type="radio" name='payment' value='cbeBirr' onChange={handleChange} /></h3>
        <h3>e Birr<input type="radio" name='payment' value='e Birr' onChange={handleChange} /></h3>
        <button type='submit' onClick={()=>setIsBook(!isBook)}>Reserve Now</button>
        </form>
    </div>
    )
}

export default Book