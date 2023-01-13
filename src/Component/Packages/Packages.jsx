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
    const [dropDown,setDropDown]=useState({type:"",price:"",rate:""})
    const [type,setType] = useState('')
    const [noResult,setNoResult] = useState(false)



    const handleChange=(e)=>{
        //   const name=e.target.name
          const value=e.target.value
          setDropDown({...dropDown ,type:value})
          console.log(dropDown)
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
    useEffect(() => {
        filterData();
    },[s_name]);

    useEffect(() => {
        fetchData();
    },[]);

  return (
    <div className='packages'>
       
                    <article className='left'>
            <div className="filter">
                <p>Filter by </p>
                <button>Reset Filters</button>
            </div>

            <div className="type">
                <h5>TYPE</h5>
               <select name="type" id="" onChange={(e)=>setType(e.target.value)} value={type}>
                <option value="group" >Group</option>
                <option value="park">Park</option>
                <option value="city">City</option>
               </select>
            </div>
{/* 
            <div className="price">
                <h5>PRICE</h5>
                <select name="price" id="" onChange={(e)=>handleChange(e)} value={dropDown}>
                    <option value="any" >Any</option>
                    <option value="firstPrice">under 1000</option>
                    <option value="secondPrice">1000 - 5000</option>
                    <option value="thirdPrice">5000 - 10000</option>
                    <option value="above">Above</option>
                </select>
            </div> */}
            
            {/* <div className="rate">
                <h5>RATE</h5>
                <select name="rate" id="" value={dropDown} onChange={(e)=>handleChange(e)}>
                    <option value="five" >&#9733;&#9733;&#9733;&#9733;&#9733;&up</option>
                    <option value="four">&#9733;&#9733;&#9733;&#9733;&#9734;&up</option>
                    <option value="three">&#9733;&#9733;&#9733;&#9734;&#9734;&up</option>
                    <option value="two">&#9733;&#9733;&#9734;&#9734;&#9734;&up</option>
                    <option value="one">&#9733;&#9734;&#9734;&#9734;&#9734;&up</option>
                </select>
            </div> */}

            <div className="searchButton">
                <button type='submit'>Find</button>
            </div>
        </article>

        <article className='right'>
        <div className="search-button">
            <input type="search"  placeholder='where to' value={s_name} onChange={(e) => setName(e.target.value)}   id='search' style={{marginTop:'6rem'}}  />
            <label htmlFor="search" ><FaSearch /></label>
        </div>
        {noResult && <h1>No Result was found</h1>}
         {!noResult && cityList.map((_package) => {
             const {id,type,body,image,price,rate} = _package;
             
             return(
                 <article className='each-pa' key={id}>
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