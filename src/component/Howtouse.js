import React, { Component } from 'react';
import './nav1.css'
import { Row, Col, Container } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';

import Teamnav from './Teamnav';
import Teamfoot from './Teamfoot';
class Howtouse extends Component {
    render() {
        return (
            <div>


                <div id="howfot">
                    <Teamnav />


                    <div className="main"  >
                        <br />

                        <h1 id="h3">How To Use Teami</h1>

                        <br />
                        <Container>
                            <ScrollAnimation animateIn='fadeInRight' animationInDelay='1'   >
                                <Row style={{ marginRight: '0px', marginTop: '5%' }} id='rcolor' >

                                    <Col xs={12} lg={6} id='coltext' >
                                        <ScrollAnimation animateIn='fadeInLeft' animationInDelay='1'   >
                                            <div id="textelemnt">


                                                <div id='text1'>


                                                    <img src={require('../img/Screen1.png')} alt='img' id="im1" />

                                                </div>

                                            </div>
                                            <br />
                                        </ScrollAnimation>
                                    </Col>

                                    <Col xs={12} lg={6} id='coltext' >
                                        <ScrollAnimation animateIn='fadeInRight' animationInDelay='1' >
                                            <div id="textelemnt">


                                                <div id='text1'>
                                                    <p id='texthome'>  Home </p>
                                                    shows the resources
                                                     that include the doctors and pharmacy near by you and show if you are in accepted range.
                                 </div>

                                            </div>
                                            <br />

                                        </ScrollAnimation>
                                    </Col>

                                </Row>
                            </ScrollAnimation>
                        </Container>


                        <Container>
                            <ScrollAnimation animateIn='fadeInLeft' animationInDelay='1'   >
                                <Row style={{ marginRight: '0px' }} id='rcolor'  >


                                    <Col xs={12} lg={6} id='coltext' >

                                        <ScrollAnimation animateIn='fadeInLeft' animationInDelay='1'   >
                                            <div id="textelemnt">


                                                <div id='text1'>

                                                    <img src={require('../img/Screen2.png') }alt='img'   id="im1" />

                                                </div>

                                            </div>
                                            <br />
                                        </ScrollAnimation>
                                    </Col>

                                    <Col xs={12} lg={6} id='coltext' >
                                        <ScrollAnimation animateIn='fadeInRight' animationInDelay='1' >
                                            <div id="textelemnt">


                                                <div id='text1'>
                                                    <p id='texthome'>   Resource Details  </p>
                                                    show details info about the resources and enable you to make a report about it or make order.
                                 </div>

                                            </div>
                                            <br />
                                        </ScrollAnimation>
                                    </Col>

                                </Row>
                            </ScrollAnimation>
                        </Container>


                        <Container>
                            <ScrollAnimation animateIn='fadeInRight' animationInDelay='1'   >
                                <Row style={{ marginRight: '0px' }} id='rcolor'  >


                                    <Col xs={12} lg={6} id='coltext' >

                                        <ScrollAnimation animateIn='fadeInLeft' animationInDelay='1'  >
                                            <div id="textelemnt">


                                                <div id='text1'>

                                                    <img src={require('../img/Screen3.png')} alt='img' id="im1" />

                                                </div>

                                            </div>
                                            <br />
                                        </ScrollAnimation>
                                    </Col>

                                    <Col xs={12} lg={6} id='coltext' >
                                        <ScrollAnimation animateIn='fadeInRight' animationInDelay='1' >
                                            <div id="textelemnt">


                                                <div id='text1'>
                                                    <p id='texthome'>     Reports  </p>
                                                    here you can set your report about the resource by applying the feedback and the prime product name ,
                                                      second product name also write a note then seed the report.
                                 </div>

                                            </div>
                                            <br />
                                        </ScrollAnimation>
                                    </Col>

                                </Row>
                            </ScrollAnimation>
                        </Container>
                        <Container>
                            <ScrollAnimation animateIn='fadeInLeft' animationInDelay='1'   >
                                <Row style={{ marginRight: '0px' }} id='rcolor'  >


                                    <Col xs={12} lg={6} id='coltext' >

                                        <ScrollAnimation animateIn='fadeInLeft' animationInDelay='1' >
                                            <div id="textelemnt">


                                                <div id='text1'>

                                                    <img src={require('../img/Screen4.png')} alt='img' id="im1" />

                                                </div>

                                            </div>
                                            <br />
                                        </ScrollAnimation>
                                    </Col>

                                    <Col xs={12} lg={6} id='coltext' >
                                        <ScrollAnimation animateIn='fadeInRight' animationInDelay='1' >
                                            <div id="textelemnt">


                                                <div id='text1'>
                                                    <p id='texthome'> Order  </p>
                                                    here we can place an order by multiple adding an item and its quantity then send the order.
                                 </div>

                                            </div>
                                            <br />
                                        </ScrollAnimation>
                                    </Col>

                                </Row>
                            </ScrollAnimation>
                        </Container>


                        <Container>
                            <ScrollAnimation animateIn='fadeInRight' animationInDelay='1'   >
                                <Row style={{ marginRight: '0px' }} id='rcolor'  >


                                    <Col xs={12} lg={6} id='coltext' >

                                        <ScrollAnimation animateIn='fadeInLeft' animationInDelay='1'  >
                                            <div id="textelemnt">


                                                <div id='text1'>

                                                    <img src={require('../img/Screen5.png')} alt='img' id="im1" />

                                                </div>

                                            </div>
                                            <br />
                                        </ScrollAnimation>
                                    </Col>

                                    <Col xs={12} lg={6} id='coltext' >
                                        <ScrollAnimation animateIn='fadeInRight' animationInDelay='1' >
                                            <div id="textelemnt">


                                                <div id='text1'>
                                                    <p id='texthome'>        profile  </p>
                                                    shows the user account details and the coverage areas.
                                 </div>

                                            </div>
                                            <br />
                                        </ScrollAnimation>
                                    </Col>

                                </Row>
                            </ScrollAnimation>
                        </Container>

                        <Container>
                            <ScrollAnimation animateIn='fadeInLeft' animationInDelay='1'  >
                                <Row style={{ marginRight: '0px' }} id='rcolor'  >


                                    <Col xs={12} lg={6} id='coltext' >

                                        <ScrollAnimation animateIn='fadeInLeft' animationInDelay='1'  >
                                            <div id="textelemnt">


                                                <div id='text1'>

                                                    <img src={require('../img/Screen6.png')} alt='img' id="im1" />

                                                </div>

                                            </div>
                                            <br />
                                        </ScrollAnimation>
                                    </Col>

                                    <Col xs={12} lg={6} id='coltext' >
                                        <ScrollAnimation animateIn='fadeInRight' animationInDelay='1' >
                                            <div id="textelemnt">


                                                <div id='text1'>
                                                    <p id='texthome'>     History </p>
                                                    shows the user last activities and visits with the ratio compared to the target requirements.
                                 </div>

                                            </div>
                                            <br />
                                        </ScrollAnimation>
                                    </Col>

                                </Row>
                            </ScrollAnimation>
                        </Container>

                        <Container>
                            <ScrollAnimation animateIn='fadeInRight' animationInDelay='1'   >
                                <Row style={{ marginRight: '0px' }} id='rcolor'  >


                                    <Col xs={12} lg={6} id='coltext' >

                                        <ScrollAnimation animateIn='fadeInLeft' animationInDelay='1'   >
                                            <div id="textelemnt">


                                                <div id='text1'>

                                                    <img src={require('../img/Screen7.png')} alt='img' id="im1" />

                                                </div>

                                            </div>
                                            <br />
                                        </ScrollAnimation>
                                    </Col>

                                    <Col xs={12} lg={6} id='coltext' >
                                        <ScrollAnimation animateIn='fadeInRight' animationInDelay='1' >
                                            <div id="textelemnt">


                                                <div id='text1'>
                                                    <p id='texthome'>     performance</p>
                                                    shows the performance of the user by calculating the ratio between the visits and acception level.
                                 </div>

                                            </div>
                                            <br />
                                        </ScrollAnimation>
                                    </Col>

                                </Row>
                            </ScrollAnimation>
                        </Container>

                        <Container>
                            <ScrollAnimation animateIn='fadeInLeft' animationInDelay='1'   >
                                <Row style={{ marginRight: '0px' }} id='rcolor'  >


                                    <Col xs={12} lg={6} id='coltext' >

                                        <ScrollAnimation animateIn='fadeInLeft' animationInDelay='1'  >
                                            <div id="textelemnt">


                                                <div id='text1'>

                                                    <img src={require('../img/Screen8.png')} alt='img' id="im1" />

                                                </div>

                                            </div>
                                            <br />
                                        </ScrollAnimation>
                                    </Col>

                                    <Col xs={12} lg={6} id='coltext' >
                                        <ScrollAnimation animateIn='fadeInRight' animationInDelay='1' >
                                            <div id="textelemnt">


                                                <div id='text1'>
                                                    <p id='texthome'>      User order  </p>
                                                    shows user last orders and its details.
                                 </div>

                                            </div>
                                            <br />
                                        </ScrollAnimation>
                                    </Col>

                                </Row>
                            </ScrollAnimation>
                        </Container>

                        <Container>
                            <ScrollAnimation animateIn='fadeInRight' animationInDelay='1'   >
                                <Row style={{ marginRight: '0px' }} id='rcolor'  >


                                    <Col xs={12} lg={6} id='coltext' >

                                        <ScrollAnimation animateIn='fadeInLeft' animationInDelay='1'  >
                                            <div id="textelemnt">


                                                <div id='text1'>

                                                    <img src={require('../img/Screen9.png')} alt='img' id="im1" />

                                                </div>

                                            </div>
                                            <br />
                                        </ScrollAnimation>
                                    </Col>

                                    <Col xs={12} lg={6} id='coltext' >
                                        <ScrollAnimation animateIn='fadeInRight' animationInDelay='1' >
                                            <div id="textelemnt">


                                                <div id='text1'>
                                                    <p id='texthome'>   Adding Resources</p>
                                                    first of all select the type of the resource then fill the
                                                                 needed information like the name and the specialty then the city then the
                                                                 area and if exist input hospital name then and opening time.
                                 </div>

                                            </div>
                                            <br />
                                        </ScrollAnimation>
                                    </Col>

                                </Row>
                            </ScrollAnimation>
                        </Container>






                        <Container>
                            <ScrollAnimation animateIn='fadeInLeft' animationInDelay='1'   >
                                <Row style={{ marginRight: '0px' }} id='rcolor'  >


                                    <Col xs={12} lg={6} id='coltext' >

                                        <ScrollAnimation animateIn='fadeInLeft' animationInDelay='1'  >
                                            <div id="textelemnt">
                                                <div id='text1'>
                                                    <img src={require('../img//Laptop.png')} alt='img' id="im1lap" />
                                                </div>
                                            </div>
                                            <br />
                                        </ScrollAnimation>
                                    </Col>

                                    <Col xs={12} lg={6} id='coltext' >
                                        <ScrollAnimation animateIn='fadeInRight' animationInDelay='1' >
                                            <div id="textelemnt">


                                                <div id='text1'>
                                                    <p id='texthome'> For Demo </p>
                                                    If you want to see the demo please follow the link
                                                  <a href ='https://skylimitx.com/login'style={{color:'purple'}} ><div> www.teami.skylimitx.com  </div></a> 
                                                    <div> Email : husseinferas14@gmail.com  </div>
                                                    <div> Pass : 123123  </div>
                                 </div>

                                            </div>
                                            <br />
                                        </ScrollAnimation>
                                    </Col>

                                </Row>
                            </ScrollAnimation>
                        </Container>

                    </div>
                </div>
                <Teamfoot />

            </div>

        );
    }
}

export default Howtouse;

