import React, { Component } from 'react';
import Nav1 from './Nav1';
import Foot1 from './foot1';
import Carousel from '@brainhubeu/react-carousel';
import './nav1.css';
import '@brainhubeu/react-carousel/lib/style.css';


class Slider extends Component {
  render() {
    return (
     <div>
       <div id="apfot">
<Nav1 />
<Carousel
      arrowLeft={<div > {'<'} </div>}
      arrowRight={<div > {'>'} </div>}
      addArrowClickHandler
      slidesPerPage={3}
      slidesPerScroll={1}
      animationSpeed={1500}
      autoPlay={3000}
      stopAutoPlayOnHover
      offset={50}
      itemWidth={250}
      clickToChange
      infinite= {true}
      // centered
    >
      <img src={require('../img/1.png')} alt='img' />
      <img src={require('../img/1.png')} alt='img' />
      <img src={require('../img/1.png')} alt='img'  />
      <img src={require('../img/1.png')} alt='img'     />
      <img src={require('../img/1.png')} alt='img' />
      <img src={require('../img/1.png')} alt='img' />
      <img src={require('../img/1.png')} alt='img' />
      <img src={require('../img/1.png')} alt='img' />
      <img src={require('../img/1.png')} alt='img' />
    </Carousel>
</div>
<Foot1 />
     </div>
    );
  }
}

export default Slider;