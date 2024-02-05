import "./styles.css";
import react, {useState } from "react";
const API = "https://jsonplaceholder.typicode.com/posts";
export default function App() {
  const [data, setData] = useState({
    email: "",
    name: "",
  });

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const fetchData = async () => {
    try {
      const response = await fetch(API, {
        method: "POST",
        body: JSON.stringify({ title: data.name }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const res = await response.json();
      console.log(res);
    } catch (err) {
      console.error(err);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    fetchData();
  };
  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={data.email}
          onChange={changeHandler}
        />

        <label>Name</label>
        <input
          type="text"
          name="name"
          value={data.name}
          onChange={changeHandler}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
