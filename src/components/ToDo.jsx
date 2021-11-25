import React from "react";

function ToDo(props) {

    return (
        <div className="todo">
            <div className="task--checking">
                <input type="checkbox" />
            </div>
            <div className="task--title">
                {props.name}
            </div>
            <div className="task--postponing">
                <i class="fas fa-pencil-alt"></i>
            </div>
            <div className="task--deleting">
                <i className="fas fa-trash"></i>
            </div>
        </div>
    )
}

export default ToDo;