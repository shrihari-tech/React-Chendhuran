import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Usestate from "./components/Hooks/Usestate";
import User from "./components/User";
import Store from "./components/Store";
import FormHandling from "./components/Form/FormHandling";
import {BrowserRouter,Routes,Route} from "react-router-dom";
function App(){
  return(
    <>
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/About" element={<About />}></Route>
          <Route exact path="/state" element={<Usestate />}></Route>
          <Route exact path="/store" element={<Store />}></Route>
          <Route exact path="/form" element={<FormHandling />}></Route>
          {/* <Route exact path="/blog" element={<BlogList />}></Route> */}
        </Routes>
      
      </BrowserRouter>
    <User/>
    </>
  )
}

export default App