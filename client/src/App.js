import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
// import Saved from "./pages/Saved";
// import NoMatch from "./pages/NoMatch";
import './App.css';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      {/* <Route exact path="/saved" component={Saved} />
      <Route component={NoMatch} /> */}
    </Switch>
  </Router>
)

export default App;
