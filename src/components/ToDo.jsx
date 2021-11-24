import React from "react";

function ToDo(props) {

    return (
        <div className="todo">
            <div className="task--title">
                {props.name}
            </div>
            <div className="task--checking">

            </div>
            <div className="task--postponing">
                
            </div>
            <div className="task--deleting">
                <i className="fas fa-trash"></i>
            </div>
        </div>
    )
}

export default ToDo;