import React, { Component } from 'react'
import { observable, action } from "mobx"
import { observer, inject } from "mobx-react"
import { FiShoppingCart } from 'react-icons/fi'
import store from '../../stores/index'
import CartList from "../CartList"
import SubTotal from "../SubTotal"
import CheckoutButton from '../CheckoutButton'
import {
  Wrapper,
  CartHeader,
  CartText,
  CloseCart,
  MyCart,
  Cart,
  CartContainer,
  List,
  Footer,
  TotalItems,
  TotalItemsInCart
} from './styledComponent'
const cartStore = store.cartStore
@inject('cartStore')
@observer
class ProductCart extends Component {
  
  @observable shouldDisplayCart

  constructor() {
    super()
    this.shouldDisplayCart = false
  }

  @action.bound
  showCart() {
    this.shouldDisplayCart = true
  }

  @action.bound
  hideCart() {
    this.shouldDisplayCart = false
  }

  render() { 
    return (
      <Wrapper>
        <TotalItems shouldDisplayCart={this.shouldDisplayCart}>
          {cartStore.noOfProductsInCart}
        </TotalItems>
        <MyCart shouldDisplayCart={this.shouldDisplayCart}>
          {this.shouldDisplayCart ?
          <CartContainer>
            <CartHeader>
              <CloseCart onClick={this.hideCart} data-testid='cart-close-button'>X</CloseCart>
              <TotalItemsInCart shouldDisplayCart={this.shouldDisplayCart}>
                {cartStore.noOfProductsInCart}
              </TotalItemsInCart>
              <FiShoppingCart size={40}/>
              <CartText>Cart</CartText>
            </CartHeader>
            <List>
              <CartList cartProductList={cartStore.cartProductList} />
            </List>
            <Footer>
              <SubTotal totalCartAmount={cartStore.totalCartAmount}/>
              <CheckoutButton noOfProductsInCart={cartStore.noOfProductsInCart} clearCart={cartStore.clearCart}/>
            </Footer>
          </CartContainer>: 
            <Cart onClick={this.showCart} data-testid='cart-open-button'>
              <FiShoppingCart size={48}/>
            </Cart>
          }
        </MyCart>
      </Wrapper>
     );
  }
}
 
export default ProductCart;