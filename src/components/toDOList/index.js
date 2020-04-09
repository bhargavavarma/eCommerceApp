//step-1

/*

method-1
--> divide UI into components
--> TodoApp
    --> UserInput
    --> TodoList
        --> Todo
    --> TodoFooter
        --> ActiveTdosCount
        --> AllButton
        --> ActiveButton
        --> CompletedButton
        --> ClearCompletedButton


method-2
--> divide UI into components
--> TodoApp
    --> UserInput
    --> TodoList
        --> Todo
    --> TodoFooter
        --> ActiveTdosCount
        --> TodoFilter
            --> AllButton
            --> ActiveButton
            --> CompletedButton
            --> ClearCompletedButton

*/


//step-2

/*

--> props -- show data using minimum UI

*/

//-----------------------------------------***----------------------------------

//step-3

/*

Application state

--> userInput
--> ***** activeItemsCount = listOfActiveTodos.length
--> ***** showClearCompletedButton = listOfCompletedTodos.length>0
--> selectedFilterButton = 'All' | 'Active' | 'Completed'
--> EachTodoCheckedState
--> EcahTodoContent
--> EachTodoFoccussedState
--> listOfAllTodos
--> ***** listOfActiveTodos = listOfAllTodos.filter(isChecked === false)
--> ***** listOfCompletedTodos = listOfAllTodos.filter(isChecked === true)
--> ***** showOrHideFooter - length>0

- Minimum Application State



*/

//step-4

/*


*/


import React from 'react';
import './todo.css';
let count = 0;

class Footer extends React.Component {

    render() {
        return (
            <div className="footer">
                <span className="left-items">{this.props.itemleft} item left</span>
                <button className="default-button"
                    onClick={this.props.onall}>All</button>
                <button className="default-button"
                    onClick={this.props.onactive}>Active</button>
                <button className="default-button"
                    onClick={this.props.oncompleted}>Completed</button>
                <button className="default-button"
                    onClick={this.props.onclearcompleted}>Clear completed</button>
            </div>
        );
    }
}

class Todo extends React.Component {

    render() {
        return (
            <div className = 'new-div'>
                            <div className="block1">
                                <input id={this.props.id} type="checkbox" onChange={this.props.checkBox}
                                        checked={this.props.obj.checkStatus}/>
                            </div>
                            <input id={this.props.id} disabled = {(this.props.obj.checkStatus)? "disabled" : ""}
                                className={this.props.obj.checkStatus?
                                'inputName line-through':'inputName'} defaultValue={this.props.text}
                                    onChange={this.props.updateInpu}></input>
                            <button id={this.props.id} className="delete-todo" 
                                onClick={this.props.remove}>&#x2717;</button>
                        </div>
        );
    }
}

class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: [],
            array: [],
            itemsLeft: 0
        };
    }

    enterKeyPressed = (event) => {
        if (event.keyCode === 13 && event.target.value !== '') {
            let value = event.target.value;
            let obj = {
                checkStatus: false,
                id: count,
                content: value
            };
            this.setState({ itemsLeft: this.state.itemsLeft + 1 });
            this.setState(item => {
                item.todo.push(obj);
                item.array.push(obj);
            });
            event.target.value = '';
            count += 1;
        }
    }

    checkBox = (event) => {
        let todoid = event.target.id;
        this.setState(item => {
            this.state.todo[todoid].checkStatus = !this.state.todo[todoid].checkStatus;
            this.state.itemsLeft = this.state.todo[todoid].checkStatus ?
                this.state.itemsLeft - 1 : this.state.itemsLeft + 1;
            return this.state.todo[todoid].checkStatus;
        });
    }

    removeListItem = (event) => {
        let id = event.target.id;
        let val = this.state.array.filter(item => item.id !== Number(id));
        this.setState({
            todo: val,
            array: val
        });
    }

    updateInput = (event) => {
        let todoid = event.target.id;
        this.setState(item => {
            if (item.todo[todoid].id === parseInt(todoid, 10)) {
                item.content = event.target.value;
            }
            console.log(item.todo[todoid].id);
            alert(todoid);
        });
    }

    onAll = (event) => {
        const allTodos = this.state.todo.filter(item => item);
        this.setState({
            todo: allTodos,
            array: allTodos
        });
    }

    onActive = (event) => {
        const activeTodos = this.state.todo.filter(item => (item.checkStatus === false));
        this.setState({ array: activeTodos });
    }

    onCompleted = () => {
        const completedTodos = this.state.todo.filter(item => (item.checkStatus === true));
        this.setState({ array: completedTodos });
    }

    onClearCompleted = () => {
        const clearTodos = this.state.todo.filter(item => item.checkStatus === false);
        this.setState({
            todo: clearTodos,
            array: []
        });
    }

    render() {
        return (
            <div className="container">
            <h1 className="todo"> todos </h1>
            <div className="header">
                <input type='text' className='inputName' onKeyDown={this.enterKeyPressed} 
                placeholder='What needs to be done?'/>
            </div>
            {[...this.state.array].map(item=>
                <Todo key={item.id} id={item.id} obj = { item }
                text = { item.content } checkBox = { this.checkBox }
                remove = { this.removeListItem } updateInpu = { this.updateInput }/>)
                }
                <Footer onall={this.onAll} onactive={this.onActive} 
                                                    oncompleted={this.onCompleted} itemleft={this.state.itemsLeft} 
                                                    onclearcompleted={this.onClearCompleted}/>
        </div>
        );
    }
}

export { ToDoList };
