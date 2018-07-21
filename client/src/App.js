import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Card from './components/Card';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Alert from './components/Alert';

import witts from "./witts.json";

//passport
// import { GoogleLogin } from 'react-google-login';
// import config from './config.json';
// import "../src/utils/token.utils";


import API from './utils/API';
import socketIOClient from "socket.io-client";

class App extends Component {
  state = {
    witts,
    card: witts[0],
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
    this.setState ({
      isHidden: false
    })
    console.log("hello")
  }
  
  componentDidMount() {
    API.getPictures()
      .then(res => {
        console.log(res.data);
        this.setState( {witts: res.data, card: res.data[0] ? res.data[0] : this.state.card})
      })
      .catch(err => console.log(err));
    const socket = socketIOClient('http://localhost:3001')
    socket.on("message", (message) =>{
      alert("the server has a message for you: " + message)
  });
    
  }

  updateCard = (i) =>{
    console.log("click")
    const newCard = this.state.witts.find(witt => witt._id === i)
    console.log(newCard);
    this.setState({card: newCard})
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


  render() {
    return (
      <div className="App">
          <header>
            <Nav isLoggedIn={this.state.isAuthenticated} createUser={this.createUser} userId={this.state.userId}/>
            <Alert alert={this.state.alert} />
            <Header/>
          </header>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Carousel toggleCard={this.toggleCard} witts={this.state.witts} updateCard={this.updateCard}/>
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
                  comments= {this.state.card.comments}
                  userId={this.state.userId}
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

