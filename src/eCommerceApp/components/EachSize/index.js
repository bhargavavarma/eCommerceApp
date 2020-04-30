import React, { Component } from 'react';
import { observer } from "mobx-react";
import { action, observable } from "mobx";

import {Button} from './StyledComponents'

@observer
class EachSize extends Component {
  
  @observable isClicked = false

  @action.bound
  onSelectSize(event) {
    this.props.store(event.target.value)
    this.isClicked = !this.isClicked
  }

  render() { 
    return ( 
      <Button isClicked={this.isClicked} value={this.props.size}
        onClick={this.onSelectSize}>{this.props.size}
      </Button>
     );
  }
}
 
export default EachSize;