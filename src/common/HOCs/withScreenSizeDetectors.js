import React from 'react';
import { observer } from "mobx-react";
import { observable } from "mobx";

const ScreenSizeDetectors = (WithScreenSizeDetectors) => {
  @observer 
  class NewComponent extends React.Component {
  
  @observable displayText = '';

  componentDidMount() {
    this.handleChange()
    window.addEventListener('resize',this.handleChange)
  }

  handleChange = () => {
    if(window.innerWidth < 576) {
      this.displayText = 'Mobile'
    } else if(window.innerWidth >= 576 && window.innerWidth < 992) {
      this.displayText = 'Tablet'
    } else {
      this.displayText = 'Desktop'
    }
  }

  render() {
    return(
      <WithScreenSizeDetectors 
        displayText={this.displayText}/>
    );
  }}
  return NewComponent;
}

export default ScreenSizeDetectors;