import { useState } from "react";

const Counter = () => {
  const [Result, setResult] = useState("");
  const inCrement = () => {
    setResult(Result + 1);
  };
  const deCrement = () => {
    setResult(Result - 1);
  };
  return (
    <div>
      <button onClick={inCrement}>Increase</button>
      <h1>Count Value is {Result}</h1>
      <button onClick={deCrement}>Decrease</button>
    </div>
  );
};

export default Counter;
