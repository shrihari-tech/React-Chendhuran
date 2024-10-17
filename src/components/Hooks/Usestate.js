import React ,{useState, useEffect} from "react";

const Usestate = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
        if(count == 0){
            setCount(0);
        }
    }

    useEffect(()=>{
        console.log("useEffect Executed");
        setCount(100);

    },[count]);


    return (
        <div>
        <h1>{count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        </div>
    );
}

export default Usestate;