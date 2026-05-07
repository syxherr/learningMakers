import { useState, useCallback, useMemo } from "react";
import "../style/index.css";
import styles from "./Todo/Todo.module.css";
import TodoList from "./components/TodoList";

function TodoPage() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const capitalizeFirst = useMemo(() => (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }, []);

  const handleAddTodos = useCallback((e) => {
    e.preventDefault();
    if (input === "") return;

    const capitalizedInput = capitalizeFirst(input.trim());

    setTodos([capitalizedInput, ...todos]);
    setInput("");
  }, [input, todos, capitalizeFirst]);

  const handleDeleteTodos = useCallback((index) => {
    setTodos(todos.filter((_, i) => i !== index));
  }, [todos]);

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>To Do App</h1>

      <form onSubmit={handleAddTodos} className={styles.form}>
        <input className={styles.input}
          type="text"
          placeholder="Enter your To Do"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button type="submit" className={styles.button}>
          Add
        </button>
      </form>

      <TodoList todos={todos} onDelete={handleDeleteTodos} />
    </div>
  );
}

export default TodoPage;
