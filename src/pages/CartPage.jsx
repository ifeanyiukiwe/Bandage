import React, { useState, useEffect } from "react";
import "./CartPage.css";

import Products from "../components/products/Products";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import image from "../assets/call.png";
import gmail from "../assets/gmail.png";
import instagram from "../assets/instagram.png";
import youtube from "../assets/youtube.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/X.png";

import payout from "../assets/payout.png";
import cart from "../assets/cart1.png";
import { Link } from "react-router-dom";

const CartPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedProducts =
      JSON.parse(localStorage.getItem("productArray")) || [];
    setProducts(storedProducts);
  }, []);

  const increaseQuantity = (index) => {
    const updatedProducts = [...products];
    updatedProducts[index].quantity += 1;
    setProducts(updatedProducts);
    localStorage.setItem("productArray", JSON.stringify(updatedProducts));
  };

  const decreaseQuantity = (index) => {
    const updatedProducts = [...products];
    if (updatedProducts[index].quantity > 1) {
      updatedProducts[index].quantity -= 1;
      setProducts(updatedProducts);
      localStorage.setItem("productArray", JSON.stringify(updatedProducts));
    } else {
      // Remove product from cart if quantity becomes zero
      updatedProducts.splice(index, 1);
      setProducts(updatedProducts);
      localStorage.setItem("productArray", JSON.stringify(updatedProducts));
    }
  };

  const handleDelete = (index) => {
    const updatedProducts = [...products];
    updatedProducts.splice(index, 1);
    setProducts(updatedProducts);
    localStorage.setItem("productArray", JSON.stringify(updatedProducts));
  };

  // Function to calculate the total price of the products
  const calculateTotalPrice = () => {
    return products.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);
  };

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
          margin: "auto",
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
      <div
        style={{
          width: "80%",
          gap: "20px",
          margin: "auto",
          display: "flex",
          marginTop: "50px",
        }}
      >
        <div
          style={{
            width: "50%",
            padding: "20px",
            border: "solid 1px #eee",
          }}
        >
          <h1 style={{ fontSize: "20px", fontWeight: "600", margin: "10px" }}>
            Shopping Cart
          </h1>
          <div
            style={{
              background: "#3b4148",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "10px 20px",
              borderRadius: "5px 5px 0px 0px",
            }}
          >
            <p style={{ fontSize: "14px", fontWeight: "500" }}>Item Details</p>
            <p style={{ fontSize: "14px", fontWeight: "500" }}>Quantity</p>
            <p style={{ fontSize: "14px", fontWeight: "500" }}>Price</p>
          </div>
          {products.map((product, index) => (
            <div key={index} style={{ padding: "20px" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <img
                    src={cart}
                    alt=""
                    style={{ width: "100px", height: "75px" }}
                  />
                  <div>
                    <p
                      style={{
                        margin: "0px",
                        fontSize: "12px",
                        fontWeight: "500",
                      }}
                    >
                      {product.title}
                    </p>
                    <p
                      style={{
                        margin: "0px",
                        fontSize: "12px",
                        color: "#2BA501",
                      }}
                    >
                      {product.availabilityStatus}
                    </p>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      {product.reviews.map((review) => (
                        <svg
                          width="14"
                          height="14"
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
                          fontWeight: "400",
                          color: "#737373",
                          marginLeft: "5px",
                          fontSize: "8px",
                        }}
                      >
                        {product.reviews.length} Reviews
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <svg
                    width="28"
                    height="29"
                    viewBox="0 0 28 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ cursor: "pointer" }}
                    onClick={() => decreaseQuantity(index)}
                  >
                    <circle cx="14" cy="14.5" r="14" fill="#E8EAEC" />
                    <path
                      d="M8.71997 14.9402H19.2799C19.6776 14.9402 20 14.6179 20 14.2201C20 13.8224 19.6777 13.5 19.2799 13.5H8.71997C8.32235 13.5001 8 13.8224 8 14.2202C8 14.6179 8.32235 14.9402 8.71997 14.9402Z"
                      fill="#3A3C3E"
                    />
                  </svg>
                  <div
                    style={{
                      textAlign: "center",
                      border: "1px solid #3A3C3E",
                      width: "30px",
                    }}
                  >
                    {product.quantity}
                  </div>
                  <svg
                    width="28"
                    height="29"
                    viewBox="0 0 28 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ cursor: "pointer" }}
                    onClick={() => increaseQuantity(index)}
                  >
                    <circle cx="14" cy="14.5" r="14" fill="#23A6F0" />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M19.168 15.2878C19.5822 15.2878 19.918 14.952 19.918 14.5378C19.918 14.1236 19.5822 13.7878 19.168 13.7878L14.7879 13.7878L14.7879 9.40771C14.7879 8.9935 14.4521 8.65771 14.0379 8.65771C13.6237 8.65771 13.2879 8.9935 13.2879 9.40771L13.2879 13.7878L8.90779 13.7878C8.49358 13.7878 8.15779 14.1236 8.15779 14.5378C8.15779 14.952 8.49358 15.2878 8.90779 15.2878L13.2879 15.2878L13.2879 19.6679C13.2879 20.0821 13.6237 20.4179 14.0379 20.4179C14.4521 20.4179 14.7879 20.0821 14.7879 19.6679L14.7879 15.2878L19.168 15.2878Z"
                      fill="#FCFCFC"
                    />
                  </svg>
                </div>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "5px" }}
                >
                  <div>
                    <p
                      style={{
                        margin: "0px",
                        fontSize: "16px",
                        fontWeight: "500",
                      }}
                    >
                      ${product.price}
                    </p>
                    <p
                      style={{
                        margin: "0px",
                        fontSize: "10px",
                        color: "#6C6C6C",
                      }}
                    >
                      ${product.price} x {product.quantity} Item
                    </p>
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "10px",
                  cursor: "pointer",
                }}
                onClick={() => handleDelete(index)}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.00016 12.6667C4.00016 13.0203 4.14064 13.3594 4.39069 13.6095C4.64074 13.8595 4.97987 14 5.3335 14H10.6668C11.0205 14 11.3596 13.8595 11.6096 13.6095C11.8597 13.3594 12.0002 13.0203 12.0002 12.6667V4.66667H4.00016V12.6667ZM5.3335 6H10.6668V12.6667H5.3335V6ZM10.3335 2.66667L9.66683 2H6.3335L5.66683 2.66667H3.3335V4H12.6668V2.66667H10.3335Z"
                    fill="#23A6F0"
                  />
                </svg>
                <p
                  style={{
                    color: "#23A6F0",
                    fontSize: "12px",
                    fontWeight: "600",
                  }}
                >
                  REMOVE
                </p>
              </div>
              <hr style={{ margin: "0px", border: "1px solid #ECECEC" }} />
            </div>
          ))}
        </div>
        <div
          style={{ width: "50%", padding: "20px", border: "solid 1px #eee" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "20px",
            }}
          >
            <h1 style={{ fontSize: "20px", fontWeight: "600", margin: "10px" }}>
              Order Summary
            </h1>
            <p style={{ fontSize: "16px", fontWeight: "400" }}>
              {products.length} Items
            </p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h1 style={{ fontSize: "16px", fontWeight: "400", margin: "10px" }}>
              Delivery Charges
            </h1>
            <p
              style={{ fontSize: "10px", fontWeight: "400", color: "#F56666" }}
            >
              Add your delivery <br /> address to checkout to <br /> see
              delivery charges.
            </p>
          </div>
          <hr style={{ marginTop: "20px", border: "1px solid #BDBDBD" }} />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h1 style={{ fontSize: "16px", fontWeight: "400", margin: "10px" }}>
              Subtotal
            </h1>
            <p style={{ fontSize: "16px", fontWeight: "300" }}>
              ${calculateTotalPrice().toFixed(2)}
            </p>
          </div>
          <hr style={{ marginTop: "20px", border: "1px solid #BDBDBD" }} />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h1 style={{ fontSize: "16px", fontWeight: "400", margin: "10px" }}>
              Total
            </h1>
            <p style={{ fontSize: "20px", fontWeight: "400" }}>
              ${calculateTotalPrice().toFixed(2)}
            </p>
          </div>
          <hr style={{ marginTop: "20px", border: "1px solid #BDBDBD" }} />
          <div style={{ display: "flex", justifyContent: "end" }}>
            <p
              style={{ fontSize: "10px", fontWeight: "400", color: "#F56666" }}
            >
              Excluding Delivery <br /> Charges
            </p>
          </div>
          <div>
            <button
              style={{
                backgroundColor: "#23A6F0",
                border: "0px",
                borderRadius: "5px",
                color: "#fff",
                fontSize: "14px",
                fontWeight: "normal",
                fontFamily: "inherit",
                cursor: "pointer",
                width: "100%",
                height: "50px",
                marginTop: "20px",
              }}
            >
              Proceed to Checkout
            </button>
          </div>
          <hr style={{ margin: "20px auto", border: "1px solid #BDBDBD" }} />
          <div>
            <img src={payout} alt="payout" />
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
      <Footer />
    </div>
  );
};

export default CartPage;
