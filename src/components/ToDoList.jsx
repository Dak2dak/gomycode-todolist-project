import { Component } from 'react';
import React from 'react';
import ToDo from './ToDo';

class ToDoList extends React.Component {

    state = {
        tasks: [
            {id: 1, taskName: "Do the dishes", done: false},
            {id: 2, taskName: "Do my homework", done: false},
            {id: 3, taskName: "Go run errands", done: false},
            {id: 4, taskName: "Go to the drogstore", done: false}
        ]
    }

    handleDelete = id => {
        const newTasks = [...this.state.tasks];
        const index = newTasks.findIndex(task => task.id === id)

        newTasks.splice(index, 1);

        this.setState({tasks: newTasks});
    }

    modifyTodo = (id) => {


        const element = <input type="text" />
        console.log({element})
    }

    render() {

        return(
            <div className="todo--list">
                {this.state.tasks.map(task => <ToDo name = {task.taskName} 
                id = {task.id} taskDelete={this.handleDelete} 
                taskModify = {this.modifyTodo} />)}
            </div>
        )
    }
}

export default ToDoList;