import { useState } from "react";
import { Router, useNavigate } from "react-router-dom";


function UseState(){
    const Router = useNavigate();
    const [counter , setcounter] = useState(1);
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
    function GoToDyanamic() {
        Router(`/DynamicRouting/${counter}`)
    }
    return(
                <div>
                    {/* // <h1>This is UseState function</h1> */}
                    <h1>Counter :{counter}</h1>
                    <button onClick={increment}>+</button>
                    <button onClick={reset}>Reset</button>
                    <button onClick={decrement}>-</button>
                    <button onClick={GoToDyanamic}>go to Dyanamic</button>
                    </div>
    )
}

export default UseState;