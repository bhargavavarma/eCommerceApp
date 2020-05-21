import React from 'react';

class Cat extends React.Component {
  render() {
    const mouse = this.props.mouse;
    return (
      <div>
        <p>{mouse.x}</p>
        <p>{mouse.y}</p>
      </div>
    );
  }
}

export default Cat; 