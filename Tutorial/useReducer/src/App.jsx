import { useReducer } from "react";
import Form from "./components/Form";
import reduceFn from "./components/Reducer";
import Todos from "./components/Todos";
import ClearBtn from "./components/ClearBtn";

function App() {
  const [state, dispatch] = useReducer(reduceFn, {
    todos: [],
    todo: "",
  });

  return (
    <div className='app'>
      <div className='ctnr'>
        <Form state={state} dispatch={dispatch} />
        <Todos state={state} />
        {state.todos.length > 0 && <ClearBtn dispatch={dispatch} />}
      </div>
    </div>
  );
}

export default App;
