import { createContext, useContext, useReducer } from "react";
import siteReducer from "../reducer/siteReducer";

const Context = createContext();

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(siteReducer, {
    theme: "light",
    language: "tr",
  });

  const data = {
    ...state,
    dispatch,
  };
  return <Context.Provider value={data}>{children}</Context.Provider>;
};

export const useAuth = () => useContext(Context);

export default Provider;
