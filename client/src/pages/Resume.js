import React from 'react';

/* <!-- name --> */
/* <!-- location --> */
/* <!-- phone, email --> */
/* <!-- linkdin github |-->
        <!-- summary  faux  \/-->
        <!-- Web Developer eager to master new tools, techniques, and technologies to create robust, elegant solutions for customers, clients, and users. Strives to capitalize on the strengths of all team members whether in a lead or individual contributor role. Drawing on a background in teaching, business leadership, and customer service, approaches each project with curiosity and empathy to deliver results and experiences that exceed expectations. -->
        <!-- technical -->
        <!-- projects -->
        <!-- experiance -->
        <!-- education -->
            <!-- boulder creek -->
            <!-- that one mechanical certification -->
            the bootcamp cert */
/*
experience/ previous jobs
education
skills
certifications */


function Resume() {
  return (
    // <div className="card m-3">
    //   <div className="card-header">
    //     <h2>Maximilian A. Lewis</h2>
    //   </div>
    //   <div className="card-body">
    //     <h5 className="card-title">Anthem, Arizona</h5>
    //     <p className="card-text">(Just north of the Phoenix city limits)</p>
    //   </div>
    //   <div className="card-body">
    //     <h5 className="cart-title">480-625-5534</h5>
    //     <p className="card-text"> Max.a.lewis98@gmail.com</p>
    //   </div>
    // </div>
    <div className="container-fluid p-0">
      {/* name intro */}
      <div class="w-100 text-center py-5 grey">
        <h1 class="display-4">Maximilian A. Lewis</h1>
        <p>Junior FullStack Web Developer</p>
      </div>
      {/* main resume */}
      <div className="row">
        {/* main content */}
        <div className="col-md-4 order-md-2 border">
          <p>sidebar</p>
          {/* professional exerpt */}
          {/* previous jobs */}
        </div>
        {/* sidebar */}
        <div className="col-md-8 order-md-1 border">
          <p>main content</p>
          {/* email, linkdin, git, websitelink */}
          {/* node bootstrap react jquery  */}
        </div>
      </div>
    </div>
  )
}

export default Resume