// ProductModal.js
import React from "react";
import Modal from "react-modal";

const ProductModal = ({ isOpen, product, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Product Added"
      className="modal"
      overlayClassName="overlay"
    >
      <div className="modal-content">
        <h2>Successfully added to basket</h2>
        {product && (
          <div>
            <img
              src={product.thumbnail}
              alt={product.title}
              className="product-image"
            />
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
          </div>
        )}
        <button onClick={onRequestClose}>Close</button>
      </div>
    </Modal>
  );
};

export default ProductModal;
