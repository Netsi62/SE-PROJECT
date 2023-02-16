import React from 'react'
import { FaUserCircle } from 'react-icons/fa'

function Review({name,rate,body}) {


  return (
    <div className="review" style={{width:'35%',boxShadow:'2px 1px 3px 2px gray', marginTop:'2rem',}}>
        <article className='content'>
            <div className='name'> <FaUserCircle /> <h4>{name} </h4></div>
            <div className="star">{5 * <p>&#9733;</p>} </div>
            <div className="body"><p>{body} </p></div>
        </article>

    </div>
    )
}

export default Review