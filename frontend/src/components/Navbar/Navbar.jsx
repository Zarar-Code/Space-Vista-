import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LogoutButton from '../LogoutButton/LogoutButton'; // Import the LogoutButton component
import './Navbar.css';

export default function Header() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleSolutionsDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuItemClick = () => {
    setIsOpen(false); // Close the hamburger menu on item click
  };

  const handleLoginRedirect = () => {
    // Handle redirect logic if needed
  };

  return (
    <>
      <nav>
        <div className="logo">
          <img src="./images/logo.png" alt="Logo" srcset="" />
        </div>
        <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>

        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li><NavLink exact to="/" onClick={handleMenuItemClick}>Home</NavLink></li>
          <li
            onMouseEnter={toggleSolutionsDropdown}
            onMouseLeave={toggleSolutionsDropdown}
            onClick={handleMenuItemClick} // Close menu when clicking on Solutions
          >
            <NavLink to="#">Solutions</NavLink>
            {showDropdown && (
              <div className="dropdown-content">
                <li><NavLink to="/solution1">Solution 1</NavLink></li>
                <li><NavLink to="/solution2">Solution 2</NavLink></li>
                <li><NavLink to="/solution3">Solution 3</NavLink></li>
              </div>
            )}
          </li>
          <li><NavLink to="/allSpace" onClick={handleMenuItemClick}>ALL SPACES</NavLink></li>
          <li><NavLink to="/listingSpace" onClick={handleMenuItemClick}>Listing Space</NavLink></li>
          <li><NavLink to="/contact" onClick={handleMenuItemClick}>Contact Us</NavLink></li>
          {!isAuthenticated ? (
            <>
              <NavLink to="/login" className="button" onClick={handleMenuItemClick}>Login</NavLink>
              <NavLink to="/register" className="button" onClick={handleMenuItemClick}>Join</NavLink>
            </>
          ) : (
            <>
              <LogoutButton onClick={handleLoginRedirect}>Logout</LogoutButton>
            </>
          )}
        </ul>
      </nav>
    </>
  );
}
