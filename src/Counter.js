import {useState} from 'react'

function Counter(){

    const[count, setCount] = useState(0)

    const increment = () =>{
        setCount(count + 1)
    }

    return(
        <div>
            <h1>{count}</h1>
            <button className={`btn btn-primary`} onClick={increment}>increment</button>
        </div>
    )
}
export default Counter