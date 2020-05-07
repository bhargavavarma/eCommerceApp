import React from 'react';
import { observer } from 'mobx-react';
import { action } from "mobx";
import CookieConsent from "react-cookie-consent";
import LoadingWrapperWithFailure from "../../../common/LoadingWrapperWithFailure";
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

@observer
class ProductsPage extends React.Component {

  renderProductList = observer(() => {
    return(
      <ProductList key={Math.random()} store={this.props.productStore}
      sortBy={this.props.productStore.sortBy}/>
    )
  })

  @action.bound
  renderSizeFilter() {
    return (
      <SizeFilter store={this.props.productStore}
      selectedSize={this.props.productStore.onSelectSize} />
    )
  }

  renderHeader = () => {
    return(
      <Header store={this.props.productStore}
      onselectedChange={this.props.productStore.onselectedChange}/>
    )
  }

  render() {
    const { getProductListAPIStatus,
      getProductListAPIError,
       } = this.props.productStore
    return ( 
      <Wrapper data-testid='product-page-render'>
        <SignOutButton data-testid='sign-out-button' onClick={this.props.handleSignout}>
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

export default ProductsPage;