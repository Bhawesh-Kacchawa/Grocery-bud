import { useState } from "react";
import Form from "./course-Components/Form";
import Items from "./course-Components/Items";
import { nanoid } from "nanoid";
  
const setLocalStorage = (items)=>{
  localStorage.setItem("list" , JSON.stringify(items))
};

const getLocalStorge = ()=>{
  let list = localStorage.getItem("list")
  if(list){
    list = JSON.parse( localStorage.getItem("list"))
  }
  else{ 
    list = []
  }
  return list;
}

const App =()=>{
  const [items,setItems] = useState(getLocalStorge)

  const addItem = (itemName) =>{
    const newItem = {
      name : itemName,
      completed : false,
      id:nanoid()
    };
    setItems([...items , newItem])
    setLocalStorage(items)
  }

  const removeItem = (itemId)=>{
    const newArr = items.filter((item)=>item.id !== itemId)
    setItems(newArr)
    setLocalStorage(newArr)
  }

  const editItem = (itemId) =>{
    const newItem = items.map((item)=>{
      if(item.id === itemId){
        const newItem  = {...item, completed: !item.completed}
        return newItem
      }
      return item
    })
    setItems(newItem)
    setLocalStorage(newItem)
  }

  return  <section className="section-center">
    <Form addItem = {addItem}/>
    <Items items = {items} removeItem = {removeItem} editItem = {editItem}/>
  </section>
}

export default App;












// import { useState, useEffect } from "react";

// const App = () => {
//   const [item, setItem] = useState("");
//   const [itemList, setItemList] = useState([]);
//   const [index, setIndex] = useState(0)

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setItemList([...itemList, item])
//     setIndex(index + 1)
//   }
  
//   if (itemList.length > 0) {
//     localStorage.setItem( JSON.stringify(index),itemList[index-1])
//   }
  
//   useEffect(()=>{
//     console.log(localStorage.getItem(index+1) , "stored-items");
//     console.log(itemList, index);
//   },[itemList])


//   return <div className="container">
//     <form className="form" onSubmit={handleSubmit}>
//       <h4 className="title">Grocery Bud</h4>
//       <section className="form-control">
//         <input type="text" className="form-input" onChange={(e) => setItem(e.target.value)} />
//         <button type="submit" className="btn">Add</button>
//       </section>
//     </form>
//   </div>
// };

// export default App;







