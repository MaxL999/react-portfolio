import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return <>
    {/* <Jumbo /> */}
    {/* <main class="h-100 w-100">
    <div class="jumbotron text-center p-4 color2">
      <h2 class="">Welcome!</h2>
      <!-- <h3 class="text-muted">i intend for this to look real nice</h3> -->
      <a href="portfolio.html">
        <button type="button" class="btn btn-secondary btn-lg m-2">
          Portfolio page
        </button>
      </a>
      <br>
      <a href="personal.html">
        <button type="button" class="btn btn-primary btn-lg m-2">
          Personal about me
        </button>
      </a>
      <h4>-Maximilian A. Lewis</h4>
    </div>
  </main> */}
    <div className="h-100 w-100 text-center">
      <div className=" jumbotron">
        <h2 className="text-bold">Welcome!</h2>
        <Link className="nav-link btn" to={"/Resume"}>Resume</Link>
        <Link className="nav-link btn" to={"/Personal"}>Personal</Link>
        <Link className="nav-link btn" to={"/Portfolio"}>Portfolio</Link>
      </div>
    </div>
  </>
}

export default HomePage