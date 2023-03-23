import React from "react";
import ReactDOM from "react-dom";
import Countdown from "react-countdown";

ReactDOM.render(
  <Countdown
    date={Date.now() + 30000}
    intervalDelay={0}
    precision={2}
    renderer={(props) => <div>{props.total / 1000}</div>}
  />,
  document.getElementById("root")
);
