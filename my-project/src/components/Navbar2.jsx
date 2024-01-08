import React, { useState} from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css";


const Navbar2 = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav>
    <Link to="/home" className='title'>StudyBro</Link>
    <div className='menu' onClick={() => {
      setMenuOpen(!menuOpen);
    }}>
      <span></span>
      <span></span>
      <span></span>
    </div>
      <ul className={menuOpen ? "open" : ""}>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/courses">Courses</Link></li>
        <li><Link to="/reviews">Reviews</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar2