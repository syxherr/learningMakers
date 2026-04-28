import "../App.css";
import { IoIosClose } from "react-icons/io";

function TodoList({ todos, onDelete }) {
  if (todos.length === 0) {
    return <p className="empty">No Task Yet</p>;
  }

  return (
    <ul className="todo-list">
      {todos.map((todo, index) => (
        <li key={index}>
          {todo}
          <button onClick={() => onDelete(index)}>
            <IoIosClose />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
