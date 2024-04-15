import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElaspsedTime] = useState(0);
  useEffect(() => {
    let IntervalId;
    if (isRunning) {
      IntervalId = setInterval(() => {
        setElaspsedTime((prevElapsedTime) => prevElapsedTime + 1);
      }, 1000);
    } else {
      clearInterval(IntervalId);
    }

    return () => clearInterval(IntervalId);
  }, [isRunning]);
    const formatTime =(time)=>{
      const minutes = Math.floor(time/60);
      const seconds =time % 60;
      return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
    }
    const startStop =()=>{
      setIsRunning(!isRunning)
    }
    const reset = ()=>{
      setElaspsedTime(0)
      setIsRunning(false)
    }
  return (
    <div className="App">
      <h1>Stopwatch</h1>
      <p>Time: {formatTime(elapsedTime)}</p>
      <button onClick={startStop}>{isRunning ? "Stop" : "Start"}</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;