import React from "react";

const TodoItem = (props) => {
  return (
    <li
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
      }}
    >
      {props.text}
      <button
        onClick={() => {
          props.deleteItem(props.text);
        }}
        style={{ padding: "0 10px", cursor: "pointer" }}
      >
        X
      </button>
    </li>
  );
};
export default TodoItem;
