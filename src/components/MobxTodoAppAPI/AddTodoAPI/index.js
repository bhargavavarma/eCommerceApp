import React from 'react'
import { observer } from 'mobx-react'

import {
    EachTodo,
    CheckBox,
    DisplayTitle,
    RemoveTodo,
    CheckBoxInput
}
from './styledComponents';

@observer class AddTodo extends React.PureComponent {

  onCompleted = () => {
    const {AddingEachTodo}=this.props
    AddingEachTodo.onCompleted()
  }

  onRemoveTodo = () => {
    const {AddingEachTodo} = this.props;
    AddingEachTodo.onRemoveTodo(AddingEachTodo.id)
  }

  onUpdateTodoTitle = (event) => {
    this.props.AddingEachTodo.onUpdateTodoTitle(event.target.value)
  }

  render() {
    const {AddingEachTodo} = this.props;
    console.log(AddingEachTodo.isCompleted)
    return (
      <EachTodo>
        <CheckBox>
          <CheckBoxInput type="checkbox" onChange={this.onCompleted}
            isCompleted={AddingEachTodo.isCompleted}
            checked={AddingEachTodo.isCompleted === true ? true : false}>
          </CheckBoxInput>
        </CheckBox>
          <DisplayTitle disabled={AddingEachTodo.isCompleted === true ? true : false}
            isCompleted={AddingEachTodo.isCompleted}
            defaultValue={AddingEachTodo.title}
            onChange={this.onUpdateTodoTitle}>
          </DisplayTitle>
        <RemoveTodo>
          <button onClick={this.onRemoveTodo}>&#x2717;</button>
        </RemoveTodo>
      </EachTodo>
    );
  }
}

export default AddTodo;