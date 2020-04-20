import React from 'react'
import { observer } from 'mobx-react'
import { observable } from "mobx"
import Loader from 'react-loader-spinner'
import {todoStores} from '../../../stores/TodoStore/indexAPI'
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

@observer class TodoAppAPI extends React.Component {

  @observable isFetching = true

  async componentDidMount() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    const json = await response.json()
    this.isFetching = false
    todoStores.todos = json
    // json.forEach(element => {
    //   todoStores.onAddJsonData(element)
    // });
  }

  render() {
    return (
      <Wrapper>
        <TodoHeader>todos</TodoHeader>
        <UserInput>
          <DisplayTodo type='text' onKeyDown={todoStores.onAddTodo} 
            placeholder='What needs to be done?'></DisplayTodo>
        </UserInput>
        {this.isFetching === false ?
        <Display>
        <TodosList>
          {todoStores.filteredTodos.map((EachTodo)=>
              <AddTodo  AddingEachTodo={EachTodo} key={EachTodo.id}
              onRemoveTodo = {todoStores.onRemoveTodo}/>
          )}
        </TodosList>
        <TodoFooter>
          <Footer getActiveTodosCount={todoStores.activeTodosCount} 
            onClearCompleted={todoStores.onClearCompleted}
            onChangeSelectedFilter={todoStores.onChangeSelectedFilter}/>
        </TodoFooter>
        </Display>
        : <Loader type="ThreeDots" color="#00BFFF" height={300} width={100} />}
      </Wrapper>
    );
  }
}

export default TodoAppAPI;
