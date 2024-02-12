
import { useState, useEffect, useRef } from 'react';

function FetchData() {


    const [id, setId] = useState(null);
   const  API = `https://jsonplaceholder.typicode.com/posts/${id}`;

    const [data, setData] = useState([]);

    const [error, setError] = useState(null);

    const inputRef = useRef(null);
    
    
    const idHandler = () => {

        setId(inputRef.current.value);

    }
    
    useEffect(()=>{

        if(id!=null)
        {
            fetch(API)
        .then((res)=>{

            if(!res.ok){
                throw new Error("Not Available")
            }
            return res.json();
        })
        .then((jsonValue)=>{
            console.log(jsonValue)
            setData(prevState => [...prevState, jsonValue])
            setError(null);

    })
        .catch((err)=>{
            console.error(err);
            setError(err.message);
        })
        }
        


        return ()=>{}

    }, [id])








  return (
    <div>
        <input type="text" placeholder='Enter the ID' ref={inputRef}></input>
        <button onClick={idHandler}>Fetch</button>
        {error && <p style={{color:'red'}}>{error}</p>}
        
        <ul>{data.map((d)=>(<li key={Math.random()}>{d.title}</li>))}</ul>
        
    </div>
  )
}

export default FetchData