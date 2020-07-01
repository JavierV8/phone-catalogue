import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "./store/actions/Products";
import { Spinner } from "reactstrap";
import "./App.css";

function App() {
  const products = useSelector((state) => state.products.products);
  const isLoading = useSelector((state) => state.products.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  console.log(products);
  console.log(isLoading);

  const pro = [];
  for (let product in products) pro.push(<h1>{products[product].name}</h1>);

  return (
    <div className="App-container">
      <div className="App-products">
        {isLoading ? (
          <div className="App-spinner" data-test="spinnerComponent">
            <Spinner color="primary" />
          </div>
        ) : (
          pro
        )}
      </div>
    </div>
  );
}

export default App;
