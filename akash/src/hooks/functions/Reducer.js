import React from 'react'

import { useReducer } from 'react'

const initialState = 0;

const reducer = (state, action) => {
    switch(action.type){
        case 'Increment': 
            return state + action.value;
        case 'Decrement': 
            return state - action.value;
        case 'Reset':
            return initialState;
        default : return state;
    }

}

export default function Reducer() {

    const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
        <div>Count - {count}</div>
        <button  onClick={()=>{dispatch({type:'Increment', value:1})}}>Increment By 1</button>
        <button  onClick={()=>{dispatch({type:'Decrement', value:1})}}>Decrement By 1</button>

        <button  onClick={()=>{dispatch({type:'Increment', value:5})}}>Increment By 5</button>
        <button  onClick={()=>{dispatch({type:'Decrement', value:5})}}>Decrement By 5</button>


        
        <button  onClick={()=>{dispatch({type:'Reset'})}}>Reset</button>


    </div>
  )
}
