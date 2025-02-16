import TodoShow from "./TodoShow";

const TodoList = ({ todos, updateTodo, removeTodo }) => {
  const renderTodos = todos.map((todo) => {
    return (
      <TodoShow
        key={todo.id}
        todo={todo}
        updateTodo={updateTodo}
        removeTodo={removeTodo}
      />
    );
  });

  return <ul className="todo-list">{renderTodos}</ul>;
};

export default TodoList;