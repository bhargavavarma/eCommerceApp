import React from 'react';
import './CarFleet.css';

class Car extends React.Component {

    constructor(props) {
        super();
        this.state = {
            status: false,
            speed: 0,
            onAccelerateDisable: false,
            onApplyBrakeDisable: false
        };
        this.onStartOrStop = this.onStartOrStop.bind(this);
        this.onAccelerate = this.onAccelerate.bind(this);
        this.onApplyBrake = this.onApplyBrake.bind(this);
    }

    onStartOrStop() {
        this.setState(items => {
            items.status = !items.status;
            return items.status;
        });
    }

    onApplyBrake() {
        this.setState(items => {
            this.state.onAccelerateDisable = false;
            this.state.onApplyBrakeDisable = true;
            items.speed ? items.speed -= 10 : items.speed += 10;
            return items.speed;
        });
    }

    onAccelerate() {
        this.setState(items => {
            this.state.onAccelerateDisable = true;
            this.state.onApplyBrakeDisable = false;
            items.status ? items.speed += 10 : items.speed -= 10;
            return items.speed;
        });
    }

    displayStatusText() {
        let pElement = this.state.status ? this.state.speed > 0 ?
            `Status:Running with ${this.state.speed}Kmph` :
            'Status:Running' : 'Status:Stopped';
        return pElement;
    }

    render() {
        return <div className="display-speed-app">
                <div className="car-name">
                    <p className="car-id">Car:{this.props.number}</p>
                    <button className="delete-car" value={this.props.number}
                    onClick={this.props.removeCar}>&#x2717;</button>
                </div>
                <div className="car-body">
                    <div className="start-stop-button">
                        <button className={this.state.status? "stop-mode":"start-mode"}
                        onClick={this.onStartOrStop}>
                        {this.state.status ? 'Stop' : 'Start'}</button>
                    </div>
                    <p className="current-status">
                        {this.displayStatusText()}
                    </p>
                    <div className="accelerate-decelerate-button">
                        <button className={this.state.status && this.state.onAccelerateDisable?
                        "accelerate-button bg-blue":"accelerate-button bg-null1"}
                        onClick={this.onAccelerate}>Accelerate</button>
                        <button className={this.state.status && this.state.onApplyBrakeDisable?
                        "decelerate-button bg-red":"decelerate-button bg-null2"}
                        onClick={this.onApplyBrake}>Decelerate</button>
                    </div>
                </div>
            </div>;
    }

}

class CarsList extends React.Component {

    constructor(props) {
        super();
        this.state = {
            carNumber: 1,
            carsList: []
        };
    }

    addCarToCarsList = () => {
        this.setState({
            carNumber: this.state.carNumber + 1
        });
    }

    removeCarFromCarsList = (event) => {
        event.target.parentNode.parentNode.remove();

    }

    renderCarsList() {
        this.setState(item => {
            item.carsList = [...item.carsList, <Car key={item.carNumber} number={item.carNumber}
                                            removeCar={this.removeCarFromCarsList}/>];
        });
    }
    render() {
        return (
            <div className="header">
                <button className="add-new-car" onClick={this.addCarToCarsList}>Add Car</button>
                {this.renderCarsList()}
                {this.state.carsList}
            </div>
        );
    }
}

export { CarsList };
