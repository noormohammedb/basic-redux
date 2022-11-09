import { useSelector, useDispatch } from "react-redux";

function App() {
  const counter = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type: "INC" });
  };
  const decrement = () => {
    if (counter < 1) {
      console.log("counter < 1: ", counter < 1);
      return;
    }
    dispatch({ type: "DEC" });
  };

  return (
    <>
      <div>
        <h1>counter</h1>
        <h2>{counter}</h2>
        <button onClick={decrement}>decrement</button>
        <button onClick={increment}>increment</button>
      </div>
    </>
  );
}

export default App;
