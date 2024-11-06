import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './BurgerMenu.css';

const BurgerMenu = ({ isOpen, toggleMenu, closeMenu }) => {
  return (
    <div className="burger-menu">
      <button className="burger-icon" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
      {isOpen && (  // Only render nav menu when burger is open
        <nav className="nav-menu">
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/About" onClick={closeMenu}>About</Link>
          <Link to="/projects" onClick={closeMenu}>Projects</Link>
          <Link to="/contact" onClick={closeMenu}>Contact</Link>
          <Link to="/rick" onClick={closeMenu}>Download</Link>
        </nav>
      )}
    </div>
  );
};

export default BurgerMenu;
