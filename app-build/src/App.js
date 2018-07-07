import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Wrapper from './components/Wrapper';
import Nav from './components/Nav';
import Card from './components/Card';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
          <header>
            <Nav />

            <Header/>
          </header>

          <main className="App-main">
            <Carousel />
          </main>
    
          <footer className= "App-footer">
            <Footer />
          </footer>
       

      </div>
    );
  }
}

export default App;
