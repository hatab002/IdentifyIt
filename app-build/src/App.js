import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Wrapper from './components/Wrapper'
import Nav from './components/Nav'
import Card from "./components/Card";
import Carousel from "./components/Carousel"

class App extends Component {
  render() {
    return (
      <div className="App">
      <Nav />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Carousel />
      </div>
    );
  }
}

export default App;
