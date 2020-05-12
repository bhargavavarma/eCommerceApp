import React from 'react';
import {render} from '@testing-library/react';
import jsonProducts from '../../fixtures/getProductsResponse.json'
import ProductsPage from ".";
import { API_SUCCESS } from "@ib/api-constants";
import store from '../../stores'
import { Provider } from "mobx-react";

describe('Product Page test cases',() => {
  it('should check sign-out button text',() => {
    const productStore = { 
      getProductListAPIStatus : API_SUCCESS,
      getProductListAPIError : null,
      sortedProduct : jsonProducts
    }
    
    const { getByTestId,getByText } = render(
      <Provider {...store}>
        <ProductsPage productStore={productStore} />
      </Provider>
    )

    const displayProducts = getByTestId('sign-out-button')
    getByText(/Sign out/i)
  });

  it('should check product page render',() => {
    const productStore = { 
      getProductListAPIStatus : API_SUCCESS,
      getProductListAPIError : null,
      sortedProduct : jsonProducts
    }
    
    const { getByTestId } = render(
      <Provider {...store}>
        <ProductsPage productStore={productStore} />
      </Provider>
    )
    const displayProducts = getByTestId('product-page-render')
    expect(displayProducts).toBeInTheDocument()
  });
})