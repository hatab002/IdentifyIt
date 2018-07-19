import React from "react";
import Login from '../Login';
import Submit from '../Submit';
import "./Nav.css";



// const Nav = (props) => {
  function Nav(props) {

  const isLoggedIn = props.isLoggedIn;
  console.log('logged in is', isLoggedIn)
    return(

  isLoggedIn ?

    (<div>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <div className="col-md-1">
            <p id="submit-picture" className="navbar-brand" data-toggle="modal" data-target="#submitPhoto">Submit a Photo</p>
          </div>
          <div className="col-md-1">
            <p id="my-things" className="navbar-brand" data-toggle="modal">My Things</p>
          </div>
          <Submit />
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
            <p id="submit-picture" className="navbar-brand" data-toggle="modal" data-target="#submitPhoto">Submit a Photo</p>
          </div>
          <div className="col-md-1">
            <p id="my-things" className="navbar-brand" data-toggle="modal">My Things</p>
          </div>
          <Submit />
          <div className="col-md-6"></div>
          <div className="col-md-1">
            <p id="login" className="navbar-brand" data-toggle="modal" data-target="#userLogin">Log In</p>
          </div>
          <div className="col-md-2">
            <p id="create-account" className="navbar-brand" data-toggle="modal" data-target="#createUser">Create Account</p>
          </div>
        </div>
      </nav>
      <Login googleResponse={props.googleResponse} />
    </div>
    )
  )
}

export default Nav;