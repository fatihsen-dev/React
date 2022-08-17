import React from "react";
import TodoItem from "./TodoItem";

const TodoList = (props) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <ul style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
        {props.items.map((liText, index) => (
          <TodoItem deleteItem={props.deleteItem} key={index} text={liText} />
        ))}
      </ul>
      <button
        style={{ padding: "4px 0", cursor: "pointer" }}
        onClick={props.clearItems}
      >
        Clear
      </button>
    </div>
  );
};
export default TodoList;
