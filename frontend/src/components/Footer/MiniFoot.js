import React from "react";
import { Twitter, LinkedIn, Instagram, Facebook } from "@mui/icons-material";
import "./MiniFoot.css"; // Import the CSS file

const MiniFoot = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Copyright Section */}
        <p className="footer-text">© All Right Reserved</p>

        {/* Website Link */}
        <p className="footer-text">
          <a href="https://www.thelearninghub.pk" target="_blank" rel="noopener noreferrer">
            www.thelearninghub.pk
          </a>
        </p>

        {/* Social Media Icons */}
        <div className="social-icons">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Twitter />
          </a>
          <a href="https://www.linkedin.com/company/thelearninghubpk/" target="_blank" rel="noopener noreferrer">
            <LinkedIn />
          </a>
          <a href="https://www.instagram.com/tlh_school/profilecard/?igsh=YzNwM3Nybjc3NGg0" target="_blank" rel="noopener noreferrer">
            <Instagram />
          </a>
          <a href="https://www.facebook.com/tlhios?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
            <Facebook />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default MiniFoot;
