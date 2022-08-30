import React from "react";

function Form({ state, dispatch }) {
  const formHandle = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", todo: state.todo });
  };
  const onChange = (e) => {
    dispatch({
      type: "SET_TODO",
      value: e.target.value,
    });
    state.todo = "";
  };
  return (
    <form onSubmit={formHandle}>
      <input
        onChange={onChange}
        value={state.todo}
        type='text'
        name='inputText'
      />
      <button disabled={!state.todo} name='btn' type='submit'>
        Ekle
      </button>
    </form>
  );
}

export default Form;
