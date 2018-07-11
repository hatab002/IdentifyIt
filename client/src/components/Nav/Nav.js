import React from "react";
import Login from '../Login';
import "./Nav.css";

const Nav = props => (
    <div>
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
         <p id="submit-picture" className="navbar-brand" href="/">Submit a Photo</p>
         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
           aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
           <span className="navbar-toggler-icon"></span>
         </button>

         <div>
         <p id="login" className="navbar-brand"  data-toggle="modal" data-target="#exampleModalCenter" href="/">Log In / Create User</p>
         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
           aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
           <span className="navbar-toggler-icon"></span>
         </button>
         </div>
       </nav>

       <Login />
   </div>

   
);  

export default Nav;