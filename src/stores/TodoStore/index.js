import React from 'react';
import { observable, action, computed } from 'mobx';
import {observer} from 'mobx-react';
import {reaction} from 'mobx';

import ToDoModel from "../Models";

@observer
class TodoStores  extends React.Component {
    
    @observable todos = [];
    @observable selectedFilter = 'All';

    @action.bound
    onAddTodo(event) {
        if (event.keyCode === 13 && event.target.value !== '') {
            let value = event.target.value;
            let addingEachTodo = {
                id: Math.floor(Math.random() * 10000),
                title: value,
                isCompleted: false,
            };
            const todoObject=new ToDoModel(addingEachTodo)
            this.todos.push(todoObject);
            event.target.value = '';
        }
    }
 
    @action.bound
    onRemoveTodo(id) {
        let filteredTodos = this.todos.filter(item => item.id !== Number(id));
        this.todos = filteredTodos;
    }

    @action.bound
    onChangeSelectedFilter(filter){
        this.selectedFilter = filter;
    }

    @action.bound
    onClearCompleted(filter) {
        const clearTodos = this.todos.filter(item => item.isCompleted === false);
        this.todos = clearTodos;
        this.selectedFilter = filter;
    }

    @action.bound
    addTodoReaction = reaction(
        ()=>{
            return this.todos.map(todo => todo.title) //data function/data tracker
        },
        (name)=>{
            console.log(`TodoUpdatedName ${name}`) //effect function
        });

    @computed get activeTodosCount() {
        let activeCount = this.todos.filter(item => item.isCompleted === false);
        return activeCount.length;
    }

    @computed get filteredTodos() {
        let filterOption = this.selectedFilter;
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
        return filteredTodos;
    }
}

const todoStores  = new TodoStores(ToDoModel);
export {todoStores,TodoStores};