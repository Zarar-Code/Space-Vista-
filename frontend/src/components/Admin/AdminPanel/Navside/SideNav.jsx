import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "./SideNav.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faUser , faShuttleSpace } from '@fortawesome/free-solid-svg-icons';


const SideNav = () => {

    const [activeLink, setActiveLink] = useState('');


    const handleNavLinkClick = (link) => {
    setActiveLink(link);
    };


return (
        <div id="mySidenav" className="sidenav">
                <h1 className="logo"><NavLink to="/AdminHome"><span>SPACE</span> VISTA</NavLink></h1>

                <NavLink to="/AdminPanel" className={`icon-a ${activeLink === 'overview' ? 'active-link' : ''}`}
                onClick={() => handleNavLinkClick('overview')}>
                <FontAwesomeIcon icon={faEye} style={{marginRight :"15px"}} />OVERVIEW</NavLink>
                

                <NavLink to="/admin/allUsers" className={`icon-a ${activeLink === 'users' ? 'active-link' : ''}`}
                onClick={() => handleNavLinkClick('users')}>
                <FontAwesomeIcon icon={faUser } style={{marginRight :"15px"}}/>ALL USERS</NavLink>


                <NavLink to="/admin/allSpaces" className={`icon-a ${activeLink === 'spaces' ? 'active-link' : ''}`}
                onClick={() => handleNavLinkClick('spaces')}>
                <FontAwesomeIcon icon={faShuttleSpace} style={{marginRight :"12px"}}/>ALL SPACES</NavLink>
            </div>
  );
};

export default SideNav;
