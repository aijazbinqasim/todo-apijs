import { useState } from "react";
import CheckIcon from "../assets/check.svg";

const TodoEdit = ({ todo, onSubmit }) => {
  const [title, setTitle] = useState(todo.title);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(todo.id, title);
  };

  return (
    <form className="todo-edit">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button type="submit" onClick={handleSubmit}>
        <img src={CheckIcon} title="Save" />
      </button>
    </form>
  );
};

export default TodoEdit;