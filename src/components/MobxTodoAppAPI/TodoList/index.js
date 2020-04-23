import React, { Component } from 'react'
import { observer, inject } from "mobx-react"
import NoDataView from "../../common/NoDataView"
import AddTodo from '../AddTodoAPI/index'
import Footer from '../TodoFooterAPI/index'
import {
  Wrapper,
  TodoHeader,
  DisplayTodo,
  UserInput,
  TodosList,
  TodoFooter,
  Display
}
from './styledComponents'
import { action } from "mobx"

@inject('todoStores')
@observer class TodoList extends Component {

  @action.bound
  getTodoStore() {
    return this.props.todoStores
  }
  
  render() { 
    const {onRemoveTodo,
      onAddTodo,
      activeTodosCount,
      filteredTodos,
      onClearCompleted,
      onChangeSelectedFilter} = this.getTodoStore()

    return (
      <Wrapper>
        <TodoHeader>todos</TodoHeader>
        <UserInput>
          <DisplayTodo type='text' 
            onKeyDown = {onAddTodo}
            placeholder='What needs to be done?'>
          </DisplayTodo>
        </UserInput>
        {activeTodosCount !== 0 ?
        <Display>
        <TodosList>
          {filteredTodos.map((EachTodo)=>
            <AddTodo AddingEachTodo={EachTodo} key={EachTodo.id}
              onRemoveTodo = {onRemoveTodo}/>
          )}
        </TodosList>
        <TodoFooter>
          <Footer getActiveTodosCount={activeTodosCount} 
            onClearCompleted={onClearCompleted}
            onChangeSelectedFilter={onChangeSelectedFilter}/>
        </TodoFooter>
        </Display> : <NoDataView />}
      </Wrapper>
     );
  }
}
 
export default TodoList;