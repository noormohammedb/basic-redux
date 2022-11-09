import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const counter = useSelector((state) => state.counter);
  const [myNumber, setMyNumber] = useState(0);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type: "INC" });
  };
  const decrement = () => {
    // if (counter < 1) {
    //   console.log("counter < 1: ", counter < 1);
    //   return;
    // }
    // counter > 0 ? dispatch({ type: "DEC" }) : console.log("foo");

    // https://stackoverflow.com/questions/15009194/assign-only-if-condition-is-true-in-ternary-operator-in-javascript#answer-15009278
    counter > 0 && dispatch({ type: "DEC" });
  };

  const setThisNumber = () => {
    dispatch({ type: "SET", payload: myNumber });
  };
  return (
    <>
      <div>
        <h1>counter</h1>
        <h2>{counter}</h2>
        <button onClick={decrement}>decrement</button>
        <button onClick={increment}>increment</button>

        <input
          type="number"
          value={myNumber}
          onChange={(e) => setMyNumber(+e.target.value)}
        />
        <button onClick={setThisNumber}>set</button>
      </div>
    </>
  );
}

export default App;
