import React, { Component } from 'react';
import './nav1.css';
import Teamnav from './Teamnav';
import Teamfoot from './Teamfoot';
import { Row, Col} from 'react-bootstrap';
class Pricing extends Component {
    render() {
        return (
            <div id='Servisss' >
                <div id="howfot">
                    <Teamnav />
                    <div style={{paddingTop:'45px'}}   >
                    <h1 id="h3">Our Services</h1>
                    </div>
                    <div id='homemainapp' style={{paddingTop:'3%'}} >

 <Row style={{ marginRight: '0px', width: '90%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <Col lg={4} id='colomnservices1'   >
    <p style={{ marginTop: '5px',color:'purple',fontSize:'26px',fontWeight:'600' }}  >Vision</p>
    <div id='boxsss'>
                            <div id='cont'>
{/* <div  id='divcolss' > */}
<div>
        <p style={{ marginTop: '5px',color:'#fff',fontSize:'26px',fontWeight:'600' }}  >Vision</p>
        <div  style={{padding:'14px'}} id='concepttext' >collaborate to get more vision wideness</div>
        </div>
<div> <img src={require('../img/vision.jpg')}  alt='img' />   </div>

{/* </div> */}
</div></div>

    </Col>

 <Col lg={4} id='colomnservices1'   >

{/* <div id='divcolss'> */}
 <p style={{ marginTop: '5px',color:'purple',fontSize:'26px',fontWeight:'600' }}  >Customize</p>
 <div id='boxsss'>
                            <div id='cont'>
<div> <img src={require('../img/customize.jpg')}  alt='img' />   </div>
{/* <div> <img src={require('../img/feedback.png')} style={{ height: '40px' }} alt='img' />   </div> */}
<div>
   <p style={{ marginTop: '5px',color:'#fff',fontSize:'26px',fontWeight:'600' }}  >Customize</p>
   <div style={{padding:'10px'}} id='concepttext' >We can add or customized any requirements to help your organization</div>
 </div> 
 </div></div>
</Col>


    <Col lg={4} id='colomnservices12' >
    {/* <div id='divcolss'  > */}
    <p style={{ marginTop: '5px',color:'purple',fontSize:'26px',fontWeight:'600' }} >Advisory</p>
    <div id='boxsss'>
                            <div id='cont'>
    <div> <img src={require('../img/Advisory.jpg')}  alt='img' />   </div>
    <div>
        <p style={{ marginTop: '5px',color:'#fff',fontSize:'26px',fontWeight:'600' }} >Advisory</p>
        <div  style={{padding:'10px'}} id='concepttext' > monthly meeting to discuss
        results and to increase efficiency</div>
        </div> </div></div>
    </Col>


</Row>


<Row style={{ marginRight: '0px', width: '90%', display: 'flex', alignItems: 'center', justifyContent: 'center'
,paddingTop:'4%',paddingBottom:'5%'}}>
   

    <Col lg={4} id='colomnservices1'>
    <p style={{ marginTop: '5px',color:'purple',fontSize:'26px',fontWeight:'600' }} >Customer Service</p>
    {/* <div  id='divcolss'> */}  <div id='boxsss'>
                            <div id='cont'>
    <div> <img src={require('../img/Coustomer service.jpg')}  alt='img' />   </div>
   <div>
        <p style={{ marginTop: '5px',color:'#fff',fontSize:'26px',fontWeight:'600' }} >Customer Service</p>
        <div  style={{padding:'13px'}} id='concepttext' >phone and email</div>
        <p></p>
        <p></p>
    </div></div></div>
    </Col> 
    <Col lg={4} id='colomnservices1'>
     {/* <div id='divcolss'  > */}
     <p style={{ marginTop: '5px',color:'purple',fontSize:'26px',fontWeight:'600' }} >Training</p>
     <div id='boxsss'>
                            <div id='cont'>
     {/* <div> <img src={require('../img/career.png')} style={{ height: '40px' }} alt='img' />   </div> */}
     <div> <img src={require('../img/training.jpg')} alt='img' />   </div>
     <div>
        <p style={{ marginTop: '5px',color:'#fff',fontSize:'26px',fontWeight:'600' }} >Training</p>
        <div  style={{padding:'13px'}} id='concepttext'  >Free Training to the new users</div>
        <p>  </p>
       </div></div>
     </div>
    </Col>
    <Col lg={4} id='colomnservices12' >
    {/* <div id='divcolss'  > */}
    <p style={{ marginTop: '5px',color:'purple',fontSize:'26px',fontWeight:'600' }} >Update</p>
    <div id='boxsss'>
                            <div id='cont'>
    <div> <img src={require('../img/update.jpg')}  alt='img' />   </div>
     {/* <div> <img src={require('../img/update.png')} style={{ height: '40px' }} alt='img' />   </div> */}
     <div>
        <p style={{ marginTop: '5px',color:'#fff',fontSize:'26px',fontWeight:'600' }} >Update</p>
        <div  style={{padding:'13px'}} id='concepttext' >Updating data on weekly basis</div>
        <p></p>
    </div></div></div>
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

                <Teamfoot />

            </div>
        );
    }
}
export default Pricing;