import React from "react";
import { Link } from "react-router-dom";
import "./VisibleNavbar.css"; // Ensure proper styling

export const VisibleNavbar = () => {
  return (
    <nav className="visible-navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/about" className="navbar-link">About Me</Link>
        </li>
        <li className="separator">|</li>
        <li className="navbar-item">
          <Link to="/publication" className="navbar-link">Publication</Link>
        </li>
      </ul>
    </nav>
  );
};
