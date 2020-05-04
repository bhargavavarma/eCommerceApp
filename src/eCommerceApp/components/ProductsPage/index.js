import React from 'react';
import {withRouter} from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import { action } from "mobx";
import CookieConsent from "react-cookie-consent";

import AuthStore from '../../../authentication/stores/AuthStore/AuthStore';
import LoadingWrapperWithFailure from "../../../common/LoadingWrapperWithFailure";
import store from '../../stores/index';
import Header from '../Header/index';
import ProductList from '../ProductList/index';
import SizeFilter from '../SizeFilter/index';
import ProductCart from "../ProductCart";

import {
  Wrapper,
  SignOutButton,
  DislayProducts,
  RenderProductList,
} from './styledComponent';

const productStore = store.productStore

@inject('productStore')
@observer
class ProductsPage extends React.Component {

  componentDidMount() {
    this.doNetworkCalls()
  }

  componentWillUnmount() {
    productStore.clearStore()
  }
  
  doNetworkCalls = () => {
    productStore.getProductAPI()
  }

  renderProductList = observer(() => {
    return(
      <ProductList store={productStore}
      sortBy={productStore.sortBy}/>
    )
  })

  @action.bound
  renderSizeFilter() {
    return (
      <SizeFilter store={productStore}
      selectedSize={productStore.onSelectSize} />
    )
  }

  renderHeader = () => {
    return(
      <Header store={productStore}
      onselectedChange={productStore.onselectedChange}/>
    )
  }

  cartClicked = () => {
    this.isClicked = !this.isClicked
  }

  handleSignout = () => {
    AuthStore.clearUserSession
    const {history} = this.props
    history.replace({pathname:'/ecommerce-store/sign-in'})
  }

  render() {
    const { getProductListAPIStatus,
      getProductListAPIError } = productStore
    return ( 
      <Wrapper>
        <SignOutButton data-testid='sign-out-button' onClick={this.handleSignout}>
          Sign out
        </SignOutButton>
        <ProductCart />
        <DislayProducts>
          {this.renderSizeFilter()}
          <RenderProductList>
            {this.renderHeader()}
            <LoadingWrapperWithFailure 
              apiStatus = {getProductListAPIStatus}
              apiError = {getProductListAPIError}
              onRetryClick = {this.doNetworkCalls} 
              renderSuccessUI = {this.renderProductList} />
          </RenderProductList>
        </DislayProducts>
        <CookieConsent location="bottom" buttonText="Got it"
          cookieName="myAwesomeCookieName2"
          style={{ background: "#2B373B" }}  
          buttonStyle={{ color: "#4e503b", fontSize: "12px" }}
          expires={150}>
          By using our site, you acknowledge that you have read and 
          understand our <u>Cookie Policy</u>, <u>Privacy Policy</u>, 
          and our <u>Terms of Service</u>.
        </CookieConsent>
      </Wrapper>
    );
  }
}

export default withRouter(ProductsPage);
