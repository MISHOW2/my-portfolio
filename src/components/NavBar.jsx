import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/navbar.css'
function NavBar() {
  return (
    <nav>
      <div className="left-side">
        <p>Mixo Shibambo</p>
      </div>
      <div className="right-side">
        <ul>
          <Link to='/'>Home</Link>
          <Link to='/about'>about</Link>
          <Link to='/projects'>Projects</Link>
          <Link to='/contact'>Contact</Link>
       
        </ul>
        <p>Download Cv</p>
      </div>
    </nav>
  )
}

export default NavBar
