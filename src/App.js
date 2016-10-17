import React, { Component } from 'react';
import './App.css';
import TheCage from './TheCage';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Enter the Cage</h1>
        <TheCage />
      </div>
    );
  }
}

export default App;
