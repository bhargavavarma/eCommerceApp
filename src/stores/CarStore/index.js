import React from 'react';

import {observer} from 'mobx-react';
import { observable, action } from 'mobx';

@observer
class CarStore extends React.Component {

    @observable carNumber;
    @observable carsList;

    constructor() {
        super();
        this.carNumber = 1;
        this.carsList = []
    }

    @action.bound
    
    
    addCarToCarsList() {
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

const CarStores  = new CarStore ();
export default CarStores;