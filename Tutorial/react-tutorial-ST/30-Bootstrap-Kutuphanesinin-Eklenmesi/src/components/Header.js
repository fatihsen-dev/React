import React from "react";

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <div>{props.desc}</div>
    </div>
  );
};

export default Header;
