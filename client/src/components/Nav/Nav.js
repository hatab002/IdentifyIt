import React, { Component } from "react";
import Login from '../Login';
import Submit from '../Submit';
import { GoogleLogin } from 'react-google-login';
import { GoogleLogout } from 'react-google-login';
import "./Nav.css";



class Nav extends Component {

  googleResponse = (response) => {
    console.log(response)
    this.props.loginUser(response.w3.U3);
  };

  render() {

    return (

      this.props.isLoggedIn ?

        (<div>
          <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <div className="container">
              <a href="/" className="navbar-brand">IdentifyIt!</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" href="#submitPhoto" data-toggle="modal" data-target="#submitPhoto">Submit a Photo</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#myPhotos" onClick={() => this.props.myThings()}>My Photos</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#logout">
                      <GoogleLogout
                        className="google-button"
                        buttonText="Logout"
                        onLogoutSuccess={this.props.logoutUser}
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <Submit userId={this.props.userId} />
        </div>
        ) 
        :

        (<div>
          <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <div className="container">
              <a href="/" className="navbar-brand">IdentifyIt!</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" href="#createAccount" data-toggle="modal" data-target="#createAccount">Create Account</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#login">
                      <GoogleLogin
                        className="google-button"
                        clientId="187502641410-aj3vqhmg1l7ajkqid3ap18r19gj3s53c.apps.googleusercontent.com"
                        buttonText="Login"
                        onSuccess={this.googleResponse}
                        onFailure={this.googleResponse}
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <Login createUser={this.props.createUser} />
        </div>
        )
    )
  }
}

export default Nav;