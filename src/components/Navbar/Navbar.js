// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css'; // Ensure this path is correct

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/publication">Publication</Link>
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/about">About</Link>
      <Link to="/works">Works</Link>
      
      <Link to="/awards-media">Awards & Media</Link>
      {/* Add more links as needed */}
    </nav>
  );
};

export default Navbar;
