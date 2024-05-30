import React from "react";
import "./CartPage.css";

import { Link } from "react-router-dom";

import image from "../assets/call.png";
import gmail from "../assets/gmail.png";
import instagram from "../assets/instagram.png";
import youtube from "../assets/youtube.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/X.png";

// Navbar icons
import profileIcon from "../assets/profileIcon.png";
import searchIcon from "../assets/searchIcon.png";
import cart from "../assets/cart.png";
import favorite from "../assets/favorite.png";

// Footer Icons
import footerIcon1 from "../assets/footerIcon1.png";
import footerIcon2 from "../assets/footerIcon2.png";
import footerIcon3 from "../assets/footerIcon3.png";
import Products from "../components/products/Products";
import NavBar from "../components/NavBar";

const CartPage = () => {
  return (
    <div>
      <div className="ColumnContainer">
        <div className="column1">
          <div className="innerWrapper">
            <div className="img">
              <img src={image} alt="call" />
            </div>
            <div className="boldText">(225) 555-0118</div>
          </div>
          <div className="email">
            <img src={gmail} alt="gmail" />
            <p className="boldText">michelle.rivera@example.com</p>
          </div>
        </div>
        <div className="column2">
          <p className="boldText">Follow Us and get a chance to win 80% off</p>
        </div>
        <div className="column3">
          <p className="boldText">Follow Us :</p>
          <div className="innerWrapper">
            <img src={instagram} alt="instagram" />
            <img src={youtube} alt="youtube" />
            <img src={facebook} alt="facebook" />
            <img src={twitter} alt="twitter" />
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <NavBar />

      {/* TABS */}
      <div style={{ display: "flex", width: "70%", margin: "auto", gap: 10 }}>
        <p style={{ fontSize: "14px", fontWeight: "700", color: "#252B42" }}>
          Home
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
          style={{ width: "20px" }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
        <p style={{ fontSize: "14px", fontWeight: "700", color: "#252B42" }}>
          Shop
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
          style={{ width: "20px" }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
        <p style={{ fontSize: "14px", fontWeight: "700", color: "#BDBDBD" }}>
          Shopping Cart
        </p>
      </div>

      {/* SHOPPING CART */}
      <div className="cartContainer">
        <div className="cartFirstRow">
          <h1 className="cartHeading">Shopping Cart</h1>
          <div className="cartTop">
            <p>Item Details</p>
            <p>Item Details</p>
            <p>Item Details</p>
          </div>
        </div>
        <div className="cartSecondRow">
          <div className="cartNav">
            <h1 className="cartHeading">Order Summary</h1>
            <p className="cartParagaph">4 Items</p>
          </div>
        </div>
      </div>

      {/* PRODUCTS */}
      <div className="productContainer">
        <div>
          <p className="productsTitle">
            PRODUCTS RELATED TO ITEMS IN YOUR CART
          </p>
        </div>
        <Products />
      </div>

      {/* FOOTER */}
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

      <footer className="footer">
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
    </div>
  );
};

export default CartPage;
