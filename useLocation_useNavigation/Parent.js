import { useLocation, useNavigate } from "react-router-dom";

import React from 'react'
function Parent() {
    const location = useLocation();
    const navigate = useNavigate;
    const info = { message: "Succesfully data stored in parent" };

    const data = location.state.data;
    console.log(data)
    const handleClick = () => {
        navigate('child', { state: info });
    }
    return (
        <>
            <p>Data from child</p>
            <p>Name :{data.name}</p>
            <p>Age :{data.age}</p>
            <p onClick={handleClick}>Move to child</p>
        </>
    )
}

export default Parent