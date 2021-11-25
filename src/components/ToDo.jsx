import React from "react";

function ToDo(props) {

    const handleDelete = (id) => {
        props.taskDelete(id)
    }

    const modifyTodo = (id) => {
        props.taskModify(id)
    }

    return (
        <div className="todo">
            <div className="task--checking">
                <input type="checkbox" />
            </div>
            <div className="task--title">
                {props.name}
            </div>
            <div onClick={() => modifyTodo(props.id)} className="task--postponing">
                <i class="fas fa-pencil-alt"></i>
            </div>
            <div onClick={() => handleDelete(props.id)} className="task--deleting">
                <i className="fas fa-trash"></i>
            </div>
        </div>
    )
}

export default ToDo;