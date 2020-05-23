import React, { Component } from "react";
import { Route, Switch, } from "react-router-dom";

// import { useLocation } from 'react-router'
// import { useTransition, animated } from 'react-spring'

import "./style.css";

import HomePage from "./pages/HomePage";
import Resume from "./pages/Resume";
import Personal from "./pages/Personal";
import Portfolio from "./pages/Portfolio";
import NoMatch from "./components/NoMatch";

function App() {

  // const location = useLocation()
  // console.log(location)
  // const transitions = useTransition(location, location => location.pathname, {
  //   from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
  //   enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
  //   leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  // })

  return (
    <Switch>
      <Route exact path="/" render={HomePage} />
      <Route path="/Resume" render={Resume} />
      <Route path="/Personal" render={Personal} />
      <Route path="/Portfolio" render={() => <Portfolio />} />
      {/* 404 redirect */}
      <Route component={NoMatch} />
    </Switch>
  );
  // return transitions.map(({ item: location, props, key }) => (
  //   <animated.div key={key} style={props}>
  //     <Switch location={location}>
  //       <Route exact path="/" render={HomePage} />
  //       <Route path="/Resume" render={Resume} />
  //       <Route path="/Personal" render={Personal} />
  //       <Route path="/Portfolio" render={() => <Portfolio />} />
  //       {/* 404 redirect */}
  //       <Route component={NoMatch} />
  //     </Switch>
  //   </animated.div>
  // ))
}

export default App;