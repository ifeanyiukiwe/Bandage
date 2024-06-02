import React, { useState } from "react";
import "./ShopPage.css";

import { Link, useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../features/products/productsApi";
import Products from "../components/products/Products";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ProductModal from "../components/ProductModal";

import image from "../assets/call.png";
import gmail from "../assets/gmail.png";
import instagram from "../assets/instagram.png";
import youtube from "../assets/youtube.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/X.png";
import detail from "../assets/detail.png";
import like from "../assets/like.png";

const ShopPage = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useGetProductByIdQuery(id);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  // Function to add a product to the cart
  function handleAddToCart(data) {
    // Retrieve the current product data array from localStorage
    let productArray = JSON.parse(localStorage.getItem("productArray")) || [];

    // Find if the product with the same id already exists
    let existingProduct = productArray.find(
      (product) => product.id === data.id
    );

    if (existingProduct) {
      // If the product exists, increase the quantity
      existingProduct.quantity += 1;
    } else {
      // If the product does not exist, create a new object with quantity 1
      let newData = { ...data, quantity: 1 };
      productArray.push(newData);
    }

    // Store the updated array back in localStorage
    localStorage.setItem("productArray", JSON.stringify(productArray));

    // Show modal with the added product
    setSelectedProduct(product);
    setModalIsOpen(true);
  }

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
      <div
        style={{
          display: "flex",
          width: "70%",
          margin: "50px auto",
          gap: 10,
          alignItems: "center",
        }}
      >
        <Link
          to="/"
          style={{
            fontSize: "14px",
            fontWeight: "700",
            color: "#252B42",
            textDecoration: "none",
          }}
        >
          Home
        </Link>
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
          Shop
        </p>
      </div>

      {/* BANNER */}
      {/* <div className="bannerContainer">
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
      </div> */}

      {/* PRODUCT DETAIL*/}
      <div
        style={{
          width: "90%",
          display: "flex",
          margin: "auto",
          gap: 50,
          justifyContent: "center",
        }}
      >
        <div style={{ width: "40%" }}>
          <img
            src={data.thumbnail}
            alt=""
            style={{ width: "100%", border: "1px solid #eee" }}
          />
        </div>
        <div style={{ width: "40%" }}>
          <h1 style={{ fontSize: "20px", fontWeight: "normal" }}>
            {data.title}
          </h1>
          <div style={{ display: "flex", alignItems: "center" }}>
            {data.reviews.map((review) => (
              <svg
                width="23"
                height="23"
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.1308 8.41915C20.0732 8.24934 19.967 8.10013 19.8256 7.98994C19.6841 7.87975 19.5134 7.81341 19.3347 7.7991L14.1055 7.38359L11.8427 2.37458C11.7706 2.21324 11.6534 2.07622 11.5052 1.98003C11.357 1.88385 11.1841 1.83262 11.0074 1.83252C10.8307 1.83242 10.6577 1.88347 10.5094 1.97949C10.3611 2.07551 10.2437 2.21241 10.1715 2.37366L7.90867 7.38359L2.67951 7.7991C2.50382 7.81302 2.33586 7.87726 2.19572 7.98413C2.05559 8.09101 1.94921 8.236 1.88931 8.40175C1.82941 8.5675 1.81854 8.747 1.85799 8.91877C1.89744 9.09054 1.98553 9.24731 2.11175 9.37032L5.97605 13.1374L4.60937 19.0554C4.56788 19.2345 4.58118 19.422 4.64755 19.5935C4.71392 19.765 4.8303 19.9125 4.98159 20.0171C5.13288 20.1216 5.31208 20.1782 5.49596 20.1796C5.67983 20.181 5.85988 20.1271 6.01274 20.0249L11.0071 16.6954L16.0014 20.0249C16.1577 20.1286 16.3419 20.182 16.5294 20.1779C16.7169 20.1738 16.8986 20.1124 17.0502 20.0019C17.2017 19.8914 17.3158 19.7372 17.3771 19.5599C17.4383 19.3827 17.4438 19.1909 17.3929 19.0105L15.7152 13.1402L19.8758 9.396C20.1482 9.15018 20.2482 8.76678 20.1308 8.41915Z"
                  fill="#F3CD03"
                />
              </svg>
            ))}
            <p
              style={{
                fontWeight: "bold",
                color: "#737373",
                marginLeft: "5px",
              }}
            >
              {data.reviews.length} Reviews
            </p>
          </div>
          <p style={{ fontSize: "20px", fontWeight: "bold" }}>${data.price}</p>
          <p style={{ fontSize: "14px", fontWeight: "bold", color: "#737373" }}>
            Availability :{" "}
            <span style={{ color: "#23A6F0" }}>{data.availabilityStatus}</span>
          </p>
          <hr style={{ marginTop: "100px", border: "1px solid #BDBDBD" }} />
          <div style={{ display: "flex", gap: "10px" }}>
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ cursor: "pointer" }}
            >
              <circle cx="15" cy="15" r="15" fill="#23A6F0" />
            </svg>
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ cursor: "pointer" }}
            >
              <circle cx="15" cy="15" r="15" fill="#2DC071" />
            </svg>
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ cursor: "pointer" }}
            >
              <circle cx="15" cy="15" r="15" fill="#E77C40" />
            </svg>
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ cursor: "pointer" }}
            >
              <circle cx="15" cy="15" r="15" fill="#252B42" />
            </svg>
          </div>
          <div
            style={{
              display: "flex",
              gap: "10px",
              marginTop: "50px",
              alignItems: "center",
            }}
          >
            <button
              style={{
                backgroundColor: "#23A6F0",
                padding: "10px",
                border: "0px",
                borderRadius: "5px",
                color: "#fff",
                fontSize: "14px",
                fontWeight: "normal",
                fontFamily: "inherit",
                cursor: "pointer",
              }}
            >
              Select Options
            </button>
            {/* <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ cursor: "pointer" }}
            >
              <rect
                x="0.5"
                y="0.5"
                width="39"
                height="39"
                rx="19.5"
                fill="white"
              />
              <rect
                x="0.5"
                y="0.5"
                width="39"
                height="39"
                rx="19.5"
                stroke="#E8E8E8"
              />
              <path
                d="M20.0009 15.9532L18.6365 14.5566L18.6359 14.556C18.288 14.2018 17.873 13.9204 17.4152 13.7283C16.9573 13.5362 16.4658 13.4372 15.9692 13.4372C15.4727 13.4372 14.9811 13.5362 14.5233 13.7283C14.0654 13.9203 13.6505 14.2017 13.3026 14.5559C12.5886 15.2809 12.1885 16.2575 12.1885 17.275C12.1885 18.2926 12.5887 19.2693 13.3028 19.9943L13.3031 19.9946L19.7781 26.5508L20.0005 26.776L20.2228 26.5508L26.6978 19.9946L26.6981 19.9943C27.4122 19.2693 27.8125 18.2926 27.8125 17.275C27.8125 16.2575 27.4123 15.2809 26.6983 14.5559C26.3506 14.2015 25.9357 13.92 25.4778 13.7279C25.02 13.5359 24.5286 13.4372 24.0322 13.4375C24.0319 13.4375 24.0317 13.4375 24.0315 13.4375L24.0317 13.75M20.0009 15.9532L21.3578 14.5695L21.3586 14.5687L21.5817 14.7875M20.0009 15.9532L21.357 14.5704M20.0009 15.9532L21.357 14.5704M24.0317 13.75C23.5746 13.7493 23.122 13.8409 22.701 14.0192C22.2801 14.1974 21.8994 14.4587 21.5817 14.7875M24.0317 13.75C24.4868 13.7496 24.9373 13.8401 25.3569 14.0161C25.7766 14.1921 26.1569 14.4501 26.4755 14.775L24.0317 13.75ZM21.5817 14.7875L21.357 14.5704M21.5817 14.7875L21.357 14.5704M24.0316 12.8125L24.0315 12.8125C23.4516 12.812 22.8774 12.9273 22.3427 13.1516C21.8079 13.3759 21.3233 13.7047 20.9173 14.1188L20.9162 14.12L20.2224 14.82L20.0005 15.0439L19.7785 14.82L19.0848 14.12L19.0839 14.1191C18.6773 13.7058 18.1926 13.3774 17.6578 13.1533C17.123 12.9292 16.549 12.8138 15.9692 12.8138C15.3894 12.8138 14.8154 12.9292 14.2806 13.1533C13.7459 13.3774 13.2611 13.7057 12.8545 14.1191L24.0316 12.8125ZM24.0316 12.8125C24.6115 12.8127 25.1856 12.9283 25.7204 13.1526C26.2551 13.3769 26.7399 13.7054 27.1463 14.119C27.9752 14.9629 28.4397 16.0984 28.4397 17.2813C28.4397 18.4639 27.9754 19.5993 27.1467 20.4431C27.1466 20.4432 27.1464 20.4434 27.1463 20.4435L20.0005 27.6802M24.0316 12.8125L20.0005 27.6802M20.0005 27.6802L12.8547 20.4435C12.8545 20.4434 12.8544 20.4433 12.8543 20.4432C12.0256 19.5994 11.5613 18.464 11.5613 17.2813C11.5613 16.0985 12.0257 14.9629 12.8545 14.1191L20.0005 27.6802Z"
                fill="#BDBDBD"
                stroke="#252B42"
                stroke-width="0.625"
              />
            </svg> */}
            <img
              src={like}
              alt="Like"
              style={{ cursor: "pointer", color: "#000" }}
            />
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ cursor: "pointer" }}
              onClick={() => handleAddToCart(data)}
            >
              <rect
                x="0.5"
                y="0.5"
                width="39"
                height="39"
                rx="19.5"
                fill="white"
              />
              <rect
                x="0.5"
                y="0.5"
                width="39"
                height="39"
                rx="19.5"
                stroke="#E8E8E8"
              />
              <path
                d="M10 11.6333C10 11.4654 10.0667 11.3043 10.1855 11.1855C10.3043 11.0667 10.4654 11 10.6334 11H12.5334C12.6747 11 12.8119 11.0473 12.9232 11.1343C13.0345 11.2213 13.1136 11.343 13.1478 11.4801L13.6608 13.5333H28.3672C28.4602 13.5334 28.5521 13.554 28.6362 13.5936C28.7204 13.6331 28.7948 13.6908 28.8541 13.7624C28.9135 13.8339 28.9564 13.9177 28.9797 14.0077C29.0031 14.0977 29.0063 14.1918 28.9892 14.2832L27.0891 24.4165C27.062 24.5617 26.9849 24.6927 26.8714 24.7871C26.7578 24.8815 26.6148 24.9332 26.4672 24.9333H15.0668C14.9192 24.9332 14.7762 24.8815 14.6626 24.7871C14.5491 24.6927 14.472 24.5617 14.4449 24.4165L12.5461 14.3022L12.0394 12.2667H10.6334C10.4654 12.2667 10.3043 12.1999 10.1855 12.0812C10.0667 11.9624 10 11.8013 10 11.6333ZM13.9293 14.8L15.5925 23.6667H25.9415L27.6047 14.8H13.9293ZM16.3335 24.9333C15.6616 24.9333 15.0172 25.2002 14.5421 25.6753C14.067 26.1504 13.8001 26.7948 13.8001 27.4667C13.8001 28.1385 14.067 28.7829 14.5421 29.258C15.0172 29.7331 15.6616 30 16.3335 30C17.0054 30 17.6498 29.7331 18.1249 29.258C18.6 28.7829 18.8669 28.1385 18.8669 27.4667C18.8669 26.7948 18.6 26.1504 18.1249 25.6753C17.6498 25.2002 17.0054 24.9333 16.3335 24.9333ZM25.2005 24.9333C24.5286 24.9333 23.8842 25.2002 23.4091 25.6753C22.934 26.1504 22.6671 26.7948 22.6671 27.4667C22.6671 28.1385 22.934 28.7829 23.4091 29.258C23.8842 29.7331 24.5286 30 25.2005 30C25.8724 30 26.5168 29.7331 26.9919 29.258C27.467 28.7829 27.7339 28.1385 27.7339 27.4667C27.7339 26.7948 27.467 26.1504 26.9919 25.6753C26.5168 25.2002 25.8724 24.9333 25.2005 24.9333ZM16.3335 26.2C16.6695 26.2 16.9917 26.3335 17.2292 26.571C17.4668 26.8085 17.6002 27.1307 17.6002 27.4667C17.6002 27.8026 17.4668 28.1248 17.2292 28.3623C16.9917 28.5999 16.6695 28.7333 16.3335 28.7333C15.9976 28.7333 15.6754 28.5999 15.4378 28.3623C15.2003 28.1248 15.0668 27.8026 15.0668 27.4667C15.0668 27.1307 15.2003 26.8085 15.4378 26.571C15.6754 26.3335 15.9976 26.2 16.3335 26.2ZM25.2005 26.2C25.5364 26.2 25.8586 26.3335 26.0962 26.571C26.3337 26.8085 26.4672 27.1307 26.4672 27.4667C26.4672 27.8026 26.3337 28.1248 26.0962 28.3623C25.8586 28.5999 25.5364 28.7333 25.2005 28.7333C24.8645 28.7333 24.5423 28.5999 24.3048 28.3623C24.0672 28.1248 23.9338 27.8026 23.9338 27.4667C23.9338 27.1307 24.0672 26.8085 24.3048 26.571C24.5423 26.3335 24.8645 26.2 25.2005 26.2Z"
                fill="#252B42"
              />
            </svg>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ cursor: "pointer" }}
            >
              <rect
                x="0.5"
                y="0.5"
                width="39"
                height="39"
                rx="19.5"
                fill="white"
              />
              <rect
                x="0.5"
                y="0.5"
                width="39"
                height="39"
                rx="19.5"
                stroke="#E8E8E8"
              />
              <path
                d="M22.5 20C22.5 20.663 22.2366 21.2989 21.7678 21.7678C21.2989 22.2366 20.663 22.5 20 22.5C19.337 22.5 18.7011 22.2366 18.2322 21.7678C17.7634 21.2989 17.5 20.663 17.5 20C17.5 19.337 17.7634 18.7011 18.2322 18.2322C18.7011 17.7634 19.337 17.5 20 17.5C20.663 17.5 21.2989 17.7634 21.7678 18.2322C22.2366 18.7011 22.5 19.337 22.5 20Z"
                fill="black"
              />
              <path
                d="M12 20C12 20 15 14.5 20 14.5C25 14.5 28 20 28 20C28 20 25 25.5 20 25.5C15 25.5 12 20 12 20ZM20 23.5C20.9283 23.5 21.8185 23.1313 22.4749 22.4749C23.1313 21.8185 23.5 20.9283 23.5 20C23.5 19.0717 23.1313 18.1815 22.4749 17.5251C21.8185 16.8687 20.9283 16.5 20 16.5C19.0717 16.5 18.1815 16.8687 17.5251 17.5251C16.8687 18.1815 16.5 19.0717 16.5 20C16.5 20.9283 16.8687 21.8185 17.5251 22.4749C18.1815 23.1313 19.0717 23.5 20 23.5Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
      </div>

      <div
        style={{
          width: "80%",
          margin: "100px auto auto",
        }}
      >
        <div
          style={{
            gap: 50,
            fontSize: "14px",
            fontWeight: "500",
            display: "flex",
            color: "#737373",
            justifyContent: "center",
          }}
        >
          <p>Description</p>
          <p>Additional Information</p>
          <p>Reviews(0)</p>
        </div>
        <hr style={{ margin: "0px", border: "1px solid #ECECEC" }} />
        <div
          style={{
            display: "flex",
            gap: 50,
            justifyContent: "center",
            margin: "100px auto auto",
          }}
        >
          <div style={{ fontSize: "14px", color: "#737373" }}>
            <h1
              style={{ color: "#252B42", fontWeight: "bold", fontSize: "24px" }}
            >
              the quick fox jumps over{" "}
            </h1>
            <p>
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
            <p style={{ borderLeft: "2px solid #23856D" }}>
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
            <p>
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
          </div>
          <div>
            <img src={detail} alt="" />
          </div>
        </div>
      </div>

      {/* PRODUCTS */}
      <div className="productContainer">
        {/* <div className="productsHeader">Featured Products</div> */}
        <p className="productsTitle">BESTSELLER PRODUCTS</p>
        {/* <span className="productsmallText">
          Problems trying to resolve the conflict between
        </span> */}
        <Products />
      </div>
      {/* <div className="buttonContainer">
        <button className="outlineButton">LOAD MORE PRODUCTS</button>
      </div> */}

      {/* PRODUCT SERVICES */}
      {/* <div className="productContainer">
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
      </div> */}

      {/* FEATURED POSTS */}

      {/* <div className="postContainer">
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
      </div> */}

      {/* WHAT THEY SAY ABOUT US */}
      {/* 
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
      </section> */}

      {/* DESIGNING BETTER EXPERIENCE */}

      {/* <section className="background-section">
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
      </section> */}

      {/* PARTERNS */}
      <div
        style={{
          width: "80%",
          display: "flex",
          margin: "100px auto auto",
          gap: 50,
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <svg
          width="151"
          height="35"
          viewBox="0 0 151 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_541_757)">
            <g clip-path="url(#clip1_541_757)">
              <path
                d="M46.2553 32.4249L52.4193 32.5526C50.2949 31.8183 48.2349 30.9244 46.2553 29.8709V32.4249ZM55.5414 31.5789V32.4249L52.4193 32.5526C58.2935 34.5479 63.6688 34.8193 67.66 33.7019C64.4574 33.7338 60.2891 33.2869 55.5414 31.5789ZM121.349 13.1901C123.908 13.1901 126 11.131 126 8.577C126 6.02301 123.924 4.6662 121.349 4.6662C118.79 4.6662 116.698 6.03897 116.698 8.577C116.698 11.115 118.774 13.1901 121.349 13.1901ZM116.682 32.4249H126V14.7864H116.682V32.4249ZM104.82 32.4249H114.139V1.25024L104.82 5.60799V32.4249ZM99.8314 13.3657C96.9024 10.4606 91.7202 10.6362 91.7202 10.6362C91.7202 10.6362 86.5219 10.4606 83.6089 13.3657C80.6799 16.2709 80.9052 18.777 80.9052 21.762C80.9052 24.747 80.6799 27.2371 83.6089 30.1423C86.538 33.0474 91.7202 32.8718 91.7202 32.8718C91.7202 32.8718 96.9185 33.0474 99.8314 30.1423C102.76 27.2371 102.535 24.747 102.535 21.762C102.519 18.761 102.744 16.2549 99.8314 13.3657ZM93.4261 24.8427C93.4261 25.4174 93.1364 26.838 91.7041 26.838C90.2718 26.838 89.9821 25.4174 89.9821 24.8427V18.3939C89.9821 17.0052 91.1569 16.654 91.7041 16.654C92.2513 16.654 93.4261 16.9892 93.4261 18.3939V24.8427ZM76.3346 13.3657C73.4055 10.4606 68.2233 10.6362 68.2233 10.6362C68.2233 10.6362 63.0411 10.4606 60.1121 13.3657C59.8063 13.669 59.5166 13.9883 59.2591 14.3235C53.1113 9.5986 47.5911 6.90094 42.8274 4.57043V1.2662L39.2063 2.95822C30.4513 -0.56948 24.8828 0.053056 23.5471 2.97418C23.5471 2.97418 19.5397 8.20986 33.493 20.6606V32.4249H42.8113V27.8596C41.7652 27.1892 40.7191 26.4709 39.6891 25.6887C37.3072 23.9009 35.2794 22.2409 33.5091 20.6765V15.7282C35.6174 18.0747 38.4177 20.7404 42.1032 23.7573L42.8274 24.3319V19.5751C42.8274 18.4737 43.101 16.67 44.5655 16.67C46.03 16.67 46.2714 17.7714 46.2714 19.0643V26.838C49.1683 28.7855 52.2744 30.3657 55.5575 31.5629V16.5742C55.5575 13.5892 53.401 10.6042 49.0235 10.6042C46.4807 10.5883 44.1149 11.9132 42.8274 14.1V5.4324C49.5707 8.76855 56.33 12.8549 58.905 14.7385C57.2635 17.069 57.4083 19.2239 57.4083 21.7141C57.4083 24.6991 57.183 27.1892 60.1121 30.0944C63.0411 32.9995 68.2233 32.824 68.2233 32.824C68.2233 32.824 73.4216 32.9995 76.3346 30.0944C79.2636 27.1892 79.0222 24.6991 79.0222 21.7141C79.0222 18.761 79.2636 16.2549 76.3346 13.3657ZM33.493 5.60799V15.7122C25.6553 7.01268 27.2325 3.58075 27.828 3.08592C30.0007 1.2662 33.8632 1.80893 38.1924 3.42113L33.493 5.60799ZM69.9453 24.8427C69.9453 25.4174 69.6557 26.838 68.2233 26.838C66.791 26.838 66.5013 25.4174 66.5013 24.8427V18.3939C66.5013 17.0052 67.6761 16.654 68.2233 16.654C68.7705 16.654 69.9453 16.9892 69.9453 18.3939V24.8427Z"
                fill="#737373"
              />
            </g>
          </g>
          <defs>
            <clipPath id="clip0_541_757">
              <rect
                width="153"
                height="34"
                fill="white"
                transform="translate(-2 0.5)"
              />
            </clipPath>
            <clipPath id="clip1_541_757">
              <rect
                width="103"
                height="34"
                fill="white"
                transform="translate(23 0.5)"
              />
            </clipPath>
          </defs>
        </svg>
        <svg
          width="146"
          height="59"
          viewBox="0 0 146 59"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_541_760)">
            <path
              d="M31.5 0.995234H44.1121V35.0099C44.1121 40.4046 46.5437 43.6154 48.5215 44.9519C46.4627 46.761 40.2215 48.3582 35.5203 44.4955C32.7645 42.2137 31.5 38.4162 31.5 34.8795V0.995234ZM110.269 29.2729V25.6872H114.127V13.1701H109.896C108.259 5.62396 101.596 0.017334 93.6365 0.017334C84.4611 0.017334 76.9879 7.51457 76.9879 16.7557V45.9624C79.5816 46.3372 82.7266 45.9135 85.3689 43.6806C88.141 41.3988 89.3893 37.6176 89.3893 34.0646V32.9726H95.6791V20.4555H89.3893V16.6579C89.3893 11.0187 97.8514 11.0187 97.8514 16.6579V29.224C97.8514 38.4488 105.308 45.9624 114.5 45.9624V33.4941C112.149 33.4941 110.269 31.5872 110.269 29.2729ZM62.5602 13.1375V31.5546C62.5602 34.0646 58.702 34.0646 58.702 31.5546V13.1375H46.252V34.7654C46.252 38.6444 47.5488 43.5665 53.5469 45.18C59.5449 46.7773 62.9816 43.4524 62.9816 43.4524C62.6412 45.6364 60.6311 47.2499 57.324 47.5759C54.8113 47.8367 51.6178 46.9892 50.0291 46.3046V57.7624C54.098 58.9847 58.3777 59.3596 62.6088 58.5284C70.2441 57.0452 75.0588 50.64 75.0588 42.0996V13.056H62.5602V13.1375Z"
              fill="#737373"
            />
          </g>
          <defs>
            <clipPath id="clip0_541_760">
              <rect
                width="83"
                height="59"
                fill="white"
                transform="translate(31.5)"
              />
            </clipPath>
          </defs>
        </svg>
        <svg
          width="152"
          height="75"
          viewBox="0 0 152 75"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_541_763)">
            <path
              d="M127 0.145752C114.122 8.82826 112.752 15.1296 111.636 17.0572C110.568 19.0334 109.772 26.825 107.923 30.5993C106.058 34.4222 99.2847 37.4352 97.3881 38.6987C95.5234 39.9622 92.8778 44.8704 90.7103 49.0982C73.4819 48.3855 64.0309 55.3833 49.4003 64.2602C54.0859 62.6889 56.3012 61.555 56.3012 61.555C71.3144 55.7235 78.5022 50.4913 101.102 53.5853C101.277 53.5853 101.404 53.6825 101.548 53.7149C102.169 54.0712 102.392 54.8326 102.042 55.4643L93.4516 70.9827C93.0531 71.744 92.2084 72.149 91.3637 71.9708C71.155 68.1155 55.2016 74.7732 40.5391 74.9838C28.8409 75.1619 25 69.5572 25 69.298C25 69.1198 25.0956 69.0226 25.2709 69.0226C25.2709 69.0226 31.375 69.0226 41.7025 66.5442C53.4325 43.8175 63.8875 35.8639 75.2669 35.8639C75.2669 35.8639 86.6941 35.8639 89.7062 45.8909C93.34 39.46 94.2166 37.9211 94.2166 37.9211C95.0612 36.3985 99.7947 25.4157 107.987 15.0162C116.194 4.64899 122.394 2.0734 127 0.145752Z"
              fill="#737373"
            />
          </g>
          <defs>
            <clipPath id="clip0_541_763">
              <rect
                width="102"
                height="75"
                fill="white"
                transform="translate(25)"
              />
            </clipPath>
          </defs>
        </svg>
        <svg
          width="151"
          height="43"
          viewBox="0 0 151 43"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_541_766)">
            <g clip-path="url(#clip1_541_766)">
              <path
                d="M50.5554 3.79318L43.5868 5.25682L43.5547 27.9114C43.5547 32.0955 46.7412 34.8 50.9739 34.8C53.3236 34.8 55.0456 34.3705 55.9951 33.8614V28.4841C55.0778 28.85 50.5715 30.1546 50.5715 25.9864V15.9318H55.9951V9.91818H50.5715L50.5554 3.79318ZM64.895 12.0023L64.4604 9.91818H58.2804V34.2909H65.41V17.8886C67.0998 15.6932 69.9484 16.1227 70.8658 16.4091V9.91818C69.9001 9.58409 66.5687 8.96364 64.895 12.0023ZM79.7495 0.5L72.5717 2.01136V7.77045L79.7495 6.25909V0.5ZM31.2268 17.0932C31.2268 15.9955 32.1603 15.5659 33.657 15.55C35.8297 15.55 38.5978 16.2023 40.7704 17.3636V10.7136C38.4047 9.79091 36.0389 9.425 33.6731 9.425C27.8793 9.425 24.0168 12.4159 24.0168 17.4114C24.0168 25.2386 34.8801 23.9659 34.8801 27.3386C34.8801 28.6432 33.7375 29.0727 32.1442 29.0727C29.7784 29.0727 26.7206 28.1023 24.3226 26.8136V33.1773C26.9781 34.3068 29.6658 34.7841 32.1281 34.7841C38.0667 34.7841 42.1545 32.2705 42.1545 27.1796C42.1545 18.7636 31.2268 20.275 31.2268 17.0932ZM127.001 22.3909C127.001 15.1523 123.46 9.44091 116.669 9.44091C109.877 9.44091 105.741 15.1523 105.741 22.3432C105.741 30.8545 110.617 34.7841 117.57 34.7841C120.982 34.7841 123.541 34.0205 125.488 32.9545V27.6409C123.541 28.6114 121.304 29.2 118.471 29.2C115.687 29.2 113.241 28.2295 112.919 24.9205H126.904C126.936 24.5545 127.001 23.075 127.001 22.3909ZM112.854 19.7182C112.854 16.5364 114.834 15.2 116.62 15.2C118.375 15.2 120.241 16.5364 120.241 19.7182H112.854ZM94.6845 9.44091C91.8842 9.44091 90.0817 10.7455 89.0839 11.6523L88.7137 9.90227H82.4211V42.4841L89.5667 40.9886L89.5828 33.0023C90.6128 33.75 92.1417 34.7841 94.6362 34.7841C99.754 34.7841 104.421 31.0932 104.421 22.1205C104.437 13.9114 99.7058 9.44091 94.6845 9.44091ZM92.9786 28.9296C91.3048 28.9296 90.307 28.325 89.615 27.5932L89.5667 17.0932C90.307 16.2818 91.337 15.6932 92.9786 15.6932C95.5858 15.6932 97.3883 18.5886 97.3883 22.2795C97.4044 26.0818 95.634 28.9296 92.9786 28.9296ZM72.5878 34.2909H79.7656V9.91818H72.5878V34.2909Z"
                fill="#737373"
              />
            </g>
          </g>
          <defs>
            <clipPath id="clip0_541_766">
              <rect
                width="151"
                height="42"
                fill="white"
                transform="translate(0 0.5)"
              />
            </clipPath>
            <clipPath id="clip1_541_766">
              <rect
                width="103"
                height="42"
                fill="white"
                transform="translate(24 0.5)"
              />
            </clipPath>
          </defs>
        </svg>
        <svg
          width="151"
          height="63"
          viewBox="0 0 151 63"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_541_769)">
            <g clip-path="url(#clip1_541_769)">
              <path
                d="M52.8872 22.9887C52.7706 26.6268 54.6044 28.2378 54.6497 29.261C54.6281 29.4692 54.5566 29.6693 54.441 29.8445C54.3255 30.0197 54.1693 30.165 53.9856 30.2681L51.912 31.7072C51.6437 31.8938 51.3274 32.0007 51 32.0156C50.9304 32.0124 49.6733 32.3096 47.6824 27.9021C46.4677 29.4055 44.9223 30.6133 43.1643 31.4332C41.4063 32.2531 39.4824 32.6633 37.54 32.6324C34.9027 32.7754 27.7555 31.1483 28.1233 23.6039C27.8657 17.4553 33.6408 13.6357 39.6135 13.9585C40.7636 13.9618 43.1125 14.018 47.2256 14.9656V12.4567C47.6613 8.20668 44.8443 4.90911 39.9666 5.40383C39.5778 5.40543 36.8239 5.32352 32.5408 7.02771C31.3486 7.57061 31.1963 7.48067 30.7994 7.48067C29.599 7.48067 30.0931 4.03051 30.3231 3.59362C31.1671 2.56564 36.1322 0.646211 41.005 0.673517C44.2631 0.387814 47.5037 1.38483 50.0264 3.44906C51.0519 4.5864 51.8343 5.91801 52.3262 7.3635C52.8182 8.80898 53.0096 10.3383 52.8889 11.8592L52.8872 22.9887ZM38.8877 28.1912C44.1412 28.1157 46.3654 24.9836 46.8724 23.2971C47.2709 21.6828 47.2045 20.6613 47.2045 18.8961C45.638 18.5234 43.3831 18.117 40.796 18.1138C38.3418 17.9307 33.8595 19.0181 34.0344 23.2955C33.8335 25.9923 35.8358 28.339 38.8877 28.1912ZM66.5757 31.8936C65.3024 32.0092 64.7095 31.1129 64.5216 30.2279L56.4543 3.78155C56.2972 3.33502 56.1935 2.87403 56.1433 2.40341C56.1136 2.20939 56.1627 2.01158 56.28 1.85346C56.3972 1.69535 56.573 1.58985 56.7686 1.56015C56.8075 1.55372 56.4236 1.56015 60.373 1.56015C61.7953 1.4188 62.2586 2.5287 62.406 3.2258L68.1924 25.8462L73.5641 3.2258C73.65 2.70859 74.0404 1.44771 75.6376 1.58103H78.4175C78.769 1.55212 80.2172 1.50072 80.4715 3.24668L85.8854 26.1562L91.8581 3.24668C91.9358 2.89652 92.2987 1.42041 93.9122 1.58103H97.1067C97.2444 1.56015 98.1029 1.45093 97.9571 2.95916C97.8875 3.25631 98.5095 1.24694 89.412 30.2488C89.2257 31.1338 88.6312 32.0301 87.3579 31.9144H84.3302C82.558 32.0992 82.3037 30.3628 82.2761 30.1878L76.9044 8.1617L71.5943 30.1653C71.5684 30.3404 71.314 32.0767 69.5402 31.892H66.5757V31.8936ZM110.878 32.7979C109.925 32.7995 105.383 32.7497 101.586 30.8238C101.208 30.665 100.885 30.3984 100.66 30.0579C100.435 29.7173 100.317 29.3181 100.321 28.9108V27.1841C100.321 25.8269 101.325 26.0758 101.751 26.2381C103.377 26.8902 104.421 27.3849 106.418 27.78C112.355 28.9895 114.966 27.4106 115.606 27.0605C117.737 25.806 117.905 22.9357 116.457 21.4467C114.759 20.0349 113.949 19.9819 107.85 18.0737C107.098 17.8665 100.771 15.8876 100.756 9.66352C100.658 5.12756 104.814 0.639785 112.018 0.676728C114.071 0.675122 119.54 1.3401 121.02 3.18564C121.239 3.52134 121.347 3.91647 121.331 4.31642V5.9403C121.331 6.65346 121.069 7.01004 120.542 7.01004C119.293 6.87191 117.077 5.2159 112.579 5.28336C111.463 5.22554 106.117 5.42953 106.357 9.29409C106.287 12.3395 110.667 13.4815 111.168 13.6132C117.074 15.3752 119.049 15.6676 121.393 18.3644C124.169 21.9382 122.673 26.1224 122.097 27.2693C119.007 33.291 111.014 32.8011 110.878 32.7979ZM117.39 49.6407C106.045 57.948 89.5772 62.3699 75.5162 62.3699C56.5435 62.494 38.2103 55.5768 24.1204 42.9781C23.0626 42.032 23.9957 40.7358 25.2819 41.457C40.9118 50.322 58.6081 54.9799 76.6145 54.9685C90.0611 54.897 103.361 52.1923 115.751 47.0097C117.659 46.2066 119.277 48.2625 117.39 49.6407ZM122.119 44.2936C120.667 42.4432 112.516 43.4294 108.866 43.8615C107.766 43.9852 107.58 43.0391 108.576 42.3404C115.067 37.8157 125.728 39.1119 126.952 40.633C128.175 42.1541 126.62 52.7455 120.544 57.8051C119.611 58.5873 118.718 58.1745 119.133 57.1465C120.5 53.7333 123.57 46.1455 122.119 44.2936Z"
                fill="#737373"
              />
            </g>
          </g>
          <defs>
            <clipPath id="clip0_541_769">
              <rect
                width="151"
                height="62"
                fill="white"
                transform="translate(0 0.5)"
              />
            </clipPath>
            <clipPath id="clip1_541_769">
              <rect
                width="104"
                height="62"
                fill="white"
                transform="translate(23.5 0.5)"
              />
            </clipPath>
          </defs>
        </svg>
        <svg
          width="149"
          height="73"
          viewBox="0 0 149 73"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_541_772)">
            <g clip-path="url(#clip1_541_772)">
              <path
                d="M104.926 28.1614C102.531 28.1614 100.423 29.1556 98.8747 30.7111C93.1747 26.7503 85.4949 24.2006 76.9848 23.928L81.4075 3.91556L95.4898 7.09061C95.4898 10.5543 98.2999 13.3766 101.749 13.3766C105.261 13.3766 108.087 10.4741 108.087 7.01043C108.087 3.54674 105.277 0.644287 101.749 0.644287C99.2898 0.644287 97.1663 2.1356 96.1125 4.17213L80.5613 0.70843C79.7789 0.499966 79.0125 1.06121 78.805 1.84696L73.9512 23.912C65.505 24.2648 57.905 26.8144 52.189 30.7752C50.6403 29.1556 48.4529 28.1614 46.0579 28.1614C37.1806 28.1614 34.2747 40.124 42.4016 44.2131C42.1142 45.4799 41.9865 46.8269 41.9865 48.1739C41.9865 61.6118 57.0587 72.5 75.5638 72.5C94.1487 72.5 109.221 61.6118 109.221 48.1739C109.221 46.8269 109.077 45.4158 108.726 44.149C116.693 40.0438 113.755 28.1614 104.926 28.1614ZM55.2865 45.063C55.2865 41.5351 58.0966 38.6968 61.6251 38.6968C65.0739 38.6968 67.884 41.5191 67.884 45.063C67.884 48.5267 65.0739 51.349 61.6251 51.349C58.1125 51.365 55.2865 48.5267 55.2865 45.063ZM89.5024 60.0563C83.6907 65.8933 67.2932 65.8933 61.4814 60.0563C60.8428 59.4951 60.8428 58.5008 61.4814 57.8594C62.0403 57.2982 63.0302 57.2982 63.589 57.8594C68.0276 62.4296 82.7487 62.5098 87.3789 57.8594C87.9377 57.2982 88.9276 57.2982 89.4865 57.8594C90.1411 58.5008 90.1411 59.4951 89.5024 60.0563ZM89.3747 51.365C85.926 51.365 83.1159 48.5427 83.1159 45.079C83.1159 41.5512 85.926 38.7129 89.3747 38.7129C92.8873 38.7129 95.7134 41.5351 95.7134 45.079C95.6974 48.5267 92.8873 51.365 89.3747 51.365Z"
                fill="#737373"
              />
            </g>
          </g>
          <defs>
            <clipPath id="clip0_541_772">
              <rect
                width="151"
                height="72"
                fill="white"
                transform="translate(0 0.5)"
              />
            </clipPath>
            <clipPath id="clip1_541_772">
              <rect
                width="76"
                height="72"
                fill="white"
                transform="translate(37.5 0.5)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>

      <ProductModal
        isOpen={modalIsOpen}
        product={selectedProduct}
        onRequestClose={() => setModalIsOpen(false)}
      />

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default ShopPage;
