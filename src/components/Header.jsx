import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BurgerMenu from './BurgerMenu';
import './Header.css';

const Header = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const toggleBurgerMenu = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };

  // Close burger menu when a link is clicked
  const closeBurgerMenu = () => {
    setIsBurgerOpen(false);
  };

  return (
    <header>
      <h1>My Portfolio</h1>
      {!isBurgerOpen && (
        <nav className="desktop-nav"> 
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/rick">Download</Link>
        </nav>
      )}
      <BurgerMenu isOpen={isBurgerOpen} toggleMenu={toggleBurgerMenu} closeMenu={closeBurgerMenu} />
    </header>
  );
};

export default Header;


