import React from 'react';
const list = [
  {id:1,name:"Eggs"},
  {id:2,name:"Bread"}
]

const ChangingToggleComponent = (WithToggleComponent) => 
  class NewComponent extends React.Component {

  state = {
    toggleStatus : false,
    value : 'Click on the edit button to start editing'
  }
  
  onToggle = () => {
    this.setState({
      toggleStatus : !this.state.toggleStatus
    })
  }

  onEditText = (event) => {
    this.setState({
      value : event.target.value
    })
  }
  
  render() {
    return(
      <WithToggleComponent 
      onEditText={this.onEditText}
        onToggle={this.onToggle}
        toggleStatus={this.state.toggleStatus}
        value={this.state.value}
        list={list}/>
    );
  }
}

export default ChangingToggleComponent;