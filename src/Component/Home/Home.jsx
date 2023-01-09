import React from 'react'
import './Home.css'
import lalibela from '../../assets/lalibela.png'
import valley from '../../assets/valley.png'
import flag from '../../assets/flag.png'
import { useState, useEffect } from 'react'
import H from './H'
import M from './M'
import {FaSearch,FiMapPin} from "react-icons/fa";
const url = 'http://localhost:8000/data'

const Home = () => {

    const [sites,setSites] = useState([]);
    const [search,setSearch] = useState([]);
    const [s_name,setName] = useState('')
    const [cityList,setCityList]=useState([])

    // useEffect((
    //     fetch(url)
    //     .then((resp)=>resp.json())
    //     .then((data)=>setSites(data))
    //     .catch((err)=>console.log(err.message))
    // ))
     const fetchData = async () => {
        try{
            const res = await fetch(url);
            const data = await res.json();
            setSites(data)
           
            const allCity=data.map((site)=>site.name)
            const defaultCaseCity=allCity.map((site)=>site.toLowerCase())
            const searchCity=defaultCaseCity.filter((city)=>city.includes(s_name.toLowerCase()))
            if (s_name){
             setCityList(searchCity)
            }
            else{
                setCityList([])
            }
            console.log(searchCity)
        }catch(Error){
            console.log(Error);
        }
    } 
    useEffect(() => {
        fetchData();
    },[s_name]);

    const searchFun = (name) => {
        if(name){
            const search = sites.filter((site) => site.name === name)
            setSearch(search)
        }else{
            setSearch(sites)
        }
    }
    const most = sites.filter((most) => most.price > 20)

  return (
    <div className="home">
      <div className="search">
        <div className="search-button">
            <input type="search"  placeholder='where to' value={s_name} onChange={(e) => setName(e.target.value)}   id='search' style={{marginTop:'6rem'}}  />
            <label htmlFor="search" ><FaSearch /></label>
        </div>
        <div className='city'>
            {cityList.length>0 && cityList.map((city,index)=>{
           return(
            <div className='city-list' key={index}>
              <p>{city}</p>

            </div>

           );
        })}
        </div>
        
      </div>
            <h2 id='visit'>Recent packeges</h2>
            <div className="site">
        {sites.map((site) => {
            return( <H  {...site} key={site.id} />)
                })
            }
            </div>
             <h2 id='visit'>MOST VISITED CITIES</h2>
            <div className="site">
                {most.map((site) => {
                    return( <M  {...site} key={site.id} /> )
                })
            }
            </div>
    <div className="explore">
        <h2>MORE TO EXPLORE</h2>
         <div className="site">
            <figure>
                    <img src={lalibela} alt="" />
                    <figcaption><span>Rock Lalibela</span> one of the most visited area in ethiopia....</figcaption>
                </figure>

                <figure>
                    <img src={valley} alt="" />
                    <figcaption><span>Rift valley</span> one of the most visited area in ethiopia....</figcaption>
                </figure>

                <figure>
                    <img src={flag} alt="" />
                    <figcaption><span>Ethiopia Flag(green,yellow,red)</span> one of the most visited area in ethiopia....</figcaption>
                </figure>
                </div>
         </div>
    </div>
    )
}

export default Home