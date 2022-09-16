import React, {useState} from 'react'
import './App.css';
const App =() =>{
  const [userInput, setUserInput] = useState("");
  const [todos, setTodos] = useState([]);
  const addData = () =>{
    setTodos([...todos,userInput]);
  }
  return <div>
    <h1>Todos List</h1><hr/>
    <label>Enter Your Todos Here:</label>
    <input type="text" onChange={(event) => setUserInput(event.target.value) } className="input" /><br/><br/>
    <button onClick={()=>addData()}>Add</button>
    <ul>
      {
        todos.map((todo,index)=> <li key={index}> {todo} </li>)
      }
    </ul><br/>
  </div>
}
export default App;