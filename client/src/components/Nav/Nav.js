import React from "react";
import "./Nav.css";

const Nav = props => (
    <div>
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
         <a id="submit-picture" className="navbar-brand" href="/">Submit a Photo</a>
         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
           aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
           <span className="navbar-toggler-icon"></span>
         </button>

         <div>
         <a id="login" className="navbar-brand"  href="/">Log In / Create User</a>
         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
           aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
           <span className="navbar-toggler-icon"></span>
         </button>
         </div>
       </nav>
   </div>
);  

export default Nav;