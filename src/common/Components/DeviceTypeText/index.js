import React from 'react';
import { observer } from "mobx-react";
import WithScreenSizeDetectors from "../../HOCs/withScreenSizeDetectors";

const ViewDeviceTypeText = observer(({displayText}) => (

  <div> 
    <p>Device Type:</p>
    {displayText}
  </div>
))

export default WithScreenSizeDetectors(ViewDeviceTypeText);