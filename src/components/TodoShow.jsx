import { useState, useContext } from "react";
import { TodosContext } from "../context/todos";
import TodoEdit from "./TodoEdit";
import EditIcon from "../assets/edit.svg";
import DeleteIcon from "../assets/delete.svg";

const TodoShow = ({ todo }) => {
  const [isEditAble, setIsEditAble] = useState(false);

  const { updateTodo, removeTodo } = useContext(TodosContext);

  const handleSubmit = (id, title) => {
    updateTodo(id, title);
    setIsEditAble(false);
  };

  if (isEditAble) {
    return (
      <li className="todo">
        <TodoEdit todo={todo} onSubmit={handleSubmit} />
      </li>
    );
  }

  return (
    <li
      className="todo"
      onDoubleClick={() => updateTodo(todo.id, todo.title, !todo.completed)}
    >
      <p className={todo.completed ? "completed" : ""}>{todo.title}</p>
      <div className="actions">
        <button onClick={() => setIsEditAble(true)}>
          <img src={EditIcon} title="Edit" />
        </button>

        <button onClick={() => removeTodo(todo.id)}>
          <img src={DeleteIcon} title="Delete" />
        </button>
      </div>
    </li>
  );
};

export default TodoShow;
