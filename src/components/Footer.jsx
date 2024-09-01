import React from 'react';
import '../styles/Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-column">
                <div className="footer-logo">Logo</div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum cras pretium eu eget mauris. Sit risus augue sit at lectus.
                </p>
            </div>
            <div className="footer-column">
                <h4>Help</h4>
                <ul>
                    <li>Privacy Policy</li>
                    <li>Refund Policy</li>
                    <li>Disclosure Policy</li>
                    <li>Wholesaler</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className="footer-column">
                <h4>Menu</h4>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Blog</li>
                    <li>Science Behind</li>
                    <li>Products</li>
                </ul>
            </div>
            <div className="footer-column">
                <h4>Newsletter</h4>
                <p>Adipiscing diam, lectus mana amet ut.</p>
                <input type="email" placeholder="Enter your email..." />
            </div>
        </footer>
    );
}

export default Footer;
