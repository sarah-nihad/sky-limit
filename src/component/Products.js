import React, { Component } from 'react';
// import Nav1 from './Nav1';
// import Foot1 from './foot1';
import './nav1.css';
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import { Animated } from "react-animated-css";
class Products extends Component {
  render() {
    return (
      <div>


        <div id="main" style={{marginTop:'10%'}} >

          {/* <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}
                     animationInDuration="1500" > */}

          {/* </Animated> */}
          <Container>
            <Row style={{ marginRight: '0px', marginBottom: '8%',marginTop:'10%' }}  >
              <Col xs='12'>     <h1 id="h3">Our Products </h1> </Col>

            </Row>
          </Container>


          <Container>
            <Row style={{ marginRight: '0px', marginBottom: '10%' }} id='rowproduct' >

              <Col xs={12} lg={4} id="col1" >
                <Link to='./Teami'>
                  <div className='box'>
                    <span> </span>
                    <div id='elemntbox'>



                      <img src={require('../img/ll.png')} id="im" alt='img' />

                    </div>
                  </div>
                </Link>
                <br />

              </Col>
              <Col xs={12} lg={4} id="col1" >
              
<div>
                <div className='box2'>
                  <span> </span>
                  <div id='elemntbox'>



                    <img src={require('../img/Link.png')} id="im" alt='img'   />

                  </div>
                </div></div>

              
                <br />
              </Col>
              <Col xs={12} lg={4} id="col1" >
              
              <div>
                              <div className='box1'>
                                <span> </span>
                                <div id='elemntbox'>
              
              
              
                                  <img src={require('../img/Soon.png')} id="im" alt='img'   />
              
                                </div>
                              </div></div>
              
                            
              
                            </Col>
              
            </Row>
          </Container>

        </div>

      </div>
    );
  }
}

export default Products;
