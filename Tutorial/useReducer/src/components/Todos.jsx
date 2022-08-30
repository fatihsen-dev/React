import React from "react";
import Todo from "./Todo";

function Todos({ state }) {
  return (
    <ul>
      {state.todos.map((todo, index) => (
        <Todo key={index} todo={todo} />
      ))}
    </ul>
  );
}

export default Todos;
