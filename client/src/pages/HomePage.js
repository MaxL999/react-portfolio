import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return <div className="min-height jumbotron m-0">
    <div className="text-center p-5">
      <h2 className="text-bold">Welcome!</h2>
      <Link className="nav-link btn" to={"/Resume"}>Resume</Link>
      <Link className="nav-link btn" to={"/Personal"}>Personal</Link>
      <Link className="nav-link btn" to={"/Portfolio"}>Portfolio</Link>
    </div>
  </div>
}

export default HomePage