import { useState, useRef, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [timer, setTimer] = useState(0);

  const input = useRef(null);

  const startHandler = () => {
    input.current = setInterval(() => {
      setTimer((prevState) => prevState + 1);
    }, 1000);
  };

  const pauseHandler = () => {
    clearInterval(input.current);
  };
  const resetHandler = () => {
    setTimer(0);
  };

  useEffect(() => {
    return () => {
      clearInterval(input.current);
    };
  }, []);

  return (
    <div className="App">
      <div>{timer}</div>
      <button onClick={startHandler}>Start</button>
      <button onClick={pauseHandler}> Pause</button>
      <button onClick={resetHandler}>Reset</button>
    </div>
  );
}
