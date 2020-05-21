import CollapseExpandComponent from "../../HOCs/withToggle";
import React from 'react';

const ViewCollapseExpand = ({toggleStatus, onToggle, list}) =>(

  <div>
    <p>CollapseExpand</p>
    <button onClick={onToggle}>
      {toggleStatus ? 'Expand' : 'Collapse'}
    </button>
    {toggleStatus ? 
    <div>
      { list.map(eachItem => (
      <p key={eachItem.id}>{eachItem.name}</p>
      ))
      }
    </div> : ''}
  </div>
)
 
export default CollapseExpandComponent(ViewCollapseExpand);