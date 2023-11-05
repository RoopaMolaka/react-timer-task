import React,{useState} from "react";
import axios from "axios";
import { useEffect } from "react";

const App=()=>{
    const [data,setData] =useState([]);


    useEffect(()=>{
        axios.get ("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
            setData(res.data)
        
        })
        },[])
    

    return(
        <>
        <ol>
        {data.map((user,i)=>{
            return<li key={i}>{user.name}</li>
        })}
        </ol>
        </>
    )}
            

      
   




 

export default App;