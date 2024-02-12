import React, { useMemo, useState } from 'react'

export default function ComponentMemo() {

    const [countOne, setCountOne] = useState(0);
    const [countTwo, setCountTwo] = useState(0);

    const incrementOne = ()=>{
        
        setCountOne(countOne+1);

    }

    const incrementTwo = ()=>{

        setCountTwo(countTwo+1);
    }

    const check = useMemo(() => {

        let i = 0;
        while(i<200000000)
        {
            i++;
        }

        return countOne % 2 === 0;
    }, [countOne])
  return (
    <div>
        <div>Count One - {countOne} - {check ? "Even" : "Odd" }</div>
        <div>Count Two - {countTwo}</div>
        <button onClick={incrementOne}>Increment Count One</button>
        <button onClick={incrementTwo}>Increment Count One</button>
    </div>
  )
}
