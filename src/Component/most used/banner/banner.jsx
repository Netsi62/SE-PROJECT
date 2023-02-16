import React from 'react'

import "../../Home/Home.css"
// import {Link} from "react-router-dom"


const Banner = ({title,text,path,buttonText,img}) => {
    console.log(title)
  return (
    <>
    <div className="banner">
        <div className="conatiner">
              <div className="img"><img src={img} alt="" /></div>
              <div className="desc">
                <h3>{title}</h3>
                <p>{text}</p>
                {/* <Link to={path}>{buttonText}</Link> */}
                <button>{buttonText}</button>
              </div>
        </div>
        


    </div>
    </>
  )
}

export default Banner