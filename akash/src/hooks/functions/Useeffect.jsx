import React from 'react'
import { useState, useEffect } from 'react';

function Useeffect() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const [toggle, setGToggle] = useState(false);

    const logmoving = (e) => {

        console.log("MouseEvent");

        setX(e.clientX);
        setY(e.clientY);

    }

    useEffect(()=>{


        console.log("Useeffect called");
        window.addEventListener('mousemove', logmoving)


        return () => {
            console.log("Unmounting");
            window.removeEventListener('mousemove', logmoving)
        }
    }, []);


  return (
    <div>
        <button onClick={()=>setGToggle(!toggle)}>Toggle</button>
        {toggle && <h1>X : {x}, Y:{y}</h1>}
    </div>
  )
}
export default Useeffect;
