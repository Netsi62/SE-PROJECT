import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import './Packages.css'
const url = '  http://localhost:8000/data'



const Packages = () => {
    
    const [datas,setDatas] = useState([]);
    const [packages,setPackages] = useState([]);
    

    const fetchData = async () => {
        try{
            const res = await fetch(url);
            const data = await res.json();
            setPackages(data)
            setDatas(data)
        }catch(Error){
            console.log(Error);
        }
    } 

    useEffect(() => {
        fetchData();
    },[]);

    const typeFilter = (type) => {
        if(type === 'any'){
            return setPackages(datas)
        }
        const newPackages = datas.filter((_package) => type === _package.type)
        setPackages(newPackages)
    }

    const priceFilter = (id) => {
        let newPackages = datas; 
        if(id === 1){
            newPackages = datas.filter((_package) => 500 <= _package.price && _package.price < 1000 )
        }else if(id === 2){
            newPackages = datas.filter((_package) => 1000 <= _package.price && _package.price < 5000 )
        }else if(id === 3){
            newPackages = datas.filter((_package) =>   _package.price >= 5000 )
        }
        setPackages(newPackages);
    }

  return (
    <div className='packages'>
       
                    <article className='left'>
            <div className="filter">
                <p>Filter by </p>
                <button>Reset Filters</button>
            </div>

            <div className="type">
                <h5>TYPE</h5>
                <form  className="type__package" >
                    <input type="checkbox" value='' id='group' onClick={() => typeFilter('group')}/>
                    <label htmlFor="group">Group Package</label>

                    <input type="checkbox" value='' id='city' onClick={() => typeFilter('city')}/>
                    <label htmlFor="city">City Package</label>

                    <input type="checkbox" value='' id='museum' onClick={() => typeFilter('museum')}/>
                    <label htmlFor="museum">Museum</label>

                    <input type="checkbox" value='' id='park' onClick={() => typeFilter('park')}/>
                    <label htmlFor="park">National Park/Wildlife Preservation</label>

                    <input type="checkbox" value='' id='any ' onClick={() => typeFilter('any')}/>
                    <label htmlFor="any">Any</label>
                </form>
            </div>

            <div className="rate">
                <h5>PRICE</h5>
                <form  className="price__package">
                <input type="radio" name='rate' value='' id='any-price' onClick={() => priceFilter(0)}/>
                <label htmlFor="any-price">Any</label>

                <input type="radio" name='rate' value='' id='five' onClick={() => priceFilter(1)}/>
                <label htmlFor="five">500-1000</label>

                <input type="radio" name='rate' value='' id='tho' onClick={() => priceFilter(2)}/>
                <label htmlFor="tho">1000-5000</label>

                <input type="radio" name='rate' value='' id='above' onClick={() => priceFilter(3)}/>
                <label htmlFor="above">Above</label>
                </form>
            </div>
            
            <div className="rate">
                <h5>PRICE</h5>
                <form  className="rate__package">
                <input type="radio" name='rate' value='' id='full'/>
                <label htmlFor="full">&#9733;&#9733;&#9733;&#9733;&#9733;&up</label>

                <input type="radio" name='rate' value='' id='four'/>
                <label htmlFor="four">&#9733;&#9733;&#9733;&#9733;&#9734;&up</label>

                <input type="radio" name='rate' value='' id='three'/>
                <label htmlFor="three">&#9733;&#9733;&#9733;&#9734;&#9734;&up</label>

                <input type="radio" name='rate' value='' id='two'/>
                <label htmlFor="two">&#9733;&#9733;&#9734;&#9734;&#9734;&up</label>

                <input type="radio" name='rate' value='' id='one'/>
                <label htmlFor="one">&#9733;&#9734;&#9734;&#9734;&#9734;&up</label>

                <input type="radio" name='rate' value='' id='zero'/>
                <label htmlFor="zero">&#9734;&#9734;&#9734;&#9734;&#9734;&up</label>
                </form>
            </div>
        </article>

        <article className='right'>
         {packages.map((_package) => {
             const {id,type,body,image,price,rate} = _package;
             
             return(
                 <article className='each-pa' key={id}>
                    <img src={image} alt="" />
                    <h3>{body} </h3>
                    <h5> {rate } price {price} </h5>
                </article>
                    )
                })
                
            }
            </article>
        
    </div>
  )
}

export default Packages