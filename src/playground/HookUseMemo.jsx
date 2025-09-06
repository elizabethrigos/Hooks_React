import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";


function filterTodos(todos, tab) {
  if (tab === "all") return todos;
  if (tab === "active") return todos.filter((todo) => !todo.completed);
  if (tab === "completed") return todos.filter((todo) => todo.completed);
  return todos;
}

function List({ items }) {
  return (
    <ul className="list-unstyled"> 
      {items.map((todo) => (
        <li key={todo.id}>
          {todo.text} {todo.completed ? "Completo" : "incompleto"}
        </li>
      ))}
    </ul>
  );
}

function TodoList() {
  const [tab, setTab] = useState("all");
  const [todos] = useState([
    { id: 1, text: "Ejemplo 1", completed: true },
    { id: 2, text: "Ejemplo 2", completed: false },
    { id: 3, text: "Ejemplo 3", completed: false },
  ]);

  //Memoriza el resultado de la función filterTodos
  const visibleTodos = useMemo(() => filterTodos(todos, tab), [todos, tab]);

  return (
    <div className="container text-center">
      <h2>Ejemplo Todo List con useMemo 🐻‍❄️</h2>
      <div>
        <button
          className="btn btn-secondary"
          onClick={() => setTab("all")}
        >
          Todos
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => setTab("active")}
        >
          Activos
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => setTab("completed")}
        >
          Completados
        </button>
      </div>
      <List items={visibleTodos} />
      <Link to="/">Volver al Home</Link>
    </div>
  );
}

export default TodoList;