import React, {useState} from "react";
import { HexCode, Option1, Option2 } from "./HexValues";
export default function ColorGame() {

    const [color, setColor] = useState(null);
  const colorArray = [HexCode, Option1, Option2];

  const primaryColor =
    colorArray[Math.floor(Math.random() * colorArray.length)];


  const colorHandler = (event) => {
    const input = event.target.value;
    if(input==primaryColor)
    {
        setColor("Perfect");
        window.location.reload();
        
    }
    else{
        
        setColor("Try Again")
    }

  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            height: "300px",
            width: "400px",
            backgroundColor: primaryColor,
          }}
        ></div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "5% 30%",
        }}
      >
        {colorArray.map((color) => (
          <button onClick={colorHandler} value={color}>
            {color}
          </button>
        ))}

        
      </div>

      <h1 style={{display: 'flex', justifyContent: 'center'}}>{color == null? null : color == "Perfect" ? <p style={{color:'green'}}>{color}</p> : <p style={{color:'red'}}>{color}</p>  }</h1>
    </>
  );
}
