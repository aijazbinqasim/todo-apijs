import { useContext, useEffect } from "react";
import TodoList from "./components/TodoList";
import TodoCreate from "./components/TodoCreate";
import { TodosContext } from "./context/todos";
import "./App.css";

const App = () => {
  useEffect(() => {
    getTodos();
  }, []);

  const { getTodos } = useContext(TodosContext);

  return (
    <main className="main">
      <h1>
        React Todo <span>Streamline Your Day, the React Way!</span>
      </h1>
      <TodoList />
      <TodoCreate />
    </main>
  );
};

export default App;
