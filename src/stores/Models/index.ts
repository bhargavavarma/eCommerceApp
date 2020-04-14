import React from 'react';
import { observable, action } from 'mobx';
import {observer} from 'mobx-react';

@observer
class ToDoModel extends React.Component {
    id:number
    @observable title : string
    @observable isCompleted : boolean

    constructor(todoObject) {
        super(todoObject);
        this.id = todoObject.id;
        this.title = todoObject.title;
        this.isCompleted = todoObject.isCompleted;
    }

    @action.bound
    onCompleted() {
        this.isCompleted = !this.isCompleted;
    }
 
    @action.bound
    onUpdateTodoTitle(updatedTitle : string) {
        this.title = updatedTitle;
    }
}

export default ToDoModel;