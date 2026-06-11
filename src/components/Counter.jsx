import { useState } from "react";

const Counter = () => {
  const [Result, setResult] = useState("");
  const [incrementBy, setIncrementBy] = useState(1);
//   const [DecrementBy, setDecrementBy] = useState(1);

  const IncreaseIncrement = () => {
    setIncrementBy(incrementBy + 1);
  };

  const DecreaseDecrement = () => {
    setIncrementBy(incrementBy - 1);
  };

  const inCrement = () => {
    // setResult(Result + 1);
    setResult(Result + incrementBy);
  };
  const deCrement = () => {
    // setResult(Result - 1);
    setResult(Result - incrementBy);
  };
  return (
    <div>
      <button onClick={inCrement}>Increase</button>
      <h1>Count Value is {Result}</h1>
      <button onClick={deCrement}>Decrease</button>

      <h1>We are incrementing the value by {incrementBy}</h1>
      <button onClick={IncreaseIncrement}>Increase Increment</button>

      <button onClick={DecreaseDecrement}>Decrease Decrement</button>
    </div>
  );
};

export default Counter;
