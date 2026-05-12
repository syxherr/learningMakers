import { useState, useCallback, useMemo, useEffect } from "react";
import "../style/index.css";
import styles from "../Todo/Todo.module.css";
import TodoList from "../components/TodoList";
import { useContext } from "react";
import { ContextApi } from "../ContextApi.jsx";


function TodoPage() {
  const { count } = useContext(ContextApi);
  
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });
  const [input, setInput] = useState("");

  const capitalizeFirst = useMemo(
    () => (text) => text.charAt(0).toUpperCase() + text.slice(1),
    []
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    document.title = `Todo (${todos.length})`;
  }, [todos]);


  const handleAddTodos = useCallback(
    (e) => {
      e.preventDefault();
      if (input === "") return;

      const capitalizedInput = capitalizeFirst(input.trim());

      setTodos((prevTodos) => [capitalizedInput, ...prevTodos]);
      setInput("");
    },
    [input, capitalizeFirst]
  );

  const handleDeleteTodos = useCallback((index) => {
    setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>To Do App</h1>
      <h2 className="tes">hai: {count}</h2>

      <form onSubmit={handleAddTodos} className={styles.form}>
        <input className={styles.input}
          type="text"
          placeholder="Enter your To Do"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button type="submit" className={styles.button}>Add</button>
      </form>

      <TodoList todos={todos} onDelete={handleDeleteTodos} />
    </div>
  );
}

export default TodoPage;
