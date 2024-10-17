import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Usestate from "./components/Hooks/Usestate";
import {BrowserRouter,Routes,Route} from "react-router-dom";
function App(){
  return(
    <>
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/About" element={<About />}></Route>
          <Route exact path="/state" element={<Usestate />}></Route>
        </Routes>
      
      </BrowserRouter>
    
    </>
  )
}

export default App