import React, { Component } from 'react';
import './Home.css';
import Header from '../../components/Header';
import Nav from '../../components/Nav';
import Card from '../../components/Card';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';
import Alert from '../../components/Alert';
import API from '../../utils/API';
import socketIOClient from "socket.io-client";

class Home extends Component {
  state = {
    witts: [{}],
    card: {},
    isAuthenticated: false,
    isHidden: true,
    userId: "",
    email: "",
    user: "",
    alertShow: false,
    alertBoldText: "",
    alertOtherText: "",
  };

  toggleCard = () => {
    this.setState({
      isHidden: false
    })
  }

  componentDidMount() {
    API.getPictures()
      .then(res => {
        this.setState({ witts: res.data, card: res.data[0] ? res.data[0] : this.state.card })
      })
      .catch(err => console.log(err));
    
    if (sessionStorage.getItem("identifyItUserId")) {
      this.setState({
        isAuthenticated: true,
        userId: sessionStorage.getItem("identifyItUserId"),
        user: sessionStorage.getItem("identifyItUser")
      });
    }
  }

  updateCard = (i) => {
    API.getPicture(i)
      .then(res => {
        this.setState({ card: res.data })
      })
      .catch(err => console.log(err));
  }

  myThings = () => {
    API.getUser(this.state.userId)
      .then(res => {
        if (res.data.pictures) {
          this.setState({ witts: res.data.pictures, card: res.data[0] ? res.data[0] : this.state.card })
        } else {
          this.setState({
            alertShow: true,
            alertBoldText: "You have no pictures!",
            alertOtherText: "Submit a picture to try to get it identified."
          })
        }
      })
      .catch(err => console.log(err));
  }

  createUser = (email, username) => {
    API.getUserByEmail(email)
      .then(existingUser => {
        if (existingUser.data) {  // if user already exists in our DB, tell user to login instead
          this.setState({
            alertShow: true,
            alertBoldText: "User already exists!",
            alertOtherText: "Please login with your existing account."
          });
        } else {  // if user doesn't already exist in our DB, save their info to our DB
          API.saveUser({
            email,
            username
          }).then(newUser => {
            sessionStorage.setItem("identifyItUserId", newUser.data._id);
            sessionStorage.setItem("identifyItUser", newUser.data.username);
            this.setState({
              isAuthenticated: newUser.status = 200 ? true : false,
              userId: newUser.data._id,
              user: newUser.data.username
            });
          });
        }
      });
  }

  loginUser = (email) => {
    API.getUserByEmail(email)
      .then(existingUser => {
        if (existingUser.data) {  // make sure user exists in our database
          sessionStorage.setItem("identifyItUserId", existingUser.data._id);
          sessionStorage.setItem("identifyItUser", existingUser.data.username);
          this.setState({
            isAuthenticated: existingUser.status = 200 ? true : false,
            userId: existingUser.data._id,
            user: existingUser.data.username,
          });
          // const socket = socketIOClient('http://localhost:3001')
          // socket.on("message", (message) => {
          //   this.setState({
          //     alertShow: true,
          //     alertBoldText: message,
          //     alertOtherText: this.state.user
          //   })
          // });
        } else {  // if user doesn't exist in our DB, alert them to create account
          this.setState({
            alertShow: true,
            alertBoldText: "User does not exist!",
            alertOtherText: "Please create an account."
          });
        }
      });
  }

  logoutUser = () => {
    sessionStorage.removeItem("identifyItUserId");
    sessionStorage.removeItem("identifyItUser");
    this.setState({
      isAuthenticated: false,
      alertShow: true,
      alertBoldText: "You are logged out."
    });
  }
    
  hideAlert = () => {
    this.setState({ alertShow: false });
  }

  updateAlert = (show, boldText, otherText) => {
    this.setState({ alertShow: show, alertBoldText: boldText, alertOtherText: otherText });
  }

  render() {
    return (
      <div className="App">
        <header>
          <Nav 
          isLoggedIn={this.state.isAuthenticated} 
          createUser={this.createUser} 
          loginUser={this.loginUser}
          logoutUser={this.logoutUser} 
          userId={this.state.userId} 
          myThings={this.myThings}/>
          <Alert 
          alertShow={this.state.alertShow} alertBoldText={this.state.alertBoldText} alertOtherText={this.state.alertOtherText} hideAlert={this.hideAlert}/>
          <Header />
        </header>
        <main className="app-content">
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
                    pictureUserId={this.state.card.user}
                    description={this.state.card.description}
                    image={this.state.card.url}
                    comments={this.state.card.comments}
                    userId={this.state.userId}
                    user={this.state.user}
                    updateAlert={this.updateAlert}
                  />}

                </div>
              </div>
            </div>
          </div>
        </main>
        <footer className="App-footer">
          <Footer />
        </footer>
      </div>
    );
  }
}



export default Home;

