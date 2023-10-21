import React, { useState } from 'react'
function Counter() {
    const [count, setCount] = useState(0);
    const handleClick = () => {
        setCount((prev) => prev + 1);
        setCount((prev) => prev + 1);
        setCount((prev) => prev + 1);
        setCount((prev) => prev + 1);
    }
    return (
        <div>
            <button style={{ height: "100px", width: "200px" }} onClick={handleClick} type='button'>{count}</button>
        </div>
    )
}

export default Counter