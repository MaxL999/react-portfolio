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
      <div className="min-height">
        <Router>
          <div>
            <nav className="navbar navbar-light">
              <ul className="nav">
                <li className="nav-item">
                  <Link className="nav-link btn py-0" to={"/Resume"}>Resume</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link btn py-0" to={"/Personal"}>Personal</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link btn py-0" to={"/Portfolio"}>Portfolio</Link>
                </li>
              </ul>
            </nav>

            <Switch>
              <Route path="/Resume" render={() => <Resume />} />
              <Route path="/Personal" render={() => <Personal />} />
              <Route path="/Portfolio" render={() => <Portfolio />} />
              <Route path="/" render={() => <HomePage />} />
              {/* no point if switch forces all not Resume/Person/Portfolio links to homepage instead */}
              <Route render={() => <NoMatch />} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;