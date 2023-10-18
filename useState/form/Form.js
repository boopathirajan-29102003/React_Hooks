import React, { useState } from 'react'

function Form() {
    const [data,setData]=useState({
        fname:"",
        lanme:"",
        email:"",
        pass:""
    });

    const handleChange=(e)=>{
        setData({
            ...data,
            [e.target.name]:e.target.value
        })
    }
  return (
    <div>
        <label htmlFor='fname'>First name :</label>
        <input type="text" name="fname" onChange={handleChange}/><br/>
        <label htmlFor='lname'>Last Name :</label>
        <input type="text" name="lname" onChange={handleChange}/><br/>
        <label htmlFor='email'>Email :</label>
        <input type="text" name="email" onChange={handleChange}/><br/>
        <label htmlFor='pass'>Password :</label>
        <input type="password" name="pass" onChange={handleChange}/><br/>
        <br/>
        <p>{data.fname} {data.lname}</p>
        <p>{data.email}</p>
        <p>{data.pass}</p>
    </div>
  )
}

export default Form