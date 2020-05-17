import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import HomePage from "./pages/HomePage/HomePage";
import Resume from "./pages/Resume/Resume";
import Personal from "./pages/Personal/Personal";
import Portfolio from "./pages/Portfolio/Portfolio";

class App extends Component {

  render() {
    return (
      <div className="minHeight">
        <Router>
          <div>
            <nav className="navbar navbar-light">
              <ul className="nav">
                <li className="nav-item active">
                  <Link className="nav-link btn py-0" to={"/Resume"}>Resume</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link btn  py-0" to={"/Personal"}>Personal</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link btn  py-0" to={"/Portfolio"}>Portfolio</Link>
                </li>
              </ul>
            </nav>

            <Switch>
              <Route path="/">
                <Resume />
              </Route>
              <Route path="/Resume">
                <Resume />
              </Route>
              <Route path="/Personal">
                <Personal />
              </Route>
              <Route path="/Portfolio">
                <Portfolio />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;