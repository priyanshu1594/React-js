import React, { useState } from "react";
import "./Counter.css"; // Import the CSS file

function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <div className="counter-container">
            <div className="counter-box">
                <h2>Counter</h2>
                <p className="count">{count}</p>
                <div className="buttons">
                    <button className="increment" onClick={increment}>+</button>
                    <button className="decrement" onClick={decrement}>-</button>
                </div>
            </div>
        </div>
    );
}

export default Counter;
    