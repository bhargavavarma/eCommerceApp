import React from 'react';
import NavBar from './Nav.js'
class FavouriteDessert extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            submitted: false,
            selectedDessert: '',
            favoriteDessert: ''
        };
    }

    favouriteDessert = ["Vanilla", "Butterscotch", "Gulab Jamum",
        "Yoghurt Pots", "Baked Banana", "Chocolate"
    ];

    handleUserInput = (event) => {
        this.setState({
            selectedDessert: event.target.value,
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            favoriteDessert: this.state.selectedDessert,
            submitted: true
        });
    }

    displayMessage = () => {
        return `My favorite dessert is ${this.state.favoriteDessert.toUpperCase()}`;
    }

    renderDessertOptions = () => {
        let list = this.favouriteDessert.map((item, i) => {
            return (
                <div key={i}>
                    <input type="radio" value={item} name='input' onChange={this.handleUserInput}/>
                    <label>{item}</label>
                </div>
            );
        });
        return list;
    }

    render() {
        return (
            <div>
                <NavBar title="Favourite Dessert"/>
                <p>What is your favorite dessert?</p>
                <form onSubmit = { this.handleSubmit }>
                    {this.renderDessertOptions()}
                    <button  value = 'Submit'>Make Your Choice</button>
                </form> 
                <p> { this.state.submitted ? this.displayMessage() : '' } </p>
            </div>
        );
    }
}

export { FavouriteDessert };
