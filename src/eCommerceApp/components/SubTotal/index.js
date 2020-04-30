import React, { Component } from 'react';
import {Total,Text, Amount} from './styledComponent'
class SubTotal extends Component {
  
  render() { 
    return (
      <Total>
        <Text>SUBTOTAL</Text>
        <Amount>₹{this.props.totalCartAmount}</Amount>
      </Total>
     );
  }
}
 
export default SubTotal;