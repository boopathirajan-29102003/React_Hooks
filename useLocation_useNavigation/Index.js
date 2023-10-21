import Child from "./Child";
import Parent from "./Parent";
import { Route,Routes,BrowserRouter } from "react-router-dom";
import React from 'react'

function Index() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='child' element={<Child/>}/>
            <Route path='parent' element={<Parent/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Index