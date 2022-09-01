import React from "react";
import SwitchTheme from "./SwitchTheme";
import Switchlanguage from "./Switchlanguage";
import { useAuth } from "../context";

function Header() {
  const { user, setUser } = useAuth();

  const login = () => {
    setUser({
      name: "Fatih",
      id: 1,
    });
  };
  const logout = () => {
    setUser(false);
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
