import React, { useState ,useContext} from 'react'
import { context } from '../context'
function Cart() {

  const {cartItems,dispatch}= useContext(context)
  const removeFromcart = (item)=>{
    dispatch({type:"REMOVE",item})
  }
  const showItems = cartItems.map(item=>{
    return (
        <div className="items">
          <h2 className="item-name">{item.name}</h2>
          <h5 className="item-price">{item.price}</h5>
          <button onClick={()=>{removeFromcart(item)}}>remove</button>
        </div>
    )
})


  return (
    <div className="cart" style={{marginTop:"500px"}}>
        {showItems}
    </div>
    )
}

export default Cart