import React, { Component } from 'react';
import './App.css';
import TheCage from './TheCage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Face the Cage</h1>
        <TheCage />
        <hr />
      </div>
    );
  }
}

export default App;
