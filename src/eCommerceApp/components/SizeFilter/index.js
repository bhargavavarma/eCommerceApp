import React, { Component } from 'react'
import EachSize from '../EachSize/index'
import { observer } from "mobx-react"

import {
  DisplayBrandSize,
  Title,
} from './styledComponent'

@observer
class SizeFilter extends Component {

  brandSizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL']

  render() {
    const {store} = this.props
    return ( 
      <DisplayBrandSize >
        <Title>Sizes:</Title>
        {this.brandSizes.map(size => {
          return (
            <EachSize key={size} size={size} store={store.onSelectSize}/>     
          );
      })}
      </DisplayBrandSize>
    );
  }
}
 
export default SizeFilter;