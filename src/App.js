import './App.css';
import {useState} from "react";
import List from "./List"

function App() {
  const [inputItem , setInputItem] = useState('');
  const [listItems, setListItems]  = useState([]);

  const inputHandler=(e)=>{
    setInputItem(e.target.value);
  };
  const buttonClickHandler=()=>{
    setListItems([...listItems,{item :inputItem ,key: Date.now()}]);
    setInputItem('');
  };
  return (
    <div className="App">
      <header className="App-header">
        <div className="main_div"> 
        <h1>MY TODO APP ✅ </h1>
        <div className="center_div center_container">
          <input className="input_text" value={inputItem} onChange={inputHandler}/>
          <button className='btn' onClick={buttonClickHandler}>Add</button>   
        </div>
        <List listItems={listItems} setListItems={setListItems} />
        </div>
      </header>
    </div>
  );
}

export default App;
