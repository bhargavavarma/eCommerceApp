import React, { Component } from 'react';
import {Button} from './styledComponent'
class CheckoutButton extends Component {
  
  render() { 
    return ( 
      <Button disabled={this.props.noOfProductsInCart === 0 ? true : false}
        onClick={this.props.clearCart}>
        Checkout
      </Button>
     );
  }
}
 
export default CheckoutButton;