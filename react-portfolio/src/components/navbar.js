import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// importing styles
import '../styles/navbar.css';

function Navbar() {
  // Define a state variable to track the active page
  const [activePage, setActivePage] = useState('');

  // Function to set the active page based on the current location
  const setActive = (path) => {
    setActivePage(path);
  };

  return (
    <div className="navbar">
      <h1 className="name">Anvar Ganiev</h1>
      <div className="toggleButton">
        <button></button>
      </div>
      <div className="links">
        <Link
          to="/"
          onClick={() => setActive('/')}
          className={activePage === '/' ? 'active' : ''}
        >
          About Me
        </Link>
        <Link
          to="/portfolio"
          onClick={() => setActive('/portfolio')}
          className={activePage === '/portfolio' ? 'active' : ''}
        >
          Portfolio
        </Link>
        <Link
          to="/contacts"
          onClick={() => setActive('/contacts')}
          className={activePage === '/contacts' ? 'active' : ''}
        >
          Contacts
        </Link>
        <Link
          to="/resume"
          onClick={() => setActive('/resume')}
          className={activePage === '/resume' ? 'active' : ''}
        >
          Resume
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
