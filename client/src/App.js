import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

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
          <Route path="/Resume" render={() => <Resume />} />
          <Route path="/Personal" render={() => <Personal />} />
          <Route path="/Portfolio" render={() => <Portfolio />} />
          <Route path="/" render={() => <HomePage />} />
          {/* no point if switch forces all not Resume/Person/Portfolio links to homepage instead */}
          <Route path="/404" render={() => <NoMatch />} />
        </Switch>
      </Router>
    );
  }
}

export default App;