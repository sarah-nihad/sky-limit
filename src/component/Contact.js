import React, { Component } from 'react';
import './nav1.css'

import { Row,Col,Form,Button,Container } from 'react-bootstrap';

// import { Animated } from "react-animated-css";
import axios from 'axios';
import {toaster} from 'evergreen-ui';
// import Cookies from 'universal-cookie';
// const cookies = new Cookies();
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
    //  token: cookies.get("token")
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
      <div>
  
 <div id="form" style={{marginTop:'10%'}} >
 <Container>
            <Row style={{ marginRight: '0px', marginBottom: '5%' }}  >
              <Col xs='12'>     <h1 id="h3">CONTACT US</h1> </Col>

            </Row>
          </Container>
 <Row    style={{marginRight:'0px'}}  id="formrow" >
     <Col xs={12} >
    
     <Form>
  
                  <h2 id="hh">CONTACT US</h2>  
             
     
     <Form.Group>
   
    <Form.Label style={{ fontWeight:'600',fontSize:'18px'}}>Name:</Form.Label> 
  
    <Form.Control type="text" placeholder="Write your name here.." id="text" />
    <Form.Text className="text-muted">
    
    </Form.Text>
  </Form.Group>
  <Form.Group>
 
    <Form.Label style={{fontWeight:'600',fontSize:'18px'}}>Email:</Form.Label> 
 
    <Form.Control type="email" placeholder="Let us Know how to contact you back.." id="text"
    value={this.state.email} onChange={(e)=>{
      this.setState({email:e.target.value})
        }} />
    <Form.Text className="text-muted">
    
    </Form.Text>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">

    <Form.Label style={{fontWeight:'600',fontSize:'18px'}}>Message:</Form.Label>
  
    <Form.Control as="textarea" rows="4" placeholder="What would you like to tell us.." id="text"
      value={this.state.text} onChange={(e)=>{
        this.setState({text:e.target.value})
          }} />
  </Form.Group>

{/* <TextInput id='width'
  name="text-input-name"
  placeholder=" email" 
  required value={this.state.email} onChange={(e)=>{
    this.setState({email:e.target.value})
      }}
/>

<TextInput id='width'
  name="text-input-name"
  placeholder=" text" 
  required value={this.state.text} onChange={(e)=>{
    this.setState({text:e.target.value})
      }}
/> */}
  <Button variant="outline-secondary" id="bb" onClick={ ()=>this.login()}   >Send Message</Button>
  </Form>
</Col>
</Row> 
</div>

    
     </div>



    );
  }
}

export default Contact;
