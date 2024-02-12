import React from 'react'
import useDocumentTitle from './useDocumentTitle';
import { useState } from 'react';
import useCounter from './useCounter';

function HookComponent() {
    const [count, setCount] = useState(0);
    const clickHandler = ()=>{
        setCount(count+1)
    };

    useDocumentTitle(count);


    // ---------------------------Custom Hook INcrement --------------------------------------------


    const [value, increment, decrement, reset] = useCounter(12, 1);

  return (
    <div>
        <button onClick={clickHandler}>Change Document</button>

        <div>

            <h4>Increment by Custom Hooks : {value}</h4>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    </div>
  )
}

export default HookComponent