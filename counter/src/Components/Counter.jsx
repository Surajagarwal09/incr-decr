import React, { useState } from "react";
import './Counter.css'
function Counter() {
    const [value, setValue] = useState(0)
    function incrementcounter() {
        setValue(function (currentState) {
            return currentState = currentState + 1
        })
    }
    function DecrementCounter() {
        setValue(function (currentState) {
            return currentState = currentState-1
        })
    }

    return (
        <div className="counts">
            <div id="buttons">
            <button onClick={DecrementCounter}>Decrement</button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="value">{value}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={incrementcounter}>Increment</button>
                </div>
        </div>)
}
export default Counter;