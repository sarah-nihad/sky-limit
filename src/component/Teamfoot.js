import React,{Component} from 'react';
import './nav1.css';
import { Row,Col } from 'react-bootstrap';
// import {Link} from 'react-router-dom';
 
 
class Teamfoot extends Component{
render() {
  return ( 
     
   <div className="teamfot">   
<Row  style={{marginRight:'0px'}}   >
  

         
     
        <Col id="appfot" >
      
        <a href ="https://apps.apple.com/us/app/teami-x/id1466371326?ls=1" id="fac" > 
        <img src ={require('../img/apple.png')} id="iii" alt='img'/></a>
         <a href ="https://play.google.com/store/apps/details?id=com.croczi.teami" id="fac" > 
          <img src ={require('../img/google.png')} id="iii" alt='img' /></a>
        </Col>
        
       
         </Row>
         </div>
     
  );
}}

export default Teamfoot;
