import Navbar from "../src/components/navbar";
import { BrowserRouter, Route } from "react-router-dom";
import home from "../src/components/home";
import cart from "../src/components/cart";
import checkout from "../src/components/checkout";
import allorders from "../src/components/allorders";
import React from 'react';
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Route exact path="/" component={home} />
        <Route exact path="/cart" component={cart} />
        <Route exact path="/checkout" component={checkout} />
        <Route exact path="/allorders" component={allorders} />
      </BrowserRouter>
    </div>
  );
}

export default App;
