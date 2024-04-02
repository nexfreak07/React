import "./styles.css";
import { useState } from "react";

const items = ["Study", "Work", "Play", "TV", "Sleep"];
export default function App() {
  const [it, setIt] = useState(items);
  const [inp, setInp] = useState("");

  const deleteHandler = (idx) => {
    const newIt = it.filter((_, i) => i !== idx);
    setIt(newIt);
  };

  const addHandler = () => {
    const NewArray = [...it, inp];
    setIt(NewArray);
    setInp("");
  };
  return (
    <div className="App">
      <ul>
        {it.map((item, idx) => (
          <li>
            {item} <button onClick={() => deleteHandler(idx)}>Delete</button>
          </li>
        ))}
      </ul>

      <input type="text" value={inp} onChange={(e) => setInp(e.target.value)} />
      <button onClick={addHandler}>Add</button>
    </div>
  );
}
