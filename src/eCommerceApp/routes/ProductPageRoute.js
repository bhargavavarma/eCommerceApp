import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { observer, inject } from 'mobx-react';
import ProductsPage from "../components/ProductsPage";
import AuthStore from '../../authentication/stores/AuthStore/AuthStore';
@inject('productStore')
@observer
class ProductPageRoute extends Component {
  
  componentDidMount() {
    this.doNetworkCalls()
  }

  componentWillUnmount() {
    this.props.productStore.clearStore()
  }
  
  doNetworkCalls = () => {
    this.props.productStore.getProductAPI()
  }

  handleSignout = () => {
    AuthStore.clearUserSession
    const {history} = this.props
    history.replace({pathname:'/ecommerce-store/sign-in'})
  }

  render() {
    const {productStore} = this.props
    return (
      <ProductsPage productStore={productStore}
      getProductListAPIError={productStore.getProductListAPIError}
      getProductListAPIStatus={productStore.getProductListAPIStatus}
      handleSignout={this.handleSignout}/>  
    )
  }
}
 
export default withRouter(ProductPageRoute);