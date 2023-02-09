import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function Clock({color, time}) {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
        <h1 style={{color: color}}>
            {time}
        </h1>
    </div>
  );
}

export default Clock;
