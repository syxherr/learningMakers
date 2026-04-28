import { useState } from "react";
import "../App.css";
import "../index.css";
import TodoList from "../components/TodoList";

function TodoPage() {
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
    setTodos(todos.filter((_, i) => i !== index));
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

      <TodoList todos={todos}
      onDelete={handleDeleteTodos}
      />
    </div>
  );
}

export default TodoPage;
