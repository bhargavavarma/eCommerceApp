import React from 'react';

const FetchingDataComponent = (CountryDashBoardComponent) => {
  return (class NewComponent extends React.Component {

  state = {
    countries: []
  }

  async componentDidMount() {
    const response = 
      await fetch('https://restcountries.eu/rest/v2/all');
    const json = await response.json();
    this.setState({ countries: json });
  }

  render() {
    if(this.state.countries.length !==0) {
      return <CountryDashBoardComponent countries={this.state.countries} {...this.props}/>
    } else {
      return null;
    }}
  })
}

export default FetchingDataComponent;