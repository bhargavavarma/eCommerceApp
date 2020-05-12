import { observable, action, computed } from 'mobx'
import CartItem from '../Models/CartItem'

class CartStore {
  
  @observable cartProductList

  constructor() {
    this.cartProductList = []
  }

  @action.bound
  onClickAddToCart(product) {
    let brand = this.cartProductList.find(item => product.productId === item.productId )
    if(brand) {
      brand.incrementQuantity()
    }
    else {
      const cartObject=new CartItem(product)
      this.cartProductList.push(cartObject)
    }
  }

  @action.bound
  onRemoveCartItem(id) {
    this.cartProductList = this.cartProductList.filter(item => item.cartItemId !== Number(id))
  }

  @action.bound
  clearCart() {
    this.cartProductList = []
    alert(`Thankyou for shopping with us😃.
Your products will be delivered in 3 days to
the address mentioned in your profile.`)
  }
  
  @computed get totalCartAmount() {
    let amount = 0
    this.cartProductList.forEach(item => 
      amount += item.quantity*item.price
    )
    return amount.toFixed(2)
  }

  @computed get noOfProductsInCart() {
    let totalLength = 0
    this.cartProductList.forEach(item => totalLength += item.quantity)
    return totalLength
  }
}

export default CartStore;