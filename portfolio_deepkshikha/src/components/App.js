import React from 'react';
import Home from './Home';
import NavbarTop from './NavbarTop';
import NavbarBottom from './Footer';



function App() {
  return (
      <div>
        <NavbarTop></NavbarTop>
        <Home></Home>
        <NavbarBottom></NavbarBottom>
      </div>
   
  )
}

export default App;