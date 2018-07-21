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
    // const tokenBlob = new Blob([JSON.stringify({email:response.w3.U3, username:response.w3.ig}, null, 2)], {type : 'application/json'});
    // const options = {
    //     method: 'POST',
    //     body: tokenBlob,
    //     mode: 'cors',
    //     cache: 'default'
    // };
    // fetch('/api/users', options).then(r => {
    //     const token = r.headers.get('x-auth-token');
    //     r.json().then(user => {
    //         // console.log('promise')
    //         // if (token) {                
    //         //     console.log('state init')
    //             this.setState({isAuthenticated: true, userId: user._id, user, token})
    //         // }
    //         // console.log(user)
    //     });
    // })

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

  render() {
    return (
      <div>
        <div className="modal fade" id="createAccount" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="loginTitle">Create account</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="fa fa-google-plus">
                    <GoogleLogin
                      clientId="524820948777-slfi5i193m7quknlops4br9sf0rmo6dj.apps.googleusercontent.com"
                      buttonText="Sign Up with Google"
                      onSuccess={this.googleResponse}
                      onFailure={this.googleResponse}
                    />
                  </div>
                  {this.state.showForm === true && 
                  <div className="form-group">
                    <label htmlFor="username">Customize Your Username</label>
                    <input className="form-control" id="username" name="username" value={this.state.username} onChange={this.handleInputChange} />
                    <small id="emailHelp" className="form-text text-muted">Your username will appear publicly next to pictures and comments.</small>
                  </div>
                  }
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
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