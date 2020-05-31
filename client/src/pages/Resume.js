import React from 'react';

  //       < !--summary  faux  \/-->
  // < !--Web Developer eager to master new tools, techniques, and technologies to create robust, elegant solutions for customers, clients, and users.Strives to capitalize on the strengths of all team members whether in a lead or individual contributor role.Drawing on a background in teaching, business leadership, and customer service, approaches each project with curiosity and empathy to deliver results and experiences that exceed expectations. -- >
  //       < !--technical -->
  //       < !--projects -->
  //       < !--experiance -->
  //       < !--education -->
  //           < !--boulder creek-- >
  //           < !--that one mechanical certification-- >
  // the bootcamp cert * /
/*
experience/ previous jobs
education
skills
certifications */

function Resume() {
  return (
    <div className="container-fluid p-0">
      {/* name intro */}
      <div className="w-100 text-center py-5 grey">
        <h1 className="display-4">Maximilian A. Lewis</h1>
        <p>Junior FullStack Web Developer</p>
        <a href="#">Download PDF</a>
      </div>
      {/* main resume */}
      <div className="row p-0 m-0">
        {/* sidebar */}
        <div className="col-md-4 order-md-2 border p-0">
          {/* email, linkdin, git, websitelink */}
          <div className="d-flex justify-content-center">
            <ul className="my-5">
              <li>Max.a.lewis98@gmail.com</li>
              <li>480-625-5534</li>
              <li>Phoenix, Az</li>
              <li><a href='https://github.com/MaxL999' target="_blank">Github</a></li>
              <li><a href='maxlewisportfolio.herokuapp.com'>maxlewisportfolio.herokuapp.com</a></li>
            </ul>
          </div>
          {/* node bootstrap react jquery  */}
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Skills</h5>
              <ul className="my-5">
                <li>Javascript</li>
                <li>React</li>
                <li>Node</li>
                <li>Express</li>
                <li>MYSQL</li>
                <li>MongoDB</li>
              </ul>
            </div>
          </div>
        </div>
        {/* main content */}
        <div className="col-md-8 order-md-1 border p-0">
          {/* professional exerpt */}
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Profesional Exerpt</h3>
              <p className="card-text">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.""
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
              <h6 className="card-subtitle mb-2 text-muted">time- => time+</h6>
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
              <h6 className="card-subtitle mb-2 text-muted">time- => time+</h6>
              <p className="card-text">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.""
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Fry's Grocery</h5>
              <h6 className="card-subtitle mb-2 text-muted">time- => time+</h6>
              <p className="card-text">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.""
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">McDonalds</h5>
              <h6 className="card-subtitle mb-2 text-muted">time- => time+</h6>
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