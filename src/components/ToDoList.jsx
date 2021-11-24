import { Component } from 'react';
import React from 'react';
import ToDo from './ToDo';

class ToDoList extends React.Component {

    state = {
        tasks: [
            {id: 1, taskName: "do the dishes", done: true},
            {id: 2, taskName: "do my homework", done: true},
            {id: 3, taskName: "go run errands", done: true},
            {id: 4, taskName: "go to the drogstore", done: true}
        ]
    }

    render() {

        return(
            <div className="todo--list">
                {this.state.tasks.map(task => <ToDo name = {task.taskName} />)}
            </div>
        )
    }
}

export default ToDoList;