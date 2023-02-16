import React from 'react'
import './Home.css'
import lalibela from '../../assets/lalibela.png'
import valley from '../../assets/valley.png'
import flag from '../../assets/flag.png'
import { useState, useEffect } from 'react'
import Recent from './RecentPackage'
import Popular from './PopularPackage'
import {FaSearch,FiMapPin} from "react-icons/fa";
import Banner from '../most used/banner/banner'
import Swipper from '../most used/Swipper/Swipper'
const url = 'http://localhost:8000/data'

const Home = () => {
    const banner1Info={buttonText:"Explore more",path:"/",title:"More about ethiopia",img:"https://cdn.bunniktours.com.au/public/posts/images/Africa/Lalibela%201%20%284%29-feature.JPG",text:"Ethiopia is home to the lowest place on the African continent, the Danakil Depression.The depression is at the junction of three tectonic plates in the Horn of Africa, and sits at approximately 125 metres below sea level. At 200 kilometres long by 50 metres wide, this relatively small desert is also home to roughly 25% of Africa’s volcanoes!"}
    const [sites,setSites] = useState([]);
    const [s_name,setName] = useState('')
    const [cityList,setCityList]=useState([])
    // const [searchResult,setSearchResult]=useState([])
    // const [recentGroup,setRecentGroup]=useState([])
    // const [popularPackage,setpPopularPackage]=useState([])
  

    

    const fetchMainData= async () =>{
              const fetchedData=await fetch(url)
              const data=await fetchedData.json()
              if (data){
                setSites(data)
              }
            //   const fetchedData1=await fetch('group-package?recent=true')
            //   const data1=await fetchedData.json()
            //   setRecentGroup(data1)
            // const fetchedData2=await fetch('all-but-group-package?popular=true')
            //    const data2=await fetchedData.json()
            //    setpPopularPackage(data2)

              
        }

   useEffect(()=>
   {fetchMainData()},[])
   
     const filterData = () => {
            // fetch(`/city-package?city=${s_name}`)
            const allCity=sites.map((site)=>site.name.toLowerCase())
            const searchCity=allCity.filter((city)=>city.includes(s_name.toLowerCase()))
            if (s_name){
                if(searchCity.length>0){
                setCityList(searchCity)
                }
                else{
                    setCityList(['No City pPackage Was Found '])
                }
             
            }
            else{
                setCityList([])
            }
 
    } 
    useEffect(() => {
        filterData();
    },[s_name]);

//   fetch(`/group-package?popularity=true`)
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
             <Swipper data={sites}/>
            {/* {
                recentGroup.map((site) => {
            return ( <Recent  {...site} key={site.id} />)
                })
            } */}
            </div>
            <Banner {...banner1Info}  />
             <h2 id='visit'>MOST VISITED CITIES</h2>
                <div className="site">{
                    < Swipper data={sites}/>
                }
            {/* {popularPackage.map((site) => {
            return ( <Popular {...site} key={site.id} />)
                })} */}
            </div>
     {/* <p>unisco</p> */}
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
 