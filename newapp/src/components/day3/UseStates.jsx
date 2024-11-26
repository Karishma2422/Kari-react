import { useState } from "react";


function UseState(){
    const [counter , setcounter] =useState(1);
    console.log(counter,"Counter");
    function increment(){
        setcounter(counter + 1 );
    }
    function decrement(){
        
        setcounter(counter - 1);
        
    }
    function reset() {
        setcounter(1);
    }
    return(
                <div>
                    {/* // <h1>This is UseState function</h1> */}
                    <h1>Counter :{counter}</h1>
                    <button onClick={increment}>+</button>
                    <button onClick={reset}>Reset</button>
                    <button onClick={decrement}>-</button>
                    </div>
    )
}

export default UseState;