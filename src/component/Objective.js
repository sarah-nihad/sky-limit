import React, { Component } from 'react';
import './nav1.css'
import Teamnav from './Teamnav';
import Teamfoot from './Teamfoot';
import { Row, Col, Container } from 'react-bootstrap';
class Objective extends Component {
    render() {
        return (
            <div>
                <div id="howfot">
                    <Teamnav />

                    <div id='homemainapp'>
                        <h1 id="h3">Concept</h1>
                        <Row style={{ marginRight: '0px', width: '80%', paddingTop: '25px' }}  >
                            <Col md={12}>

                                <div id='flexhom'  >
                                    {/* <div id='iconhome1con'  >
                                        1
                    </div> */}     <img src={require('../img/one.png')}  style={{height:'40px'  }} />
                                    <div id='firstelemnt'  >
                                        Finding new Technical ways to build system for team and
                                        gathering all with customers
                                        
                                        </div>
                                </div>

                                <div id='flexhom'  >
                                    {/* <div id='iconhome2'  >
                                        2
                    </div> */}
                    <img src={require('../img/two.png')}  style={{height:'40px'  }} />
                                    <div id='firstelemnt'  >Getting connected  all team levels</div>
                                </div>

                                <div id='flexhom'  >
                                    {/* <div id='iconhome3con'  >
                                        3
                    </div> */}
                         <img src={require('../img/three.png')}  style={{height:'40px'  }} />
                                    <div id='firstelemnt'  >Maximize benefits from reports and connect Medica  team with Trade team</div>
                                </div>

                                <div id='flexhom'  >
                                    {/* <div id='iconhome4'  >
                                        4
                    </div> */}
                         <img src={require('../img/four.png')}  style={{height:'40px'  }} />
                                    <div id='firstelemnt'  >Getting all analysis regarding field activity , reports and
orders</div>
                                </div>


                                <div id='flexhom'  >
                                    {/* <div id='iconhome'  >
                                        5
                    </div> */}
                         <img src={require('../img/five.png')}  style={{height:'40px'  }} />
                                    <div id='firstelemnt'  >Do it all above in SMARTY , SIMPLE , HIGH QUALITY</div>
                                </div>
                            </Col>

                            {/* <Col md={6}>
                                <div>
                                    <img src={require('../img/colo.jpg')} style={{ width: '100%' }} />
                                </div>
                            </Col> */}



                        </Row>
                    </div>
                </div>
                <Teamfoot />
            </div>
        );
    }
}
export default Objective;