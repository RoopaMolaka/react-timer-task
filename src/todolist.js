
// import { computeHeadingLevel } from "@testing-library/react";
// import React from "react";
// class App extends React.Component{
    
//     state={
//         todoItemsName:"",
//         todoItems:[],
//         inputItemName:"",
//         changeName:''

//     }
//     inputNameChange(value){
//         this.setState({ todoItemsName:value})

//     }
//     addItem(){
//         const { todoItems, todoItemName } = this.state;
//         var todoItemsCopy=[...this.state.todoItems]
//         todoItemsCopy.push(this.state.todoItemsName)
//         this.setState({ todoItemsName:"",todoItems:todoItemsCopy})

//     }
//     deleteItem(i){
//         var todoItemsCopy=[...this.state.todoItems]
//         todoItemsCopy.splice(i,1)
//         this.setState({todoItems:todoItemsCopy})

//     }
//     updateName(e){
        
//         this.state.changeName =e.target.value
        
        
//     }
   
//         updateItemName(i,e) {
//             // console.log(this.state.todoItems,'these are the todos');
//             const { todoItems, changeName } = this.state;
//             const todoItemsCopy = [...todoItems]; 
//             todoItemsCopy[i] =  changeName;
//             this.setState({todoItems:todoItemsCopy, changeName:""})
           
//             }
            
//     render(){
//         return(
//             <>
//             <h1>TO-DO LIST</h1>
//             <input value={this.state.todoItemsName} placeholder="Type item name" onChange={(e)=>{this.inputNameChange(e.target.value)}}/>
//             <button onClick={()=>{this.addItem()}} >Add Item</button>
//             {JSON.stringify(this.state)}
//             <ol>
//                 {this.state.todoItems.map((item,i)=>{
//                    return <li key={i}>{item} <input  onChange={(e)=>{this.updateName(e)}} placeholder="type updated name" />  
//                    <button onClick={()=>{this.updateItemName(i)}}>Update the item name</button>
//                    <button onClick={()=>{this.deleteItem(i)}}>Delete Item</button></li>
//                 })}
//             </ol>
//             </>
//         )
//     }
// }
// export default App;