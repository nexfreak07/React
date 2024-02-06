import React from 'react'
import { useState } from 'react';
export default function AddEmployeeForm({addData}) {

    const [newData, setNewData] = useState({
        name:'',
        position:''
    });


    const submitHandler = (e) => {
        e.preventDefault();
        
        addData(newData)
        setNewData({name:'', position:''})
    }

    const changeHandler = (e) => {
        const {name, value} = e.target;
        
        setNewData((prevState) => {return ({...prevState, [name]:value})})

    }


  return (
    <div>
        <form onSubmit={submitHandler}>
            <input placeholder='name' name='name' onChange={changeHandler} value={newData.name}></input>
            <input placeholder='position' name='position' onChange={changeHandler} value={newData.position}></input>  

            <button type='submit'>Submit</button>  
        </form>
    </div>
  )
}
