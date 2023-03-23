import React from "react";
import ReactDOM from "react-dom";
import Countdown from "react-countdown";
import "./styles.css";

const Completionist = () => <span>sperma</span>;

export default function Timer(){
return(
  <Countdown
    date={Date.now() + 10000}
    intervalDelay={0}
    precision={2}
    renderer={(props) => <div className="timer"><a>{props.total / 1000}</a></div>}><span>oleg</span>
  </Countdown>
    );
    }