import React from "react";

class AddTask extends React.Component {

    render() {
        return (
            <div className="add--task">
                <h1>Your personal todo-list</h1>
                <div className="adding--box">
                    <input type="text" placeholder="Add task here..." />
                    <div>
                        <i className="fas fa-plus-circle"></i>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddTask;