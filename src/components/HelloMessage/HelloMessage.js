import React from 'react'; 

class HelloMessage extends Component {
  
  render() { 
    return ( 
      <div>
        <span>`Hello ${this.props.message}`</span>
      </div>
     );
  }
}
 
export default HelloMessage;