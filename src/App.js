import React,{useState} from "react";
import "./App.css"
import {Header}from "./Header"
import{Food}from"./food"
import { FoodCard } from "./foodcard";


const App= ()=>{
    const [foodList,updateFoodList]=useState([{foodUrl:"https://static.toiimg.com/thumb/61048461.cms?imgsize=1981854&width=800&height=800" ,
foodName:"PaniPuri",id:"1"},
{foodUrl:"https://images.indianexpress.com/2022/09/biryani_getty.jpg?w=414",
foodName:"Biryani",id:"2"},
{foodUrl:"https://images.indianexpress.com/2020/04/jalebis-759.jpg",
foodName:"Jalebi",id:"3"},
{foodUrl:"https://images.indianexpress.com/2020/04/kaju-katli-759.jpg",
foodName:"KajuKatli",id:"4"},
{foodUrl:"https://2.bp.blogspot.com/_8ozzohLEaK4/SED2aX92joI/AAAAAAAAA5U/Hby_J9wZF60/w1200-h630-p-k-no-nu/P1010008-8.JPG",
foodName:"Jeedipappu Kodikura",id:"5"}
])
return(
    <>
    
    <Header/>
    <Food/>
    { foodList.map( (item,i)=>{
        console.log(item)
return<FoodCard Name={item.foodName}Img={item.foodUrl} Link={item.id} />
    })}
    </>
)
}
export default App;