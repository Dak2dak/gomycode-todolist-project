import React from "react";
import { Component } from "react";

class ToDo extends Component {


    state ={
        taskName : ""
    }

    handleDelete(id)  {
        this.props.taskDelete(id)
    }

    editTodo(id) {
        this.props.editTodo(id)
    }

    handleChange(e){
        e.preventDefault();
        this.setState({taskName : e.target.value})
    }

    handleSubmit(id, name){
        this.props.onSubmit(id, name);
    }

    render(){
        return (
            <div className="todo">
                <div className="task--checking">
                    <input type="checkbox" />
                </div>
                <div className="task--title">
                    <form onSubmit={(e)=> {e.preventDefault(); this.handleSubmit(this.props.id, this.state.taskName)}}>
                    {this.props.show ? <input type="text" placeholder="Modifier" onChange={this.handleChange.bind(this)} /> :  this.props.name}
                    </form>
                </div>
                <div onClick={() => this.editTodo(this.props.id)} className="task--postponing">
                    <i class="fas fa-pencil-alt"></i>
                </div>
                <div onClick={() => this.handleDelete(this.props.id)} className="task--deleting">
                    <i className="fas fa-trash"></i>
                </div>
            </div>
        )
    }
}

export default ToDo;