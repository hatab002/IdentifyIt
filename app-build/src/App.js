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
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Carousel />
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
