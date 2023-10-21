import React, { useState } from 'react'
import Counter from '../counter/Counter';

function Hide() {
    const [val, setVal] = useState(true);
    const handleClick = () => {
        setVal(!val);
    }
    return (
        <div>
            <button type='button' onClick={handleClick}>{(val ? ("Show") : ("Hide"))} </button>
            {!val && (
                <Counter />
            )}
        </div>
    )
}

export default Hide