import React from 'react'
import { Link } from 'react-router-dom'
function navbar() {
  return (
    <div className="navbar">
        <div className="toggleButton">
            <button>

            </button>
            <div classname = "links">
                <Link to="/">Home</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/contacts">Contacts</Link>
            </div>
        </div>
    </div>
  )
}

export default navbar