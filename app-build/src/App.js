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


        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Carousel />
            </div>
          </div>
        </div>

        <div className="col-md-12">
          <div className="card-container">
          
          <Card />
          </div>
        </div>
    
          <footer className= "App-footer">
            <Footer />
          </footer>
       

      </div>
    );
  }
}

export default App;

