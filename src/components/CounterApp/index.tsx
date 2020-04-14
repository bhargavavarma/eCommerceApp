import React from 'react';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';

import {
    PageContainer,
    Wrapper,
    Button,
    Heading,
    Display
}
from './styledComponents';

@observer
class CounterApp extends React.Component {

    @observable count = 0;

    @action.bound
    onIncrement() {
        this.count++;
    }

    @action.bound
    onDecrement() {
        this.count--;
    }

    @action.bound
    onChangeCount(event) {
        this.count = event.target.value;
    }

    render() {
        return (
            <PageContainer>
            <Heading>Counter</Heading>
            <Wrapper>
                <Button onClick={this.onIncrement}>+</Button>
                <Display type="number" onChange={this.onChangeCount} value={this.count}></Display>
                <Button onClick={this.onDecrement}>-</Button>
            </Wrapper>
            </PageContainer>
        );
    }
}

export default CounterApp;
