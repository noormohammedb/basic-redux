import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "./store";

function App() {
  const counter = useSelector((state) => state.counter);
  const [myNumber, setMyNumber] = useState(0);
  const dispatch = useDispatch();

  /*
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
    */
  return (
    <>
      <div>
        <h1>counter</h1>
        <h2>{counter}</h2>
        <button
          onClick={() => {
            if (counter < 1) return;
            dispatch(actions.decrement());
          }}
        >
          decrement
        </button>
        <button
          onClick={() => {
            dispatch(actions.increment());
          }}
        >
          increment
        </button>

        <input
          type="number"
          value={myNumber}
          onChange={(e) => setMyNumber(+e.target.value)}
        />
        <button
          onClick={() => {
            dispatch(actions.setThisNumber(myNumber));
          }}
        >
          set
        </button>
      </div>
    </>
  );
}

export default App;
