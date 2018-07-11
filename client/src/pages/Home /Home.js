import React, { Component } from 'react';
import './Home.css';
import Header from '../../components/Header';
import Nav from '../../components/Nav';
import Card from '../../components/Card';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      thing: []
      
    }
  }

  componentDidMount() {
    this.loadThings();
  };

  loadThings = () => {
    API.getThings()
      .then(res =>
        this.setState({ thing: res.data })
      )
      .catch(err => console.log(err));
  };

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
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="card-container">
                <Card />
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

export default Home;