import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./store";

const TodoAdder = () => {
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
            dispatch(addTodo({ data: newTodo, isFinished: false }));
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
