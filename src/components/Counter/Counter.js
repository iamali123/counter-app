import React, { useState } from "react";
import "./Counter.css"

const Counter = () => {
  let [counter, setCounter] = useState(1);
  return (
    <div className="counterWrapper">
      <input
        type="button"
        className="decrementBtn"
        value="-"
        onClick={() => {
          if (counter >= 0) {
            setCounter(--counter);
          }
        }}
      />
      <span className="counterValue">{counter}</span>
      <input
        type="button"
        className="incrementBtn"
        value="+"
        onClick={() => {
          if (counter < 1000) {
            setCounter(++counter);
          }
        }}
      />
    </div>
  );
};

export default Counter;
