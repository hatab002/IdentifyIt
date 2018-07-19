import React from "react";
import "./Login.css";
import { GoogleLogin } from 'react-google-login';



const Login = (props) => (
<div>
  {/*Create account modal*/}
    <div className="modal fade" id="createUser" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="createAccountTitle">Create an Account</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
    <div className="modal-body">
      <form>
        <div className="form-group">
            <label htmlFor="username">Username</label>
              <input type="text" className="form-control" id="create-username" aria-describedby="" placeholder="Create Username"></input>
        </div>
          <div className="form-group">
            <label>Email address
              <input type="email" className="form-control" id="create-account-email" aria-describedby="emailHelp" placeholder="Enter email"></input>
              </label>
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
            <div className="form-group">
              <label htmlFor="create-account-password">Password</label>
                <input type="password" className="form-control" id="choose-password" placeholder="Choose Password"></input>
            </div>
            <div className="fa fa-google-plus">
        <GoogleLogin
                      clientId="524820948777-slfi5i193m7quknlops4br9sf0rmo6dj.apps.googleusercontent.com"
                      buttonText="Google+"
                      onSuccess={props.googleResponse}
                      onFailure={props.googleResponse}
                  />
                    </div>
              {/* <button type="submit" className="btn btn-primary">Create Account</button> */}
      </form>
    </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
  {/*Login modal*/}
    <div className="modal fade" id="userLogin" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="loginTitle">Login</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      <div className="modal-body">
        <form>
          {/* <div className="form-group">
            <label for="username">Username</label>
              <input type="text" className="form-control" id="loginUsername" aria-describedby="" placeholder="Username"></input>
          </div> */}
        {/* <div className="form-group">
            <label for="login-password">Password</label>
              <input type="password" className="form-control" id="loginPassword" placeholder="Password"></input>
        </div> */}
        <div className="fa fa-google-plus">
        <GoogleLogin
                      clientId="524820948777-slfi5i193m7quknlops4br9sf0rmo6dj.apps.googleusercontent.com"
                      buttonText="Google+"
                      onSuccess={props.googleResponse}
                      onFailure={props.googleResponse}
                  />
                    </div>
          {/* <button type="submit" className="btn btn-primary">Login</button> */}
        </form>
      </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</div>

)

export default Login;