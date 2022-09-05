import { useState, createContext, useContext } from "react";

const Context = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(false);

  const data = {
    user,
    setUser,
  };

  return <Context.Provider value={data}>{children}</Context.Provider>;
};
export const useAuth = () => useContext(Context);
