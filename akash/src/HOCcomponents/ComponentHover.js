import { withIncrement } from "./HOC"

const ComponentHover = ({props, count, increment}) => {
    return <h1 onMouseEnter={increment}>Akash Hovered {count} times</h1>
}


export default  withIncrement(ComponentHover)