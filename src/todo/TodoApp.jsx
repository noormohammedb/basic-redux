import React from "react";
import TodoAdder from "./TodoAdder";
import TodoList from "./TodoList";

function TodoApp() {
  return (
    <>
      <h2>TodoApp</h2>
      <div className="todo-container">
        <TodoAdder />
        <TodoList />
      </div>
    </>
  );
}

export default TodoApp;
