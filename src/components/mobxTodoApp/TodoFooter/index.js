import React from 'react';

import { FooterBody } from './styledComponents';
class Footer extends React.Component {

    onAll = () => {
        this.props.onAll();
    }

    onActive = () => {
        this.props.onActive();
    }

    onCompleted = () => {
        this.props.onCompleted();
    }

    onClearCompleted = () => {
        this.props.onClearCompleted();
    }

    render() {
        return (
            <FooterBody><span>{this.props.getActiveTodosCount} item left</span>
                <button
                    onClick={this.onAll}>All</button>
                <button
                    onClick = { this.onActive } > Active < /button>
                                    <button
                    onClick={this.onCompleted}>Completed</button>
                <button
                    onClick={this.onClearCompleted}>Clear completed</button>
            </FooterBody>
        );
    }
}

export default Footer;
