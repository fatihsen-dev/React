import React from "react";

const TodoItem = (props) => {
  return (
    <li className=' bg-warning p-1 rounded-1 d-flex justify-content-between'>
      {props.text}
      <button
        className='btn btn-danger px-2 py-0 rounded-1'
        onClick={() => {
          props.deleteItem(props.text);
        }}
      >
        X
      </button>
    </li>
  );
};
export default TodoItem;
