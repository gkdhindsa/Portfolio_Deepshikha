import React from 'react';
import Home from './Home';
import About from './About';
import NavbarTop from './NavbarTop';
import Project from './Project';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Thought from './Thought';



function App() {
  return (
    <div>
      <NavbarTop></NavbarTop>
      <Router>
      <Routes>
        <Route exact path= "/" element={<Home/>}/>
        <Route exact path= "/about" element={<About/>}/>
        <Route exact path= "/thought" element={<Thought/>}/>
        <Route exact path= "/about" element={<About/>}/>
        <Route exact path= "/project" element={<Project/>}/>
       
      </Routes>

      </Router>

    </div>
    
  )

}

export default App;