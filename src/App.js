import React from "react";
import"./App.css"
 import { useState,useEffect } from "react";
 const App =()=>{
    const [count,setCount]=useState(0)
    const [state,setState]=useState(false)
 useEffect(()=>{
    let counter=""
    if(state){
        counter =setInterval(()=>{ 
            setCount((prevCount)=>prevCount+1)},500)
            
    }else{
        clearInterval(counter)
    }
     return()=>clearInterval(counter)
  },[state])
  const startButton=()=>{
    setState(true)
  }
  const stopButton=()=>{
    setState(false)
  }

    return(
        <>
        <p>Count:{count}</p>
        <button onClick={()=>{startButton()}}>Start</button>
        <button  onClick={()=>{stopButton()}}>Stop</button>
        </>
    )
   
 } 
 export default App;
