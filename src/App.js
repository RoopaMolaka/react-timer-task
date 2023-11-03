import React,{useState} from "react";
import "./App.css"

const App=()=>{
 const [Value,valChange] =useState(0);
 return(
  <><div id="main-style"><h1 id="heading">Counter</h1>
  
  <div id="div-style"><button className="style" onClick={()=>{valChange(Value+1)}}>+ </button> 
  <span id="num-style">{Value}</span>
  <button className="style" onClick={()=>{valChange(Value+1)}}> - </button></div>
  </div></>
  
 )
  
 

 }

export default App;