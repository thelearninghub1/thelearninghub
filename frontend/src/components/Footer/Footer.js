import React from 'react';
import './Footer.css';
import logo from '../../images/logo.png'; 
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram , FaLinkedin , FaYoutube , FaWhatsapp  } from "react-icons/fa";



const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={logo} alt="The Learning Hub Logo" />
        </div>
        <div className="footer-description">
          <p>
            At TLH, we believe learning should be an exciting adventure. We offer unique, meticulously designed programs. Whether you’re a school, parent, or individual learner interested in VR/AR, STEAM, coding, robotics, or creative design, we have something for you!
          </p>
        </div>
        <div className="footer-contact">
          <h3>You can find us on</h3>
          <div className="social-icons">
            <a href="www.google.com"><FaFacebookF/></a>
            <a href="www.google.com"><FaInstagram/></a>
            <a href="www.google.com"><FaLinkedin/></a>
            <a href="www.google.com"><FaYoutube/></a>
            <a href="www.google.com"><FaWhatsapp /></a>
          </div>
          <p>Support@thelearninghub.pk</p>
          <p><a href="https://www.thelearninghub.pk">www.thelearninghub.pk</a></p>
          <p>Copyright © 2024 The Learning Hub. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
