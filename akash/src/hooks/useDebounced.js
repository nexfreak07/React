import { useEffect, useState } from "react";

export const useDebounce = (value, delay) => {

    const [debounced, setDebouncedValue] = useState(value);

    useEffect(()=>{
        let timer = setTimeout(()=>{
            setDebouncedValue(value)
        }, delay)

        return ()=>{
            clearTimeout(timer);
        }

    }, [delay, value])
    
    
    return debounced
} 