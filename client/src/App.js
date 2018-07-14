import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Card from './components/Card';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import witts from "./witts.json";

class App extends Component {
  state = {
    witts
  };
  render() {
    return (
      <div className="App">
          <header>
            <Nav isLoggedIn={false}/>
            <Header/>
          </header>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Carousel />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="card-container">
              {this.state.witts.map(witt => (
                <Card        
                  id={witt.id}
                  key={witt.id}
                  image={witt.image}
                   />
                  ))}
                />
              </div>
            </div>
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

