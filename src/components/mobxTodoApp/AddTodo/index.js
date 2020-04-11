import React from 'react';

import ToDoStores from '../../../stores/TodoStore/index.js';
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

    onCompleted = () => {
        this.props.AddingEachTodo.onCompleted();
    }

    onRemoveTodo = () => {
        const {AddingEachTodo} = this.props;
        ToDoStores.onRemoveTodo(AddingEachTodo.id);
    }

    onUpdateTodoTitle = (event) => {
        this.props.AddingEachTodo.onUpdateTodoTitle(event.target.value);
    }

    render() {
        const {AddingEachTodo} = this.props;
        return (
            <EachTodo>
                <CheckBox>
                    <CheckBoxInput id={AddingEachTodo.id} type="checkbox" 
                                onChange={this.onCompleted} isCompleted={AddingEachTodo.isCompleted}>
                    </CheckBoxInput>
                </CheckBox>
                    <DisplayTitle id={AddingEachTodo.id}  isCompleted={AddingEachTodo.isCompleted}
                        defaultValue={AddingEachTodo.title} onChange={this.onUpdateTodoTitle}>
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
