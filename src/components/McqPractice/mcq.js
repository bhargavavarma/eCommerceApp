import React from "react";
import ViewEditToggle from "../../common/Components/ViewEditToggle";
import ViewCollapseExpand from "../../common/Components/CollapseExpand";
import ViewDeviceTypeText from "../../common/Components/DeviceTypeText";
import MouseTracker from "../../common/Components/MouseCoordinates";

class AdvancedConcepts extends React.Component {

  render() {
    return (
      <div>
        <ViewEditToggle />
        <ViewCollapseExpand />
        <ViewDeviceTypeText />
        <MouseTracker />
      </div>
    );
  }
}
export default AdvancedConcepts;
