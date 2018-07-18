import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Card from './components/Card';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
// import witts from "./witts.json";
import API from './utils/API';

class App extends Component {
  state = {
    pictures: null,
    card: null,
    isHidden: true
  };
  
  toggleCard = () => {
    this.setState ({
      isHidden: !this.state.isHidden
    })
    console.log("hello")
  }
  
  componentDidMount() {
    API.getPictures()
      .then(res => this.setState( {pictures: res.data} ))
      .catch(err => console.log(err));
  }

  updateCard = (i) =>{
    console.log("click")
    this.setState({card: this.state.pictures[i]})
  }

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
              {/* <Carousel toggleCard={this.toggleCard} pictures={this.state.pictures} updateCard={this.updateCard}/> */}

            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="card-container">
      
                {!this.state.isHidden && <Card        
                  id={this.state.card.id}
                  image={this.state.card.image}
                  comments= {this.state.card.comments}
                   />}
                  
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

