import React from 'react';
import './App.css'

function List({listItems,setListItems}) {
    const deleteHandler = key =>{
        const newList = listItems.filter(itemObj=>{
            return itemObj.key !== key;
        });
        setListItems(newList)
    };
   
   
    
    return (
        <div className="list_div">
           {listItems.map(e=>{
               return (
                <div className="item ">
                <p className="input_textP">{e.item}</p>
                <button className="remove_btn" onClick={()=>deleteHandler(e.key)}>Remove</button>
                </div>
               );
           })}
        </div>
    )
}

export default List
