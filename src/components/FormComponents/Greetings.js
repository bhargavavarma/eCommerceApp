import React from 'react';
import NavBar from './Nav.js';
class Greetings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            submitted: false,
            UserInputText: '',
            displayText: ''
        };
    }

    handleUserInput = (event) => {
        this.setState({
            UserInputText: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            submitted: true,
            displayText: this.state.UserInputText,
            UserInputText: '',
        });
    }

    displayMessage = () => {
        return `Hello ${this.state.displayText}, have a nice day!`;
    }

    render() {
        return (
            <div>
            <NavBar title="Greetings"/>
            <form  onSubmit = {this.handleSubmit}>
                <input type = 'text' name = 'inputText' value = {this.state.UserInputText}
                    onChange = {this.handleUserInput} placeholder = 'Enter the name' />
            </form>
            <button value = 'Submit'>Greet</button>
            <p> { this.state.submitted ? this.displayMessage() : '' } </p>
        </div>
        );
    }
}

export { Greetings };
