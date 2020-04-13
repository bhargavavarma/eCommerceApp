import React from 'react';
import { Provider,inject } from 'mobx-react';
import { observable } from 'mobx';
import {observer} from 'mobx-react';

@inject('temp')
class C extends React.Component {
    render() {
        const {temp,name} = this.props
        console.log(name)
    return <div>{temp}</div>;
    }
}

@inject('temp')
@observer
class B extends React.Component {
    @observable name;

    handleCLick = (event) => {
        this.name = event.target.value;
    }

    render() {
        const {temp} = this.props
        return (
            <div>
                <input type='text' value={this.value} onChange={this.handleCLick}/>
                <C name={this.name}/>
            </div>
        )
    }
}

class A extends React.Component {
    render() {
        return <Provider temp={'value'}><B/></Provider>
    }
}

export default A;