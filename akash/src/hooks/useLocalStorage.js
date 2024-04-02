export const useLocalStorage = () => {

    

    const getValue = (key) => {
       try {
        const localItem = window.localStorage.getItem(key);
        return localItem;
        
       } catch (error) {
        console.log(error)
        return undefined;
       }
    }

    const setValue = (key, value)=>{
       try {
        window.localStorage.setItem(key, value);
       } catch (error) {
        console.log(error)
       }
    }

    const deleteValue = (key) => {
        try {
            window.localStorage.removeItem(key);
        } catch (error) {
            
            console.log(error)
        }
    }

    return [getValue, setValue, deleteValue];
}