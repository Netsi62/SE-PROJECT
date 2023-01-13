import { useState } from 'react';
import { IconContext } from 'react-icons/lib';
import './App.css';
import Content from './Component/Content/Content';
import {context} from './Component/context.js'


function App() {
  const[numberCart,setNumberCart] = useState(0)
  return (
    <div className="App">
      <context.Provider value={{setNumberCart ,numberCart}}>
        <Content />
      </context.Provider>
    </div>
  );
}

export default App;
