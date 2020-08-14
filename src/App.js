import React, { Component } from 'react';
import './App.css';
import Header from './component/Header';
import TodoAdd from './component/TodoAdd';
// import Form from './component/Form';
// import Demo from './component/Demo';
// import Product from './component/product';


export class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    }
  }
  componentWillMount() {
    if (localStorage && localStorage.getItem('tasks ')) {
      let tasks = JSON.parse(localStorage.getItem('tasks '));
      this.setState({
        tasks: tasks
      })
    }
  }
  generate = () => {
    let tasks = [
      {
        id: this.generateId(),
        title: 'hoc',
        completed: true
      },
      {
        id: this.generateId(),
        title: 'choi',
        completed: true
      },
      {
        id: this.generateId(),
        title: 'ngu',
        completed: true
      }
    ];
    this.setState({
      tasks: tasks
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));

  }
  s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }
  generateId() {
    return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + this.s4() + this.s4();
  }
  render() {
    return (
      <div className="App">
        <Header />
        <TodoAdd />
        <button type="button" onClick={this.generate}>generate</button>
      </div>
    );
  }

}

export default App;
