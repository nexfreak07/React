import { withIncrement } from "./HOC"

const Component  = ({count , increment}) => {

    

    return <div>
        <button onClick={increment}>Akash Clicked {count} times</button>
    </div>
} 

export default withIncrement(Component);