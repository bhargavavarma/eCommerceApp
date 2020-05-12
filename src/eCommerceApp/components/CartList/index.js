import React, { Component } from 'react';
import { observer } from "mobx-react";
import CartItem from "../CartItem/index";
import {NoProducts} from './styledComponent'
@observer
class CartList extends Component {
  
  renderlist = (cartProductList) => {
    return this.props.cartProductList.length !==0 ? 
      cartProductList.map(item => <CartItem key={item.productId} item={item}/>)
      :<NoProducts>Add some products in the cart</NoProducts>
  }

  render() {
    const {cartProductList} = this.props
    return ( 
      this.renderlist(cartProductList)
    );
  }
}
 
export default CartList;