import React from "react";
import { Route, Switch, } from "react-router-dom";

// import { useLocation } from 'react-router'
// import { useTransition, animated } from 'react-spring'

// import "./style.css";

import HomePage from "./pages/HomePage";
import Resume from "./pages/Resume";
import Personal from "./pages/Personal";
import Portfolio from "./pages/Portfolio";
import NoMatch from "./pages/NoMatch";

function App() {
  return (
    <Switch>
      <Route exact path="/" render={HomePage} />
      <Route exact path="/Resume" render={Resume} />
      <Route exact path="/Personal" render={Personal} />
      <Route exact path="/Portfolio" render={() => <Portfolio />} />
      {/* 404 redirect */}
      <Route component={NoMatch} />
    </Switch>
  );
}

export default App;