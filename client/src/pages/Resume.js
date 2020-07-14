import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

import resume from '../Resume.pdf'

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
        <a href={resume} ><button class="btn btn-outline-dark btn-lg btn-block">Download PDF</button></a>
      </div>
      {/* main resume row*/}
      <div className="row p-0 m-0">

        {/* sidebar col*/}
        <div className="col-md-4 order-md-2 p-0">
          {/* email, linkdin, git, websitelink */}
          <div className="card p-2">
            <div className="card-body">
              <ul className="">
                <li>Max.a.lewis98@gmail.com</li>
                <li>480-625-5534</li>
                <li>Phoenix, Az</li>
                <li><a href='https://github.com/MaxL999' target="_blank">https://github.com/MaxL999</a></li>
                <li><a href='maxlewisportfolio.herokuapp.com'>maxlewisportfolio.herokuapp.com</a></li>
              </ul>
            </div>
          </div>
          {/* skills  */}
          <div className="card p-4">
            <h5 className="card-title">Skills</h5>
            <div className="card-body">
              <ul className="list-group">
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
              <p className="card-text">
                Open minded, friendly, and hard working Junior Web Developer with a passion to learn new skills and solidify knowledge with current abilities in real business situations.
                Currently looking to establish a career as a software developer.
              </p>
            </div>
          </div>
          {/* Education */}
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">FullStack Web Develepment Bootcamp</h5>
              <h6 className="card-subtitle mb-2 text-muted">University of Arizona</h6>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Boulder Creek High School</h5>
              <h6 className="card-subtitle mb-2 text-muted">2013 - 2017</h6>
            </div>
          </div>
          {/* previous jobs */}
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Previous Employment</h3>
              <p className="card-subtitle">Food Services and Sanitation</p>
              <h5 className="card-title">Amped Coffee Co.</h5>
              <h6 className="card-subtitle mb-2 text-muted">Febuary 2019 - April 2020</h6>
              <h5 className="card-title">Fry's Grocery</h5>
              <h6 className="card-subtitle mb-2 text-muted">August 2017 - July 2018</h6>
              <h5 className="card-title">McDonalds</h5>
              <h6 className="card-subtitle mb-2 text-muted">September 2016 - November 2016</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume