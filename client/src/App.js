import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Card from './components/Card';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Alert from './components/Alert';


//passport
// import { GoogleLogin } from 'react-google-login';
// import config from './config.json';
// import "../src/utils/token.utils";


import API from './utils/API';
import socketIOClient from "socket.io-client";

class App extends Component {
  state = {
    witts: [{}],
    card: {},
    isAuthenticated: false,
    isHidden: true,
    userId: "",
    email: "",
    user: "",
    alert: {
      show: false,
      boldText: "",
      otherText: ""
    }
  };

  toggleCard = () => {
    this.setState({
      isHidden: false
    })
    console.log("hello")
  }

  componentDidMount() {
    API.getPictures()
      .then(res => {
        console.log(res.data);
        this.setState({ witts: res.data, card: res.data[0] ? res.data[0] : this.state.card })
      })
      .catch(err => console.log(err));


  }

  updateCard = (i) => {
    console.log("old card vv")
    console.log(this.state.card)
    const newCard = this.state.witts.find(witt => witt._id === i)
    const clonedNewCard = { ...newCard }

    console.log("new CARD below ------")
    console.log(clonedNewCard)

    this.setState({ card: clonedNewCard })


  }

  createUser = (email, username) => {
    API.getUserByEmail(email)
      .then(existingUser => {
        if (existingUser.data) {  // if user already exists in our DB, tell user to login instead
          this.setState({
            alert: {
              show: true,
              boldText: "User already exists!",
              otherText: "Please login with your existing account."
            }
          });
        } else {  // if user doesn't already exist in our DB, save their info to our DB
          API.saveUser({
            email,
            username
          }).then(newUser => this.setState({
            isAuthenticated: newUser.status = 200 ? true : false,
            userId: newUser.data._id,
            user: newUser.data.username
          }));
        }
      });
  }

  loginUser = (email) => {
    API.getUserByEmail(email)
      .then(existingUser => {
        if (existingUser.data) {  // make sure user exists in our database
          this.setState({
            isAuthenticated: existingUser.status = 200 ? true : false,
            userId: existingUser.data._id,
            user: existingUser.data.username
          });
          const socket = socketIOClient('http://localhost:3001')
          socket.on("message", (message) => {
            alert(message + this.state.user)
          });
        } else {  // if user doesn't exist in our DB, alert them to create account
          this.setState({
            alert: {
              show: true,
              boldText: "User does not exist!",
              otherText: "Please create an account."
            }
          });
        }
      });
  }


  render() {
    return (
      <div className="App">
        <header>
          <Nav isLoggedIn={this.state.isAuthenticated} createUser={this.createUser} loginUser={this.loginUser} userId={this.state.userId} />
          <Alert alert={this.state.alert} />
          <Header />
        </header>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Carousel toggleCard={this.toggleCard} witts={this.state.witts} updateCard={this.updateCard} />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="card-container">

                {this.state.isHidden === false && <Card
                  pictureId={this.state.card._id}
                  description={this.state.card.description}
                  image={this.state.card.url}
                  comments={this.state.card.comments}
                  userId={this.state.userId}
                />}

              </div>
            </div>
          </div>
        </div>
        <footer className="App-footer">
          <Footer />
        </footer>
      </div>
    );
  }

  //Passport

  //   constructor() {
  //     super();
  //     this.state = { isAuthenticated: false, user: null, token: ''};
  // }

  // logout = () => {
  //     this.setState({isAuthenticated: false, token: '', user: null})
  // };

  // onFailure = (error) => {
  //     alert(error);
  // };



  // render() {
  //   let content = !!this.state.isAuthenticated ?
  //           (
  //               <div>
  //                   <p>Authenticated</p>
  //                   <div>
  //                       {this.state.user.email}
  //                   </div>
  //                   <div>
  //                       <button onClick={this.logout} className="button">
  //                           Log out
  //                       </button>
  //                   </div>
  //               </div>
  //           ) :
  //           (
  //               <div>


  //               </div>
  //           );

  //       return (
  //           <div className="App">
  //               {content}
  //           </div>
  //       );
  //   }

}



export default App;

