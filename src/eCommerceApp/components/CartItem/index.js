import React, { Component } from 'react';
import { action } from "mobx";
import stores from '../../stores'
import {
  EachProduct,
  Image,
  Text,
  Title,
  PrintStyle,
  Quantity,
  Remove,
  RemoveProduct,
  Price,
  PriceFormat,
  Amount
} from './styledComponent'
import { observer, inject } from "mobx-react";

const cartStore = stores.cartStore
@inject('cartStore')
@observer
class CartItem extends Component {
  
  @action.bound
  onRemoveCartItem(event) {
    cartStore.onRemoveCartItem(event.target.value)
  }
  
  render() { 
    const { item } = this.props
    const {
      imageURL,
      title,
      printStyle,
      quantity,
      currencyFormat,
      price,
      cartItemId
    } = item
    return ( 
    <EachProduct>
      <Image src={imageURL}/>
      <Text>
        <Title>{title}</Title>
        <PrintStyle>{printStyle}</PrintStyle>
    <Quantity>Quantity: {quantity}</Quantity>
      </Text>
      <Remove>
        <RemoveProduct onClick={this.onRemoveCartItem} data-testid='remove-cart-item' value={cartItemId}>x</RemoveProduct>
        <Price>
          <PriceFormat>{currencyFormat}</PriceFormat>
          <Amount>{price}</Amount>
        </Price>
      </Remove>
    </EachProduct>
     );
  }
}
 
export default CartItem;