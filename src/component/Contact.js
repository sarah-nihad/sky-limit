// import React, { Component } from 'react';
// import './nav1.css'
// import { Row, Col, Form, Button, Container } from 'react-bootstrap';
// import axios from 'axios';
// import { toaster } from 'evergreen-ui';

// class Contact extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       data: [],

//       name: '',
//       email: '',
//       text: ''



//     }

//   }


//   login() {


//     var email = this.state.email;
//     var text = this.state.text;



//     let formData = new FormData();
//     var headers = {
//       "Content-Type": "application/json",

//     };

//     formData.append("text", text);
//     formData.append("email", email);

//     axios({
//       url: `https://sky-limit-x.herokuapp.com/sendEmail`,
//       method: "POST",
//       data: formData,
//       headers: headers
//     })
//       .then(response => {
//         toaster.success('Your email has been Send successfully');
//         console.log(response)
//       })
//       .catch(function (error) {
//         console.log(error.response.data)
//         if (error.response) {
//           toaster.danger(error.response.data.mgs);
//         }
//       });

//   }

//   render() {
//     return (
//       <div>

//         <div id="form" style={{ marginTop: '10%' }} >
//           <Container>
//             <Row style={{ marginRight: '0px', marginBottom: '5%' }}  >
//               <Col xs='12'>     <h1 id="h3">CONTACT US</h1> </Col>

//             </Row>
//           </Container>
//           <Row style={{ marginRight: '0px' }} id="formrow" >
//             <Col xs={12} >
//               <Form>
//                 <h2 id="hh">CONTACT US</h2>

//                 <Form.Group>
//                   <Form.Label style={{ fontWeight: '600', fontSize: '18px' }}>Name:</Form.Label>

//                   <Form.Control type="text" placeholder="Write your name here.." id="text" />
//                   <Form.Text className="text-muted">

//                   </Form.Text>
//                 </Form.Group>
//                 <Form.Group>

//                   <Form.Label style={{ fontWeight: '600', fontSize: '18px' }}>Email:</Form.Label>

//                   <Form.Control type="email" placeholder="Let us Know how to contact you back.." id="text"
//                     value={this.state.email} onChange={(e) => {
//                       this.setState({ email: e.target.value })
//                     }} />
//                   <Form.Text className="text-muted">

//                   </Form.Text>
//                 </Form.Group>
//                 <Form.Group controlId="exampleForm.ControlTextarea1">

//                   <Form.Label style={{ fontWeight: '600', fontSize: '18px' }}>Message:</Form.Label>

//                   <Form.Control as="textarea" rows="4" placeholder="What would you like to tell us.." id="text"
//                     value={this.state.text} onChange={(e) => {
//                       this.setState({ text: e.target.value })
//                     }} />
//                 </Form.Group>

//                 <Button variant="outline-secondary" id="bb" onClick={() => this.login()}   >Send Message</Button>
//               </Form>
//             </Col>
//           </Row>
//         </div>
//       </div>
//     );
//   }
// }
// export default Contact;


import React, { Component } from 'react';

import { Row, Col ,Button} from 'react-bootstrap';
import {  TextInput,  Textarea ,toaster} from 'evergreen-ui';
import axios from 'axios';
import Nav1 from './Nav1';
import Foot1 from './foot1';
class Contact extends Component {

  constructor(props){
    super(props);
this.state={
  data:[],

    name:'',
    email:'',
    text:''

}

}


login(){

   var email=this.state.email;
   var text=this.state.text; 
   let formData = new FormData();
   var headers = {
     "Content-Type": "application/json",
   };
   formData.append("text", text);
   formData.append("email", email);
 
   axios({
     url:`https://sky-limit-x.herokuapp.com/sendEmail`,
     method: "POST",
     data: formData,
       headers: headers
   })
    .then(response => {
      toaster.success('Your email has been Send successfully');
        console.log(response)
     })
     .catch(function (error) {
       console.log(error.response.data)
       if (error.response) {
         toaster.danger(error.response.data.mgs);
       }
     });

    }


  render() {
    return (
      <div >
      <div id="apfot">
        <Nav1 />
      <div id='contacthome'>
 <div id='p1'> CONTACT US </div>
        <div id='contactpage'>
       
          <Row style={{ marginRight: 0 }} id='maprow'><Col xs={12} >
     
            <iframe id="gmap_canvas" 
            src="https://maps.google.com/maps?q=baghdad%20alyarmouk&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" title='map'></iframe>
       


          </Col></Row>
          <Row style={{ marginRight: 0 }} id='contactrow'>
            <Col md={4}>
              <p id='sarstylefont'>ADDRESS:</p>
           <div>  <i className="fas fa-map-marker-alt"></i>    <span style={{paddingLeft:'10px'}} > Baghdad - Iraq  </span></div> 
            </Col> 
            <Col md={4}>
              <p id='sarstylefont'> PHONES:</p>
              <div><i className="fas fa-phone"></i> <span  style={{paddingLeft:'10px'}} > +964 7710509440    </span>   </div>
          
            </Col>
            <Col md={4}>
              <p id='sarstylefont'> E-MAIL:</p>
              <div> <i className="fas fa-envelope-open"></i> <span style={{paddingLeft:'10px'}} > Info.skylimitx@gmail.com  </span>
                </div>
            
            </Col>
         
          </Row >
         
        </div>


        <div id='sss'>
          <Row style={{ marginRight: 0,width:'90%',paddingTop:'3%' }} id='sss1'>
            <Col>
              <div id='s1s1'>
                <p style={{fontSize:'26px',fontWeight:'500',lineHeight:'30px'}}>For More Inquiry Please Send as Email:</p>
              
              </div>
            </Col>
          </Row>
        </div>

        <div id='sss'>
      
        </div>
        <div id='sss'>
          <Row style={{ marginRight: 0,width:'90%' }} id='sss1'>
            <Col lg={4} id='ww' >
            <div id='area'>
              <TextInput id='textstyle'
                name="text-input-name"
                placeholder="Name" height='40px' width='100%'
              />
               </div>
            </Col>
            <Col lg={4} id='ww'  >
            <div id='area'>
              <TextInput id='textstyle'
                name="text-input-name"
                placeholder="E-mail" height='40px' width='100%'
                value={this.state.email} onChange={(e)=>{
                  this.setState({email:e.target.value})
                    }}
              />
                </div>
            </Col>
            <Col lg={4}  id='ww' >
            <div id='area'>
              <TextInput id='textstyle'
                name="text-input-name"
                placeholder="Phone" height='40px' width='100%'
              />
                     </div>
            </Col>
          </Row>
          <Row style={{ marginRight: 0,width:'90%' }} id='sss1'>
            <Col xs={12}  id='ww' >
              <div id='area'>
                <Textarea id='ereaheight'
                  name="textarea-1"
                  placeholder="Message"  value={this.state.text} onChange={(e)=>{
                    this.setState({text:e.target.value})
                      }} 
                />
              </div>
            
            </Col></Row>
        <Row style={{marginRight:'0px',width:'100%',marginBottom:'15px'}} >
          <Col xs={12} style={{display:'flex',alignItems:'center',justifyContent:'center'}} >
          <Button variant="outline-secondary" id='bbbton'  onClick={ ()=>this.login()}    >Send</Button>
          </Col>
</Row>
        </div>

      </div>
      </div>
        <Foot1 />
      </div>
    );
  }
}
export default Contact;