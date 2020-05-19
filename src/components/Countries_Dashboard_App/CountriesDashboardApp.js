import React from 'react';
import './index.css';

import { Header } from './Header.js';
import CountryCard from './CountryCard.js';
import { GetRegionOptions } from './getRegionOptions.js';
import { IoMdSearch } from 'react-icons/io';
import { TiArrowSync } from 'react-icons/ti';
import UpdatedComponent from './FetchingCountryList';

import {
  Wrapper,
  SearchCountrySelectRegion,
  SelectRegion,
  CountryBody,
  SearchBox,
  TextMessage
}
from './Css';

class CountriesDashboardApp extends React.Component {

  id = 0;

  state = {
    countries: [],
    searchText: '',
    selectedRegion: 'All',
    displayText: 'loading...',
    displayContent: true
  }

  filterCountriesBySelectedRegion = (event) => {
    if (event.target.value === "All") {
      this.setState({ 
        selectedRegion: 'All' 
      });
    } else {
      this.setState({ 
        selectedRegion: event.target.value 
      });
    }
  }

  onChangeSearchText = (event) => {
    let searchInputPattern = /^[a-zA-Z]*[^#$%^&*!@/\\]$/;
    let userInput = event.target.value;
    if (searchInputPattern.test(userInput)) {
      this.setState({
        searchText: userInput, 
        displayContent: true 
      });
    }
    else if (userInput === "") {
      this.setState({ 
        searchText: '', 
        displayContent: true 
      });
    }
  }

  render() {
    const {countries} = this.props
    let selectedRegion = this.state.selectedRegion;
    let searchText = this.state.searchText;
    let countryObjects = 
      countries.filter(function(filterCountry) {
        return filterCountry.name.toLowerCase().search(searchText.toLowerCase()) !== -1 &&
          (filterCountry.region === selectedRegion || 
            selectedRegion === 'All');
    });

    return (
      <Wrapper theme = { this.props.selectedTheme }>
        <Header onChangeTheme = { this.props.onChangeTheme }
          selectedTheme = { this.props.selectedTheme }/>
        <SearchCountrySelectRegion>
          <SearchBox>
            <IoMdSearch size={32}/>
            <input type = 'text58' className = 'input' 
              onChange = {this.onChangeSearchText} 
              placeholder = 'Search for a country...'/>
          </SearchBox>
          <SelectRegion>
            <GetRegionOptions countries = {this.props.countries}
              filterCountriesBySelectedRegion =
                {this.filterCountriesBySelectedRegion}/>
          </SelectRegion>
        </SearchCountrySelectRegion>
        <CountryBody>
          {countryObjects.length>0 && 
            this.state.displayContent ? 
            countryObjects.map(eachCountry => {
              this.id += 1;
              return <CountryCard 
                countryObjects={eachCountry} 
                key={this.id}/>;
            }):
            <TextMessage>
              <TiArrowSync />
              {this.state.displayText}
            </TextMessage>
          }
        </CountryBody>
      </Wrapper>
    );
  }
}

export default UpdatedComponent(CountriesDashboardApp);


// length>0
// searchbar spaces - mundu spaces trim cheyali

// empty ayite alert pettali - please give valid text
// sticky header
// Data updations - notifications
// loading time lo searchbar disbled ga undali
// animation effects while loading
// after going back previous things should be there
// auto suggestions
// cross mark for searchbar
// history of search as dropdown
// search ki onchange pettu
// lazyloading technique
// countrysearch batti region selectchei automatic ga


// object destructuring
