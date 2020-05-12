import React, { Component } from 'react'
import { observer } from "mobx-react"
import { action } from "mobx"
import { IoMdSearch } from 'react-icons/io';
import {
  HeaderPart,
  TotalCount,
  Sort,
  Select,
  SearchBox,
  SearchProduct
}  from './styledComponent'

@observer
class Header extends Component {
  
  @action.bound
  handleChange(event) {
    this.props.onselectedChange(event.target.value)
  }

  @action.bound
  getSearchProduct(event) {
    this.props.store.getSearchProduct(event.target.value)
  }
  
  render() {
    const {store} = this.props
    return ( 
      <HeaderPart data-testid='header-render'>
        <TotalCount data-testid='total-products'>{store.totalNoOfProductsDisplayed} product(s) found.</TotalCount>
        <SearchBox data-testid='searched-products'>
          <IoMdSearch size={24}/>
          <SearchProduct type='text'
            onChange={this.getSearchProduct}
            placeholder='Search for a product...'/>
        </SearchBox>
        <Sort data-testid='sorted-products'>
          <label data-testid='sort-price-by-text'>Sort price by: </label>
          <Select defaultValue='Select' onChange={this.handleChange}>
            <option value="DESCENDING">Highest to lowest</option>
            <option value="ASCENDING">Lowest to highest</option>
          </Select>
        </Sort>
      </HeaderPart>
    );
  }
}
 
export default Header;