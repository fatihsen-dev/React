import React from "react";
import SwitchTheme from "./SwitchTheme";
import Switchlanguage from "./Switchlanguage";
import { useAuth } from "../context/";

function Header() {
  const { user, dispatch } = useAuth();

  const login = (e) => {
    dispatch({
      type: "LOGIN",
      payload: {
        name: "Fatih",
        id: 1,
      },
    });
  };
  const logout = () => {
    dispatch({
      type: "LOGOUT",
    });
  };

  return (
    <header>
      {user ? (
        <button onClick={logout}>Çıkış yap</button>
      ) : (
        <button onClick={login}>Giriş yap</button>
      )}
      <hr />
      <p>HEADER</p>
      <SwitchTheme />
      <Switchlanguage />
    </header>
  );
}

export default Header;
