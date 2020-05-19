import React from 'react';
import '../style.css';
import Jumbo from '../components/Jumbotron'
import Navbar from '../components/Navbar';

function Resume() {
  return (
    <>
      <Navbar />
      <div className="card m-3">
        {/* <!-- name --> */}
        <div className="card-header">
          <h2>Maximilian A. Lewis</h2>
        </div>
        {/* <!-- location --> */}
        <div className="card-body">
          <h5 className="card-title">Anthem, Arizona</h5>
          <p className="card-text">(Just north of the Phoenix city limits)</p>
        </div>
        {/* <!-- phone, email --> */}
        <div className="card-body">
          <h5 className="cart-title">480-625-5534</h5>
          <p className="card-text"> Max.a.lewis98@gmail.com</p>
        </div>
      </div>
      {/* <!-- linkdin github |-->
        <!-- summary  faux  \/-->
        <!-- Web Developer eager to master new tools, techniques, and technologies to create robust, elegant solutions for customers, clients, and users. Strives to capitalize on the strengths of all team members whether in a lead or individual contributor role. Drawing on a background in teaching, business leadership, and customer service, approaches each project with curiosity and empathy to deliver results and experiences that exceed expectations. -->
        <!-- technical -->
        <!-- projects -->
        <!-- experiance -->
        <!-- education -->
            <!-- boulder creek -->
            <!-- that one mechanical certification -->
            the bootcamp cert */}
    </>
  )
}

export default Resume