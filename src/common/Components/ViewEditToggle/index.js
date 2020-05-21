import ChangingToggleComponent from "../../HOCs/withToggle";
import React from 'react';
const ViewEditToggle = ({toggleStatus, onToggle, value, onEditText}) =>(

  <div>
    <p>ViewEditToggle</p>
    {toggleStatus ? 
      <input type='text' value={value} onChange={onEditText}/> :
    value}
    <button onClick={onToggle}>
      {toggleStatus ? 'Cancel' : 'Edit'}
    </button>
  </div>
)
 
export default ChangingToggleComponent(ViewEditToggle);