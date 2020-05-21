import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import placeholder from '../img/placeholder';

function Personal() {
  return <>
    <Navbar />

    {/* about
    experience
    education
    skills
    Interests
    certifications */}

    {/* <div className="card m-3">
      <div className="card-header">
        <h2>Maximilian A. Lewis</h2>
      </div>
      <div className="card-body">
        <h5 className="card-title">Personal Interests</h5>
        <p className="card-text">I enjoy skeet shooting and skiing, video games suffice when the weather isnt agreable</p>
      </div>
      <div className="card-body">
        <h5 className="cart-title">Born and raised</h5>
        <p className="card-text"> Originally born in Indiana, my family moved to Arizona when I was a toddler.</p>
      </div>
    </div> */}

    {/* d-none d-md-block means "this isnt displayed unless size md or larger, then its a block" */}

    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-3 border d-flex justify-content-center">
          <div className="sidebar border mt-5 p-2">
            <img src={placeholder} alt="" width="200" height="200" />

            <ul className="border">
              <li><a href='#section1'> Go to section 1 </a></li>
              <li><a href='#section2'> Go to section 2 </a></li>
              <li><a href='#section3'> Go to section 3 </a></li>
              <li><a href='#section4'> Go to section 4 </a></li>
              <li><a href='#section5'> Go to section 5 </a></li>
              <li><a href='#section6'> Go to section 6 </a></li>
            </ul>
          </div>
        </div>
        <div className="col-lg-9 border">
          <ScrollableAnchor id={'section1'} >
            <div className="min-height">
              <div> Hello World </div>
            </div>
          </ScrollableAnchor>
          <ScrollableAnchor id={'section2'}>
            <div className="min-height">
              <div> How are you world? </div>
            </div>
          </ScrollableAnchor>
          <ScrollableAnchor id={'section3'}>
            <div className="min-height">
              <div> How are you world? </div>
            </div>
          </ScrollableAnchor>
          <ScrollableAnchor id={'section4'}>
            <div className="min-height">
              <div> How are you world? </div>
            </div>
          </ScrollableAnchor>
          <ScrollableAnchor id={'section5'}>
            <div className="min-height">
              <div> How are you world? </div>
            </div>
          </ScrollableAnchor>
          <ScrollableAnchor id={'section6'}>
            <div className="min-height">
              <div> How are you world? </div>
            </div>
          </ScrollableAnchor>
        </div>
      </div>
    </div>

    <Footer />

  </>
}

export default Personal