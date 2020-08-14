import React, { Component } from 'react';

export class TodoAdd extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      completed: false
    }
    this.onHandleChange = this.onHandleChange.bind(this);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
  }
  onHandleChange(event) {
    let target = event.target;
    let name = target.name;
    let value = target.value;
    this.setState({
      [name]: value
    })
  }
  onHandleSubmit(event) {
    event.preventDefault();
    console.log(this.state);

  }
  render() {
    return (
      <form onSubmit={this.onHandleSubmit}>
        <div >
          <label>Email</label>
          <input type="text" className="form-control" name="title" placeholder="What needs to be done?" onChange={this.onHandleChange} />
        </div>
        
      </form>
    );
  }
}

export default TodoAdd;
