import React, { useEffect, useState } from 'react';

export const Child = (props) => {

    const [user, setUser] = useState("nexfreak07");
    const API = `https://api.github.com/users/${user}`


    // const changeHandler = (e)=>{

    //     setUser(e.target.value);
    // }

    async function fetchData(){

        try{
            
        const response = await fetch(API);
        const jsonValue = await response.json();
        
        props.getData(jsonValue);
        setUser("");
        }
        catch(error){
            console.error(error);
        }

    }

    return <div>
    <input type='text' value={user} onChange={(e) => {setUser(e.target.value);  console.log(user);}}/>
    <button onClick={fetchData}>Fetch</button>
    
    </div>
}; 