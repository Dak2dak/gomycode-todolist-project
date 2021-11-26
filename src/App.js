import React, { Component } from 'react';
import AddTask from './components/AddTask';
import ToDoList from './components/ToDoList';
import './Style.css';


class App extends React.Component {
  render() {
    return (
      <div className="container--list">
        <AddTask />
        <ToDoList />
      </div>
    );
  }
}

export default App;
