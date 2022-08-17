import React from "react";
import TodoItem from "./TodoItem";

const TodoList = (props) => {
  return (
    <div>
      <ul className='d-flex flex-column my-2 p-0 gap-1'>
        {props.items.map((liText, index) => (
          <TodoItem deleteItem={props.deleteItem} key={index} text={liText} />
        ))}
      </ul>
      {props.items.length > 0 ? (
        <button
          className='btn bg-danger w-100 text-white bg-opacity-75 rounded-1 py-1'
          onClick={props.clearItems}
        >
          Clear
        </button>
      ) : (
        <p className='alert alert-warning py-1 text-warning'>Item bulunmuyor</p>
      )}
    </div>
  );
};
export default TodoList;
