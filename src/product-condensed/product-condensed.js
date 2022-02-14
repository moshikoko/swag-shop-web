import Raect, { Component } from 'react';
import "./product-condensed.css";

class ProductCondensed extends Component {
  render() {
    return (
      <li className="list-group-item">
        <div className="row">
        <a className="btn btn-outline-danger col-sm-1"> X </a>
        <p className="col-sm-11 card-text" >{this.props.product.title} | <b>${this.props.product.price}</b></p>
        </div>
      </li>
    );
  }
}

export default ProductCondensed;