import React from 'react'

function useState() {

    const [count, setCount] = useState(0)

    const incrementNumber = ()=>{
        setCount(prevState => prevState+1);
    }
  return (
    <div>
        <div>
            <button onClick={incrementNumber}>Count : {count}</button>
        </div>
    </div>
  )
}

export default useState