import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Gallery from "./Gallery";
import TodoList from "./TodoList";
import Avatar from "./Avatar";
import "./index.css";
import Clock from "./Clock";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Gallery /> */}
    {/* <TodoList /> */}
    {/* {<Avatar />} */}
    <Clock />
  </React.StrictMode>
);
