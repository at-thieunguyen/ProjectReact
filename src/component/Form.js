import React, { Component } from 'react';

export class Form extends Component {

  constructor(props) {
    super(props);
    this.state = {
      txtemail: '',
      txtpassword: ''
    };
    this.onHandleChange = this.onHandleChange.bind(this);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
  }
  onHandleChange(event) {
    let target = event.target
    let name = target.name;
    let value = target.value
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
      <form action="" onSubmit={this.onHandleSubmit}>
        <div className="form-group col-md-8">
          <label>Email</label>
          <input type="email" className="form-control" name="txtemail" placeholder="Email" onChange={this.onHandleChange} />
        </div>
        <div className="form-group col-md-8">
          <label>Password</label>
          <input type="password" className="form-control" name="txtpassword" placeholder="Password" onChange={this.onHandleChange} />
        </div>
        <button type="submit" className="btn btn-success">Submit</button>
        <button type="reset" className="btn btn-light">Cancel</button>
      </form>
    );
  }
}

export default Form;
