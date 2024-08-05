import React from "react";
import "./Products.css";
import { useGetProductsQuery } from "../../features/products/productsApi";
import { truncateWord } from "../../utils";
import { Link } from "react-router-dom";

const Products = () => {
  // State
  const { data, error, isLoading } = useGetProductsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="products">
      {data.products.map((product) => (
        <Link to={`shop/${product.id}`} key={product.id} className="product">
          <img src={product.thumbnail} alt={product.title} />
          <h3>{truncateWord(product.title)}</h3>
          <p>{truncateWord(product.description)}</p>
          <p>${product.price}</p>
        </Link>
      ))}
    </div>
  );
};

export default Products;
