import React from 'react';
import almalogo from '../Images/almalogo.png'
function Navbar() {
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <img src= {almalogo} alt ="Almabetter logo" /> 
    </div>
  
</nav>
    </>
  )
}

export default Navbar
