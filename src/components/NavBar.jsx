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
        </ul>
   
      </div>
    </nav>
  )
}

export default NavBar
