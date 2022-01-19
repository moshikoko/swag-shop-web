import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import HttpService from "../services/http-service";
import Product from "../product/product.js";

const http = new HttpService();

class App extends Component {
  constructor(props) {
    super(props);
    http.getProducts();

    this.state = { products: [] };

    this.loadData = this.loadData.bind(this);
    this.productList = this.productList.bind(this);
    this.loadData();
  }

  loadData = () => {
  var self = this;
  http.getProducts().then(data => {
  self.setState({ products: data });
       },
       (err) => {

       });
  }

  productList = () => {
    const list = this.state.products.map((product) => 
      <div className="col-sm-4" key={product._id}>
        <product
          title={product.title}
          price={product.price}
          imgUrl={product.imgUrl}
        />
      </div>
    );
    return list;
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Welcome to react</p>
          <div className="container App-main">
            <div className="row">{this.productList()}</div>
          </div>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
    );
  }
}

export default App;
