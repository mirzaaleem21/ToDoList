import React, { useState } from "react";

function App(){


    const [text,setNewText]=useState("");
    const [items,setNewItems]=useState([]);

    function handleChange(event){
        const newValue=event.target.value;
        setNewText(newValue);
    }

  function addItem() {
    setNewItems(prevItems => {
      return [...prevItems, text];
    });
    setNewText("");
  }



    return(

        <div className="container">
            <div className="heading">
                <h1>To-Do List</h1>
            </div>
           
            <div className="form">
                <input type="text" placeholder="Add Something" onChange={handleChange} value={text} className="input"></input>
                <button onClick={addItem} className="addBtn"><span>Add</span></button>
            </div>
           <div>
        <ul>
          {items.map((todoItem,index) => (
            <li  key={index}>{todoItem}<input type="checkbox" className="checkbox"></input></li>
          
            )
                
            )
            
          }
        </ul>
      </div>
    </div>
  );
}







export default App;