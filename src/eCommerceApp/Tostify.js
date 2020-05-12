import React, { Component } from 'react';
import { BsCheckCircle } from 'react-icons/bs';

class Tostify extends Component {
  state = {  }
  render() { 
    return ( 
      <div style={{display:'flex',justifyContent:'center'}}>
        <BsCheckCircle style={{ color: 'green' }}/>
        <span style={{fontSize:'16px',marginLeft:'5px'}}>Product added to cart!</span>
      </div>
     );
  }
}
 
export default Tostify;