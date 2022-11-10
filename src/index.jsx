import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import TodoApp from "./todo/TodoApp";
// import store from "./store";
import { todoStore } from "./todo/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={todoStore}>
    <React.StrictMode>
      <TodoApp />
    </React.StrictMode>
  </Provider>
);
