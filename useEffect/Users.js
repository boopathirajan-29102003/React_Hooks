import React, { useEffect, useState } from 'react'

const Show=({user,age})=>{
    useEffect(()=>{
        <><p>{user}</p>
        <p>{age}</p></>
        
    })
}


function Users() {
    const [user,setUser]=useState('');
    const [age,setAge]=useState(0);
    const [click,setClick]=useState(true)
  return (
    <div>
        <select onChange={(e)=>{setUser(e.target.value)}}>
            <option value='Boopathi'  >Boopathi</option>
            <option value='Rajan' >Rajan</option>
        </select>
        <input type='number' onChange={(e)=>{setAge(e.target.value)}} />
        <button onClick={()=>{setClick(!click)}}>{!click ?('show'):('hide') }</button>
        {click && <>

        <Show user={user} age={age}></Show>
        </>}

    </div>
  )
}

export default Users