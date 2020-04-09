import React from 'react';

import { observer } from 'mobx-react';
import { observable, action } from 'mobx';

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

    id = 0;

    @observable todos;

    @observable selectedFilter;

    constructor() {
        super();
        this.todos = [];
        this.selectedFilter = 'All';
    }

    @action.bound
    onAddTodo(event) {
        if (event.keyCode === 13 && event.target.value !== '') {
            let value = event.target.value;
            let AddingEachTodo = {
                id: this.id++,
                title: value,
                isCompleted: false,
            };
            this.todos.push(AddingEachTodo);
            event.target.value = '';
        }
    }

    @action.bound
    onRemoveTodo(id) {
        let filteredTodos = this.todos.filter(item => item.id !== Number(id));
        this.todos = filteredTodos;
    }

    @action.bound
    onCompleteTodo(id) {
        const array = this.todos.slice(0);
        array.forEach(item => {
            if (item.id === id) {
                item.isCompleted = !item.isCompleted;
            }
            this.todos = array;
        });
    }

    onAll = () => {
        this.selectedFilter = 'All';
    }

    onActive = () => {
        this.selectedFilter = 'Active';
    }

    onCompleted = () => {
        this.selectedFilter = 'Completed';
    }

    onClearCompleted = () => {
        const clearTodos = this.todos.filter(item => item.isCompleted === false);
        this.todos = clearTodos;
        this.selectedFilter = 'ClearCompleted';
    }

    render() {
        let filterOption = this.selectedFilter;
        console.log(filterOption);
        let filteredTodos = this.todos.filter(function(eachTodo) {
            switch (filterOption) {
                case 'All':
                    return true;
                case 'Active':
                    return eachTodo.isCompleted === false;
                case 'Completed':
                    return eachTodo.isCompleted === true;
                case 'ClearCompleted':
                    return null;
            }
        });
        return (
            <Wrapper>
                <TodoHeader>todos</TodoHeader>
                <UserInput>
                    <DisplayTodo type='text' onKeyDown={this.onAddTodo} 
                        placeholder='What needs to be done?'></DisplayTodo>
                </UserInput>
                <TodosList>
                    {filteredTodos.map(EachTodo=>
                        <AddTodo key={EachTodo.id} AddingEachTodo={EachTodo}
                                    title={EachTodo.title} 
                                    onCompleteTodo={this.onCompleteTodo} 
                                    onRemoveTodo={this.onRemoveTodo}/>
                    )}
                </TodosList>
                <TodoFooter>
                    <Footer onAll={this.onAll} onActive={this.onActive} 
                            onCompleted={this.onCompleted}
                            getActiveTodosCount={this.todos.length} 
                            onClearCompleted={this.onClearCompleted}/>
                </TodoFooter>
            </Wrapper>
        );
    }
}

export default TodoApp;
