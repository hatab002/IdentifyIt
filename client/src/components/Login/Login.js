import React, { Component } from "react";
import "./Login.css";
import { GoogleLogin } from 'react-google-login';

class Login extends Component {

  state = {
    email: "",
    username: "",
    showForm: false
  }

  googleResponse = (response) => {
    this.setState({
      email: response.w3.U3,
      username: response.w3.ig,
      showForm: true
    })
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  resetModal = () => {
    this.setState({ email: "", username: "", showForm: false })
  }

  render() {
    return (
      <div>
        <div className="modal fade" id="createAccount" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="loginTitle">Create account</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.resetModal}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <GoogleLogin
                    className="btn google-signup"
                    clientId="187502641410-b36vrkjm4eort6va0ho9dulotaf7f895.apps.googleusercontent.com"
                    buttonText="Sign Up with Google"
                    onSuccess={this.googleResponse}
                    onFailure={this.googleResponse}
                  />
                  {this.state.showForm === true &&
                    <div className="form-group mt-4">
                      <label htmlFor="username">Customize Your Username</label>
                      <input className="form-control" id="username" name="username" value={this.state.username} onChange={this.handleInputChange} />
                      <small id="emailHelp" className="form-text text-muted">Your username will appear publicly next to pictures and comments.</small>
                    </div>
                  }
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.resetModal}>Close</button>
                <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => this.props.createUser(this.state.email, this.state.username)}>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;