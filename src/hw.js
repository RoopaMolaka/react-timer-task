
import React,{ useState } from "react";

const App=()=>{
    const[itemName,setStateItemName]=useState([])


    const inputNameChange=(value)=>{
        setStateItemName({itemName:value})

    }
    const addItem=()=>{

      
    }


    
    return(
        <>
        <input s placeholder="Enter item name" />
        <button onClick={()=>{addItem}}>Add Item </button>
        </>
    )
}