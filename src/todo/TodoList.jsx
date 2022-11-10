import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

const TodoList = () => {
  const todoData = useSelector((state) => state.todos);
  return (
    <>
      <h1>TodoList</h1>
      {todoData.map((todoItem, index) => (
        <TodoItem key={index} todoItem={todoItem} index={index} />
      ))}
    </>
  );
};

export default TodoList;
