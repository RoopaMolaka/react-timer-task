


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
        
//       this.setState({ changeName :e.target.value})
        
//         }
   
//         updateItemName(i,e) {
//            const { todoItems, changeName } = this.state;
//             const todoItemsCopy = [...todoItems]; 
//             todoItemsCopy[i] =  changeName;
//             this.setState({ changeName:"",todoItems:todoItemsCopy, })
           
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
//                    return <li key={i}>{item} <input value={this.state.changeName}  onChange={(e)=>{this.updateName(e)}} placeholder="type updated name" />  
//                    <button onClick={()=>{this.updateItemName(i)}}>Update the item name</button>
//                    <button onClick={()=>{this.deleteItem(i)}}>Delete Item</button></li>
//                 })}
//             </ol>
//             </>
//         )
//     }
// }
// export default App;