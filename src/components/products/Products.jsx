import React from "react";
import "./Products.css";
import { useGetProductsQuery } from "../../features/products/productsApi";
import { truncateWord } from "../../utils";

const Products = () => {
  const { data, error, isLoading } = useGetProductsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="products">
      {data.products.map((product) => (
        <div key={product.id} className="product">
          <img src={product.thumbnail} alt={product.title} />
          <h3>{truncateWord(product.title)}</h3>
          <p>{truncateWord(product.description)}</p>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;
