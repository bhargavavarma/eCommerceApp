/*import React, { Component } from "react";
import { render } from "react-dom";
import { observable, action } from "mobx";
import { observer } from "mobx-react";

@observer
class Counter extends Component {
    @observable count = 12;
    @observable doubleTheCount = 13;

    @action.bound
    async updateCounts() {
        this.count = this.count + 1;
        console.log(1)
        let promise = new Promise((resolve, reject) => {
            resolve("Success");
        });
        promise.then(() => {
            console.log(2)
            this.count = this.count + 1;
            console.log(3)
            this.doubleTheCount = this.doubleTheCount * 2
        });
    }

    render() {
        console.log("render Counter");
        return (
            <div>
        <p>Count: {this.count}</p>
        <p>Double Count: {this.doubleTheCount}</p>
        <button onClick={this.updateCounts}>Update counts</button>
      </div>
        );
    }
}

export default Counter*/ // 3 naa ans: 1



/*import React from "react";
import { render } from "react-dom";
import { observer } from "mobx-react";
import { observable, action } from "mobx";

@observer
class CounterParent extends React.Component {
    @observable parentCounter = 4;

    @action.bound
    onParentCounterDecrement() {
        this.parentCounter -= 1;
    }

    render() {
        console.log("render CounterParent");
        return (
            <CounterChild
        onParentCounterDecrement={this.onParentCounterDecrement}
        parentCounter={this.parentCounter}
      />
        );
    }
}

class CounterChild extends React.Component {
    @observable childCounter1 = 10;
    @observable childCounter2 = 20;

    @action.bound
    onDecrement() {
        const { onParentCounterDecrement } = this.props;

        onParentCounterDecrement();
        onParentCounterDecrement();

        this.childCounter1 -= 0;
        this.childCounter2 -= 0;
    }

    render() {
        console.log("render CounterChild");
        const { parentCounter } = this.props;

        return (
            <div>
        <button onClick={this.onDecrement}>Decrement</button>
        <div>parentCounter: {parentCounter}</div>
        <div>childCounter1: {this.childCounter1}</div>
        <div>childCounter2: {this.childCounter2}</div>
      </div>
        );
    }
}

export default CounterParent;*/
import React from "react";
class MouseTracker extends React.Component {
    constructor(props) {
        super(props);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.state = { x: 0, y: 0 };
    }

    handleMouseMove(event) {
        this.setState({
            x: event.touches[0].clientX,
            y: event.touches[0].clientY
        });
    }

    render() {
        return (
            <div style={{ height: '100vh' }} onTouchMove={this.handleMouseMove}>
        <h1>Move the mouse around!</h1>
        <p>The current mouse position is ({this.state.x}, {this.state.y})</p>
      </div>
        );
    }
}
export default MouseTracker;
