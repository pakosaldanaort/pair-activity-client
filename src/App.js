import React, { Component } from 'react';
import logo from './logo.svg';
import ButtonExample from './ButtonExample';
import './App.css';

class App extends Component {
  render() {
    var buttonArray = [];
    for (var i=0;i<50;i++) {
      buttonArray.push(ButtonExample());
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {buttonArray}
      </div>
    );
  }
}

export default App;

// What is { } in React templates
