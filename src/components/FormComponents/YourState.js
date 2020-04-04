import React from 'react';
import NavBar from './Nav.js';
class YourState extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            submitted: false,
            selectedState: '',
            submittedState: ''
        };
    }

    handleChangeState = (event) => {
        this.setState({ selectedState: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ submittedState: this.state.selectedState, submitted: true });
    }

    displayMessage = () => {
        return `I am from ${this.state.submittedState} state`;
    }

    render() {
        return (
            <div>
                <NavBar title="Your State"/>
                <p>What is your favorite dessert?</p>
                <form onSubmit = { this.handleSubmit }>
                    <select onChange={this.handleChangeState}>
                        {this.props.states.map((item, index) => {
                            return (
                                <option key={index} value={item}>{item}</option>
                            );
                        })}
                    </select>      
                    <button  value = 'Submit'>Make Your Choice</button>
                </form>
                <p> {this.state.submitted ? this.displayMessage() : ''} </p>
            </div>
        );
    }
}

export { YourState };
