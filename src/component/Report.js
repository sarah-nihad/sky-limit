import React, { Component } from 'react';
import './nav1.css';
import Teamnav from './Teamnav';
import Teamfoot from './Teamfoot';
import { Row, Col} from 'react-bootstrap';


class Report extends Component {
    render() {
        return (

            <div>
                <div id="howfot">
                    <Teamnav />
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', marginTop: '60px', flexDirection: 'column' }} >
                     <div style={{display:'flex',alignItems:'center',justifyContent:'center'}} id='repoimg4e'  >
                       
                     <img src={require('../img/1.png')} style={{ height: '40px' }} alt='img'/>  <div id="h3"> Team Reports </div>
                     </div>
                        <Row style={{ marginRight: '0px', width: '85%',marginTop:'5%' }}  >



                            <Col xs={12} id='coltext' >
                                <div className='imgbox'>
                                    <img src={require('../img/rep1.png')} alt='img'  />
                                    <div className='textbox1'>
                                        <div>
                                            <p>1. Activity report : you can gain reports based on dates as </p>
                                            <p>A- Daily Activity for team and individually</p>
                                            <p>B- Easily filter to get date and time of visit</p>
                                            <p>C- Most common feedback</p>


                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>



                        <Row style={{ marginRight: '0px', width: '85%',marginTop:'5%' }}  >


                            <Col xs={12} id='coltext' >
                                <div className='imgbox'>
                                    <img src={require('../img/rep2.png')} alt='img' />
                                    <div className='textbox1'>
                                        <div>
                                            <p>2. Team Performance :</p>
                                            <p>You can get both of coverage and frequency</p>
                                            <p>of team per class so you can monitor it on daily basis for each Report</p>



                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>


                        <Row style={{ marginRight: '0px', width: '85%',marginTop:'5%' }}  >


                            <Col xs={12} id='coltext' >
                                <div className='imgbox'>
                                    <img src={require('../img/rep3.png')} alt='img' />
                                    <div className='textbox1'>
                                        <div>
                                            <p>3. Team Order : both of Medical and Trade team can benefit from
this report as you can find</p>
                                            <p>A- Orders per Rep</p>
                                            <p>B- Order per item and Quantity for each Rep</p>
                                            <p>C-All other related data can modified into reports</p>


                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>

                        <div style={{display:'flex',alignItems:'center',justifyContent:'center',marginTop:'7%'}} id='repoimg4ss'  >
                       
                       <img src={require('../img/2.png')} style={{ height: '40px' }} alt='img' />  <div id="h3">Customers Reports</div>
</div>
                        <Row style={{ marginRight: '0px', width: '85%',marginTop:'5%' }}  >


                            <Col xs={12} id='coltext' >
                                <div className='imgbox'>
                                    <img src={require('../img/rep4.png')} alt='img' />
                                    <div className='textbox'>
                                        <div>
                                            <p>1. Doctors Activity : Here you can see full picture for the doctor and below
                                                 some of reports based on data available : </p>

                                            <p>A- Date and time each visit for each doctor</p>
                                            <p>B- Is the doctors classified or not by supervisor</p>
                                            <p>C- Feedback for each visit for each doctor</p>
                                            <p>D-Monitor progressive response for each doctor </p>
                                            <p> E-Doctor visits profile  </p>
                                            <p> F-Analysis Speciality and area business  </p>
                                            <p> G- Some other reports  </p>

                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>

                        <Row style={{ marginRight: '0px', width: '85%',marginTop:'5%',marginBottom:'10%' }}  >


                            <Col xs={12} id='coltext' >
                                <div className='imgbox'>
                                    <img src={require('../img/rep5.png')} alt='img' />
                                    <div className='textbox'>
                                        <div>
                                            <p>2- Pharmacy Activity : the Best tool to see how is your business harmonize
                            between Medical team and Trade team and the best solution to make it
more productive by below report </p>

                                            <p>A-Date and time each visit for each pharmacy</p>
                                            <p>B-Type of Rep who visit</p>
                                            <p>C-Feedback for each visit</p>
                                            <p>D-Monitor productivity of calls for each Item and company</p>
                                            <p> E-Monitor Order by order  </p>
                                            <p>F-Some other reports regarding increase productivity </p>


                                        </div>
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
export default Report;