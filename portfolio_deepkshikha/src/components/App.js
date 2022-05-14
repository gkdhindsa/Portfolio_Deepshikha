import React from 'react';
import Home from './Home';
import About from './About';
import NavbarTop from './NavbarTop';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";



function App() {
  return (
    <div>
      <NavbarTop></NavbarTop>
      <Router>
      <Routes>
        <Route exact path= "/" element={<Home/>}/>
        <Route exact path= "/about" element={<About/>}/>
        <Route exact path= "/about" element={<About/>}/>
        <Route exact path= "/about" element={<About/>}/>
        <Route exact path= "/about" element={<About/>}/>
       
      </Routes>

      </Router>

    </div>
    
  )

}

export default App;