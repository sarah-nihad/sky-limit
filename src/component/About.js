import React, { Component } from 'react';
import Nav1 from './Nav1';
import Foot1 from './foot1';
import Carousel from '@brainhubeu/react-carousel';
import './nav1.css';
import '@brainhubeu/react-carousel/lib/style.css';
import { MDBBtn, MDBCardImage } from "mdbreact";

class About extends Component {
  render() {
    return (
     <div>
       <div id="apfot">
<Nav1 />

</div>
<Foot1 />
     </div>
    );
  }
}

export default About;