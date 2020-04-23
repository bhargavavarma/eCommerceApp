import React from 'react'
import { action } from 'mobx'
import { FooterBody } from './styledComponents'

class Footer extends React.Component {

    @action.bound
    onChangeSelectedFilter = (event) => {
        const {onChangeSelectedFilter} = this.props
        onChangeSelectedFilter(event.target.value)
    }

    @action.bound
    onClearCompleted() {
        const {onClearCompleted} = this.props
        onClearCompleted('ClearCompleted')
    }

    render() {
        const {getActiveTodosCount} = this.props
        return (
            <FooterBody>
                <span>{getActiveTodosCount} item left</span>
                <button onClick={this.onChangeSelectedFilter} value='All'>All</button>
                <button onClick = { this.onChangeSelectedFilter } value='Active'> Active </button>
                <button onClick={this.onChangeSelectedFilter} value='Completed'>Completed</button>
                <button onClick={this.onClearCompleted} value='ClearCompleted'>Clear completed</button>
            </FooterBody>
        );
    }
}

export default Footer;