import React, { Component } from 'react';
import logo from './logo.svg';
import ButtonExample from './ButtonExample';
import './App.css';

class App extends Component {
  handleClick(id) {
    console.log(id);
  } 
  render() {

    var buttonArray = [];
    for (var i= 0; i<20;i++){
      buttonArray.push(<ButtonExample key={i} id={i} paco={i+1} callbackFromParent={(buttonId) => this.handleClick({buttonId})} ></ButtonExample>);
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

        <h1>Button clicked: </h1>

      </div>
    );
  }
}

export default App;


