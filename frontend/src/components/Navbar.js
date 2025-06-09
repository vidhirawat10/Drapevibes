// src/components/Navbar.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import { FaTshirt, FaThList, FaRegHeart, FaBars, FaTimes, FaFire, FaLightbulb } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate(); // 👈 Add this hook

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLoginClick = () => {
    navigate('/login'); // 👈 Navigates to the login page
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <div className="logo-icon">DV</div>
        <span className="brand-name">Drapevibes</span>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li><FaTshirt className="nav-icon" />TryOn</li>
        <li><FaThList className="nav-icon" />Wardrobe</li>
        <li><FaRegHeart className="nav-icon" />Favorites</li>
        <li><FaLightbulb className="nav-icon" />Recommendations</li>
        <li><FaFire className="nav-icon" />Trends</li>
      </ul>

      <div className="right-actions">
        <button className="login-btn" onClick={handleLoginClick}>Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
