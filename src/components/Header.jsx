import React, { useState } from 'react';
import "../styles/Header.css";

const Header = () => {
    // State to manage the toggle of the navigation links
    const [isNavActive, setIsNavActive] = useState(false);

    // Function to toggle the navigation links
    const toggleNav = () => {
        setIsNavActive(!isNavActive);
    };

    return (
        <nav className="navbar">
            <div className="logo">LOGO</div>
            {/* Dynamically add the 'active' class based on state */}
            <ul className={`nav-links ${isNavActive ? 'active' : ''}`}>
                <li><a href="#about">About Us</a></li>
                <li><a href="#contact">Contact Us</a></li>
                <li><button className="signup-btn">SIGN UP</button></li>
                <li><button className="signin-btn">SIGN IN</button></li>
            </ul>
            {/* Attach the toggle function to the menu icon's onClick event */}
            <div className="menu-icon" onClick={toggleNav}>
                &#9776;
            </div>
        </nav>
    );
}

export default Header;
