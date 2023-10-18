import React,{useState} from 'react'

function Hide() {
    const [val,setVal]=useState(true);
    const [value,setValue]=useState('Hide')
    console.log(val)

    const handleClick=()=>{
        setVal(!val);
    }
    return (
    <div>
        <button type='button' onClick={handleClick}>{value} </button>
    </div>
  )
}

export default Hide