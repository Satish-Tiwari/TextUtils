import React from 'react'
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";

// import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  return (
    <>
    <Navbar/>
    <TextForm/>
      {/* <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exect path='/' element={<TextForm/>}/>
          <Route exect path='/about' element={<About/>}/>
        </Routes>
      </BrowserRouter> */}
    </>
  )
}

export default App