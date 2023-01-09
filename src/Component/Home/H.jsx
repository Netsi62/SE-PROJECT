import React from 'react'
import './Home.css'

function H({id,name,body,image,price}) {
  return (
    <div>
         <figure>
                    <img src={image} alt="" />
                    <figcaption>{body} <p>{price} </p> </figcaption>
                </figure>
    </div>
  )
}


export default H