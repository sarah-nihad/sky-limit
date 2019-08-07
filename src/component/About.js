import React, { Component } from 'react';
import Nav1 from './Nav1';
import Foot1 from './foot1';
// import Carousel from '@brainhubeu/react-carousel';
import './nav1.css';
import '@brainhubeu/react-carousel/lib/style.css';
// import { MDBBtn, MDBCardImage } from "mdbreact";

class About extends Component {
  render() {
    return (
      <div>
        <div id="apfot">
          <Nav1 />
          <div id='aboutsse1'>
            <div id='abouthead'  >
              About Sky Limit X
</div>
            <div id='aboutinfo'>
              <div id='abouthwowe' > Who We Are </div>
              <div id='aboutmoreinfo'  >
                Since 2009 we are in the medical field and within these period
                 we gain expierence and now we trying to mix the medical field with the technology to hamrmonize the business.
  </div>

  <div id='aboutmoreinfo'  >
  our aim is to help the organization to build healthy relationship with customers and thier team
  </div>
  
  <div id='aboutmoreinfo'  >
  Here we launching our items and we will share with you our sucess story
  </div>
            </div>

          </div>





        </div>
        <Foot1 />
      </div>
    );
  }
}

export default About;