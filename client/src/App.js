import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Card from './components/Card';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

//passport
import { GoogleLogin } from 'react-google-login';
import config from './config.json';

import API from './utils/API';

let witts = [{
  "id": 1,
  "image": "https://media.self.com/photos/5aeb2496a982843a568c9dab/4:3/w_728,c_limit/extreme-morning-person.jpg",
  "comments": "The coffe that stoped WWIII"
}]
class App extends Component {
  state = {
    witts,
    card: witts[0],

    isAuthenticated: false,
    isHidden: true
  };
  
  toggleCard = () => {
    this.setState ({
      isHidden: !this.state.isHidden
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
  }

  updateCard = (i) =>{
    console.log("click")
    this.setState({card: this.state.witts[i] ? this.state.witts[i]: this.state.card})
  }

googleResponse = (response) => {
    const tokenBlob = new Blob([JSON.stringify({email:response.w3.U3, username:response.w3.ig}, null, 2)], {type : 'application/json'});
    const options = {
        method: 'POST',
        body: tokenBlob,
        mode: 'cors',
        cache: 'default'
    };
    fetch('/api/users', options).then(r => {
        console.log('fetch init')
        const token = r.headers.get('x-auth-token');
        r.json().then(user => {
            if (token) {
                console.log('state init')
                this.setState({isAuthenticated: true, user, token})
            }
            console.log(user)
        });
        console.log(r)
    })
    console.log(response)
  };


  render() {
    return (
      <div className="App">
          <header>
            <Nav isLoggedIn={this.state.isAuthenticated} googleResponse={this.googleResponse}/>

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
      
                {!this.state.isHidden && <Card        
                  id={this.state.card.id}
                  image={this.state.card.image}
                  comments= {this.state.card.comments}
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

