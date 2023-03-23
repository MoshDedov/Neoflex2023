import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

export default function GameOne() {

  // State to store count value
  const [count, setCount] = useState(0);

  // Function to increment count by 1
  const incrementCount = () => {
    // Update state with incremented value
    setCount(count + 1);

  };
  return (
    <div className="gameone">
      <button onClick={incrementCount}>{count}</button>
      <a className="timer">{count}</a>
    </div>
  );
}
