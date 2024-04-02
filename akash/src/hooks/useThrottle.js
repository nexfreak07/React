import { useEffect, useRef, useState } from "react"

export const useThrottle = (value, delay) => {

   const [throttleValue, setThrottleValue] = useState(value);
   const lastExecuted = useRef(Date.now());

   useEffect(()=>{
    const timer = setTimeout(()=>{
        let now = Date.now();
        let timeElapased = now - lastExecuted.current;
        if(timeElapased >= delay){
            setThrottleValue(value);
            lastExecuted.current = now;
        }

    }, delay- (Date.now()-lastExecuted.current))
    // Imagine Delay is 500, you last executed at 300 and now its 600 so we covered 300 now we only need the func to run after 


    return ()=>{
        clearTimeout(timer)
    }

   }, [delay, value])



    return throttleValue;
}