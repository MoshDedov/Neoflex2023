import React, { useState } from "react";
import ReactDOM from "react-dom";
import Countdown from "react-countdown";
import "./styles.css";
import Timer from "./Timer";

export default function GameOne() {

  // State to store count value
  const [count, setCount] = useState(0);

  // Function to increment count by 1
  const incrementCount = () => {
    // Update state with incremented value
    setCount(count + 1);

  };
  return (
    <div className="gameone" onClick={incrementCount}>Нажимай!<br/>{count}
      <a className="timer">{}</a>
    </div>
  );
}
