import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./store";
// import { useSelector } from "react-redux";

const TodoAdder = () => {
  // const todoData = useSelector((state) => state);
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState("");
  return (
    <>
      <div className="todo-adder">
        <input
          type="text"
          name="new_todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button
          onClick={() => {
            dispatch(addTodo(newTodo));
            setNewTodo("");
          }}
        >
          Add
        </button>
      </div>
    </>
  );
};
export default TodoAdder;
