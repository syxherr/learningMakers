import { useState } from 'react'
import { IoIosClose } from 'react-icons/io'
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");


  const capitalizeFirst = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);

  };

  const handleAddTodos = (e) => {
    e.preventDefault();
    if (input === "") return;

    const capitalizedInput = capitalizeFirst(input.trim());

    setTodos([capitalizedInput, ...todos]);
    setInput("");
  };

  const handleDeleteTodos = (index) => {
    const newTodos = todos.filter((_,i) => i !== index);
    setTodos(newTodos)
  };



  return (
    <div className="todo-container">
      <h1>To Do App</h1>
      
      <form onSubmit={handleAddTodos}>
  <input
    type="text"
    placeholder="Enter your To Do"
    value={input}
    onChange={(e) => setInput(e.target.value)}
  />
  <button type="submit">Add</button>
</form>
      

    <ul className="todo-list">
      {todos.map((todo, index) => (
        <li key={index}>
          {todo}
          <button onClick={() => handleDeleteTodos(index)}>
            <IoIosClose />
          </button>
        </li>
      ))}
    </ul>
    </div>
  )

}

export default App
