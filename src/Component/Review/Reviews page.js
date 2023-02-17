import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ReviewsPage.css"
import Review from "./Review";


const url = 'http://localhost:8000/data'
const ReviewsPage = () => {

    const { id }= useParams();
    const [site,setSite] =useState([]);
    const [read,setRead] = useState(false)
    const [comment,setComment] = useState();
    const [agree, setAgree] = useState(false)

    console.log(agree)
    
    const fetchMain= async () =>{
        const fetchedData=await fetch(url)
        const data=await fetchedData.json()
        if (data){
                const newData = data.find((d) => d.id ===parseInt(id))
                setSite(newData)
            }
        }
    const handelSubmit=(e)=>{
        e.preventDefault()
        console.log({comment,agree})
    }

    useEffect(()=>
    {fetchMain()
    },[url])
    return ( 
        <div className="reviews">
        <div className="package">
            <div className="image">
                <img src={site.image} alt="" />
            </div>
            <div className="packageDescription">
            <h1>{site.name} </h1>
                {site.body && <p>{ read?site.body:`${site.body.slice(0,100)}...`} <span onClick={() => setRead(!read)} style={{cursor:'pointer', color:'blue', textDecoration:'underLine'}}>{read?'Show Less':'Read More'} </span> </p>}
            </div>
            <div className="review">
                <form onSubmit={handelSubmit} className="reviewForm">
                <label className="writelable">
                    WRITE YOUR REVIEW
                </label>
                <textarea name="message" 
                required 
                placeholder='Enter your reviews' 
                id="" 
                value={comment}
                onChange ={(e) => setComment(e.target.value)}></textarea>
                <label>
        <input type="checkbox"
        required 
        onClick ={(e) => {
            setAgree(!agree)
            console.log(agree)}}/>
        <span>I certify that this review is based on my own experience and is my genuine opinion.</span>
      </label>
      <p>{comment}</p>
      <p>{agree}</p>
      <input type="submit" />
      </form>
            </div>
        </div>
        <div className="otherReviews">
        <Review {...site} key={site.id}/>
        </div>
        </div>
        
     );
}
 
export default ReviewsPage;