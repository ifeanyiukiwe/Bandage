import React from "react";
import { Link } from "react-router-dom";

// Footer Icons
import footerIcon1 from "../assets/footerIcon1.png";
import footerIcon2 from "../assets/footerIcon2.png";
import footerIcon3 from "../assets/footerIcon3.png";
import Products from "../components/products/Products";

function Footer() {
  return (
    <footer className="footer">
      <div className="footerSocialsWrapper">
        <div className="footerSocials">
          <div>
            <h2 className="logo">Bandage</h2>
          </div>
          <div className="footerIcons">
            <div>
              <img src={footerIcon1} alt="" />
            </div>
            <div>
              <img src={footerIcon2} alt="" />
            </div>
            <div>
              <img src={footerIcon3} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="footer-container">
        <div className="footer-column">
          <h3>Company Info</h3>
          <ul>
            <li>
              <Link to="#">About Us</Link>
            </li>
            <li>
              <Link to="#">Carrier</Link>
            </li>
            <li>
              <Link to="#">We are hiring</Link>
            </li>
            <li>
              <Link to="#">Blog</Link>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Legal</h3>
          <ul>
            <li>
              <Link to="#">About Us</Link>
            </li>
            <li>
              <Link to="#">Carrier</Link>
            </li>
            <li>
              <Link to="#">We are hiring</Link>
            </li>
            <li>
              <Link to="#">Blog</Link>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Features</h3>
          <ul>
            <li>
              <Link to="#">Business Marketing</Link>
            </li>
            <li>
              <Link to="#">User Analytic</Link>
            </li>
            <li>
              <Link to="#">Live Chat</Link>
            </li>
            <li>
              <Link to="#">Unlimited Support</Link>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Resources</h3>
          <ul>
            <li>
              <Link to="#">IOS & Android</Link>
            </li>
            <li>
              <Link to="#">Watch a Demo</Link>
            </li>
            <li>
              <Link to="#">Customers</Link>
            </li>
            <li>
              <Link to="#">API</Link>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Get In Touch</h3>
          <div className="input-container">
            <input
              type="email"
              placeholder="Your Email"
              className="email-input"
            />
            <button type="button" className="submit-button">
              Subscribe
            </button>
          </div>
          <p className="footerSmallText">Lore imp sum dolor Amit</p>
        </div>
        <div className="footersmallText">
          Made With Love By Finland All Right Reserved
        </div>
      </div>
    </footer>
  );
}

export default Footer;
