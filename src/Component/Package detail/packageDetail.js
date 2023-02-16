import React, { useState,useEffect ,useContext} from 'react'
import { Link, useParams } from 'react-router-dom'
import './PackageDetail.css'
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import Review from '../Review/Review';
import { context } from '../context';
import Book from '../Book/Book';


const url = 'http://localhost:8000/data'

function PackageDetail() {
    
    const {id} = useParams();
    const [site,setSite] =useState([]);
    const [read,setRead] = useState(false)
    const [itemAdded , setItemAdded] = useState(false)
    const {cartItems,dispatch}= useContext(context)
    const [isBook,setIsBook] = useState(false)


    const addToCart = (item) => {
        setItemAdded(true)
        dispatch({ type: "ADD", item });
      };


    const fetchMain= async () =>{
        const fetchedData=await fetch(url)
        const data=await fetchedData.json()
        if (data){
                const newData = data.find((d) => d.id === parseInt(id))
                setSite(newData)
            }
            //   const fetchedData1=await fetch('group-package?recent=true')
            //   const data1=await fetchedData.json()
            //   setRecentGroup(data1)
            // const fetchedData2=await fetch('all-but-group-package?popular=true')
            //    const data2=await fetchedData.json()
            //    setpPopularPackage(data2)
            
        }
        const findId = ()=>{
           const va=cartItems.find(idx=>idx.id==id)
           va ? setItemAdded(true):setItemAdded(false)
        }

        
        useEffect(()=>
        {fetchMain()
        findId()
        },[])
        
        return (
    <div className="packageDetail">
        <div className="container-detail">
            <div className="image">
                <img src={site.image} alt="" />
            </div>

            <div className="pkg-detail">
                <h1>{site.name} </h1>
                {site.body && <p>{ read?site.body:`${site.body.slice(0,100)}...`} <span onClick={() => setRead(!read)} style={{cursor:'pointer', color:'blue', textDecoration:'underLine'}}>{read?'Show Less':'Read More'} </span> </p>}
                <h4>{site.price} </h4>

                { !itemAdded && <button onClick={()=>{addToCart({id:site.id,name:site.name,price:site.price})}}>Add to Cart</button>}
               {itemAdded &&  <button>Added</button>}
                <button onClick={() => setIsBook(!isBook)}>Book</button>
                {isBook && <Book site={site} key={id} isBook={isBook} setIsBook={setIsBook}/> }
            </div>
        </div>

        <div className="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15760.939941347988!2d38.7682187!3d9.04231705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8f642ba9e021%3A0x2321687a606863f3!2sAddis%20Ababa%20Institute%20of%20Technology!5e0!3m2!1sen!2set!4v1673474430209!5m2!1sen!2set" width="600" height="450" style={{border:'0'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <div className="review-section" style={{display:'flex', justifyContent:'center'}}>
            <Review {...site} />
        </div>
    </div>
  )
}

export default PackageDetail