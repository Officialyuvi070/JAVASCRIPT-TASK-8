import React from "react";
import { useState } from "react";

function UseState() {
    var [count, setCount] = useState(0); // useState(initialValue)
    // what is setCount ?
    // setCount is a function which accepts the new value for
    // the state.
    // so if I call setCount(5) then count will become 5
    function increment(){
        setCount(count+1)
    }
    function decrement (){
        setCount(count-1)
    }
    function reset (){
        setCount(count=0)
    }
    return(
        
        <div>
            <h2>Using  useState Hooks</h2>
            <p> useState: To manage state in functional components. </p>
            Counter : {count} <br /> <br />
        
            <button style={{backgroundColor:"Yellow", fontSize:"15px"}} onClick={increment}>Increment</button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button style={{backgroundColor:"white", fontSize:"15px"}} onClick={reset}>Reset</button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button style={{backgroundColor:"gray", fontSize:"15px"}} onClick={decrement}>Decrement</button>
        </div>
    )
}
export default UseState;