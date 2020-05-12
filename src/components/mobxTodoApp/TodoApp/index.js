import React from 'react';
import { observer } from 'mobx-react';

import {todoStores} from '../../../stores/TodoStore/index';
import ToDoModel from '../../../stores/Models/index';
import AddTodo from '../AddTodo/index';
import Footer from '../TodoFooter/index';

import {
    Wrapper,
    TodoHeader,                            
    DisplayTodo,
    UserInput,
    TodosList,
    TodoFooter
}
from './styledComponents';

@observer class TodoApp extends React.Component {

    render() {
        return (
            <Wrapper>
                <TodoHeader>todos</TodoHeader>
                <UserInput>
                    <DisplayTodo type='text' onKeyDown={todoStores.onAddTodo} 
                        placeholder='What needs to be done?'></DisplayTodo>
                </UserInput>
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
            </Wrapper>
        );
    }
}

export default TodoApp;
