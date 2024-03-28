import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LogoutButton from '../LogoutButton/LogoutButton'; // Import the LogoutButton component
import './Navbar.css';
import {motion} from 'framer-motion'

export default function Header() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  // const [showDropdown, setShowDropdown] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // const toggleSolutionsDropdown = () => {
  //   setShowDropdown(!showDropdown);
  // };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuItemClick = () => {
    setIsOpen(false); // Close the hamburger menu on item click
  };

  const handleLoginRedirect = () => {
    // Handle redirect logic if needed
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 56) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav id='topnav' className={`navbr sticky ${isScrolled ? 'navbar-scrolled' : ''}`}>
        <div className="nav-container">
        {/* <div className="navbar-logo"> */}
        <motion.div
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }} // Constrain drag to the parent container
        dragElastic={0.6}
        >
          <img className='nav-logo' src="/images/logo-light.png" alt="Logo" srcset="" /></motion.div>
        {/* </div> */}
        {/* <div id="navigation"> */}
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li><NavLink exact to="/" onClick={handleMenuItemClick}>Home</NavLink></li>
          {/* <li
            onMouseEnter={toggleSolutionsDropdown}
            onMouseLeave={toggleSolutionsDropdown}
            onClick={handleMenuItemClick} // Close menu when clicking on Solutions
          > */}
            {/* <NavLink to="#">Solutions</NavLink>
            <span className='menu-arrow'></span>
            {showDropdown && (
              <div className="dropdown-content">
                <li><NavLink to="/solution1">Solution 1</NavLink></li>
                <li><NavLink to="/solution2">Solution 2</NavLink></li>
                <li><NavLink to="/solution3">Solution 3</NavLink></li>
              </div>
            )} */}
          {/* </li> */}
          <li><NavLink to="/allSpace" onClick={handleMenuItemClick}>ALL SPACES</NavLink>
          </li>
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
        {/* </div> */}
        </div>
        <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </>
  );
}
