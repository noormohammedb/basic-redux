import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./store";
// import { useSelector } from "react-redux";

const TodoAdder = () => {
  // const todoData = useSelector((state) => state);
  const inputElement = useRef();
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState("");

  return (
    <>
      <div className="todo-adder">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (!newTodo) return;
            dispatch(addTodo(newTodo));
            setNewTodo("");
            inputElement.current.focus();
          }}
        >
          <input
            ref={inputElement}
            type="text"
            name="new_todo"
            autoComplete="off"
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
