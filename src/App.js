// 
import React, { useState, useEffect } from 'react';
import "./App.css"

const App = () => {
  const [count, setCount] = useState(0);
  const [state, setState] = useState(false);

  useEffect(() => {
     if (state) {
        let interval = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 500);
    return () => {
      clearInterval(interval);
    }};
  }, [state]); 

  const startButton = () => {
    setState(true)
  }

  const stopButton = () => {
    setState(false)
  };

  return (
    <div>
      <p  >Count: {count}</p>
      <button  onClick={startButton}>Start</button>
      <button   onClick={stopButton}>Stop</button>
    </div>
  )
}

export default App;
