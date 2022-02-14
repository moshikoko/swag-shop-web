import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import HttpService from "../services/http-service";
import Product from "../product/product.js";
import WishList from "../wishlist/wishlist";

const http = new HttpService();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [] };
    http.getProducts();
    
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
        <Product
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
          <div className="container-fluid App-main">
            <div className="row">
              <div className="col-sm-8" >
                <div className="row">
                  {this.productList()}
                  </div>
                </div>
            
            <div className="col-sm-4">
              <WishList/> 
            </div>
            </div>

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
