import React from "react";

function ClearBtn({ dispatch }) {
  return (
    <button onClick={() => dispatch({ type: "CLEAR_TODOS" })}>Clear</button>
  );
}

export default ClearBtn;
