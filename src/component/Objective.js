import React, { Component } from 'react';
import './nav1.css'
import Teamnav from './Teamnav';
import Teamfoot from './Teamfoot';
import { Row, Col} from 'react-bootstrap';
class Objective extends Component {
    render() {
        return (
            <div  id='Concep'>
                <div id="howfot">
                    <Teamnav />

                    {/* <div id='homemainapp'>
                      
                        <h1 id="h3">Concept</h1>
                        <div style={{backgroundColor:'#F8F9FA',width:'95%',paddingLeft:'20px',borderRadius:'10px',
                  paddingBottom:'20px',marginTop:'10px'}} >
                        <Row style={{ marginRight: '0px', width: '80%', paddingTop: '25px' }}  >
                            <Col md={12}>
                                <div id='flexhom'  > 
                    
                     <img src={require('../img/one.png')}  style={{height:'40px'  }} />
                                    <div id='firstelemnt'  >
                                        Finding new Technical ways to build system for team and
                                        gathering all with customers
                                        
                                        </div>
                                </div>

                                <div id='flexhom'  >
                    
                    <img src={require('../img/two.png')}  style={{height:'40px'  }} />
                                    <div id='firstelemnt'  >
                                    Getting connected  all team levels
                                    </div>
                                </div>

                                <div id='flexhom'  >
                      
                         <img src={require('../img/three.png')}  style={{height:'40px'  }} />
                                    <div id='firstelemnt'  >
                                    Maximize benefits from reports and connect Medica  team with Trade team</div>
                                </div>

                                <div id='flexhom'  >
                        
                         <img src={require('../img/four.png')}  style={{height:'40px'  }} />
                                    <div id='firstelemnt'  >
                                    Getting all analysis regarding field activity , reports and
orders
</div>
                                </div>


                                <div id='flexhom'  >
                
                         <img src={require('../img/five.png')}  style={{height:'40px'  }} />
                                    <div id='firstelemnt'  >
                                    Do it all above in SMARTY , SIMPLE , HIGH QUALITY</div>
                                </div>
                            </Col>

                    



                        </Row>
                    </div>
                    </div> */}
<div id='conceptmain'>
<div style={{marginTop:'45px'}}   >
                    <h1 id="h3"> Concept </h1>
                    </div>
<Row style={{ marginRight: 0 ,marginTop:'5%',width:'90%'}}     >
                    <Col xs={12} md={6} id='objcol22'  >

                        <div id='boxss'>
                            <div id='cont'>
                                <div>
                                    <div id='concepttext'  >  Getting connected  all team levels</div>
                                    <p>
                               
 </p>
                                    {/* <a href="./Blog">Read more</a> */}
                                </div>
                                <img src={require('../img/2.jpg')} alt='img' />
                            </div>

                        </div>

                    </Col>
                    <Col xs={12} md={6}>

                        <div id='boxss'>
                            <div id='cont'>
                                <div>
                                    <div id='concepttext' >  Finding new Technical ways to build system for team and
                                        gathering all with customers</div>
                                    <p>
                                   .</p>
                                    {/* <a href="./Blog">Read more</a> */}
                                </div>
                                <img src={require('../img/1.jpg')} alt='img' />
                            </div>

                        </div>

                    </Col>
                </Row>

                <Row style={{ marginRight: 0 ,marginTop:'5%',marginBottom:'5%',width:'90%'}}>
                    <Col xs={12} md={4} id='objcol22'  >
                        <div id='boxss'>
                            <div id='cont'>
                                <div>
                                    <div id='concepttext' >  Maximize benefits from reports and connect Medica  team with Trade team.</div>
                                    <p>
                                 </p>
                                    {/* <a href="./Blog">Read more</a> */}
                                </div>
                                <img src={require('../img/3.jpg')} alt='img' />
                            </div>

                        </div>
                    </Col>
                    <Col xs={12} md={4} id='objcol22'   >
                        <div id='boxss'>
                            <div id='cont'>
                                <div>
                                    <div id='concepttext'  >Getting all analysis regarding field activity , reports and
orders</div>
                                    <p>
                            </p>
                                    {/* <a href="./Blog">Read more</a> */}
                                </div>
                                <img src={require('../img/4.jpg')} alt='img' />
                            </div>

                        </div>
                    </Col>
                    <Col xs={12} md={4} id='objcol22'   >
                        <div id='boxss'>
                            <div id='cont'>
                                <div>
                                    <div id='concepttext' > Do it all above in SMARTY , SIMPLE , HIGH QUALITY.</div>
                                    <p>
                         </p>
                                    {/* <a href="./Blog">Read more</a> */}
                                </div>
                                <img src={require('../img/5.jpg')} alt='img' />
                            </div>

                        </div>
                    </Col>
                </Row>



                </div>






                </div>
                <Teamfoot />
            </div>
        );
    }
}
export default Objective;