import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Gallery from './Gallery'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Photo Gallery</h1>
        </header>

        <div className='container'>
          <Gallery />
        </div>
      </div>
    );
  }
}

export default App;
