import React from 'react';
import { withRouter } from "react-router-dom";

import { Header } from './Header.js';
import { MdArrowBack } from "react-icons/md";
import {
    EachCountryBody,
    EachCountryDetails,
    NavigationButtons,
    SelectedCountryDetails,
    HomeButton,
    BackButton,
    EachCountryFlag,
    CountryFullDetails,
    CountryName,
    CountrySide1Details,
    CountrySide2Details,
    DetailsPart1,
    DetailsPart2,
    Details,
    BorderButtons
}
from './Css';

class CountryDetails extends React.PureComponent {

    state = {
        country: [],
        eachCountry: []
    }

    backButtonObjects = [];

    async componentDidMount() {
        const response = await fetch('https://restcountries.eu/rest/v2/all')
        const json = await response.json();
        let pathname = this.props.location.pathname;
        let eachCountry = json.find(function(eachitem) {
            return `/country-dashboard-app/${eachitem.alpha3Code}` === pathname;
        });
        this.backButtonObjects.push([eachCountry]);
        this.setState({ country: json, eachCountry: eachCountry });
    }


    onCountryBtnClick = (event) => {
        let onBtnClick = this.state.country.filter(function(eachCountry) {
            return eachCountry.alpha3Code === event.target.value;
        });
        this.backButtonObjects.push(onBtnClick);
        console.log(this.backButtonObjects);
        this.setState({ eachCountry: onBtnClick[0] });
    }

    navigateHome = () => {
        const { history } = this.props;
        history.goBack();
    }

    navigateBack = () => {
        if (this.backButtonObjects.length > 1) {
            this.backButtonObjects.pop();
            this.setState({ eachCountry: this.backButtonObjects[this.backButtonObjects.length - 1][0] });
        }
        else {
            this.navigateHome();
        }
    }

    countryLanguages = () => {
        let array = [];
        this.state.eachCountry.languages.forEach(items => {
            array.push(items.name);
        });
        return array.join(',');
    }

    eachCountryBorderName = (border) => {
        let eachBorderName = this.state.country.filter(function(filterCountry) {
            return filterCountry.alpha3Code === border;
        });
        return eachBorderName[0].name;
    }

    getCountryBorderNames = () => {
        let borders = this.state.eachCountry.borders.map((border, index) => {
            return (
                <button className='btn8' key={index} value={border} 
                        onClick={this.onCountryBtnClick}>
                        {this.eachCountryBorderName(border)}
                </button>
            );
        });
        return borders;
    }

    render() {
        if (this.state.country.length === 0)
            return null;
        else
            return (
                <EachCountryBody theme={this.props.selectedTheme}>
                    <Header onChangeTheme = { this.props.onChangeTheme } 
                        selectedTheme = { this.props.selectedTheme }/>
                    <EachCountryDetails>
                        <NavigationButtons>
                            <HomeButton onClick={this.navigateHome}>
                                Home
                            </HomeButton>
                            <BackButton onClick={this.navigateBack}>
                                <MdArrowBack size={25}/>Back
                            </BackButton>
                        </NavigationButtons>
                        <SelectedCountryDetails>
                            <EachCountryFlag src={this.state.eachCountry.flag} alt="">
                            </EachCountryFlag>
                            <CountryFullDetails>
                                <CountryName>
                                    <b>{this.state.eachCountry.name}</b>
                                </CountryName>
                                <CountrySide1Details>
                                    <DetailsPart1>
                                        <Details><b>Native Name:</b>
                                            { this.state.eachCountry.nativeName }
                                        </Details>
                                        <Details><b>Population:</b>
                                            { this.state.eachCountry.population }
                                        </Details>
                                        <Details><b>Region:</b>
                                            { this.state.eachCountry.region }
                                        </Details>
                                        <Details><b>Sub Region:</b>
                                            { this.state.eachCountry.subregion }
                                        </Details>
                                        <Details><b>Capital:</b>
                                            {this.state.eachCountry.capital}
                                        </Details>
                                    </DetailsPart1>
                                    <DetailsPart2>
                                        <Details><b>topleveldomain:</b>
                                            {this.state.eachCountry.topLevelDomain[0]}
                                        </Details>
                                        <Details><b>Currencies:</b>
                                            {this.state.eachCountry.currencies[0].name}
                                        </Details>
                                        <Details><b>Languages:</b>
                                            { this.countryLanguages()}
                                        </Details>
                                    </DetailsPart2>
                                </CountrySide1Details>
                                <CountrySide2Details>
                                    <b>Border Countries:</b>
                                    <BorderButtons>
                                        { this.getCountryBorderNames()}
                                    </BorderButtons>
                                </CountrySide2Details>
                            </CountryFullDetails>
                        </SelectedCountryDetails>
                    </EachCountryDetails>
                </EachCountryBody>
            );
    }
}

export default withRouter(CountryDetails);
