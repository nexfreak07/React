import { useEffect, useState } from "react";
import axios from "axios";
import Child from "./Child";
import "./styles.css";

export default function App() {
  const [id, setId] = useState("1");
  const [d, setData] = useState({});

  const [error, setError] = useState(null);
  const API = `https://jsonplaceholder.typicode.com/posts/${id}`;

  useEffect(() => {
    // fetch(API)
    //   .then((res) => {
    //     if (!res.ok) {
    //       throw new Error("Something happened wrong!");
    //     }
    //     return res.json();
    //   })
    //   .then((data) => {
    //     setData(data);
    //     setError(null);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     setData({});
    //     setError("Something Happened Wrong!");
    //   });

    fecthData();

    return () => {};
  }, [API]);

  async function fecthData() {
    try {
      const response = await axios.get(API);
      setData(response.data);
      setError(null);
    } catch (error) {
      setError("Something Happened Wrong!");
      setData({});
    }
  }

  const setIdHandler = (id) => {
    setId(id);
  };

  return (
    <div>
      <Child getId={setIdHandler} />

      <div>
        {!error ? (
          <ul>
            <li key={d.id}>{d.title}</li>
          </ul>
        ) : (
          <div style={{ color: "red" }}>{error}</div>
        )}
      </div>
    </div>
  );
}


// --------------------------------------------------------------------------- Chid Component--------------------------------------------------


import react, { useState, useRef } from "react";

export default function Child(props) {
  const [id, setId] = useState("1");
  const input = useRef(null);

  const clickHandler = () => {
    setId(input.current.value);
  };

  const submitHandler = () => {
    props.getId(id);
  };
  return (
    <div>
      <input ref={input} onChange={clickHandler} />
      <button onClick={submitHandler}>Submit</button>
    </div>
  );
}
