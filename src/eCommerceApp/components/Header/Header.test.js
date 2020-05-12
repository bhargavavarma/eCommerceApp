import React from 'react';
import {render} from '@testing-library/react';
import { Provider } from "mobx-react";

import Header from '.';
import store from '../../stores';
import jsonProducts from '../../fixtures/getProductsResponse.json'

describe('should check header test cases',() => {
  it('should check length of products displayed in Header',() => {
    const {productStore} = store
    productStore.sizeFilter = ['M']
    productStore.searchedProduct = ''
    productStore.productList = jsonProducts
    expect(productStore.sortedAndFilteredProducts.length).toBe(5)
  });

  it('should render header',() => {
    const {productStore} = store
    const { getByTestId,getByText } = render(
      <Provider {...productStore}>
        <Header store={store} />
      </Provider>
    )

    const displayProducts = getByTestId('header-render')
    expect(displayProducts).toBeInTheDocument()
  });

  it('should check total products text',() => {
    const {productStore} = store
    productStore.productList = jsonProducts
    const { getByTestId } = render(
      <Provider {...productStore}>
        <Header store={store} />
      </Provider>
    )

    const displayProducts = getByTestId('total-products')
    expect(displayProducts).toBeInTheDocument()
  });

  it('should check searched products',() => {
    const {productStore} = store
    productStore.productList = jsonProducts
    const { getByTestId } = render(
      <Provider {...productStore}>
        <Header store={store} />
      </Provider>
    )

    const displayProducts = getByTestId('searched-products')
    expect(displayProducts).toBeInTheDocument()
  });

  it('should check sorted products',() => {
    const {productStore} = store
    productStore.sizeFilter = ['M']
    productStore.productList = jsonProducts
    const { getByTestId, getByText } = render(
      <Provider {...productStore}>
        <Header store={store} />
      </Provider>
    )

    const displayProducts = getByTestId('sorted-products')
    getByText(`product(s) found.`)
  });

  it('should check sort by price text',() => {
    const {productStore} = store
    productStore.productList = jsonProducts
    const { getByTestId, getByText } = render(
      <Provider {...productStore}>
        <Header store={store} />
      </Provider>
    )

    const displayProducts = getByTestId('sort-price-by-text')
    getByText(/Sort price by:/i)
  });
})