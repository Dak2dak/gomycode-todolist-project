import { Component } from 'react';
import React from 'react';
import ToDo from './ToDo';

class ToDoList extends React.Component {

    taskInput = React.createRef();

    state = {
        tasks: [
            {id: 1, taskName: "Do the dishes", done: false, show : false},
            {id: 2, taskName: "Do my homework", done: false, show : false},
            {id: 3, taskName: "Go run errands", done: false, show : false},
            {id: 4, taskName: "Go to the drogstore", done: false, show : false}
        ]

    }

    handleDelete = id => {
        const newTasks = [...this.state.tasks];
        const index = newTasks.findIndex(task => task.id === id)

        newTasks.splice(index, 1);
        this.setState({tasks: newTasks});
    }

    editTodo = (id) => {
    const newTasks =  [...this.state.tasks];
    newTasks.forEach(task => 
            {if(task.id === id) {
                task.show = !task.show;
        }})
        
        this.setState({tasks : newTasks})
    }

    modifyTodo = (id, name) => {
        const newTasks =  [...this.state.tasks];
            newTasks.forEach(task => 
                {if(task.id === id) {
                    task.taskName = name;
                    task.show = !task.show;
            }})

        this.setState({tasks : newTasks})
        }

        render() {
            return(
                <div className="todo--list">
                    {this.state.tasks.map(task => <ToDo name = {task.taskName} 
                    id = {task.id} taskDelete={this.handleDelete} 
                    editTodo= {this.editTodo}  show={task.show} 
                    onSubmit= {this.modifyTodo} onClick = {this.addTodo} />)}
                </div>
            )
        }
}

export default ToDoList;