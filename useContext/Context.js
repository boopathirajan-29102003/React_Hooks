import { createContext, useContext, useState } from 'react'
import React from 'react'
import './context.css'

const ThemeContext = createContext();

function Context() {
  const [theme,setTheme]=useState('light');
  const handleTheme=()=>{
    setTheme(theme==='light'?'dark':'light');
  }
  return (
    <>
      <p>select a theme</p>
      <button onClick={handleTheme}>Toggle theme</button>
    <p></p>
    <ThemeContext.Provider value={theme}>
      <Button ></Button>
    </ThemeContext.Provider>
    </>
  )
}

const Button = (val) => {
  const theme = useContext(ThemeContext);
  return (
    <panel title='welcome'>
      <button className={theme} >Hello </button>
    </panel>
  )
}

export default Context