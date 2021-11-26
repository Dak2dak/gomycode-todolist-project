import React from "react";

class AddTask extends React.Component {

    state = {
        tasks: [
            {id: 1, taskName: "Do the dishes", done: false, show : false},
            {id: 2, taskName: "Do my homework", done: false, show : false},
            {id: 3, taskName: "Go run errands", done: false, show : false},
            {id: 4, taskName: "Go to the drogstore", done: false, show : false}
        ],
        
        anotherTask: " "

    }

    handleChange = (event) =>{
        const value = event.currentTarget.value;
        this.setState({anotherTask : value});
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        const id = new Date().getTime();
        const nextTask = this.state.anotherTask;

        const task = {
            id: id,
            taskName: nextTask,
            done: false,
            show: false
        };

        //A copy of tasks -- tasks is a table
        const newTab = this.state.tasks.slice();
        newTab.push(task);

        this.setState({tasks: newTab});
    }

    render() {
        return (
            <div className="add--task">
                <h1>Your personal todo-list</h1>
                <form className="adding--box">
                    <input value = {this.state.anotherTask} type="text" placeholder="Add task here..."
                    onChange = {this.handleChange} />
                    <button onChange = {this.handleSubmit} className="bg-color">
                        <i className ="fas fa-plus-circle"></i>
                    </button>
                </form>
            </div>
        )
    }
}

export default AddTask;