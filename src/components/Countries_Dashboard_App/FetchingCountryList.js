import React from 'react';

const UpdatedComponent = (OriginalComponent) => {
  class NewComponent extends React.Component {

    state = {
      countries: [],
      searchText: '',
      selectedRegion: 'All',
      displayText: 'loading...',
      displayContent: true
  }

    async componentDidMount() {
      const response = await fetch('https://restcountries.eu/rest/v2/all')
      const json = await response.json();
      console.log('data',json)
      this.setState({ countries: json, displayText: 'No Data to show...' });
    }

    render() {
      console.log('render',this.state.countries)
      return <OriginalComponent countries={this.state.countries} {...this.props}/>
    }
  }
  return NewComponent
}

export default UpdatedComponent;