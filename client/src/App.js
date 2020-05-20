import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./style.css";

import HomePage from "./pages/HomePage";
import Resume from "./pages/Resume";
import Personal from "./pages/Personal";
import Portfolio from "./pages/Portfolio";
import NoMatch from "./components/NoMatch";

class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={() => <HomePage />} />
          <Route path="/Resume" render={() => <Resume />} />
          <Route path="/Personal" render={() => <Personal />} />
          <Route path="/Portfolio" render={() => <Portfolio />} />
          {/* 404 redirect */}
          <Route component={NoMatch} />
        </Switch>
      </Router>
    );
  }
}

export default App;