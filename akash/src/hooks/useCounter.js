import { useState } from 'react';

function useCounter(value, position) {
  
    const [count, setCount] = useState(value);

    const increment = () => {
        setCount(prevCount => prevCount + position);
    };
    const decrement = () => {
        setCount(prevCount => prevCount - position);
    };
    const reset = () => {
        setCount(value);
    };


    return [count, increment , decrement, reset]
}

export default useCounter