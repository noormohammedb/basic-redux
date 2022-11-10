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
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(addTodo(newTodo));
            setNewTodo("");
          }}
        >
          <input
            type="text"
            name="new_todo"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button>Add</button>
        </form>
      </div>
    </>
  );
};
export default TodoAdder;
