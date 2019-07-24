import React,{Component} from 'react';
import './nav1.css';
import { Row,Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
 
 
class foot1 extends Component{
render() {
  return (
   <div className="ap">
      
     

     <Row  style={{marginRight:'0px'}} >
    
    
       <Col xs={12} lg={4} id="c1" >
       
        
 <i className="fas fa-map-marker-alt" id="i2"></i>
        <h6 id="h6"> Address :  </h6>
      <p>Baghdad - Al-Yarmok - Opposit Noname garden</p>
      <i className='fas fa-phone' id="i2"></i> <h6 id="h6">Mobile :</h6>
      <p>+9647710509440</p> 
      
      
      </Col>
     
     
       
        
     
      
   
          <Col id="c1" lg={3} >


          <i className='fas fa-envelope' id="i2"></i>    <h6 id="h6">Email :</h6>
      <p>info@SKYlimitx.com</p>
      <i className="fa fa-clock-o" id="i2"></i> <h6 id="h6">Work days / Hours : </h6>
      <p>Saturday - Thursday 10am to 6pm</p>
</Col> 


     
        
 <Col lg={4} id="c2" >
{/* <h4 >Contact Us </h4> */}
         <a href ="https://www.facebook.com/406268033310241" id="fac" > <img src ={require('../img/facebook.png')} id="ii"/> </a>
         <Link to ="#" id="fac"  >  <img src ={require('../img/lin.png')} id="ii"/></Link>
         <Link to ="#" id="fac" >  <img src ={require('../img/insta.png')} id="ii"/></Link>
         <Link to ="#"id="fac"  >  <img src ={require('../img/twitter.png')} id="ii"/></Link>
         <Link to ="#" id="fac" >  <img src ={require('../img/youtube.png')} id="ii"/></Link>
         </Col> 
          
         </Row> 
         <Row  style={{marginRight:'0px'}}   >
           <Col id="copyright">
        
           <i className="fa fa-copyright" id="copy"></i>

       <span> Copyright 2019 <a href='https://www.croczi.com/'style={{color:'gray',textDecoration:'none'}} > Croczi.com    </a>  </span> 
           </Col>
         </Row>
        
       </div>
  );
}}

export default foot1;
