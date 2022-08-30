const reduceFn = (state, action) => {
  switch (action.type) {
    case "SET_TODO":
      return {
        ...state,
        todo: action.value,
      };
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.todo],
        todo: "",
      };
    case "CLEAR_TODOS":
      return {
        todos: [],
        todo: "",
      };
  }
};

export default reduceFn;
