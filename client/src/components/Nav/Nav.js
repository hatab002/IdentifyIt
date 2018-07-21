import React, { Component } from "react";
import Login from '../Login';
import Submit from '../Submit';
import { GoogleLogin } from 'react-google-login';
import "./Nav.css";



class Nav extends Component {

  googleResponse = (response) => {
    this.props.loginUser(response.w3.U3);
  };

  render() {

    return (
      
      this.props.isLoggedIn ?
      
      (<div>
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <div className="col-md-1">
              <p id="submit-picture" className="navbar-brand" data-toggle="modal" data-target="#submitPhoto">Submit a Photo</p>
            </div>
            <div className="col-md-1">
              <p id="my-things" className="navbar-brand" data-toggle="modal">My Things</p>
            </div>
            <Submit userId={this.props.userId} />
            <div className="col-md-2">
              <p id="sign-out" className="navbar-brand" data-toggle="modal" data-target="#userLogin">Sign Out</p>
            </div>
          </div>
        </nav>
      </div>
      ) :
      
      (<div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <div className="col-md-2">
              <p id="submit-picture" className="navbar-brand" data-toggle="modal" data-target={this.props.isLoggedIn ? "#submitPhoto" : "#createAccount"}>Submit a Photo</p>
            </div>
            <Submit />
            <div className="col-md-6"></div>
            <div className="col-md-1">
              <p id="login" className="navbar-brand" data-toggle="modal" data-target="#createAccount">Create Account</p>
            </div>
            <GoogleLogin
              clientId="524820948777-slfi5i193m7quknlops4br9sf0rmo6dj.apps.googleusercontent.com"
              buttonText="Log In"
              onSuccess={this.googleResponse}
              onFailure={this.googleResponse}
              />
          </div>
        </nav>
        <Login createUser={this.props.createUser} />
      </div>
      )
    )
  }
}

export default Nav;