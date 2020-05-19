import React from 'react';
import '../style.css';
import Jumbo from '../components/Jumbotron'

function Resume() {
  return <>
    <div className="container-fluid p-3 color2">
      {/* <!-- name --> */}
      <h3>Maximilian A. Lewis</h3>
      {/* <!-- location --> */}
      <div className="row">
        <div className="col-2">
          <h5>Anthem, Arizona</h5>
        </div>
        <div className="col-4">
          <h6 className="text-muted">(Just north of the Phoenix city limits)</h6>
        </div>
      </div>
      {/* <!-- phone, email --> */}
      <div className="row">
        <div className="col-2">
          <h5>480-625-5534</h5>
        </div>
        <div className="col-4">
          <h5>Max.a.lewis98@gmail.com</h5>
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
            <!-- that one mechanical certification --> */}

    </div>
  </>
}

export default Resume