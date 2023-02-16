import { useState ,useReducer} from 'react';
import { IconContext } from 'react-icons/lib';
import './App.css';
import Content from './Component/Content/Content';
import {context} from './Component/context.js'

const reducer = (state,action)=>{
  switch (action.type){
    case "ADD":
      return [...state,action.item]
    case "REMOVE":
      const newArr = [...state];
      newArr.splice(state.index,1)
      return newArr
    default:
      throw new Error("Error")
  }
}
function App() {

  const [cartItems,dispatch] = useReducer(reducer,[])
  return (
    <div className="App">
      <context.Provider value={{cartItems ,dispatch}}>
        <Content />
      </context.Provider>
    </div>
  );
}

export default App;