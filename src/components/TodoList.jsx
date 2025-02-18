import { useContext } from "react";
import { TodosContext } from "../context/todos";
import TodoShow from "./TodoShow";

const TodoList = () => {
  const { todos } = useContext(TodosContext);
  const renderTodos = todos.map((todo) => {
    return <TodoShow key={todo.id} todo={todo} />;
  });

  return <ul className="todo-list">{renderTodos}</ul>;
};

export default TodoList;
