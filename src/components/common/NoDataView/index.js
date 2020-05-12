import React from "react";

import { NoDataViewContainer, NoDataViewText } from "./styledComponents";

class NoDataView extends React.Component {
  render() {
    return (
      <NoDataViewContainer data-testid='display-noDataView'>
        <NoDataViewText>No data found!</NoDataViewText>
      </NoDataViewContainer>
    );
  }
}

export default NoDataView;
