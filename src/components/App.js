
import React from "react";
import './../styles/App.css';
import { useState } from "react";

const App = () => {
  const[count,setCount]=useState(0);
  return (
    <div>
        <h1>count is {count}</h1>
        <button onClick={()=>setCount(count+1)}>increment</button>
    </div>
  )
}

export default App
