import React from "react";
import SwitchTheme from "./SwitchTheme";
import Switchlanguage from "./Switchlanguage";

function Header() {
  return (
    <header>
      <p>HEADER</p>
      <SwitchTheme />
      <Switchlanguage />
    </header>
  );
}

export default Header;
