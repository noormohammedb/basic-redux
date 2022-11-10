import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

const TodoList = () => {
  const todoData = useSelector((state) => state.todos);
  console.log("TodoList todoData: ");
  console.dir(todoData);
  return (
    <>
      <h1>TodoList</h1>
      <p>{todoData[2]}</p>
      {todoData.map((data, index) => (
        <TodoItem key={index} data={data} index={index} />
      ))}
    </>
  );
};

export default TodoList;
