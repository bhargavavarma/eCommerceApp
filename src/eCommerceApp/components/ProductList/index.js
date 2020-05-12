import React, { Component } from 'react'
import { observer } from "mobx-react"
import NoDataView from "../../../components/common/NoDataView"
import Product from '../Product/index'

import {
  DisplayProducts,
  DisplayProductsList
} from './styledComponent'

@observer
class ProductList extends Component {

  render() {
    const {
      totalNoOfProductsDisplayed,
      sortedProduct} = this.props.store
    return ( 
      <DisplayProductsList>
        {totalNoOfProductsDisplayed !== 0 ?
        <DisplayProducts data-testid='display-each-product'>
          {sortedProduct.map((EachProduct)=>
            <Product key={EachProduct.productId} eachProduct={EachProduct}/>
        )}
        </DisplayProducts> : <NoDataView />}  
      </DisplayProductsList>
    );
  }
}
 
export default ProductList;