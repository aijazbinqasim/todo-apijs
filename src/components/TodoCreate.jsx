import { useState, useContext } from "react";
import { TodosContext } from "../context/todos";

const TodoCreate = () => {
  const [title, setTitle] = useState("");

  const { createTodo } = useContext(TodosContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTodo(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-create">
      <input
        type="text"
        name="title"
        id="title"
        placeholder="Enter a todo"
        onChange={(e) => setTitle(e.target.value)}
      />
    </form>
  );
};

export default TodoCreate;
