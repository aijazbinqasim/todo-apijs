import { useState } from "react";

const TodoCreate = ({ createTodo }) => {
  const [title, setTitle] = useState("");

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