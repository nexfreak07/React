import React, { useState, useEffect, useRef } from "react";
import axios from 'axios';

export default function Fetch() {
  const [id, setId] = useState(1);

  const API = `https://jsonplaceholder.typicode.com/posts/${id}`;

  const [data, setData] = useState("");

  const [error, setError] = useState(null);

  const postRef = useRef();

  const PUT_DEL_API = "https://jsonplaceholder.typicode.com/posts/1";

  const sendDataHandler = () => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: postRef.current.value,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const changeDataHandler = () => {
    fetch(PUT_DEL_API, {
      method: "PUT",
      body: JSON.stringify({ title: postRef.current.value }),
      headers: { "Content-Type": "application/json" },
    })
      .then((result) => {
        const data = result.json();
        return data;
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.err(err);
      });
  };

  const deleteDataHandler = () => {
    fetch(PUT_DEL_API, { method: "DELETE" })
      .then((res) => {
        const data = res.json();
        return data;
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const changeHandler = (event) => {
    setId(event.target.value);
  };

  useEffect(() => {
    fetch(API)
      .then((result) => {
        if (!result.ok) {
          throw new Error("Error");
        }
        const data = result.json();
        return data;
      })
      .then((data) => {
        setData(data);
        setError(null);
      })
      .catch((err) => {
        console.error(err);
        setError("Something Happened");
      });

    return () => {};
  }, [id]);

  return (
    <>
      <input
        type="text"
        onChange={changeHandler}
        style={{ alignContent: "center" }}
      />

      <input type="text" ref={postRef} placeholder="Data to post" />
      <button onClick={sendDataHandler}>Post Data</button>
      <button onClick={changeDataHandler}>Put Data</button>
      <button onClick={deleteDataHandler}>Delete Data</button>

      <div style={{ display: "flex", justifyContent: "center" }}>
        {error != null ? (
          <p style={{ color: "red" }}>{error}</p>
        ) : (
          <div style={{ padding: "10%" }}>
            <h3> Title - {data.title}</h3>
            <p>{data.body}</p>
          </div>
        )}
      </div>
    </>
  );
}
