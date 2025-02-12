import React, { useState } from "react";
import React, { useState } from "react";
const Count = () => {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);

    }


    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={ }>Click</button>
        </div>


    );

}