import React from 'react';

import { observer } from 'mobx-react';
import {
    EachTodo,
    CheckBox,
    DisplayTitle,
    RemoveTodo,
    CheckBoxInput
}
from './styledComponents';

@observer
class AddTodo extends React.PureComponent {

    onCompleteTodo = () => {
        this.props.onCompleteTodo(this.props.AddingEachTodo.id);
    }

    onRemoveTodo = () => {
        this.props.onRemoveTodo(this.props.AddingEachTodo.id);
    }

    render() {
        return (
            <EachTodo>
                <CheckBox>
                    <CheckBoxInput id={this.props.AddingEachTodo.id} type="checkbox" onChange={this.onCompleteTodo}
                            checked={this.props.AddingEachTodo.isCompleted}>
                    </CheckBoxInput>
                </CheckBox>
                    <DisplayTitle id={this.props.AddingEachTodo.id}  checked={this.props.AddingEachTodo.isCompleted}
                        defaultValue={this.props.title}>
                    </DisplayTitle>
                <RemoveTodo>
                    <button
                        onClick={this.onRemoveTodo}>&#x2717;</button>
                </RemoveTodo>
            </EachTodo>
        );
    }
}

export default AddTodo;
