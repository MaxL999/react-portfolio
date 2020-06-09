import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

//       < !--summary  faux  \/-->
// < !--Web Developer eager to master new tools, techniques, and technologies to create robust, 
// elegant solutions for customers, clients, and users.Strives to capitalize on the strengths of all team 
// members whether in a lead or individual contributor role.
//       < !--technical -->
//       < !--projects -->
//       < !--experiance -->
//           < !--that one mechanical certification-- >
// boy scouts
// the bootcamp cert * /

function Resume() {
  const { theme } = useContext(ThemeContext)

  return (
    <div className="container p-0">
      {/* name intro */}
      <div className="w-100 text-center py-5 border">
        <h1 className="display-4">Maximilian A. Lewis</h1>
        <p>Junior Fullstack Developer</p>
        {/* <a href="#placeholderlink">Download PDF</a> */}
      </div>
      {/* main resume */}
      <div className="row p-0 m-0">
        {/* sidebar */}
        <div className="col-md-4 order-md-2 p-0">
          {/* email, linkdin, git, websitelink */}
          <div className="d-flex justify-content-center">
            <ul className="my-5 m-0 p-0">
              <li>Max.a.lewis98@gmail.com</li>
              <li>480-625-5534</li>
              <li>Phoenix, Az</li>
              <li><a href='https://github.com/MaxL999' target="_blank">https://github.com/MaxL999</a></li>
              <li><a href='maxlewisportfolio.herokuapp.com'>maxlewisportfolio.herokuapp.com</a></li>
            </ul>
          </div>
          {/* skills  */}
          <div className="card">
            <div className="card-body d-flex justify-content-center">
              <h5 className="card-title">Skills</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Javascript</li>
                <li className="list-group-item">React</li>
                <li className="list-group-item">Node</li>
                <li className="list-group-item">Express</li>
                <li className="list-group-item">MYSQL</li>
                <li className="list-group-item">MongoDB</li>
                <li className="list-group-item">Excel, Powerpoint, Word</li>
                <li className="list-group-item">(CAD) - Autodesk Inventor</li>
                {/* <li className="list-group-item"></li> */}

              </ul>
            </div>
          </div>
        </div>
        {/* main content */}
        <div className="col-md-8 order-md-1 p-0">
          {/* professional exerpt */}
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Professional Exerpt</h3>
              <p className="card-text">
                Web Developer with a passion to learn new skills and solidify knowledge with current abilites in real business situations.
                Currently looking to establish a career as a software developer.
              </p>
            </div>
          </div>
          {/* Education */}
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">FullStack Web Develepment</h5>
              <h6 className="card-subtitle mb-2 text-muted">University of Arizona</h6>
              <p className="card-text">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.""
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Boulder Creek High School</h5>
              <h6 className="card-subtitle mb-2 text-muted">2013 - 2017</h6>
              <p className="card-text">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.""
              </p>
            </div>
          </div>
          {/* previous jobs */}
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Amped Coffee Co.</h5>
              <h6 className="card-subtitle mb-2 text-muted"></h6>
              <p className="card-text">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.""
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Fry's Grocery</h5>
              <h6 className="card-subtitle mb-2 text-muted">September 2016 - November 2016</h6>
              <p className="card-text">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.""
              </p>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Cras justo odio</li>
                <li class="list-group-item">Dapibus ac facilisis in</li>
                <li class="list-group-item">Vestibulum at eros</li>
              </ul>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">McDonalds</h5>
              <h6 className="card-subtitle mb-2 text-muted">August 2017 - July 2018</h6>
              <p className="card-text">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.""
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume