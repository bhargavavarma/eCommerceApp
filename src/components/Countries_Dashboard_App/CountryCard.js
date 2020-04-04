import React from 'react';
import { withRouter } from 'react-router-dom';
import { EachCountryCard } from './Css';
import { CardBody } from './Css';
import { CardTitle } from './Css';
import { CardText } from './Css';
import { CountryFlag } from './Css';

class CountryCard extends React.PureComponent {

    navigate = () => {
        const { history } = this.props;
        history.push({
            pathname: `country-dashboard-app/${this.props.countryObjects.alpha3Code}`
        });
    }

    render() {

        return (
            <EachCountryCard onClick={this.navigate}>
                <CountryFlag src={this.props.countryObjects.flag} alt=""></CountryFlag>
                <CardBody>
                    <CardTitle><b>{this.props.countryObjects.name}</b></CardTitle>
                    <CardText><b>Population:</b>{this.props.countryObjects.population} </CardText>
                    <CardText><b>Region:</b>{this.props.countryObjects.region}</CardText>
                    <CardText><b>Capital:</b>{this.props.countryObjects.capital}</CardText>
                </CardBody>
            </EachCountryCard>
        );
    }
}

export default withRouter(CountryCard);
