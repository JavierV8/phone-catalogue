import React, { useState } from "react";
import Modal from "./Modal";
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

  const [visible, setVisible] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  const toggleModal = (e) => {
    if (e.target.className !== "avoid-modal") setVisible(true);
  };

  return (
    <div
      className="product-container"
      data-test="productComponent"
      onClick={(e) => toggleModal(e)}
    >
      {!imageLoading ? null : (
        <div
          data-test="product-div-loading"
          style={{
            background: "rgb(250, 250, 250)",
            height: "200px",
            width: "90%",
            margin: "auto",
            marginTop: "10px",
          }}
        />
      )}
      <img
        style={!imageLoading ? {} : { display: "none" }}
        data-test="product-image"
        className="product-image"
        src={process.env.PUBLIC_URL + `images/${imageFileName}`}
        alt="img"
        onLoad={() => setImageLoading(false)}
      />
      <p data-test="product-name">{name}</p>
      <p data-test="product-price">{price} €</p>
      <Modal
        key={id}
        id={id}
        name={name}
        manufacturer={manufacturer}
        description={description}
        color={color}
        price={price}
        imageFileName={imageFileName}
        screen={screen}
        processor={processor}
        ram={ram}
        isVisible={visible}
        setVisible={() => setVisible(!visible)}
      />
    </div>
  );
};

export default Product;
