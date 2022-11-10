import React, { useState } from "react";

const TodoItem = ({ data, index }) => {
  //   const [item, setItem] = useState("slkfj");
  return (
    <>
      <div>
        <span>{index + 1}. </span>
        <p className="inline">{data}</p>
        <button className="delete-btn">x</button>
      </div>
    </>
  );
};

export default TodoItem;
