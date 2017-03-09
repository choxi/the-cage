import React, { Component } from 'react';
import './App.css';
import TheCage from './TheCage';
import Movie from './Movie';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Face the Cage</h1>
        <TheCage />
        <hr />
        <Movie />
      </div>
    );
  }
}

export default App;
