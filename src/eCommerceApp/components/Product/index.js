import React, { Component } from 'react'
import { observer, inject } from "mobx-react"
import { action } from "mobx"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import store from '../../stores/index'
import Tostify from '../../Tostify'
import {
  EachProductToDisplay,
  FreeShipping,
  Image,
  Title,
  Currency,
  CurrencyFormat,
  CurrencyPrice,
  Installments,
  Button,
  IntegerSpan,
  DecimalSpan
} from './styledComponent'

const cartStore = store.cartStore
@inject('cartStore')
@observer
class Product extends Component {

  @action.bound
  onClickAddToCart() {
    cartStore.onClickAddToCart(this.props.eachProduct)
    toast.warn(<Tostify />);
  }

  render() {
    const { eachProduct } = this.props
    const {
      price,
      installmentsCount,
      imageURL,
      title,
      isFreeShipping,
      currencyFormat
    } = eachProduct
    const count = (price/installmentsCount).toFixed(2)
    const displayPrice = `${price}`.split('.')
    return ( 
      <EachProductToDisplay>
        <Image src={imageURL} alt={title}/>
        <FreeShipping isFreeShipping={isFreeShipping}>
          {isFreeShipping ? 'Free shipping' : ''}
        </FreeShipping>
        <Title>{title}</Title>
        <Currency>
          <CurrencyFormat>
            {currencyFormat}
          </CurrencyFormat>
          <CurrencyPrice>
            <IntegerSpan>{displayPrice[0]}</IntegerSpan>
            {displayPrice.length>1?<DecimalSpan>.{displayPrice[1]}</DecimalSpan>:''}
          </CurrencyPrice>
        </Currency>
        {installmentsCount>0 ? <Installments>or {installmentsCount} x
          <CurrencyFormat>
            {currencyFormat}
          </CurrencyFormat>{count}
        </Installments>: <Installments></Installments> }
      <Button onClick={this.onClickAddToCart}>Add to cart</Button>
      <ToastContainer position={toast.POSITION.BOTTOM_CENTER} autoClose={5000} closeButton={false} />
      </EachProductToDisplay>
    );
  }
}
 
export default Product;