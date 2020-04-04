import React from 'react';
import NavBar from './Nav.js';
class DisableButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDisableButtonChecked: false,
            showMessage: ''
        };
    }

    handleChange = () => {
        this.setState({
            isDisableButtonChecked: !this.state.isDisableButtonChecked,
            showMessage: !this.state.isDisableButtonChecked ? 'I am disabled' : ''
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            showMessage: 'Hi, I am enabled!'
        });
    }

    displayMessage = () => {
        return this.state.showMessage;
    }

    render() {
        return (
            <div>
                <NavBar title="Disable Button"/>
                <form onSubmit = {this.handleSubmit} >
                <input type="checkbox" onChange={this.handleChange}/>
                <label>Disabled</label>
                <button disabled={this.state.isDisableButtonChecked}>
                        Click me</button>
                <p> {this.displayMessage()} </p>
                </form>
            </div>
        );
    }
}

export { DisableButton };
