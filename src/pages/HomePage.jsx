import React, { useState } from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";

import image from "../assets/call.png";
import gmail from "../assets/gmail.png";
import instagram from "../assets/instagram.png";
import youtube from "../assets/youtube.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/X.png";
import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";
import card4 from "../assets/card4.png";

// Navbar icons
import profileIcon from "../assets/profileIcon.png";
import searchIcon from "../assets/searchIcon.png";
import cart from "../assets/cart.png";
import favorite from "../assets/favorite.png";

// Product images
import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.png";
import product5 from "../assets/product5.png";
import product6 from "../assets/product6.png";
import product7 from "../assets/product7.png";
import product8 from "../assets/product8.png";
import product9 from "../assets/product9.png";
import product10 from "../assets/product10.png";

// Product images
import EasyWin from "../assets/easyWin.png";
import hackGrowth from "../assets/hackGrowth.png";
import Concrete from "../assets/Concrete.png";

// Posts images
import post1 from "../assets/post1.png";
import post2 from "../assets/post2.png";
import post3 from "../assets/post3.png";
import clockIcon from "../assets/clockicon.png";
import commentIcon from "../assets/commentIcon.png";
import learnMoreIcon from "../assets/learnMoreIcon.png";

// What they say about us
import womanImg from "../assets/womanImg.png";
import rating from "../assets/stars.png";
import reviewImg from "../assets/reviewImg.png";

// Footer Icons
import footerIcon1 from "../assets/footerIcon1.png";
import footerIcon2 from "../assets/footerIcon2.png";
import footerIcon3 from "../assets/footerIcon3.png";
import Products from "../components/products/Products";
import NavBar from "../components/NavBar";

const HomePage = () => {
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

      {/* BANNER */}
      <div className="bannerContainer">
        <div className="column-40">
          <img src={card1} alt="" className="bannerImage" />
          <div>
            <div className="overlayText1">5 Items</div>
            <div className="overlayText2">FURNITURE</div>
            <div className="overlayText3">Read More</div>
          </div>
        </div>

        <div className="column-60">
          <img className="row1img" src={card2} alt="" />
          <div>
            <div className="row1imgText1">5 Items</div>
            <div className="row1imgText2">FURNITURE</div>
            <div className="row1imgText3">Read More</div>
          </div>
          <div className="row2">
            <>
              <img className="row2Card1" src={card3} alt="" />
              <div className="card1Items">5 Items</div>
              <div className="card1Title">FURNITURE</div>
              <div className="card1readmore">Read More</div>
            </>

            <>
              <img className="row2Card2" src={card4} alt="" />
              <div className="card2Items">5 Items</div>
              <div className="card2Title">FURNITURE</div>
              <div className="card2readmore">Read More</div>
            </>
          </div>
        </div>

        <div className="clearfix"></div>
      </div>

      {/* PRODUCTS */}
      <div className="productContainer">
        <div className="productsHeader">Featured Products</div>
        <p className="productsTitle">BESTSELLER PRODUCTS</p>
        <span className="productsmallText">
          Problems trying to resolve the conflict between
        </span>
        <Products />
      </div>
      {/* <div className="buttonContainer">
        <button className="outlineButton">LOAD MORE PRODUCTS</button>
      </div> */}

      {/* PRODUCT SERVICES */}
      <div className="productContainer">
        <div className="productsHeader">Featured Products</div>
        <p className="productsTitle">BESTSELLER PRODUCTS</p>
        <span className="productsmallText">
          Problems trying to resolve the conflict between
        </span>

        <div className="threeColumnsContainer">
          <div className="productServices">
            <img src={EasyWin} alt="" />
            <h3>Easy Wins</h3>
            <p>
              Get your best looking smile <br /> now!
            </p>
          </div>
          <div className="productServices">
            <img src={Concrete} alt="" />
            <h3>Concrete</h3>
            <p>
              Defalcate is most focused in helping you discover your most
              beautiful smile
            </p>
          </div>
          <div className="productServices">
            <img src={hackGrowth} alt="" />
            <h3>Hack Growth</h3>
            <p>
              Overcame any hurdle or any <br /> other problem.
            </p>
          </div>
        </div>
      </div>

      {/* FEATURED POSTS */}

      <div className="postContainer">
        <p className="postSubHeader">Practice Advice</p>
        <p className="postTitle">Featured Posts</p>
        <div className="postsContainer">
          <div className="postServices">
            <div className="overlay">New</div>
            <img src={post1} alt="Post 1" className="postImage" />
            <div>
              <div className="postsTab">
                <p>Google</p>
                <p>Trending</p>
                <p>New</p>
              </div>

              <div className="postsHeaderWrapper">
                <div className="postHeader">
                  Loudest à la Madison #1 <br /> (L'integral)
                </div>
                <div className="postDescription">
                  We focus on ergonomics and meeting <br /> you where you work.
                  It's only a <br /> keystroke away.
                </div>

                <div className="postInfo">
                  <div className="postInfoContainer">
                    <img className="icon" src={clockIcon} alt="clockIcon" />
                    <p className="date">22 April 2021</p>
                  </div>
                  <div className="postInfoContainer">
                    <img className="icon" src={commentIcon} alt="commentIcon" />
                    <p className="comments">10 comments</p>
                  </div>
                </div>

                <div className="learnMoreContainer">
                  <p className="learnMore">Learn More</p>
                  <img className="learnMoreicon" src={learnMoreIcon} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="postServices">
            <div className="overlay">New</div>
            <img src={post2} alt="Post 2" className="postImage" />
            <div>
              <div className="postsTab">
                <p>Google</p>
                <p>Trending</p>
                <p>New</p>
              </div>

              <div className="postsHeaderWrapper">
                <div className="postHeader">
                  Loudest à la Madison #1 <br /> (L'integral)
                </div>
                <div className="postDescription">
                  We focus on ergonomics and meeting <br /> you where you work.
                  It's only a <br /> keystroke away.
                </div>

                <div className="postInfo">
                  <div className="postInfoContainer">
                    <img className="icon" src={clockIcon} alt="clockIcon" />
                    <p className="date">22 April 2021</p>
                  </div>
                  <div className="postInfoContainer">
                    <img className="icon" src={commentIcon} alt="commentIcon" />
                    <p className="comments">10 comments</p>
                  </div>
                </div>

                <div className="learnMoreContainer">
                  <p className="learnMore">Learn More</p>
                  <img className="learnMoreicon" src={learnMoreIcon} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="postServices">
            <div className="overlay">New</div>
            <img src={post3} alt="Post 3" className="postImage" />
            <div>
              <div className="postsTab">
                <p>Google</p>
                <p>Trending</p>
                <p>New</p>
              </div>

              <div className="postsHeaderWrapper">
                <div className="postHeader">
                  Loudest à la Madison #1 <br /> (L'integral)
                </div>
                <div className="postDescription">
                  We focus on ergonomics and meeting <br /> you where you work.
                  It's only a <br /> keystroke away.
                </div>

                <div className="postInfo">
                  <div className="postInfoContainer">
                    <img className="icon" src={clockIcon} alt="clockIcon" />
                    <p className="date">22 April 2021</p>
                  </div>
                  <div className="postInfoContainer">
                    <img className="icon" src={commentIcon} alt="commentIcon" />
                    <p className="comments">10 comments</p>
                  </div>
                </div>

                <div className="learnMoreContainer">
                  <p className="learnMore">Learn More</p>
                  <img className="learnMoreicon" src={learnMoreIcon} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* WHAT THEY SAY ABOUT US */}

      <section className="content-section">
        <div className="content-container">
          <div className="column-text">
            <h2 className="column-text-Header">What they say about us</h2>
            <img src={womanImg} className="ratingImg" alt="woman" />
            <div>
              <img src={rating} className="ratingImg" alt="rating" />
            </div>
            <p className="columnDescription">
              Slate helps you see how many more days you need to work <br /> to
              <br />
              reach your financial goal.
            </p>
            <p className="authorName">Regina Miles</p>
            <p className="role">Designer</p>
          </div>
          <div className="column-image">
            <img src={reviewImg} alt="reviewImg" className="responsive-image" />
          </div>
        </div>
      </section>

      {/* DESIGNING BETTER EXPERIENCE */}

      <section className="background-section">
        <div className="text-container">
          <p className="textContainerSubHeader">Designing Better Experience</p>
          <h1 className="textContainerTitle">
            Problems trying to resolve <br /> the conflict between
          </h1>
          <p className="textContainerDescription">
            Problems trying to resolve the conflict between the two major <br />
            realms of Classical physics:
          </p>
          <p className="textContainerPrice">$16.48</p>
          <div className="buttonWrapper">
            <div className="textContainerButton">ADD YOUR CALL TO ACTION</div>
          </div>
        </div>
      </section>

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

export default HomePage;
