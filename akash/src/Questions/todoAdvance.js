import "./styles.css";
import { useState } from "react";
const todos = ["Drink Water", "Sleep", "Code", "Eat"];
export default function App() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState(todos);
  const [isEdit, setEdit] = useState(false);
  const changeHandler = (e) => {
    setInput(e.target.value);
  };

  const addHandler = () => {
    if (isEdit === false) {
      const updatedTodos = [...todo, input];
      setTodo(updatedTodos);
      setInput("");
    } else {
      const editedTodo = todo.map((item, index) =>
        isEdit === index ? input : item
      );

      console.log(editedTodo);
      setTodo(editedTodo);
      setInput("");
      setEdit(false);
    }
  };

  const removeHandler = (idx) => {
    const removedTodos = todo.filter((_, index) => idx !== index);
    setTodo(removedTodos);
  };

  const editHandler = (idx) => {
    setInput(todo[idx]);
    console.log(idx);
    setEdit(idx);
  };
  return (
    <div className="App">
      <form>
        <input type="text" onChange={changeHandler} value={input} />
        <button type="button" onClick={addHandler}>
          Add
        </button>

        <ul>
          {todo.map((item, index) => (
            <div key={index}>
              <li>
                {item}
                <button type="button" onClick={() => removeHandler(index)}>
                  Remove
                </button>

                <button type="button" onClick={() => editHandler(index)}>
                  Edit
                </button>
              </li>
            </div>
          ))}
        </ul>
      </form>
    </div>
  );
}
