import React, { useEffect, useState } from "react";

const UseEffect3 = () => {
    const [counter, setcounter] = useState(1);
    const [countersecond, setcountersecond] =useState(100);
    function Increment(){
        setcounter(counter + 1);
    }
    function Incrementsecond(){
        setcountersecond(countersecond + 1);
    }
    useEffect(()=> {
        alert ("Inside useEffect");
    } ,[countersecond, counter]);
    return(
        <div>
            <h1>USING DEPENDENCY</h1>
            <h1>Counter : {counter}</h1>
            <button onClick={Increment}>+</button>
            <h1>Counter : {countersecond}</h1>
            <button onClick={Incrementsecond}>+</button>
            
            </div>
    )
};
export default UseEffect3;