import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

// import { useLocation } from 'react-router'
// import { useTransition, animated } from 'react-spring'

import HomePage from "./pages/HomePage";
import Resume from "./pages/Resume";
import Personal from "./pages/Personal";
import Portfolio from "./pages/Portfolio";
import NoMatch from "./pages/NoMatch";
import Navbar from "./components/Navbar";

import "./style.css"

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/Resume" component={Resume} />
        <Route exact path="/Personal" component={Personal} />
        <Route exact path="/Portfolio" component={Portfolio} />
        {/* 404 redirect */}
        <Route component={NoMatch} />
      </Switch>
    </Router>
  );
}

export default App;