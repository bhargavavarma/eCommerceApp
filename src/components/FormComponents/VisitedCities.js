import React from 'react';
import { CheckboxWithLabel } from './Checkbox';
import NavBar from './Nav.js';
class VisitedCities extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            submitted: false,
            visitedCities: [],
            selectedCities: [],
            cityOptions: this.props.cityList
        };
    }

    handleCheckboxClick = (event) => {
        let cities = this.state.selectedCities.slice(0);
        if (event.target.checked) {
            cities.push(event.target.value);
        }
        else {
            cities = this.state.selectedCities.filter(item => {
                return item !== event.target.value;
            });
        }
        this.setState({ selectedCities: cities });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            visitedCities: this.state.selectedCities,
            submitted: true
        });
    }


    displayVisitedCitiesMessage = () => {
        return `I have visited ${this.state.visitedCities}`;
    }

    renderCityOptions = () => {
        let list = this.state.cityOptions.map((eachCity, index) => {
            return (
                <CheckboxWithLabel value={eachCity} key={index} id={index} 
                    handleCheckboxClick={this.handleCheckboxClick}/>
            );
        });
        return list;
    }

    render() {
        return (
            <div>
                <NavBar title="Visited Cities"/>
                <p>What is your favorite dessert?</p>
                <form onSubmit = { this.handleSubmit }>
                    {this.renderCityOptions()}
                    <button  value = 'Submit'>Make Your Choice</button>
                    <p> {this.state.submitted ? this.displayVisitedCitiesMessage() : ''} </p>
                </form>
            </div>
        );
    }
}

export { VisitedCities };
