import React from 'react'
import '../../Home/Home.css'

// import{ FiStar} from "react-icons/fa" 

function Swipper(props) {
    const listData=props.data
    console.log(listData)
   
  return (
    <div className='large-conatiner'>
        <div className="small-conatiner">
            {
                listData.map((indData)=>{
                     return <Card key={indData.id} {...indData}    />
                }
               
                )
            }
            
           
        </div>
       
                
    </div>

  )
}

const Card=({id,name,type,rate,body,image,price,deadline})=>{
    // const star = []
    // for(const i=0;i<rate;i++){
    //     star.push(<FiStar/>)
    // }
    return(
        <div className="card">
                 <div className="img"><img className='img-fluid' src={image} alt="" /></div>
                 <p className='text-lead text-primary'>{body}</p>
                 <h3>{price}</h3>
                 <h2>Ethiopia/{name}</h2>
                 {deadline && <h5>{deadline} </h5>}
                 {/* {rate&& star} */}
            </div>
    )
}



export default Swipper