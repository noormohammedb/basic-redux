import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

const TodoList = () => {
  const todoData = useSelector((state) => state.todos);
  console.log("TodoList: state.todos: ", todoData);
  return (
    <>
      <h1>TodoList</h1>
      {todoData.map((data, index) => (
        <TodoItem key={index} data={data} index={index} />
      ))}
    </>
  );
};

export default TodoList;
