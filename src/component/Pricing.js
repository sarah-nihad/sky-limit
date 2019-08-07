import React, { Component } from 'react';
import './nav1.css';
// import Teamnav from './Teamnav';
// import Teamfoot from './Teamfoot';
import { Row, Col} from 'react-bootstrap';
class Pricing extends Component {
    render() {
        return (
            <div id='Servisss' >
                <div id="howfot">
                    {/* <Teamnav /> */}
                    <div style={{paddingTop:'45px'}}   >
                    <h1 id="h3">Our Services</h1>
                    </div>
                    <div id='homemainapp'  >

 <Row style={{ marginRight: '0px', width: '90%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <Col lg={4} id='colomnservices1'   >
<div  id='divcolss' >
<div> <img src={require('../img/vision.jpg')} id='imgservice' alt='img' />   </div>
{/* <div> <img src={require('../img/presentation.png')} style={{ height: '40px' }} alt='img' />   </div> */}
        <p style={{ marginTop: '5px',color:'#70057D',fontSize:'22px',fontWeight:'500' }}  >Vision</p>
        <div  style={{padding:'13px'}}  >collaborate to get more vision wideness</div>
        <p></p>
</div>


    </Col>

    <Col lg={4} id='colomnservices1' >
    <div  id='divcolss'>
    <div> <img src={require('../img/Coustomer service.jpg')} id='imgservice' alt='img' />   </div>
    {/* <div> <img src={require('../img/call-center.png')} style={{ height: '40px' }} alt='img' />   </div> */}
        <p style={{ marginTop: '5px',color:'#70057D',fontSize:'22px',fontWeight:'500' }} >Customer Service</p>
        <div  style={{padding:'13px'}}  >phone and email</div>
        <p></p>
    </div>
    </Col>
    <Col lg={4} id='colomnservices12' >
    <div id='divcolss'  >
    <div> <img src={require('../img/Advisory.jpg')} id='imgservice' alt='img' />   </div>
        <p style={{ marginTop: '5px',color:'#70057D',fontSize:'22px',fontWeight:'500' }} >Advisory</p>
        <div  style={{padding:'10px'}}  > monthly meeting to discuss
        results and to increase efficiency</div>
        </div>
    </Col>


</Row>


<Row style={{ marginRight: '0px', width: '90%', display: 'flex', alignItems: 'center', justifyContent: 'center'
,paddingTop:'4%',paddingBottom:'5%'}}>
    <Col lg={4} id='colomnservices1'   >

     <div id='divcolss'>
     <div> <img src={require('../img/customize.jpg')} id='imgservice' alt='img' />   </div>
     {/* <div> <img src={require('../img/feedback.png')} style={{ height: '40px' }} alt='img' />   </div> */}
        <p style={{ marginTop: '5px',color:'#70057D',fontSize:'22px',fontWeight:'500' }}  >Customize</p>
        <div style={{padding:'10px'}}  >We can add or customized any requirements to help your organization</div>
     </div>
    </Col>

    <Col lg={4} id='colomnservices1' >
     <div id='divcolss'  >
     {/* <div> <img src={require('../img/career.png')} style={{ height: '40px' }} alt='img' />   </div> */}
     <div> <img src={require('../img/training.jpg')} id='imgservice' alt='img' />   </div>
        <p style={{ marginTop: '5px',color:'#70057D',fontSize:'22px',fontWeight:'500' }} >Training</p>
        <div  style={{padding:'13px'}}  >Free Training to the new users</div>
        <p>  </p>
       
     </div>
    </Col>
    <Col lg={4} id='colomnservices12' >
    <div id='divcolss'  >
    <div> <img src={require('../img/update.jpg')} id='imgservice' alt='img' />   </div>
     {/* <div> <img src={require('../img/update.png')} style={{ height: '40px' }} alt='img' />   </div> */}
        <p style={{ marginTop: '5px',color:'#70057D',fontSize:'22px',fontWeight:'500' }} >Update</p>
        <div  style={{padding:'13px'}}  >Updating data on weekly basis</div>
        <p></p>
    </div>
    </Col>


</Row>

<Row style={{ marginRight: '0px', width: '90%', display: 'flex', alignItems: 'center', justifyContent: 'center'
,paddingTop:'1%',paddingBottom:'5%'}}>
  
  <Col xs={12} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}  >
<img src={require('../img/card.png')} id='imgloyalty' alt='img'   />


  </Col>
</Row>

</div>

                </div>

                {/* <Teamfoot /> */}

            </div>
        );
    }
}
export default Pricing;