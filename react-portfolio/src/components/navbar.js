import React from 'react'
import { Link } from 'react-router-dom'
//importing styles
import '../styles/navbar.css'

function navbar() {
  return (
    <div className="navbar">
      <h1 className="name">Anvar Ganiev</h1>
      <div className="toggleButton">
        <button></button>
      </div>
        <div className="links">
          <Link to="/">About Me</Link>
          <Link to="/resume">Resume</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/contacts">Contacts</Link>
        </div>
    </div>
  )
}

export default navbar