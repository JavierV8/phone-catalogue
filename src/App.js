import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "./store/actions/Products";
import { Spinner } from "reactstrap";
import Product from "./components/Product";
import "./App.css";

function App() {
  const products = useSelector((state) => state.products.products);
  const isLoading = useSelector((state) => state.products.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const phones = [];
  for (let product in products)
    phones.push(
      <Product
        key={products[product].id}
        id={products[product].id}
        name={products[product].name}
        manufacturer={products[product].manufacturer}
        description={products[product].description}
        color={products[product].color}
        price={products[product].price}
        imageFileName={products[product].imageFileName}
        screen={products[product].screen}
        processor={products[product].processor}
        ram={products[product].ram}
      />
    );

  return (
    <div className="App-container">
      <div className="App-products">
        {isLoading ? (
          <div className="App-spinner" data-test="spinnerComponent">
            <Spinner color="primary" />
          </div>
        ) : (
          phones
        )}
      </div>
    </div>
  );
}

export default App;
