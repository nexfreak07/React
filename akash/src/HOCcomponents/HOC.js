import React, { useState } from "react";

export const  withIncrement = (WrappedComponent) => {

   return (props) => {

    const [count, incrementCount] = useState(0)
    
    const increment = () => {
        incrementCount(count+1);
    };

    console.log("Hi Akash from HOC")



    return <WrappedComponent {...props} count={count} increment={increment}/>
   };
};
