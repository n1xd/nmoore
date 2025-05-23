import React from 'react';
import './Footer.css';
import signatureImage from '../assets/images/signature.png'; // Corrected path

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-left">
                <p>London, UK</p> {/* Adjust location text as needed */}
            </div>
            <div className="footer-right">
                <img src={signatureImage} alt="Signature" className="footer-signature" />
                <p>&copy; 2025</p> {/* Adjust location text as needed */}
            </div>
        </footer>
    );
};

export default Footer;