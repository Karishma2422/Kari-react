import React, { useEffect, useState } from "react";

const UseEffect0 = () => {
    const [counter, setcounter] = useState(1);
    function Increment(){
        setcounter(counter + 1);
    }
    useEffect(()=> {
        alert ("Inside useEffect");
    } );
    return(
        <div>
            <h1>USING USE EFFECT</h1>
            <h1>Counter : {counter}</h1>
            <button onClick={Increment}>+</button>
            </div>
    )
};
export default UseEffect0;
