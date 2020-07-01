import React, { useState } from "react";
import "./Product.css";

const Product = (props) => {
  const {
    id,
    name,
    manufacturer,
    description,
    color,
    price,
    imageFileName,
    screen,
    processor,
    ram,
  } = props;

  return (
    <div className="product-container">
      <img
        className="product-image"
        src={process.env.PUBLIC_URL + `images/${imageFileName}`}
        alt="img"
      />
      <p data-test="product-name">{name}</p>
      <p data-test="product-price">{price} €</p>
    </div>
  );
};

export default Product;
