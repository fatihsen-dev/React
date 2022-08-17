import React from "react";
import ReactDOM from "react-dom/client";

const template = React.createElement("p", {}, "Hello, React");

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(template);
