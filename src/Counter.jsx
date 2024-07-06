import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0)

    const add = () =>{
        const newCount = count + 1;
        setCount(newCount)
    }
    const Reduce = () =>{
        const newCount = count - 1;
        setCount(newCount)
    } 

    return (

        <div>
            <h2>Counter: {count}</h2>

            <button onClick={add}>add</button>
            <button onClick={Reduce}>Reduce</button>
        </div>


    )
}
