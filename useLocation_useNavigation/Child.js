import { useNavigate } from "react-router-dom";
import React from 'react'

function Child() {
  const navigate = useNavigate();

  const data = { name: "Boopathirajan", age: 20 };
  const handleNavigate = () => {
    navigate('/parent', { state: { data } })
  }
  return (
    <>
      <div onClick={handleNavigate}>Move to parent</div>
    </>
  )
}

export default Child