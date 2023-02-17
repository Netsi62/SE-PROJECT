import React, { useEffect, useState } from 'react'
import {FaSearch,FaStar,FiMapPin} from "react-icons/fa";
import { FaUserCircle } from 'react-icons/fa'
const url = '  http://localhost:3001/data'

function Review({id}) {


    const [reviews,setReviews] = useState([]);
    

    const fetchReview = async () => {
        try{
            const res = await fetch(url);
            const data = await res.json();
            if(data){
                const newData = data.filter(da => da.id === id)
                setReviews(newData)
            }else{
                setReviews(["There is no review yet for this package. Be the first person!"])
            }
        }catch(Error){
            console.log(Error);
        }
    } 

    useEffect(() => {
        fetchReview();
    },[])

  return (
    <div className="review" style={{width:'35%',height:'200px', boxShadow:'2px 1px 3px 2px gray', marginTop:'2rem',}}>
        <h2 className="recent">RECENT REVIEWS BY OTHERS</h2>
        {reviews.map((review) => {
            const {type,body,rate} = review
            const num = rate
             const stars = Array(parseInt(num)).fill(0)
            return <>
                    <article className='content'>
                        <div className='name'> <FaUserCircle /> <h4>{type} </h4></div>
                        <div>{stars.map((_,index) =>{
                            return <FaStar key = {index}/>
                        })} </div>
                        <div className="body"><p>{body} </p></div>
                    </article></>
        })}

    </div>
    )
}

export default Review
