import Raect, { Component } from 'react';
import "./wishlist.css";
import ProductCondensed from '../product-condensed/product-condensed';
import Product from '../product/product';

class WishList extends Component {

  constructor(props){
    super(props);

    this.state = {wishList:[
      {
        title:"This is title 1",
        price:230.90,
        _id:"1sdasdasdasdasd1"
      },
      {
        title:"This is title 2",
        price:230.90,
        _id:"1sdasdasdasdasd2"
      },
      {
        title:"This is title 3",
        price:230.90,
        _id:"1sdasdasdasdasd3"
      }
    ]}
    this.createWishList = this.createWishList.bind(this);
  }

  createWishList = () => {
    const list = this.state.wishList.map((product) =>  
    <ProductCondensed product={product} key={product._id}/>
    );
    return (list)
  }
  
  render() {
    return (
      <div className="card">
          <div className="card-block">
              <h4 className="card-title wishList-title">Wish List</h4>
              <ul className="list-group">
                {this.createWishList()}
              </ul>
          </div>
      </div>
    );
  }
}

export default WishList;