import React from 'react';
import { observer } from 'mobx-react';

import ToDoStores from '../../../stores/TodoStore/index.js';
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
                    <DisplayTodo type='text' onKeyDown={ToDoStores.onAddTodo} 
                        placeholder='What needs to be done?'></DisplayTodo>
                </UserInput>
                <TodosList>
                    {ToDoStores.filteredTodos.map(EachTodo=>
                        <AddTodo key={EachTodo.id} AddingEachTodo={EachTodo}
                                onRemoveTodo={ToDoStores.onRemoveTodo}/>
                    )}
                </TodosList>
                <TodoFooter>
                    <Footer getActiveTodosCount={ToDoStores.activeTodosCount} 
                            onClearCompleted={ToDoStores.onClearCompleted}
                            onChangeSelectedFilter={ToDoStores.onChangeSelectedFilter}/>
                </TodoFooter>
            </Wrapper>
        );
    }
}

export default TodoApp;
