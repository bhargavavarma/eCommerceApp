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
      <HeaderPart>
        <TotalCount>{store.totalNoOfProductsDisplayed} product(s) found.</TotalCount>
        <SearchBox>
          <IoMdSearch size={24}/>
          <SearchProduct type='text'
            onChange={this.getSearchProduct}
            placeholder='Search for a product...'/>
        </SearchBox>
        <Sort>
          <label>Sort price by: </label>
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