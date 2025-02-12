import React from "react";
const Car1 = (props) => {
    console.log(props)
    return (
        <div>
            <h1>Hello, {props.name}!</h1>
        </div>
    );

}
export default Car1;
