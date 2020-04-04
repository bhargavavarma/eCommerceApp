import React from 'react';

class CheckboxWithLabel extends React.Component {

    render() {
        return (
            <div key={this.props.id}>
                <input type="checkbox" value={this.props.value} name='checkbox' 
                    onChange={this.props.handleCheckboxClick}/>
                <label>{this.props.value}</label>
            </div>

        );
    }
}

export { CheckboxWithLabel };
