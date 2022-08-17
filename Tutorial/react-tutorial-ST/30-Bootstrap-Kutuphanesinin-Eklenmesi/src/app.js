import React from "react";
import ReactDOM from "react-dom/client";
import TodoApp from "./components/TodoApp";
import "./styles/main.scss";

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<TodoApp />);