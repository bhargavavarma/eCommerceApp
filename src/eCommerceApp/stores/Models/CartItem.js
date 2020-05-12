import { action, observable } from "mobx"

class CartItem {
  cartItemId
  productId
  printStyle
  title
  price
  currencyFormat
  imageURL
  @observable quantity

  constructor(cartItemObject) {
    this.cartItemId = cartItemObject.productId
    this.productId = cartItemObject.productId
    this.quantity = 1
    this.printStyle = cartItemObject.printStyle
    this.title = cartItemObject.title
    this.price = cartItemObject.price
    this.currencyFormat = cartItemObject.currencyFormat
    this.imageURL = cartItemObject.imageURL
  }

  @action.bound
  incrementQuantity() {
    this.quantity = this.quantity + 1
  }
}

export default CartItem;