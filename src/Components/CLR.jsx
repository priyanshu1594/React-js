import React, { useState } from "react";
import "./CLR.css";

function CLR() {
    const [count, setCount] = useState(0);
    const [clr, setclr] = useState("black");

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    const changeclr = () => {
        setclr("white");
    };

    const changeclr2 = () => {
        setclr("black");
    };

    return (
        <div
            style={{ backgroundColor: clr === "white" ? "white" : "black" }}
            className="bg"
        >
            <div className="counter-container">
                <div
                    style={{
                        backgroundColor: clr === "black" ? "white" : "black",
                        color: clr === "black" ? "black" : "white",
                        border: `2px solid ${clr === "white" ? "black" : "white"}`,
                    }}
                    className="counter-box"
                >
                    <h2>Counter</h2>
                    <p className="count">{count}</p>
                    <div className="buttons">
                        <button className="increment plus" onClick={increment}>
                            +
                        </button>
                        <button className="decrement minus" onClick={decrement}>
                            -
                        </button>
                        <div className="DNbtn">
                            <button
                                className="Change Dbtn"
                                onClick={changeclr}
                                style={{
                                    backgroundColor: "white",
                                    color: "black",
                                    border: "2px solid black",
                                }}
                            >
                                Day
                            </button>
                            <button
                                className="Change Nbtn"
                                onClick={changeclr2}
                                style={{
                                    backgroundColor: "black",
                                    color: "white",
                                    border: "2px solid white",
                                }}
                            >
                                Night
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CLR;
