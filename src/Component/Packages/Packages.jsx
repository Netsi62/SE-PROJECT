import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {FaSearch,FiMapPin} from "react-icons/fa";
import { Link } from 'react-router-dom';
import './Packages.css'
const url = '  http://localhost:3001/data'



const Packages = () => {
    
    const [datas,setDatas] = useState([]);
    const [cityList,setCityList]=useState([])
    const [s_name,setName] = useState('')
    const [dropDown,setDropDown]=useState({})
    const [noResult,setNoResult] = useState(false)



    const handleChange=(e)=>{
          setDropDown({...dropDown ,[e.target.name]:e.target.value})
    }
    

    const fetchData = async () => {
        try{
            const res = await fetch(url);
            const data = await res.json();
            setCityList(data)
            setDatas(data)
        }catch(Error){
            console.log(Error);
        }
    } 

    const filterData = () => {
            // fetch(`/city-package?city=${s_name}`)
            const searchCity=datas.filter((pkg)=>pkg.type.includes(s_name.toLowerCase()))
            if (s_name){
                if(searchCity.length>0){
                setCityList(searchCity)
                setNoResult(false)
                }
                else{
                    setCityList([])
                    setNoResult(true)
                }
            }
            else{
                setCityList(datas)
                setNoResult(false)
            }
    } 

const Find = () => {
    setNoResult(false)
    var newFind = [];
    if(Object.keys(dropDown).length === 0 || (!dropDown.type && !dropDown.price && !dropDown.rate)){
        newFind = datas
    }else if(dropDown.type && dropDown.price && dropDown.rate){
        newFind = datas.filter((data) => (data.type === dropDown.type && data.price === dropDown.price && data.rate === dropDown.rate))
    }
    else if(dropDown.type && dropDown.price){
        newFind = datas.filter((data) => (data.type === dropDown.type && data.price === dropDown.price))
    }
    else if(dropDown.type && dropDown.rate){
        newFind = datas.filter((data) => (data.type === dropDown.type && data.rate === dropDown.rate))
        console.log(newFind)
    }
    else if(dropDown.rate && dropDown.price){
        newFind = datas.filter((data) => (data.rate === dropDown.rate && data.price === dropDown.price))
    }
    else if(dropDown.type){
        newFind = datas.filter((data) => (data.type === dropDown.type ))
    }
    else if(dropDown.price){
        newFind = datas.filter((data) => (data.price === dropDown.price ))
    }
    else if(dropDown.rate){
        newFind = datas.filter((data) => (data.rate === dropDown.rate))
    }
    if(newFind.length === 0){setNoResult(true); return}
       setCityList(newFind)
}

    useEffect(() => {
        filterData();
    },[s_name]);

    useEffect(() => {
        fetchData();
    },[]);

  return (
    <div className='packages'>
       
                    <article className='left'>
                <p>Filter by </p>
                <button>Reset Filters</button>

                <h5>TYPE</h5>
               <select name="type" onChange={(e)=>handleChange(e)}>
                <option value="" >any type</option>
                <option value="group">Group</option>
                <option value="park">Park</option>
                <option value="city">City</option>
               </select>

                <h5>PRICE</h5>
                <select name="price" onChange={(e)=>handleChange(e)}>
                    <option value="" >any price</option>
                    <option value="firstPrice">under 1000</option>
                    <option value="secondPrice">1000 - 5000</option>
                    <option value="thirdPrice">5000 - 10000</option>
                    <option value="above">Above</option>
                </select>
            
                <h5>RATE</h5>
                <select name="rate" onChange={(e)=>handleChange(e)} style={{color:'red', width:'10vw', textAlign:'center', padding:'.2rem 0'}}>
                    <option value="" >any rate</option>
                    <option value="five" >&#9733;&#9733;&#9733;&#9733;&#9733;</option>
                    <option value="four">&#9733;&#9733;&#9733;&#9733;&#9734;</option>
                    <option value="three">&#9733;&#9733;&#9733;&#9734;&#9734;</option>
                    <option value="two">&#9733;&#9733;&#9734;&#9734;&#9734;</option>
                    <option value="one">&#9733;&#9734;&#9734;&#9734;&#9734;</option>
                </select>

            <div className="searchButton">
                <button type='submit' onClick={() => Find()}>Find</button>
            </div>
        </article>

        <article className='right'>
        <div className="search-button">
            <input type="search"  placeholder='where to' value={s_name} onChange={(e) => setName(e.target.value)}   id='search' style={{marginTop:'6rem'}}  />
            <label htmlFor="search" ><FaSearch /> </label>
        </div>
        {noResult && <h1>No Result was found</h1>}
         {!noResult && cityList.map((_package) => {
             const {id,type,body,image,price,rate} = _package;
             
             return(
                 <article className='each-pa' key={id} style={{backgroundColor:'red'}} >
                    <img src={image} alt="" />
                    <h3>{body} </h3>
                    <h5> {rate }      price {price} </h5>
                    <Link to={`/package/${_package.id}`}>See Detail</Link>
                </article>
                    )
                })
            }
            </article>
    </div>
  )
}

export default Packages