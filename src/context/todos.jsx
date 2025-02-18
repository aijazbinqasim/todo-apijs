import { createContext, useState } from "react";

const TodosContext = createContext();

const Provider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    const url = "https://jsonplaceholder.typicode.com/todos";
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const storedTodos = await response.json();
      if (storedTodos) setTodos(storedTodos);
    } catch (error) {
      console.error("Error during GET request:", error);
    }
  };

  const createTodo = async (title) => {
    const newTodo = { title: title, completed: false };

    const url = "https://jsonplaceholder.typicode.com/todos";
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTodo),
      });

      if (!response.ok) throw new Error("Network response was not ok");
      const storedTodo = await response.json();
      const updatedTodos = [...todos, storedTodo];
      setTodos(updatedTodos);
    } catch (error) {
      console.error("Error creating a todo:", error);
    }
  };

  const updateTodo = async (id, newTitle, completed = false) => {
    const url = `https://jsonplaceholder.typicode.com/todos/${id}`;
    const data = { title: newTitle, completed };
    try {
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const updatedTodo = await response.json();

      // Update the state
      const updatedTodos = todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, ...updatedTodo };
        }
        return todo;
      });
      setTodos(updatedTodos);
    } catch (error) {
      console.error("Error during PUT request:", error);
      throw error;
    }
  };

  const removeTodo = async (id) => {
    const url = `https://jsonplaceholder.typicode.com/todos/${id}`;

    try {
      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) throw new Error("Network response was not ok");
      const updatedTodos = todos.filter((todo) => todo.id !== id);
      setTodos(updatedTodos);
    } catch (error) {
      console.error("Error during DELETE request:", error);
      throw error;
    }
  };

  return (
    <TodosContext.Provider
      value={{ todos, getTodos, createTodo, updateTodo, removeTodo }}
    >
      {children}
    </TodosContext.Provider>
  );
};

export { TodosContext, Provider };
