import { useEffect, useState } from "react";
import "./App.css";
import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

export function fetchTodos() {
  const result = [];

  for (let i = 0; i < localStorage.length; i++) {
    const value = localStorage.key(i);
    result.push(value);
  }

  return result;
}

function App() {
  const [todos, setTodos] = useState(fetchTodos());

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  const addTodo = (todo) => {
    localStorage.setItem(todo, todo);

    setTodos((currTodos) => {
      return [...currTodos, todo];
    });
  };

  const removeTodo = (todo) => {
    const result = todos.filter((todoItem) => {
      if (todoItem !== todo) {
        return true;
      }
    });

    setTodos(result);

    localStorage.removeItem(todo);
  };

  return (
    <div className="App">
      <TodoHeader />
      <TodoInput onAddTodo={addTodo} />
      <TodoList todos={todos} onRemoveTodo={removeTodo} />
    </div>
  );
}

export default App;
