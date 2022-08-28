import { useReducer } from "react";

const initialState = {
  sayi: 0,
};

const reducerFn = (prevState, action) => {
  switch (action.type) {
    case "arttir":
      return { sayi: prevState.sayi + 1 };
    case "azalt":
      return { sayi: prevState.sayi - 1 };
    default:
      return {
        sayi: prevState,
      };
  }
};

function App() {
  const [state, dispatch] = useReducer(reducerFn, initialState);
  return (
    <div className='app'>
      <div className='ctnr'>
        <button onClick={() => dispatch({ type: "azalt" })}>-</button>
        <h1>{state.sayi}</h1>
        <button onClick={() => dispatch({ type: "arttir" })}>+</button>
      </div>
    </div>
  );
}

export default App;
