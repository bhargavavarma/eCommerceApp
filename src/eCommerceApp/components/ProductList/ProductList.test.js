import React from 'react';
import {render} from '@testing-library/react';

import jsonProducts from '../../fixtures/getProductsResponse.json';
import ProductList from '.';

describe('Product list test cases',() => {
  it('should render 0 product component',() => {
    const store = {
      totalNoOfProductsDisplayed : 1,
      sortedProduct : []
    }
    const { getByTestId } = render(<ProductList store={store}/>)
    const displayProducts = getByTestId('display-each-product')
    expect(displayProducts.children.length).toBe(0)
  })

  it('should render 1 product component',() => {
    const product = [{
      "availableSizes":["S","XS"],
      "currencyFormat":"₹",
      "id":12,
      "installmentscount":9,
      "isFreeShipping":true,
      "price":845.24,
      "title":"Cat Tee Black T-Shirt",
      "imageURL":"https://react-shopping-cart-67954.firebaseapp.com/static/media/12064273040195392_1.2995d79a.jpg"
    }]
    const store = {
      totalNoOfProductsDisplayed : 1,
      sortedProduct : product
    }
    const { getByTestId } = render(<ProductList store={store}/>)
    const displayProducts = getByTestId('display-each-product')
    expect(displayProducts.children.length).toBe(1)
  })

  it('should render 16 product component',() => {
    const store = {
      totalNoOfProductsDisplayed : 1,
      sortedProduct : jsonProducts
    }
    const { getByTestId } = render(<ProductList store={store}/>)
    const displayProducts = getByTestId('display-each-product')
    expect(displayProducts.children.length).toBe(16)
  });

  it('should render noDataView product component',() => {
    const store = {
      totalNoOfProductsDisplayed : 0,
      sortedProduct : []
    }
    const { getByTestId } = render(<ProductList store={store}/>)
    const displayProducts = getByTestId('display-noDataView')
    expect(displayProducts).toBeInTheDocument()
  })
})