import { useState } from "react";
import "./styles.css";

const array = ["Apple", "Mango", "Banana", "Grapes", "Orange"];

export default function App() {
  const [arr, setArr] = useState(array);

  const shuffleHandler = () => {
    let shuffle = [...arr];

    // Fisher-Yates shuffle algorithm -- For shuffling
    for (let i = shuffle.length - 1; i > 0; i--) {
      // Generating a Random index based on i
      let j = Math.floor(Math.random() * i + 1);
      [shuffle[i], shuffle[j]] = [shuffle[j], shuffle[i]];
    }
    setArr(shuffle);
  };
  return (
    <div>
      <ul>
        {arr.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
      <button onClick={shuffleHandler}>Shuffle</button>
    </div>
  );
}
