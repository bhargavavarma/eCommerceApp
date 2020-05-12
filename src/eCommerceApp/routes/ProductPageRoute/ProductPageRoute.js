import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { observer, inject } from 'mobx-react';

import ProductsPage from "../../components/ProductsPage";
import { getAccessToken } from "../../../authentication/utils/StorageUtils";
import { SIGN_IN_PATH } from "../../../authentication/constants/RoutePath";

@inject('productStore','authStore')
@observer
class ProductPageRoute extends Component {
  
  componentDidMount() {
    this.doNetworkCalls()
  }

  componentWillUnmount() {
    this.props.productStore.clearStore()
  }
  
  doNetworkCalls = () => {
    let token = getAccessToken();
    this.props.productStore.getProductAPI()
  }

  handleSignout = () => {
    this.props.authStore.userSignOut()
    const {history} = this.props
    history.push(SIGN_IN_PATH)
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