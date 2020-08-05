import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Demo from './component/Demo';
import { render } from '@testing-library/react';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <h2>Welcome to Duy Thieu</h2>
          <Demo />
        </header>
      </div>
    );
  }

}

export default App;
