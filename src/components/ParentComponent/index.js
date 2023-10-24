
import { useState } from "react";
import ChildComponent from "../ChildComponent";

function ParentComponent(){
    const[count , setCount] = useState(0)
    const incrementCount = () =>{
        setCount(count + 1);
    }

    return(
        <div>
            <ChildComponent count = {count} incrementCount= {incrementCount}/>
        </div>
    )
}

export default ParentComponent